import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import Home       from './pages/Home/Home'
import Acerca     from './pages/Acerca/Acerca'
import Obras      from './pages/Obras/Obras'
import ObraDetalle from './pages/Obras/ObraDetalle'
import Calendario from './pages/Calendario/Calendario'
import Galeria    from './pages/Galeria/Galeria'
import Prensa     from './pages/Prensa/Prensa'
import Contacto   from './pages/Contacto/Contacto'

function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '6rem', color: 'var(--c-green-900)', fontWeight: 300 }}>404</h1>
      <p style={{ color: 'var(--c-gray-400)', marginBottom: '2rem' }}>Página no encontrada</p>
      <a href="/" className="btn btn-outline">Ir al inicio</a>
    </section>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"           element={<Home />} />
            <Route path="/acerca"     element={<Acerca />} />
            <Route path="/obras"      element={<Obras />} />
            <Route path="/obras/:slug" element={<ObraDetalle />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/galeria"    element={<Galeria />} />
            <Route path="/prensa"     element={<Prensa />} />
            <Route path="/contacto"   element={<Contacto />} />
            <Route path="*"           element={<NotFound />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </HelmetProvider>
  )
}
