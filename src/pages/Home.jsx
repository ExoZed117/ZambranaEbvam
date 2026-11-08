import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/useLanguage';
import ProjectArt from '../components/ProjectArt';

export default function Home() {
  const { t, language } = useLanguage();
  return <div className="home-page">
    <section className="monolith-hero" aria-labelledby="hero-name">
      <div className="monolith-scene" aria-hidden="true">
        <img className="hero-artwork" src="/media/monolith-1800.jpg" srcSet="/media/monolith-900.jpg 900w, /media/monolith-1800.jpg 1800w" sizes="100vw" width="1800" height="1125" alt="" fetchPriority="high" />
      </div>
      <div className="monolith-foreground" aria-hidden="true">
        <svg className="hero-artwork" viewBox="0 0 1586 992" preserveAspectRatio="xMidYMid slice">
          <defs><clipPath id="monolith-apex"><polygon points="973,246 1000,530 664,570" /></clipPath></defs>
          <image href="/media/monolith-1800.jpg" width="1586" height="992" preserveAspectRatio="none" clipPath="url(#monolith-apex)" />
        </svg>
      </div>
      <div className="monolith-shade" aria-hidden="true" />
      <h1 id="hero-name" className="monolith-name" aria-label="Ebvam Brandon Zambrana Via"><span className="name-main">EBVAM</span><span className="name-family">ZAMBRANA VIA</span></h1>
      <p className="monolith-fullname">Ebvam Brandon Zambrana Via</p>
      <div className="monolith-bottom">
        <div className="monolith-role"><p>{t.home.role}</p></div>
        <div className="hero-actions"><Link className="button button-primary" to="/proyectos">{t.home.btnPortfolio}<FiArrowUpRight aria-hidden="true"/></Link><a className="button button-secondary" href="https://wa.me/59178304012" target="_blank" rel="noopener noreferrer">{language === 'es' ? 'Hablemos' : 'Let’s talk'}<FiArrowUpRight aria-hidden="true"/></a></div>
      </div>
      <p className="monolith-caption">{language === 'es' ? 'Arte conceptual original' : 'Original concept art'}</p>
    </section>
    <section className="intro-strip" aria-label={language === 'es' ? 'Presentación' : 'Introduction'}>
      <div><p className="availability"><span/>{t.home.badge}</p><p className="intro-description">{t.home.description}</p></div>
      <div className="intro-links"><div className="social-links"><a href="https://github.com/ExoZed117" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true"/>GitHub</a><a href="https://www.linkedin.com/in/zambrana-via-ebvam/" target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true"/>LinkedIn</a><a href="https://wa.me/59178304012" target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true"/>WhatsApp</a></div><a className="text-link" href="#selected-work">{language === 'es' ? 'Explorar mi trabajo' : 'Explore my work'}<FiArrowDown aria-hidden="true"/></a></div>
    </section>
    <section className="home-work" id="selected-work"><div className="section-heading"><h2>{language === 'es' ? 'Del código a lo real.' : 'From code to real life.'}</h2><Link className="text-link" to="/proyectos">{language === 'es' ? 'Todos los proyectos' : 'All projects'}<FiArrowUpRight aria-hidden="true"/></Link></div>
      <Link to="/proyectos" className="home-feature"><ProjectArt title={t.projects.list.shield.title}/><div><p>{t.projects.list.shield.type}</p><h3>{t.projects.list.shield.title}</h3><p>{t.projects.list.shield.desc}</p><span className="text-link">{t.home.btnPortfolio}<FiArrowUpRight aria-hidden="true"/></span></div></Link>
    </section>
    <section className="home-profile"><h2>{language === 'es' ? 'Más allá de la pantalla.' : 'Beyond the screen.'}</h2><div><p>{t.about.bio}</p><Link className="text-link" to="/sobre-mi">{t.home.btnAbout}<FiArrowUpRight aria-hidden="true"/></Link></div></section>
  </div>;
}
