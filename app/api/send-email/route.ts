import { Resend } from 'resend';
import { NextResponse, after } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    after(async () => {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'shakotgabriel1@gmail.com',
        replyTo: email,
        subject: `Portfolio Contact: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Message</h2>
            <hr style="border: 1px solid #eee;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
            <hr style="border: 1px solid #eee; margin-top: 24px;" />
            <p style="color: #999; font-size: 12px;">Sent from your portfolio contact form</p>
          </div>
        `,
      });
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
