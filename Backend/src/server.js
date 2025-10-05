import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import path from "path";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// Middlewares
app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN, credentials: false }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan("tiny"));

// Limit API calls to avoid spam
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", limiter);

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
  phone: z.string().optional().nullable(),
  subject: z.string().optional().nullable(),
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ✅ Root route (Render check)
app.get("/", (req, res) => {
  res.send("✅ Portfolio Backend is running on Render!");
});

// Health check endpoint
app.get("/api/health", async (req, res) => {
  try {
    await transporter.verify();
    res.json({ ok: true, mailReady: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: "SMTP not verified", details: e?.message });
  }
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const data = contactSchema.parse(req.body);
    const to = process.env.TO_EMAIL || process.env.SMTP_USER;

    const html = `
      <h2>New Portfolio Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${data.message}</pre>
    `;

    const info = await transporter.sendMail({
      from: {
        name: process.env.FROM_NAME || "Portfolio Website",
        address: process.env.FROM_EMAIL || process.env.SMTP_USER,
      },
      to,
      replyTo: { name: data.name, address: data.email },
      subject: data.subject || "New message from portfolio contact form",
      html,
    });

    res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    if (err?.issues) {
      return res.status(400).json({ ok: false, error: "Validation failed", issues: err.issues });
    }
    console.error(err);
    res.status(500).json({ ok: false, error: "Email failed to send", details: err?.message });
  }
});

// Server listen
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`CORS Origin: ${CORS_ORIGIN}`);
});
