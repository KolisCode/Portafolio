import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">

        <div className="hero__terminal">
          <div className="hero__terminal-bar">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--yellow" />
            <span className="hero__dot hero__dot--green" />
            <span className="hero__terminal-title">~/koliscode</span>
          </div>
          <div className="hero__terminal-body">
            <p className="hero__prompt">
              <span className="hero__prompt-symbol">$</span> whoami
            </p>
            <h1 className="hero__name">KolisCode<span className="hero__cursor" /></h1>
            <p className="hero__comment">// full-stack developer · Colombia</p>
          </div>
        </div>

        <p className="hero__description">
          Construyo aplicaciones web completas — de la base de datos a la interfaz.
          Angular, NestJS, React, Node.js. Proyectos reales, código limpio.
        </p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--primary">Ver proyectos</a>
          <a
            href="https://github.com/KolisCode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            github.com/KolisCode
          </a>
        </div>

      </div>

      <a href="#proyectos" className="hero__scroll" aria-label="Ir a proyectos">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>

    </section>
  );
}

export default Hero;
