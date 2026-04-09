import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// ─── Types ────────────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  businessType: string;
  product?: string;
  message?: string;
}

// ─── 1. Gmail via Nodemailer ───────────────────────────────────────────────
async function sendGmail(data: ContactPayload) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,           // pooprav26@gmail.com
      pass: process.env.GMAIL_APP_PASSWORD,   // 16-char App Password
    },
  });

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #05050f; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; background: #0d0d1f; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 32px; }
    .badge { display: inline-block; background: rgba(99,102,241,0.15); color: #818cf8; border: 1px solid rgba(99,102,241,0.25); border-radius: 100px; padding: 4px 12px; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 20px; }
    .field { margin-bottom: 16px; }
    .field label { display: block; font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
    .field p { margin: 0; font-size: 14px; color: #e2e8f0; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 10px 14px; word-break: break-word; }
    .field p.message { white-space: pre-wrap; line-height: 1.6; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .cta { margin-top: 28px; text-align: center; }
    .cta a { display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; text-decoration: none; padding: 13px 28px; border-radius: 12px; font-size: 14px; font-weight: 700; }
    .footer { background: #060610; padding: 20px 32px; text-align: center; }
    .footer p { color: #334155; font-size: 12px; margin: 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>⚡ New Demo Request</h1>
      <p>IntelliForge Solutions · ${new Date().toLocaleDateString("en-IN", { dateStyle: "full" })}</p>
    </div>
    <div class="body">
      <span class="badge">🔔 Incoming Lead</span>

      <div class="grid">
        <div class="field">
          <label>Full Name</label>
          <p>${data.name}</p>
        </div>
        <div class="field">
          <label>Email</label>
          <p>${data.email}</p>
        </div>
      </div>

      <div class="grid">
        <div class="field">
          <label>Phone</label>
          <p>${data.phone || "Not provided"}</p>
        </div>
        <div class="field">
          <label>Company</label>
          <p>${data.companyName || "Not provided"}</p>
        </div>
      </div>

      <div class="grid">
        <div class="field">
          <label>Business Type</label>
          <p>${data.businessType}</p>
        </div>
        <div class="field">
          <label>Product Interested In</label>
          <p>${data.product || "Not specified"}</p>
        </div>
      </div>

      <div class="field">
        <label>Message</label>
        <p class="message">${data.message || "No message provided."}</p>
      </div>

      <div class="cta">
        <a href="mailto:${data.email}?subject=Re: Your IntelliForge Demo Request">
          Reply to ${data.name.split(" ")[0]} →
        </a>
      </div>
    </div>
    <div class="footer">
      <p>IntelliForge Solutions · pooprav26@gmail.com · +91 8056497843</p>
      <p style="margin-top:4px;">No 7, Nehru Street, Veppampattu, Chennai – 602024</p>
    </div>
  </div>
</body>
</html>`;

  await transporter.sendMail({
    from: `"IntelliForge Solutions" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,                 // send to yourself
    replyTo: data.email,                         // reply goes to lead
    subject: `🚀 New Demo Request — ${data.name} (${data.businessType})`,
    html,
  });

  // Auto-confirmation email to the lead
  await transporter.sendMail({
    from: `"Praveen Kumar – IntelliForge" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: `We received your demo request, ${data.name.split(" ")[0]}!`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #05050f; margin: 0; padding: 0; }
    .wrapper { max-width: 560px; margin: 0 auto; background: #0d0d1f; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 800; }
    .body { padding: 32px; color: #94a3b8; font-size: 15px; line-height: 1.7; }
    .body strong { color: #e2e8f0; }
    .highlight { background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); border-radius: 12px; padding: 18px; margin: 20px 0; color: #e2e8f0; font-size: 14px; }
    .footer { background: #060610; padding: 20px 32px; text-align: center; color: #334155; font-size: 12px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>✅ Request Confirmed</h1>
    </div>
    <div class="body">
      <p>Hi <strong>${data.name.split(" ")[0]}</strong>,</p>
      <p>Thank you for reaching out to <strong>IntelliForge Solutions</strong>. We've received your demo request and our team will get back to you within <strong>4 business hours</strong>.</p>
      <div class="highlight">
        <strong>What you submitted:</strong><br />
        Business type: ${data.businessType}<br />
        Product of interest: ${data.product || "To be discussed"}<br />
        Request received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      </div>
      <p>In the meantime, feel free to explore our products at <a href="https://intelliforge-solutions.vercel.app/products" style="color:#818cf8;">intelliforge-solutions.vercel.app</a>.</p>
      <p>Looking forward to connecting,<br /><strong style="color:#e2e8f0;">Praveen Kumar Yoganathan</strong><br /><span style="font-size:13px;color:#64748b;">Founder & CEO, IntelliForge Solutions</span></p>
    </div>
    <div class="footer">
      <p>+91 8056497843 · pooprav26@gmail.com</p>
      <p>No 7, Nehru Street, Veppampattu, Chennai – 602024</p>
    </div>
  </div>
</body>
</html>`,
  });
}

// ─── 2. Google Sheets ──────────────────────────────────────────────────────
async function appendToSheet(data: ContactPayload) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Leads!A:I",          // Sheet tab named "Leads"
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          timestamp,
          data.name,
          data.email,
          data.phone || "",
          data.companyName || "",
          data.businessType,
          data.product || "",
          data.message || "",
          "New",                  // Status column — manually update to "Contacted", "Closed" etc.
        ],
      ],
    },
  });
}

// ─── 3. Telegram ──────────────────────────────────────────────────────────
async function sendTelegram(data: ContactPayload) {
  const token  = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = `
🚀 *New Demo Request — IntelliForge*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone || "Not provided"}
🏢 *Company:* ${data.companyName || "Not provided"}
🏭 *Business Type:* ${data.businessType}
📦 *Product Interest:* ${data.product || "Not specified"}

💬 *Message:*
${data.message || "_No message provided_"}

🕐 ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
  `.trim();

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(`Telegram error: ${JSON.stringify(err)}`);
  }
}

// ─── Route Handler ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // Basic validation
    if (!body.name?.trim() || !body.email?.trim() || !body.businessType?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name, email and business type are required." },
        { status: 400 }
      );
    }

    // Fire all three in parallel — each failure is caught independently
    const results = await Promise.allSettled([
      sendGmail(body),
      appendToSheet(body),
      sendTelegram(body),
    ]);

    const [gmail, sheets, telegram] = results.map((r) => ({
      ok: r.status === "fulfilled",
      error: r.status === "rejected" ? (r.reason as Error).message : null,
    }));

    // Log any partial failures (visible in Vercel logs)
    if (!gmail.ok)    console.error("Gmail failed:", gmail.error);
    if (!sheets.ok)   console.error("Sheets failed:", sheets.error);
    if (!telegram.ok) console.error("Telegram failed:", telegram.error);

    // As long as at least one channel worked, return success to the user
    const anySuccess = gmail.ok || sheets.ok || telegram.ok;

    return NextResponse.json({
      success: anySuccess,
      channels: { gmail: gmail.ok, sheets: sheets.ok, telegram: telegram.ok },
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
