import React from 'react';
import './Projects.css';
import {
  FaMobileAlt, FaGlobe, FaDatabase, FaShieldAlt,
  FaCoffee, FaTruck, FaUserNurse, FaUsers, FaGithub, FaExternalLinkAlt
} from 'react-icons/fa';

// 1. IMPORTAR EL HOOK DE IDIOMA
import { useLanguage } from '../context/useLanguage';

import ProjectArt from '../components/ProjectArt';

const Projects = () => {
  const { t, language } = useLanguage();

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

  const labels = { 'Panel Web': 'Web dashboard', 'App Policial': 'Police app', 'Repositorio': 'Repository', 'Visitar Web': 'Visit website' };
  return <div className="projects-page page-container">
    <header className="page-heading"><h1>{t.projects.title}</h1><p>{t.projects.subtitle}</p></header>
    <div className="project-gallery">{projectList.map((project, index) => <article className={`project-entry ${index === 0 ? 'featured-project' : ''}`} key={project.title}>
      <ProjectArt index={index} title={project.title} />
      <div className="project-details"><p className="project-type">{project.type}</p><h2>{project.title}</h2><p>{project.desc}</p>
        <p className="project-stack">{language === 'en' ? project.stack.replaceAll('Base de Datos', 'Database') : project.stack}</p>
        <div className="project-links">{project.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.icon}<span>{language === 'en' ? labels[link.label] || link.label : link.label}</span><FaExternalLinkAlt aria-hidden="true" /></a>)}</div>
      </div>
    </article>)}</div>
  </div>;
};
export default Projects;
