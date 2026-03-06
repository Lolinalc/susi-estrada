import { createContext, useContext, useState } from 'react'
import { es } from '../i18n/es'
import { en } from '../i18n/en'

const translations = { es, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'))
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
