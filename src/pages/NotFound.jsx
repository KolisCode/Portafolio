import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', textAlign: 'center' }}>
      <p className="section__label">404</p>
      <h1 className="section__title">Página no encontrada</h1>
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-accent)',
          textDecoration: 'none',
        }}
      >
        ← Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
