import React from 'react';
// Importación de iconos
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaReact, FaNodeJs, 
  FaLaravel, FaFigma, FaTrello, FaGithub, FaTerminal, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiKotlin, SiFlutter, SiAndroidstudio, SiVite, 
  SiCodeigniter, SiDotnet, SiMiro, SiNotion, SiCanva, SiMysql, 
  SiPhpmyadmin, SiOracle, SiMongodb, SiSupabase 
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb"; 

// Importación de estilos y componentes
import './Skills.css';
import WaterBackground from '../components/WaterBackground'; // El fondo de lluvia
import { useLanguage } from '../context/LanguageContext'; // El cerebro de traducción

function Skills() {
  // Extraemos las traducciones
  const { t } = useLanguage();

  // --- 1. LENGUAJES DE PROGRAMACIÓN ---
  const languages = [
    { name: "C#", level: 85, color: "#9b4993", icon: <TbBrandCSharp /> },
    { name: "JavaScript", level: 90, color: "#f7df1e", icon: <FaJs /> },
    { name: "TypeScript", level: 75, color: "#3178c6", icon: <SiTypescript /> },
    { name: "Python", level: 80, color: "#3776ab", icon: <FaPython /> },
    { name: "HTML (Estructura)", level: 95, color: "#e34f26", icon: <FaHtml5 /> },
    { name: "CSS (Estilos)", level: 90, color: "#2965f1", icon: <FaCss3Alt /> },
    { name: "PHP", level: 35, color: "#777bb4", icon: <FaPhp /> },   
    { name: "Kotlin", level: 30, color: "#7f52ff", icon: <SiKotlin /> }, 
  ];

  // --- 2. FRAMEWORKS & ENTORNOS ---
  const frameworks = [
    { name: "Android Studio", level: 90, color: "#3DDC84", icon: <SiAndroidstudio /> },
    { name: "React + Vite", level: 85, color: "#61DAFB", icon: <SiVite /> },
    { name: "React Native", level: 70, color: "#61DAFB", icon: <FaReact /> },
    { name: "Flutter", level: 60, color: "#02569B", icon: <SiFlutter /> },
    { name: "Node.js", level: 65, color: "#339933", icon: <FaNodeJs /> },
    { name: "ASP.NET Core", level: 82, color: "#512bd4", icon: <SiDotnet /> },
    { name: "Laravel", level: 50, color: "#ff2d20", icon: <FaLaravel /> },
    { name: "CodeIgniter 4", level: 55, color: "#ef4223", icon: <SiCodeigniter /> },
  ];

  // --- 3. BASES DE DATOS ---
  const databases = [
    { name: "MySQL", level: 85, color: "#00758f", icon: <SiMysql /> },
    { name: "phpMyAdmin", level: 90, color: "#6c78af", icon: <SiPhpmyadmin /> },
    { name: "Supabase", level: 75, color: "#3ecf8e", icon: <SiSupabase /> },
    { name: "MongoDB", level: 65, color: "#47A248", icon: <SiMongodb /> },
    { name: "SQL Plus", level: 60, color: "#f80000", icon: <FaTerminal /> }, 
    { name: "Oracle DB", level: 30, color: "#ea1b22", icon: <SiOracle /> },   
  ];

  // --- 4. HERRAMIENTAS & GESTIÓN ---
  const tools = [
    { name: "GitHub Desktop", level: 85, color: "#181717", icon: <FaGithub /> },
    { name: "Trello", level: 90, color: "#0079bf", icon: <FaTrello /> },
    { name: "Notion", level: 85, color: "#000000", icon: <SiNotion /> },
    { name: "Miro", level: 80, color: "#050038", icon: <SiMiro /> },
    { name: "Canva", level: 90, color: "#00c4cc", icon: <SiCanva /> },
    { name: "Figma", level: 30, color: "#f24e1e", icon: <FaFigma /> },
  ];

  // Componente interno para las barras de progreso
  const SkillBar = ({ skill }) => (
    <div className="skill-card">
      <div className="skill-info">
        <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span className="skill-icon" style={{color: skill.color}}>{skill.icon}</span> 
          {skill.name}
        </span>
        <span style={{color: '#94a3b8', fontSize: '0.9rem'}}>{skill.level}%</span>
      </div>
      <div className="progress-bar-bg">
        <div 
          className="progress-bar-fill" 
          style={{ 
            width: `${skill.level}%`, 
            backgroundColor: skill.color,
            boxShadow: `0 0 12px ${skill.color}60` 
          }}
        ></div>
      </div>
    </div>
  );

  return (
    // Importante: position relative para contener el fondo si usamos absolute,
    // pero como el fondo es fixed, esto sirve para mantener estructura.
    <div className="skills-container" style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* 1. EL FONDO DE LLUVIA (Ondas en el agua) */}
      <WaterBackground />

      {/* 2. EL CONTENIDO (Con z-index para estar encima del agua) */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        <div className="skills-header">
          <h2>{t.skills.title}</h2>
          <p>{t.skills.subtitle}</p>
        </div>

        {/* --- LENGUAJES --- */}
        <div className="skills-category">
          <h3 className="category-title">💻 {t.skills.categories.languages}</h3>
          <div className="skills-grid">
            {languages.map((skill, index) => <SkillBar key={index} skill={skill} />)}
          </div>
        </div>

        {/* --- FRAMEWORKS --- */}
        <div className="skills-category">
          <h3 className="category-title">⚡ {t.skills.categories.frameworks}</h3>
          <div className="skills-grid">
            {frameworks.map((skill, index) => <SkillBar key={index} skill={skill} />)}
          </div>
        </div>

        {/* --- BASES DE DATOS --- */}
        <div className="skills-category">
          <h3 className="category-title"><FaDatabase style={{color: '#00758f'}} /> {t.skills.categories.databases}</h3>
          <div className="skills-grid">
            {databases.map((skill, index) => <SkillBar key={index} skill={skill} />)}
          </div>
        </div>

        {/* --- HERRAMIENTAS --- */}
        <div className="skills-category">
          <h3 className="category-title">🛠️ {t.skills.categories.tools}</h3>
          <div className="skills-grid">
            {tools.map((skill, index) => <SkillBar key={index} skill={skill} />)}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;