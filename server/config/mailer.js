'use strict'

const nodemailer = require('nodemailer')

/**
 * Creates and returns a configured Nodemailer transporter.
 * Reads SMTP settings from environment variables.
 *
 * For local testing without a real SMTP server, set USE_ETHEREAL=true
 * in your .env and the transporter will use Ethereal (fake SMTP).
 */
async function createTransporter() {
  // Ethereal test account — only for local dev
  if (process.env.USE_ETHEREAL === 'true') {
    const testAccount = await nodemailer.createTestAccount()
    console.log('📧  Ethereal test account:', testAccount.user)
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })
  }

  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // true → port 465, false → STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Increase timeout for slow providers
    connectionTimeout: 10_000,
    greetingTimeout:   10_000,
  })
}

module.exports = { createTransporter }
