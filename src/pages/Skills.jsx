import React from 'react';
// Importación de iconos
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaReact, FaNodeJs,
  FaLaravel, FaFigma, FaTrello, FaGithub, FaTerminal
} from 'react-icons/fa';
import {
  SiTypescript, SiKotlin, SiFlutter, SiAndroidstudio, SiVite,
  SiCodeigniter, SiDotnet, SiMiro, SiNotion, SiCanva, SiMysql,
  SiPhpmyadmin, SiOracle, SiMongodb, SiSupabase
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// Estilos y contexto de idioma
import './Skills.css';

import { useLanguage } from '../context/useLanguage'; // El cerebro de traducción

function Skills() {
  // Extraemos las traducciones
  const { t, language } = useLanguage();

  // --- 1. LENGUAJES DE PROGRAMACIÓN ---
  const languages = [
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Kotlin", icon: <SiKotlin /> },
  ];

  // --- 2. FRAMEWORKS & ENTORNOS ---
  const frameworks = [
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "React + Vite", icon: <SiVite /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "ASP.NET Core", icon: <SiDotnet /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "CodeIgniter 4", icon: <SiCodeigniter /> },
  ];

  // --- 3. BASES DE DATOS ---
  const databases = [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "phpMyAdmin", icon: <SiPhpmyadmin /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL Plus", icon: <FaTerminal /> },
    { name: "Oracle DB", icon: <SiOracle /> },
  ];

  // --- 4. HERRAMIENTAS & GESTIÓN ---
  const tools = [
    { name: "GitHub Desktop", icon: <FaGithub /> },
    { name: "Trello", icon: <FaTrello /> },
    { name: "Notion", icon: <SiNotion /> },
    { name: "Miro", icon: <SiMiro /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  const groups = { languages, frameworks, databases, tools };
  return <div className="skills-page page-container">
    <header className="page-heading"><h1>{t.skills.title}</h1><p>{t.skills.subtitle}</p></header>
    <div className="skills-intro"><span aria-hidden="true">&lt;/&gt;</span><p>{language === 'es' ? 'De la interfaz a la lógica. Las herramientas detrás de mi trabajo.' : 'From interface to logic. The tools behind my work.'}</p></div>
    {Object.entries(groups).map(([key, skills]) => <section className="skill-group" key={key} aria-labelledby={`group-${key}`}>
      <h2 id={`group-${key}`}>{t.skills.categories[key]}</h2>
      <ul className="skill-list">{skills.map(skill => <li key={skill.name}><span aria-hidden="true">{skill.icon}</span>{skill.name}</li>)}</ul>
    </section>)}
  </div>;
}
export default Skills;
