'use strict'

const { createTransporter } = require('../config/mailer')
const nodemailer = require('nodemailer')

/**
 * POST /api/contact
 * Expects: { name, email, subject, message } (already validated + sanitized)
 */
async function sendContactEmail(req, res) {
  const { name, email, subject, message } = req.body

  const TO = process.env.CONTACT_TO_EMAIL || 'contacto@susiestrada.com'

  try {
    const transporter = await createTransporter()

    // ── Email to site owner ──────────────────────────────────────────────────
    const ownerMail = await transporter.sendMail({
      from:    `"Sitio Web Susi Estrada" <${process.env.SMTP_USER || 'noreply@susiestrada.com'}>`,
      to:      TO,
      replyTo: email,
      subject: `[Contacto web] ${subject}`,
      text:    `Nuevo mensaje desde el formulario de contacto\n\nNombre: ${name}\nCorreo: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Georgia, serif; background: #0a0a08; color: #f5f3ee; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 32px; }
            .header { border-bottom: 1px solid #2d5a3d; padding-bottom: 24px; margin-bottom: 32px; }
            .brand { font-size: 1.4rem; letter-spacing: 0.2em; color: #f5f3ee; }
            .label { font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: #4a8c60; margin-bottom: 4px; font-family: Arial, sans-serif; }
            .value { font-size: 1rem; color: #c8c6c0; margin-bottom: 20px; }
            .message-box { background: #1a1a18; border-left: 3px solid #2d5a3d; padding: 20px; margin-top: 24px; white-space: pre-wrap; color: #c8c6c0; font-size: 0.95rem; line-height: 1.7; }
            .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #242420; font-size: 0.8rem; color: #52524e; font-family: Arial, sans-serif; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <span class="brand">SUSI ESTRADA</span>
              <p style="font-size:0.8rem;color:#52524e;margin-top:4px;font-family:Arial">Nuevo mensaje desde el formulario de contacto</p>
            </div>
            <div class="label">Nombre</div>
            <div class="value">${name}</div>
            <div class="label">Correo electrónico</div>
            <div class="value"><a href="mailto:${email}" style="color:#4a8c60">${email}</a></div>
            <div class="label">Asunto</div>
            <div class="value">${subject}</div>
            <div class="label">Mensaje</div>
            <div class="message-box">${message}</div>
            <div class="footer">
              Este mensaje fue enviado desde susiestrada.com el ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}.
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // Log Ethereal preview URL for development
    if (process.env.USE_ETHEREAL === 'true') {
      console.log('📬  Preview URL:', nodemailer.getTestMessageUrl(ownerMail))
    }

    // ── Auto-reply to sender (optional — remove if not needed) ───────────────
    await transporter.sendMail({
      from:    `"Susi Estrada" <${process.env.SMTP_USER || 'noreply@susiestrada.com'}>`,
      to:      email,
      subject: `Re: ${subject}`,
      text:    `Hola ${name},\n\nGracias por escribirme. He recibido tu mensaje y te responderé pronto.\n\nSusi Estrada\n---\nEste es un mensaje automático, por favor no respondas a este correo.`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Georgia, serif; background: #0a0a08; color: #f5f3ee; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 32px; }
            .brand { font-size: 1.4rem; letter-spacing: 0.2em; color: #f5f3ee; display: block; margin-bottom: 32px; border-bottom: 1px solid #2d5a3d; padding-bottom: 24px; }
            p { color: #c8c6c0; line-height: 1.8; margin-bottom: 16px; }
            .sig { color: #4a8c60; font-style: italic; margin-top: 32px; }
            .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #242420; font-size: 0.75rem; color: #52524e; font-family: Arial, sans-serif; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <span class="brand">SUSI ESTRADA</span>
            <p>Hola <strong>${name}</strong>,</p>
            <p>Gracias por escribirme. He recibido tu mensaje y te responderé pronto.</p>
            <p class="sig">Susi Estrada</p>
            <div class="footer">Este es un mensaje automático. Por favor, no respondas directamente a este correo.</div>
          </div>
        </body>
        </html>
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente.',
    })
  } catch (err) {
    console.error('[emailController] Error sending email:', err.message)
    return res.status(500).json({
      success: false,
      message: 'No fue posible enviar el correo. Por favor intenta de nuevo.',
    })
  }
}

module.exports = { sendContactEmail }
