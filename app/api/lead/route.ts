import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'data/leads.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, gender, weightGoal } = body;

    if (!firstName || !lastName || !email || !phone || !gender || !weightGoal) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Read existing leads
    let leads = [];
    try {
      const data = await fs.readFile(LEADS_FILE, 'utf8');
      leads = JSON.parse(data);
    } catch {}

    // Create new lead
    const newLead = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      gender,
      weightGoal,
      createdAt: new Date().toISOString(),
    };

    leads.unshift(newLead); // Newest first
    
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    console.log('✅ Lead saved:', newLead.id);
    return NextResponse.json(
      { success: true, message: 'Lead captured successfully', data: newLead },
      { status: 201 }
    );

  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
