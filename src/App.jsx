import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Proyectos from './sections/Proyectos/Proyectos.jsx'

function App() {
  return (
    <>
      <header><Navbar /></header>
      <main>
        <section id="hero"><Hero /></section>
        <Proyectos />
        <section id="stack" className="section">Stack</section>
        <section id="sobre-mi" className="section">Sobre mí</section>
        <section id="contacto" className="section">Contacto</section>
      </main>
    </>
  )
}

export default App
