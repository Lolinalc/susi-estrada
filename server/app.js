'use strict'

require('dotenv').config()

const express = require('express')
const helmet  = require('helmet')
const cors    = require('cors')

const contactRouter = require('./routes/contact')

const app  = express()
const PORT = process.env.PORT || 3001

// ─── Security headers ────────────────────────────────────────────────────────
app.use(helmet())

// ─── CORS ────────────────────────────────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())

app.use(
  cors({
    origin: (origin, cb) => {
      // Allow non-browser requests (Postman, curl) + allowed origins
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
      cb(new Error(`CORS: origin not allowed — ${origin}`))
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
)

// ─── Body parsing ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '20kb' }))
app.use(express.urlencoded({ extended: false, limit: '20kb' }))

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }))

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRouter)

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ success: false, message: 'Not found' }))

// ─── Global error handler ────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('[Error]', err.message)
  const status = err.status || 500
  res.status(status).json({
    success: false,
    message: status === 500 ? 'Error interno del servidor' : err.message,
  })
})

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Server running on http://localhost:${PORT}`)
  console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'development'}`)
  console.log(`   ALLOWED_ORIGIN: ${allowedOrigins.join(', ')}`)
})

module.exports = app
