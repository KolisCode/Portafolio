import { Link } from 'react-router-dom';
import './Servicios.css';

const servicios = [
  {
    titulo: 'Aplicaciones web a medida',
    descripcion: 'Webs y portales full-stack, del diseño de la base de datos a la interfaz. Rápidos, responsivos y listos para producción.',
    ejemplo: { nombre: 'LotesRB', slug: 'lotesrb' },
    icon: IconLayout,
  },
  {
    titulo: 'Tiendas en línea',
    descripcion: 'E-commerce con catálogo, carrito y checkout real (MercadoPago), más un panel de administración para que operes sin depender de mí.',
    ejemplo: { nombre: 'TiendaKit', slug: 'tiendakit' },
    icon: IconCart,
  },
  {
    titulo: 'APIs y backends',
    descripcion: 'APIs REST con autenticación, control de acceso por planes, rate limiting y documentación OpenAPI para que integrarlas sea autoservicio.',
    ejemplo: { nombre: 'KolisKit', slug: 'koliskit' },
    icon: IconApi,
  },
  {
    titulo: 'Sistemas de gestión y SaaS',
    descripcion: 'Software para operar un negocio: paneles internos, dominios complejos y arquitectura multi-tenant cuando hay que servir a varios clientes.',
    ejemplo: { nombre: 'Biodont', slug: 'biodont' },
    icon: IconGrid,
  },
  {
    titulo: 'Integración de IA',
    descripcion: 'Agentes y copilotos que trabajan sobre tus datos con herramientas (MCP), no con respuestas genéricas. IA con resultados verificables.',
    ejemplo: { nombre: 'GeoAgent', slug: 'geoagent' },
    icon: IconSpark,
  },
  {
    titulo: 'Dashboards y datos',
    descripcion: 'Tableros de métricas e indicadores para decidir con datos: la información agregada en el backend y presentada de forma clara.',
    ejemplo: { nombre: 'Metriboard', slug: 'metriboard' },
    icon: IconChart,
  },
];

function Servicios() {
  return (
    <section id="servicios" className="section servicios">
      <p className="section__label">servicios</p>
      <h2 className="section__title">Lo que puedo construir para ti</h2>

      <div className="servicios__grid">
        {servicios.map(({ titulo, descripcion, ejemplo, icon: Icon }) => (
          <article key={titulo} className="servicio__card">
            <span className="servicio__icon"><Icon /></span>
            <h3 className="servicio__titulo">{titulo}</h3>
            <p className="servicio__descripcion">{descripcion}</p>
            {ejemplo && (
              <Link to={`/proyectos/${ejemplo.slug}`} className="servicio__ejemplo">
                Ejemplo: {ejemplo.nombre} <span aria-hidden="true">→</span>
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Icons (24×24, currentColor) ─────────────────────────── */

function IconLayout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.2l2.1 12.4a1.5 1.5 0 0 0 1.5 1.2h8.9a1.5 1.5 0 0 0 1.5-1.2L21 7H5.5" />
    </svg>
  );
}

function IconApi() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.2" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" />
      <rect x="14" y="14" width="7" height="7" rx="1.2" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 15l.7 1.8L21.5 17.5l-1.8.7L19 20l-.7-1.8L16.5 17.5l1.8-.7z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" />
      <rect x="12" y="8" width="3" height="10" />
      <rect x="17" y="5" width="3" height="13" />
    </svg>
  );
}

export default Servicios;
