'use strict'

const rateLimit = require('express-rate-limit')

/**
 * Strict rate limiter for the contact form.
 * 5 requests per 15 minutes per IP.
 */
const contactLimiter = rateLimit({
  windowMs:         15 * 60 * 1000, // 15 minutes
  max:              5,               // max requests per window
  standardHeaders:  true,
  legacyHeaders:    false,
  message: {
    success: false,
    message: 'Demasiados intentos. Por favor espera 15 minutos e intenta de nuevo.',
  },
  handler: (req, res, next, options) => {
    console.warn(`[RateLimit] IP ${req.ip} hit contact limit`)
    res.status(429).json(options.message)
  },
})

module.exports = { contactLimiter }
