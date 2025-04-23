import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

// Define validation schema
const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(10),
});

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Add debugging
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    
    // Parse request body
    const body = await request.json();

    // Validate form data
    const result = formSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // Format the email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>New Contact Form Submission</h2>
        <p style="font-weight: bold;">Name:</p>
        <p>${name}</p>
        <p style="font-weight: bold;">Email:</p>
        <p>${email}</p>
        <p style="font-weight: bold;">Message:</p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Lumi Contact <onboarding@resend.dev>',
      to: process.env.NODE_ENV === 'development' ? 'leo@leo.miami' : 'leo@leo.dev', // Use verified email in development
      subject: `Contact Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json(
        { message: `Error sending email: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { message: `Error processing contact form: ${errorMessage}` },
      { status: 500 }
    );
  }
} 