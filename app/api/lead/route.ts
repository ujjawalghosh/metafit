import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the frontend
    const body = await request.json();
    
    // Destructure the specific fields from your Get Started form
    const { firstName, lastName, email, phone, gender, weightGoal } = body;

    // 1. Validation: Ensure all required fields are present
    if (!firstName || !lastName || !email || !phone || !gender || !weightGoal) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Database Insertion: Save the lead to the Lead model
    const lead = await prisma.lead.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        gender,
        weightGoal,
      },
    });

    // 3. Success Response
    return NextResponse.json(
      { success: true, message: 'Lead captured successfully', data: lead },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error submitting get started form:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}