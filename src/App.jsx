import './App.css'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Proyectos from './sections/Proyectos/Proyectos.jsx'
import Stack from './sections/Stack/Stack.jsx'
import SobreMi from './sections/SobreMi/SobreMi.jsx'
import Contacto from './sections/Contacto/Contacto.jsx'

function App() {
  useScrollReveal();

  return (
    <>
      <header><Navbar /></header>
      <main>
        <section id="hero"><Hero /></section>
        <div data-reveal><Proyectos /></div>
        <div data-reveal data-delay="100"><Stack /></div>
        <div data-reveal><SobreMi /></div>
        <div data-reveal data-delay="100"><Contacto /></div>
      </main>
      <Footer />
    </>
  )
}

export default App
