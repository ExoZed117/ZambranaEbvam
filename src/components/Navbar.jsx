import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from '../context/useLanguage';
import './Navbar.css';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="nav-shell" onKeyDown={event => { if (event.key === 'Escape' && open) { close(); menuButton.current?.focus(); } }}>
    <Link className="wordmark" to="/" onClick={close} aria-label={`${t.navbar.brand}, ${t.navbar.home}`}>ebvam<span aria-hidden="true">.</span></Link>
    <nav id="primary-navigation" className={`primary-navigation ${open ? 'is-open' : ''}`} aria-label={language === 'es' ? 'Principal' : 'Main'}>
      {[["/", t.navbar.home], ["/proyectos", t.navbar.projects], ["/skills", t.navbar.skills], ["/sobre-mi", t.home.btnAbout]].map(([path, label]) => <NavLink key={path} to={path} end onClick={close}>{label}</NavLink>)}
    </nav>
    <div className="nav-tools"><button className="language-button" onClick={toggleLanguage} aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}><span className={language === 'es' ? 'selected' : ''}>ES</span><span aria-hidden="true">/</span><span className={language === 'en' ? 'selected' : ''}>EN</span></button><a className="nav-contact" href="https://wa.me/59178304012" target="_blank" rel="noopener noreferrer">{language === 'es' ? 'Hablemos' : 'Let’s talk'}<FiArrowUpRight aria-hidden="true"/></a><button ref={menuButton} className="menu-button" aria-controls="primary-navigation" aria-expanded={open} aria-label={language === 'es' ? 'Menú de navegación' : 'Navigation menu'} onClick={() => setOpen(value => !value)}>{open ? <FiX/> : <FiMenu/>}</button></div>
  </div></header>;
}
