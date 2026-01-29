import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // Importamos el hook
import { FaGlobeAmericas } from 'react-icons/fa'; // Icono bonito (opcional)
import './Navbar.css';

function Navbar() {
  // Sacamos los textos (t), el idioma actual y la función para cambiar
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Usamos t.navbar.brand en lugar de texto fijo */}
        <Link to="/">{t.navbar.brand}</Link>
      </div>

      <div className="navbar-links">
        {/* Enlaces dinámicos según el idioma */}
        <Link to="/">{t.navbar.home}</Link>
        <Link to="/proyectos">{t.navbar.projects}</Link>
        <Link to="/skills">{t.navbar.skills}</Link>
        <Link to="/sobre-mi">{t.navbar.about}</Link>

        {/* --- BOTÓN DE IDIOMA --- */}
        <button 
          className="lang-btn" 
          onClick={toggleLanguage}
          title="Cambiar idioma / Switch Language"
        >
          <FaGlobeAmericas /> 
          <span>{language === 'es' ? 'EN' : 'ES'}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;