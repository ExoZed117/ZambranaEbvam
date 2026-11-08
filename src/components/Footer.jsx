import { FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from '../context/useLanguage';
import './Footer.css';
export default function Footer() {
  const { t, language } = useLanguage();
  return <footer className="site-footer"><div className="footer-contact"><h2>{language === 'es' ? '¿Creamos algo juntos?' : 'Let’s create something together.'}</h2><a href="https://wa.me/59178304012" target="_blank" rel="noopener noreferrer" className="button button-primary">{language === 'es' ? 'Iniciar conversación' : 'Start a conversation'}<FiArrowUpRight aria-hidden="true"/></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Ebvam Brandon Zambrana Via.<br/>{t.footer.rights}</p><p>{t.footer.madeWith}</p><a href="https://github.com/ExoZed117" target="_blank" rel="noopener noreferrer">GitHub<FiArrowUpRight aria-hidden="true"/></a></div></footer>;
}
