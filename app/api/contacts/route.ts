import { NextResponse } from 'next/server';
import { readJSON, writeJSON, appendToJSON, Contact } from '@/lib/jsonUtils';

export async function GET() {
  try {
    const contacts = await readJSON<Contact>('contacts.json');
    const sorted = contacts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json({ success: true, data: sorted });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ success: true, data: [] }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, details, fileUrl } = body;

    if (!name || !email || !details) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const newContact: Contact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || undefined,
      details,
      fileUrl: fileUrl || undefined,
      createdAt: new Date().toISOString(),
    };

    await appendToJSON<Contact>('contacts.json', newContact);
    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

