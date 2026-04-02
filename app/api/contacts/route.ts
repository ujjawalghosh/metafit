import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';

export async function GET() {
  try {
    const contacts = await readFile('data/contacts.json', 'utf8').then(JSON.parse).catch(() => []);
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'No contacts yet' }, { status: 404 });
  }
}
