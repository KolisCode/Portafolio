import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <span className='navbar__logo'>Jhohan</span>

        <ul>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
  )
}

export default Navbar