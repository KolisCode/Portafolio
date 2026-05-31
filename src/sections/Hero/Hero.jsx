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
    </section>
  );
}

export default Hero;
