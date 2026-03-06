'use strict'

const { Router } = require('express')
const { body, validationResult } = require('express-validator')
const { contactLimiter } = require('../middleware/rateLimiter')
const { sendContactEmail } = require('../controllers/emailController')

const router = Router()

// Validation + sanitization rules
const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('El nombre es requerido.')
    .isLength({ max: 100 }).withMessage('El nombre no puede exceder 100 caracteres.')
    .escape(),

  body('email')
    .trim()
    .notEmpty().withMessage('El correo electrónico es requerido.')
    .isEmail().withMessage('Ingresa un correo electrónico válido.')
    .normalizeEmail()
    .isLength({ max: 254 }).withMessage('El correo es demasiado largo.'),

  body('subject')
    .trim()
    .notEmpty().withMessage('El asunto es requerido.')
    .isLength({ max: 200 }).withMessage('El asunto no puede exceder 200 caracteres.')
    .escape(),

  body('message')
    .trim()
    .notEmpty().withMessage('El mensaje es requerido.')
    .isLength({ min: 10 }).withMessage('El mensaje debe tener al menos 10 caracteres.')
    .isLength({ max: 2000 }).withMessage('El mensaje no puede exceder 2000 caracteres.')
    .escape(),
]

// POST /api/contact
router.post(
  '/',
  contactLimiter,
  contactValidation,
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: 'Datos inválidos.',
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      })
    }
    next()
  },
  sendContactEmail
)

module.exports = router
