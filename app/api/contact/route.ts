import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY ?? "1x0000000000000000000000000000000AA";
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, organisation, role, email, phone, audience, message, source, turnstileToken } = body;

    if (!name || !organisation || !email || !audience || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const humanVerified = await verifyTurnstile(turnstileToken ?? "");
    if (!humanVerified) {
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
    }

    await resend.emails.send({
      from: "InnoQuest Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "innoquestworkshop@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name} — ${organisation}`,
      html: `
        <h2>New contact form submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Organisation</strong></td><td>${organisation}</td></tr>
          ${role ? `<tr><td><strong>Role</strong></td><td>${role}</td></tr>` : ""}
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ""}
          <tr><td><strong>I am a…</strong></td><td>${audience}</td></tr>
          ${source ? `<tr><td><strong>Source</strong></td><td>${source}</td></tr>` : ""}
        </table>
        <h3 style="margin-top:20px;">Message</h3>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
