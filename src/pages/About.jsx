import React from 'react';
import { 
  FaLaptopCode, FaServer, FaMobileAlt, 
  FaGraduationCap, FaDownload, FaMedkit, FaFlag, FaTools, FaUniversity 
} from 'react-icons/fa';
import './About.css';

// 1. IMPORTAR EL NUEVO FONDO DE PARTÍCULAS
import ParticlesBackground from '../components/ParticlesBackground';

// 2. IMPORTAR EL CEREBRO DE TRADUCCIÓN
import { useLanguage } from '../context/LanguageContext';

function About() {
  // Extraemos los textos según el idioma seleccionado
  const { t } = useLanguage();

  return (
    // 'position: relative' es vital para contener el fondo absoluto
    <div className="about-container" style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* --- FONDO DE PARTÍCULAS (Flotando detrás) --- */}
      <ParticlesBackground />

      {/* --- CONTENIDO PRINCIPAL (Con z-index para estar encima) --- */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* 1. INTRODUCCIÓN */}
        <div className="about-header">
          <h2>{t.about.title}</h2>
          <p className="bio-text">
            {t.about.bio}
          </p>
        </div>

        {/* 2. SERVICIOS (Frontend, Backend, Mobile) */}
        <h3 className="section-title"><FaLaptopCode /> {t.about.areasTitle}</h3>
        <div className="services-grid">
          
          {/* Frontend */}
          <div className="service-card">
            <div className="service-icon"><FaLaptopCode /></div>
            <h4>{t.about.services.frontend.title}</h4>
            <p>{t.about.services.frontend.desc}</p>
          </div>

          {/* Backend */}
          <div className="service-card">
            <div className="service-icon"><FaServer /></div>
            <h4>{t.about.services.backend.title}</h4>
            <p>{t.about.services.backend.desc}</p>
          </div>

          {/* Mobile */}
          <div className="service-card">
            <div className="service-icon"><FaMobileAlt /></div>
            <h4>{t.about.services.mobile.title}</h4>
            <p>{t.about.services.mobile.desc}</p>
          </div>
        </div>

        {/* 3. TIMELINE (Formación & Historia) */}
        <h3 className="section-title"><FaGraduationCap /> {t.about.timelineTitle}</h3>
        <div className="timeline-section">
          
          {/* UNIVALLE */}
          <div className="timeline-item">
            <div className="timeline-date">{t.about.timeline.uni.date}</div>
            <div className="timeline-content">
              <h4>{t.about.timeline.uni.title}</h4>
              <span>{t.about.timeline.uni.place}</span>
              <p>{t.about.timeline.uni.desc}</p>
            </div>
          </div>

          {/* TÉCNICO HARDWARE */}
          <div className="timeline-item">
            <div className="timeline-date"><FaTools /> {t.about.timeline.tech.date}</div>
            <div className="timeline-content">
              <h4>{t.about.timeline.tech.title}</h4>
              <span>{t.about.timeline.tech.place}</span>
              <p>{t.about.timeline.tech.desc}</p>
            </div>
          </div>

          {/* UMSS (ADMIN) */}
          <div className="timeline-item">
            <div className="timeline-date"><FaUniversity /> {t.about.timeline.admin.date}</div>
            <div className="timeline-content">
              <h4>{t.about.timeline.admin.title}</h4>
              <span>{t.about.timeline.admin.place}</span>
              <p>{t.about.timeline.admin.desc}</p>
            </div>
          </div>

          {/* GACIP */}
          <div className="timeline-item">
            <div className="timeline-date"><FaMedkit /> {t.about.timeline.gacip.date}</div>
            <div className="timeline-content">
              <h4>{t.about.timeline.gacip.title}</h4>
              <span>{t.about.timeline.gacip.place}</span>
              <p>{t.about.timeline.gacip.desc}</p>
            </div>
          </div>

          {/* PREMILITAR */}
          <div className="timeline-item">
            <div className="timeline-date"><FaFlag /> {t.about.timeline.military.date}</div>
            <div className="timeline-content">
              <h4>{t.about.timeline.military.title}</h4>
              <span>{t.about.timeline.military.place}</span>
              <p>{t.about.timeline.military.desc}</p>
            </div>
          </div>

          {/* COLEGIO */}
          <div className="timeline-item">
            <div className="timeline-date">{t.about.timeline.school.date}</div>
            <div className="timeline-content">
              <h4>{t.about.timeline.school.title}</h4>
              <span>{t.about.timeline.school.place}</span>
              <p>{t.about.timeline.school.desc}</p>
            </div>
          </div>

        </div>

        {/* 4. BOTÓN DESCARGAR CV */}
        <div className="cv-download">
          <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>
            <FaDownload style={{marginRight: '8px'}}/> {t.about.downloadCV}
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;