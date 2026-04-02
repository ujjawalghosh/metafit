import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string | null;
    const details = formData.get('details') as string;
    const file = formData.get('file') as File | null;

    if (!name || !email || !details) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let fileUrl = null;

    if (file && file.size > 0 && file.name !== 'undefined') {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          { success: false, error: 'Invalid file type. Only images and PDFs are allowed.' },
          { status: 400 }
        );
      }

      if (file.size > 50 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, error: 'File too large. Maximum size is 50MB.' },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), 'public/uploads');
      await mkdir(uploadDir, { recursive: true });

      const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `${Date.now()}-${safeName}`;
      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);
      fileUrl = `/uploads/${fileName}`;
    }

    // DUAL SAVE: JSON + MongoDB (Atlas when connected)
    try {
      await connectDB();
      const mongoSubmission = await new Contact({
        name,
        email,
        phone: phone || null,
        details,
        fileUrl,
      }).save();
      console.log('✅ MongoDB Atlas saved');
    } catch (dbError) {
      console.log('⚠️ MongoDB failed (network), using JSON');
    }

    const contacts = await import('fs/promises').then(fs => fs.readFile('data/contacts.json', 'utf8')).then(JSON.parse).catch(() => []);

    const submission = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || null,
      details,
      fileUrl,
      createdAt: new Date().toISOString(),
    };
    contacts.push(submission);
    await import('fs/promises').then(fs => fs.writeFile('data/contacts.json', JSON.stringify(contacts, null, 2)));

    return NextResponse.json({ success: true, data: submission }, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}

