import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeadset, FaStop } from 'react-icons/fa';
import AudioVisualizer from '../components/AudioVisualizer';
import AudioGuide from '../components/AudioGuide';

// 1. IMPORTAR EL HOOK DE IDIOMA
import { useLanguage } from '../context/LanguageContext';

function Home() {
  // 2. EXTRAER LAS TRADUCCIONES (t)
  const { t } = useLanguage(); 
  
  const [isVisualizerOn, setIsVisualizerOn] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const handleAudioClick = () => {
    if (isVisualizerOn) {
      setIsVisualizerOn(false);
    } else {
      setShowGuide(true);
    }
  };

  const handleGuideConfirm = () => {
    setShowGuide(false);
    setIsVisualizerOn(true);
  };

  return (
    <div className="hero-section" style={{ position: 'relative', zIndex: 2 }}>
      
      <AudioVisualizer isActive={isVisualizerOn} setIsActive={setIsVisualizerOn} />
      
      {showGuide && (
        <AudioGuide 
          onConfirm={handleGuideConfirm} 
          onCancel={() => setShowGuide(false)} 
        />
      )}

      {/* --- Contenido Principal --- */}
      
      {/* TRADUCCIÓN: Badge */}
      <div className="badge-new">{t.home.badge}</div>
      
      <h1 className="glitch-text">EBVAM BRANDON <br /> ZAMBRANA VIA</h1>
      
      {/* TRADUCCIÓN: Rol (Estudiante/FullStack) */}
      <p className="subtitle">{t.home.role}</p>
      
      {/* TRADUCCIÓN: Descripción */}
      <p className="description">
        {t.home.description}
      </p>

      {/* Botón de Audio con Tooltip Traducido */}
      <button 
        className={`btn audio-btn-round ${isVisualizerOn ? 'active' : ''}`} 
        onClick={handleAudioClick}
        title={isVisualizerOn ? t.home.audioStop : t.home.audioSync}
      >
        {isVisualizerOn ? <FaStop /> : <FaHeadset />}
      </button>

      <div className="cta-buttons">
        {/* TRADUCCIÓN: Botones */}
        <Link to="/proyectos" className="btn btn-primary">{t.home.btnPortfolio}</Link>
        <Link to="/sobre-mi" className="btn btn-outline">{t.home.btnAbout}</Link>
      </div>

      <div className="social-links">
        <a href="https://github.com/ExoZed117" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/zambrana-via-ebvam/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
        <a href="https://wa.me/59178304012" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
      </div>

    </div>
  );
}

export default Home;