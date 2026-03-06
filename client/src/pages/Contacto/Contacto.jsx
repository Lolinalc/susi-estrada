import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Contacto.module.css'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contacto() {
  const { t } = useLanguage()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'El nombre es requerido'
    if (!form.email.trim())   errs.email   = 'El correo es requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Ingresa un correo válido'
    if (!form.subject.trim()) errs.subject = 'El asunto es requerido'
    if (!form.message.trim()) errs.message = 'El mensaje es requerido'
    else if (form.message.trim().length < 10)
      errs.message = 'El mensaje debe tener al menos 10 caracteres'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Error del servidor')
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contacto — Susi Estrada</title>
        <meta name="description" content="Contacta a Susi Estrada para colaboraciones, prensa o información sobre sus obras y proyectos." />
      </Helmet>

      <section className={`section ${styles.contacto}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left: heading + social */}
            <div className={styles.leftCol}>
              <span className="section-eyebrow">{t.contact.eyebrow}</span>
              <h1 className={`section-title ${styles.title}`}>{t.contact.title}</h1>
              <div className="section-divider" />

              <p className={styles.intro}>
                Para colaboraciones, prensa, información sobre funciones o cualquier otra consulta, escríbeme directamente.
              </p>

              <div className={styles.socialBlock}>
                <p className={styles.socialLabel}>{t.contact.social}</p>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.instagram.com/sabrosa.teatro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                    <span>@sabrosa.teatro</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@sabrosa.teatro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.86 4.86 0 01-1.01-.07z"/>
                    </svg>
                    <span>@sabrosa.teatro</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className={styles.formCol}>
              {status === 'success' ? (
                <div className={styles.successMsg} role="alert">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <p>{t.contact.form.success}</p>
                  <button
                    className="btn btn-outline"
                    onClick={() => setStatus('idle')}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulario de contacto"
                >
                  {/* Name */}
                  <div className={`${styles.field} ${errors.name ? styles.fieldError : ''}`}>
                    <label htmlFor="name" className={styles.label}>
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                      autoComplete="name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span id="name-error" className={styles.errorMsg} role="alert">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className={`${styles.field} ${errors.email ? styles.fieldError : ''}`}>
                    <label htmlFor="email" className={styles.label}>
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={styles.input}
                      autoComplete="email"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span id="email-error" className={styles.errorMsg} role="alert">{errors.email}</span>}
                  </div>

                  {/* Subject */}
                  <div className={`${styles.field} ${errors.subject ? styles.fieldError : ''}`}>
                    <label htmlFor="subject" className={styles.label}>
                      {t.contact.form.subject}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      className={styles.input}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && <span id="subject-error" className={styles.errorMsg} role="alert">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className={`${styles.field} ${errors.message ? styles.fieldError : ''}`}>
                    <label htmlFor="message" className={styles.label}>
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className={`${styles.input} ${styles.textarea}`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <span id="message-error" className={styles.errorMsg} role="alert">{errors.message}</span>}
                  </div>

                  {/* Server error */}
                  {status === 'error' && (
                    <p className={styles.serverError} role="alert">
                      {t.contact.form.error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className={styles.spinner} aria-hidden="true" />
                        {t.contact.form.sending}
                      </>
                    ) : (
                      t.contact.form.send
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
