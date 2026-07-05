import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import markSvg from '../../assets/mark.svg';
import { useActiveSection } from '../../hooks/useActiveSection.js';

// Links de sección del home (scroll a `/#hash`).
const SECTION_LINKS = [
  { hash: 'servicios', label: 'servicios' },
  { hash: 'proyectos', label: 'proyectos' },
  { hash: 'stack',     label: 'stack'     },
  { hash: 'sobre-mi',  label: 'sobre mí'  },
  { hash: 'cotizacion', label: 'cotización' },
  { hash: 'contacto',  label: 'contacto'  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const enNotas = pathname.startsWith('/notas');
  const activeId = useActiveSection(SECTION_LINKS.map((l) => l.hash));

  const close = () => setOpen(false);

  const sectionCls = (hash, base) =>
    `${base}${isHome && activeId === hash ? ' navbar__link--active' : ''}`;

  return (
    <nav className={`navbar${open ? ' navbar--open' : ''}`}>
      <Link to="/" className="navbar__brand" onClick={close}>
        <img src={markSvg} alt="KolisCode mark" className="navbar__mark" />
        <span className="navbar__name">KolisCode</span>
      </Link>

      <ul className="navbar__links">
        {SECTION_LINKS.map(({ hash, label }) => (
          <li key={hash}>
            <Link to={`/#${hash}`} className={sectionCls(hash, 'navbar__link')}>
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/notas" className={`navbar__link${enNotas ? ' navbar__link--active' : ''}`}>
            notas
          </Link>
        </li>
      </ul>

      <button
        className="navbar__hamburger"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <div className="navbar__mobile">
          {SECTION_LINKS.map(({ hash, label }) => (
            <Link
              key={hash}
              to={`/#${hash}`}
              className={sectionCls(hash, 'navbar__mobile-link')}
              onClick={close}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/notas"
            className={`navbar__mobile-link${enNotas ? ' navbar__link--active' : ''}`}
            onClick={close}
          >
            notas
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
