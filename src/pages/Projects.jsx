import React from 'react';
import './Projects.css';
import { 
  FaMobileAlt, FaGlobe, FaDatabase, FaShieldAlt, 
  FaCoffee, FaTruck, FaUserNurse, FaUsers, FaGithub, FaExternalLinkAlt 
} from 'react-icons/fa';

// 1. IMPORTAR EL HOOK DE IDIOMA
import { useLanguage } from '../context/LanguageContext';

// 2. IMPORTAR EL FONDO
import GlobalBackground from '../components/ProjectBackground'; 

const Projects = () => {
  const { t } = useLanguage();

  const projectList = [
    {
      title: t.projects.list.shield.title,
      type: t.projects.list.shield.type,
      stack: "Android Studio / Web / Base de Datos",
      desc: t.projects.list.shield.desc,
      icon: <FaShieldAlt />,
      highlight: true,
      links: [
        { label: "Panel Web", url: "https://github.com/Zambrana-Ebvam/PoliciaBolivia.git", icon: <FaGithub /> },
        { label: "App Policial", url: "https://github.com/Zambrana-Ebvam/PoliciaBolivia-App.git", icon: <FaGithub /> },
        { label: "Backend API", url: "https://github.com/Zambrana-Ebvam/PolBol-BackEnd.git", icon: <FaDatabase /> }
      ]
    },
    {
      title: t.projects.list.wiltech.title,
      type: t.projects.list.wiltech.type,
      stack: "Frontend / Backend / Base de Datos",
      desc: t.projects.list.wiltech.desc,
      icon: <FaMobileAlt />,
      links: [
        { label: "Repositorio", url: "https://github.com/ExoZed117/Wiltech-Web---Front.git", icon: <FaGithub /> }
      ]
    },
    {
      title: t.projects.list.panic.title,
      type: t.projects.list.panic.type,
      stack: "Full Stack (Front + Back)",
      desc: t.projects.list.panic.desc,
      icon: <FaDatabase />,
      links: [] 
    },
    {
      title: t.projects.list.nursing.title,
      type: t.projects.list.nursing.type,
      stack: "Full Stack + Base de Datos",
      desc: t.projects.list.nursing.desc,
      icon: <FaUserNurse />,
      links: [
        { label: "Repositorio", url: "https://github.com/Zambrana-Ebvam/PRI-24-COL-ENFERMERIA.git", icon: <FaGithub /> }
      ]
    },
    {
      title: t.projects.list.loop.title,
      type: t.projects.list.loop.type,
      stack: "Frontend Development",
      desc: t.projects.list.loop.desc,
      icon: <FaUsers />,
      links: [
        { label: "Repositorio", url: "https://github.com/Zambrana-Ebvam/PR-25-LoopShare.git", icon: <FaGithub /> }
      ]
    },
    {
      title: t.projects.list.kaypikani.title,
      type: t.projects.list.kaypikani.type,
      stack: "Frontend Development",
      desc: t.projects.list.kaypikani.desc,
      icon: <FaTruck />,
      links: [
        { label: "Visitar Web", url: "https://kaypikani.com", icon: <FaExternalLinkAlt /> }
      ]
    },
    {
      title: t.projects.list.osdav.title,
      type: t.projects.list.osdav.type,
      stack: "Frontend",
      desc: t.projects.list.osdav.desc,
      icon: <FaGlobe />,
      links: [
        { label: "Repositorio", url: "https://github.com/elobli/Pagina-Osdav.git", icon: <FaGithub /> }
      ]
    },
    {
      title: t.projects.list.prediletta.title,
      type: t.projects.list.prediletta.type,
      stack: "Frontend / UI Design",
      desc: t.projects.list.prediletta.desc,
      icon: <FaCoffee />,
      links: [
        { label: "Repositorio", url: "https://github.com/ExoZed117/Prediletta.git", icon: <FaGithub /> }
      ]
    }
  ];

  return (
    <div className="projects-container page-container" style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* Fondo Global (Solo visible en esta página) */}
      <GlobalBackground />

      {/* Contenedor del contenido con z-index */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        <div className="projects-header">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.subtitle}</p>
        </div>

        <div className="timeline-wrapper">
          {projectList.map((proj, index) => (
            <div 
              key={index} 
              className={`timeline-card ${proj.highlight ? 'highlight-card' : ''}`}
            >
              <div className="timeline-dot"></div>
              
              <div className="card-icon-header">
                <div className="p-icon">{proj.icon}</div>
                <span className="p-type">{proj.type}</span>
              </div>
              
              <h3>{proj.title}</h3>
              <span className="p-stack">{proj.stack}</span>
              <p className="p-desc">{proj.desc}</p>

              {proj.links && proj.links.length > 0 && (
                <div className="card-links">
                  {proj.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-btn"
                    >
                      {link.icon} {link.label}
                    </a>
                  ))}
                </div>
              )}

            </div>
          ))}
          <div className="timeline-end-dot"></div>
        </div>

      </div>
    </div>
  );
};

export default Projects;