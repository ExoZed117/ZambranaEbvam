import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/useLanguage';
import './App.css';
import './Cinematic.css';
import './Monolith.css';

function Portfolio() {
  const { pathname } = useLocation();
  const { t, language } = useLanguage();
  const previousPath = useRef(pathname);
  const theme = { '/': 'home', '/proyectos': 'projects', '/skills': 'skills', '/sobre-mi': 'about' }[pathname] || 'home';
  useEffect(() => {
    const names = { '/': t.navbar.home, '/proyectos': t.navbar.projects, '/skills': t.navbar.skills, '/sobre-mi': t.home.btnAbout };
    document.documentElement.lang = language;
    document.title = `${names[pathname] || '404'} — Ebvam Zambrana`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.home.description);
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.querySelector('main')?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname, language, t]);
  return <div className="app-wrapper"><a className="skip-link" href="#main-content">{language === 'es' ? 'Saltar al contenido' : 'Skip to content'}</a><Navbar/><main id="main-content" className={`main-${theme}`} tabIndex={-1}><AmbientBackground theme={theme}/><Routes><Route path="/" element={<Home/>}/><Route path="/proyectos" element={<Projects/>}/><Route path="/skills" element={<Skills/>}/><Route path="/sobre-mi" element={<About/>}/><Route path="*" element={<div className="page-container page-heading"><h1>404</h1><Link className="text-link" to="/">{t.navbar.home}</Link></div>}/></Routes></main><Footer/></div>;
}
export default function App() { return <LanguageProvider><Portfolio/></LanguageProvider>; }
