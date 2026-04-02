import { NextResponse } from 'next/server';
import { appendToJSON, Lead } from '@/lib/jsonUtils';

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

    const newLead: Lead = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      gender,
      weightGoal,
      createdAt: new Date().toISOString(),
    };

    await appendToJSON<Lead>('leads.json', newLead);

    console.log('✅ Lead saved to JSON:', newLead.id);

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
