import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, organisation, role, email, phone, audience, message, source } = body;

    if (!name || !organisation || !email || !audience || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "InnoQuest Contact Form <noreply@innoquest.co.th>",
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
