import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './Layout.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'

/**
 * Shell común de todas las páginas: Navbar + contenido enrutado + Footer.
 * Maneja el scroll en cada cambio de ruta:
 *   - con hash (#seccion) → desplaza al elemento (para /#proyectos desde otra página)
 *   - sin hash → vuelve al tope
 */
function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <header><Navbar /></header>
      <main>
        {/* key={pathname}: remonta y reproduce la transición solo al cambiar de página. */}
        <div className="route-fade" key={pathname}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
