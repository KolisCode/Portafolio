import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './sections/Hero/Hero.jsx'

function App() {
  return (
    <>
      <header><Navbar /></header>
      <main>
        <section id="hero"><Hero /></section>
        <section id="proyectos">Proyectos</section>
        <section id="stack">Stack</section>
        <section id="sobre-mi">Sobre mí</section>
        <section id="contacto">Contacto</section>
      </main>
      <footer>Footer</footer>

    </>
  )
}

export default App
