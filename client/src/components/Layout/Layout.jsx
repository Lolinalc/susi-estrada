import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Navbar />
      <main id="main-content" className={isHome ? '' : 'page-wrapper'}>
        <Outlet />
      </main>
      <Footer isHome={isHome} />
    </>
  )
}
