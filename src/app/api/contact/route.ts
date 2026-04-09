import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error("Gmail env vars not configured.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  // ── Notification email to Praveen ──────────────────────────────────────
  const notifyHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  body{margin:0;padding:0;background:#05050f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}
  .wrap{max-width:600px;margin:0 auto;background:#0d0d1f;border-radius:16px;overflow:hidden;}
  .head{background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px;text-align:center;}
  .head h1{color:#fff;margin:0;font-size:22px;font-weight:800;}
  .head p{color:rgba(255,255,255,.7);margin:6px 0 0;font-size:13px;}
  .body{padding:32px;}
  .badge{display:inline-block;background:rgba(99,102,241,.15);color:#818cf8;border:1px solid rgba(99,102,241,.25);border-radius:100px;padding:4px 14px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:22px;}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
  .field label{display:block;font-size:10px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px;}
  .field p{margin:0;font-size:14px;color:#e2e8f0;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:10px 14px;}
  .msg p{white-space:pre-wrap;line-height:1.7;}
  .cta{margin-top:28px;text-align:center;}
  .cta a{display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;padding:13px 30px;border-radius:12px;font-size:14px;font-weight:700;}
  .foot{background:#060610;padding:18px 32px;text-align:center;}
  .foot p{color:#334155;font-size:11px;margin:0;}
</style>
</head>
<body>
<div class="wrap">
  <div class="head">
    <h1>🚀 New Demo Request</h1>
    <p>IntelliForge Solutions &nbsp;·&nbsp; ${timestamp} IST</p>
  </div>
  <div class="body">
    <span class="badge">🔔 Incoming Lead</span>
    <div class="grid">
      <div class="field"><label>Full Name</label><p>${data.name}</p></div>
      <div class="field"><label>Email</label><p>${data.email}</p></div>
    </div>
    <div class="grid">
      <div class="field"><label>Phone</label><p>${data.phone || "—"}</p></div>
      <div class="field"><label>Company</label><p>${data.companyName || "—"}</p></div>
    </div>
    <div class="grid">
      <div class="field"><label>Business Type</label><p>${data.businessType}</p></div>
      <div class="field"><label>Product Interest</label><p>${data.product || "—"}</p></div>
    </div>
    <div class="field msg" style="margin-top:12px;">
      <label>Message</label>
      <p>${data.message || "No message provided."}</p>
    </div>
    <div class="cta">
      <a href="mailto:${data.email}?subject=Re: Your IntelliForge Demo Request&body=Hi ${encodeURIComponent(data.name.split(" ")[0])},%0A%0AThank you for your interest in IntelliForge Solutions.%0A%0A">
        Reply to ${data.name.split(" ")[0]} →
      </a>
    </div>
  </div>
  <div class="foot">
    <p>IntelliForge Solutions &nbsp;·&nbsp; Praveen Kumar Yoganathan</p>
    <p>pooprav26@gmail.com &nbsp;·&nbsp; +91 8056497843</p>
  </div>
</div>
</body>
</html>`;

  // ── Auto-reply to the lead ─────────────────────────────────────────────
  const confirmHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  body{margin:0;padding:0;background:#05050f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}
  .wrap{max-width:560px;margin:0 auto;background:#0d0d1f;border-radius:16px;overflow:hidden;}
  .head{background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px;text-align:center;}
  .head h1{color:#fff;margin:0;font-size:22px;font-weight:800;}
  .body{padding:32px;color:#94a3b8;font-size:15px;line-height:1.75;}
  .body strong{color:#e2e8f0;}
  .box{background:rgba(99,102,241,.08);border:1px solid rgba(99,102,241,.2);border-radius:12px;padding:18px;margin:20px 0;font-size:14px;color:#c7d2fe;}
  .box b{color:#e2e8f0;}
  .sig{margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,.06);}
  .foot{background:#060610;padding:18px 32px;text-align:center;color:#334155;font-size:11px;}
</style>
</head>
<body>
<div class="wrap">
  <div class="head"><h1>✅ We Got Your Request!</h1></div>
  <div class="body">
    <p>Hi <strong>${data.name.split(" ")[0]}</strong>,</p>
    <p>Thank you for reaching out to <strong>IntelliForge Solutions</strong>. We&apos;ve received your demo request and will get back to you within <strong>4 business hours</strong>.</p>
    <div class="box">
      <b>Your Request Summary</b><br/><br/>
      📋 Business Type: ${data.businessType}<br/>
      📦 Product Interest: ${data.product || "To be discussed"}<br/>
      🕐 Submitted: ${timestamp} IST
    </div>
    <p>While you wait, explore all our AI products at <a href="https://intelliforge-solutions.vercel.app/products" style="color:#818cf8;">our products page</a>.</p>
    <div class="sig">
      <strong>Praveen Kumar Yoganathan</strong><br/>
      <span style="font-size:13px;color:#64748b;">Founder &amp; CEO, IntelliForge Solutions</span><br/>
      <span style="font-size:13px;color:#64748b;">+91 8056497843 &nbsp;·&nbsp; pooprav26@gmail.com</span>
    </div>
  </div>
  <div class="foot">
    <p>IntelliForge Solutions · No 7, Nehru Street, Veppampattu, Chennai – 602024</p>
  </div>
</div>
</body>
</html>`;

  await Promise.all([
    transporter.sendMail({
      from: `"IntelliForge Solutions" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: data.email,
      subject: `🚀 Demo Request — ${data.name} · ${data.businessType}`,
      html: notifyHtml,
    }),
    transporter.sendMail({
      from: `"Praveen Kumar – IntelliForge" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: `We received your demo request, ${data.name.split(" ")[0]}! ✅`,
      html: confirmHtml,
    }),
  ]);
}

// ─── 2. Telegram ──────────────────────────────────────────────────────────
async function sendTelegram(data: ContactPayload) {
  const token  = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram env vars not configured.");
  }

  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const text = [
    `🚀 *New Demo Request — IntelliForge*`,
    ``,
    `👤 *Name:* ${data.name}`,
    `📧 *Email:* ${data.email}`,
    `📱 *Phone:* ${data.phone || "Not provided"}`,
    `🏢 *Company:* ${data.companyName || "Not provided"}`,
    `🏭 *Industry:* ${data.businessType}`,
    `📦 *Product:* ${data.product || "Not specified"}`,
    ``,
    `💬 *Message:*`,
    data.message || "_No message_",
    ``,
    `🕐 ${timestamp} IST`,
  ].join("\n");

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
    throw new Error(`Telegram API error: ${JSON.stringify(err)}`);
  }
}

// ─── 3. Google Sheets (runs only if credentials are present) ──────────────
async function appendToSheet(data: ContactPayload) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const email   = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key     = process.env.GOOGLE_PRIVATE_KEY;

  if (!sheetId || !email || !key) {
    throw new Error("Google Sheets env vars not configured — skipping.");
  }

  // Dynamic import so the build doesn't fail if googleapis isn't installed yet
  const { google } = await import("googleapis");

  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: email, private_key: key.replace(/\\n/g, "\n") },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Leads!A:I",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        timestamp,
        data.name,
        data.email,
        data.phone || "",
        data.companyName || "",
        data.businessType,
        data.product || "",
        data.message || "",
        "New",
      ]],
    },
  });
}

// ─── Route Handler ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.businessType?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name, email and business type are required." },
        { status: 400 }
      );
    }

    // Run all three in parallel — each failure is isolated
    const [gmail, telegram, sheets] = await Promise.allSettled([
      sendGmail(body),
      sendTelegram(body),
      appendToSheet(body),
    ]);

    const results = { gmail, telegram, sheets };

    // Log partial failures to Vercel logs (visible in vercel.com → project → logs)
    const errors: Record<string, string> = {};
    for (const [key, result] of Object.entries(results)) {
      if (result.status === "rejected") {
        const msg = (result.reason as Error)?.message ?? String(result.reason);
        console.error(`[contact] ${key} failed:`, msg);
        errors[key] = msg;
      }
    }

    const coreSuccess = gmail.status === "fulfilled" || telegram.status === "fulfilled";

    return NextResponse.json({
      success: coreSuccess,
      channels: {
        gmail:    gmail.status === "fulfilled",
        telegram: telegram.status === "fulfilled",
        sheets:   sheets.status === "fulfilled",
      },
      // errors field helps debug — remove after everything is working
      errors,
    }, { status: coreSuccess ? 200 : 500 });

  } catch (err) {
    console.error("[contact] Unhandled error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
