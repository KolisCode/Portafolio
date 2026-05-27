import './Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__content">
                <p className="hero__greeting">Hola, soy</p>
                <h1 className="hero__name">Jhohan Bustamante</h1>
                <h2 className="hero__role">Desarrollador web Full-Stack</h2>
                <p className="hero__description"></p>
                <div className="hero_actions">
                    <a href="" className="btn btn--primary"></a>
                    <a href="" className="btn btn--outline"></a>
                    </div>
            </div>
        </section>
    )
}

export default Hero;