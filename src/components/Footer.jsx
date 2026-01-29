import React from 'react';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext'; // 1. Importar el Hook

function Footer() {
  const { t } = useLanguage(); // 2. Obtener textos
  const currentYear = new Date().getFullYear(); // Año automático

  return (
    <footer className="footer-container">
      <p>
        © {currentYear} <span className="highlight">Ebvam Brandon Zambrana Via</span>. {t.footer.rights}
      </p>
      <p>{t.footer.madeWith}</p>
    </footer>
  );
}

export default Footer;