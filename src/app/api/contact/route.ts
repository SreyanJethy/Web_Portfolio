import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ── Types ──────────────────────────────────────────────── */
interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/* ── Validation ─────────────────────────────────────────── */
function validate(body: ContactPayload): string | null {
  if (!body.name?.trim())    return "Name is required.";
  if (!body.email?.trim())   return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return "Invalid email address.";
  if (!body.message?.trim()) return "Message is required.";
  return null;
}

/* ── POST handler ───────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    const validationError = validate(body);
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const emailSubject = `Portfolio Contact | ${name}`;

    /* ── Transporter ──────────────────────────────────── */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* ── HTML email body ──────────────────────────────── */
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0a0a0f; color: #f0f0ff; margin: 0; padding: 0; }
            .wrapper { max-width: 560px; margin: 32px auto; background: #111120; border: 1px solid rgba(99,102,241,0.2); border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(59,130,246,0.1)); padding: 28px 32px; border-bottom: 1px solid rgba(99,102,241,0.15); }
            .header h1 { margin: 0; font-size: 18px; font-weight: 800; color: #f0f0ff; }
            .header p  { margin: 4px 0 0; font-size: 12px; color: #8b8ba8; }
            .body { padding: 28px 32px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #4a4a6a; margin-bottom: 6px; }
            .value { font-size: 14px; color: #f0f0ff; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 10px 14px; word-break: break-word; }
            .message-value { white-space: pre-wrap; line-height: 1.6; }
            .footer { padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 11px; color: #4a4a6a; text-align: center; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>New Portfolio Message</h1>
              <p>Received via sreyanjethy.dev contact form</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color:#6366f1;text-decoration:none;">${email}</a></div>
              </div>
              ${subject ? `
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>` : ""}
              <div class="field">
                <div class="label">Message</div>
                <div class="value message-value">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
            </div>
            <div class="footer">Sent on ${timestamp} IST · Portfolio Contact Form</div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: emailSubject,
      html,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[contact/route] send error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
