import React, { createContext, useState, useContext } from 'react';

const translations = {
  es: {
    navbar: {
      brand: "EBVAM ZAMBRANA",
      home: "Inicio",
      projects: "Proyectos",
      skills: "Habilidades",
      about: "Perfil"
    },
    home: {
      badge: "Disponible para trabajar",
      role: "Estudiante de Software | Desarrollador Frontend & Backend",
      description: "Transformo ideas en código funcional. Aunque mi enfoque principal es el Frontend, tengo la capacidad de trabajar en el Backend para crear soluciones completas y escalables.",
      btnPortfolio: "Ver Portafolio",
      btnAbout: "Sobre Mí",
      audioSync: "Sincronizar Audio PC",
      audioStop: "Detener Efecto"
    },
    about: {
      title: "Sobre Mí",
      bio: "Soy Ebvam Brandon, un desarrollador apasionado con un perfil multidisciplinario. Mi formación no solo abarca la ingeniería de software, sino que se complementa con experiencia en liderazgo militar y administración. Combino la disciplina táctica con la lógica de programación para resolver problemas complejos.",
      areasTitle: "Mis Áreas de Dominio",
      services: {
        frontend: {
          title: "Desarrollo Frontend",
          desc: "Creación de interfaces modernas, animaciones fluidas y experiencias de usuario atractivas usando React y CSS avanzado."
        },
        backend: {
          title: "Desarrollo Backend",
          desc: "Lógica de servidor, gestión de bases de datos y creación de APIs para que las aplicaciones funcionen correctamente."
        },
        mobile: {
          title: "Desarrollo Móvil",
          desc: "Construcción de aplicaciones para Android nativas o híbridas, llevando soluciones tecnológicas a la palma de la mano."
        }
      },
      timelineTitle: "Formación & Experiencia",
      timeline: {
        uni: {
          date: "Actualidad",
          title: "Ingeniería de Sistemas",
          place: "UNIVALLE",
          desc: "Formación avanzada en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos."
        },
        tech: {
          date: "Técnico",
          title: "Técnico en Hardware & Mantenimiento",
          place: "ING DATA COMP",
          desc: "Especialista en ensamblado, diagnóstico y reparación de computadoras de escritorio, laptops e impresoras."
        },
        admin: {
          date: "Gestión",
          title: "Administración de Empresas",
          place: "UMSS - Facultad de Economía (4 Semestres)",
          desc: "Adquisición de bases sólidas en gestión de recursos, economía y organización empresarial."
        },
        gacip: {
          date: "Voluntariado",
          title: "GACIP - Policía Boliviana",
          place: "Voluntario & Paramédico",
          desc: "Servicio a la comunidad con instrucción en primeros auxilios y respuesta ante emergencias."
        },
        military: {
          date: "Servicio Militar",
          title: "Servicio Premilitar - RI 18 Victoria CITE",
          place: "Comandante de Compañía & Paramédico de Combate",
          desc: "Desarrollo de liderazgo bajo presión, disciplina estricta y conocimientos avanzados en paramedicina táctica."
        },
        school: {
          date: "Secundaria",
          title: "Bachiller en Humanidades",
          place: "Colegio Evangélico Emanuel",
          desc: "Formación académica base."
        }
      },
      downloadCV: "Descargar Hoja de Vida"
    },
    // --- NUEVA SECCIÓN: PROYECTOS ---
    projects: {
      title: "Mi Trayectoria & Proyectos",
      subtitle: "Una colección de soluciones desarrolladas para problemas reales.",
      list: {
        shield: {
          title: "Escudo Ciudadano (Suite Integral)",
          type: "Desarrollo Móvil & Web Full Stack",
          desc: "Desarrollo individual de un ecosistema complejo de seguridad compuesto por 3 aplicaciones sincronizadas."
        },
        wiltech: {
          title: "Wiltech Bolivia",
          type: "E-commerce & Gestión",
          desc: "Plataforma de ventas y administración para servicio técnico. Sistema robusto actualmente en fase de progreso."
        },
        panic: {
          title: "Botón de Emergencia",
          type: "Prototipo IoT / Seguridad",
          desc: "Sistema de alerta rápida para apoyo policial. Implementación de lógica de servidor y respuesta inmediata."
        },
        nursing: {
          title: "Colegio de Enfermeras (Univalle)",
          type: "Sistema de Gestión Clínica",
          desc: "Plataforma digital para el control y seguimiento de expedientes de pacientes."
        },
        loop: {
          title: "LoopShare",
          type: "Red Social Académica",
          desc: "Red social diseñada exclusivamente para estudiantes para compartir conocimientos en un entorno colaborativo."
        },
        kaypikani: {
          title: "Kaypikani",
          type: "Plataforma Logística",
          desc: "'Forjando el Futuro Logístico de Bolivia'. Interfaz moderna para servicios de logística y transporte."
        },
        osdav: {
          title: "Osdav Corporativo",
          type: "Landing Page",
          desc: "Sitio web corporativo de presentación para la empresa Osdav."
        },
        prediletta: {
          title: "Cafetería Prediletta 1825",
          type: "Web Gastronómica",
          desc: "Sitio web para cafetería local, enfocada en la experiencia visual del menú."
        }
      }
    },
    skills: {
      title: "Stack Tecnológico",
      subtitle: "Lenguajes, Frameworks y Herramientas que utilizo en mi día a día.",
      categories: {
        languages: "Lenguajes de Programación",
        frameworks: "Frameworks & Entornos",
        databases: "Gestión de Datos",
        tools: "Herramientas & Gestión"
      }
    },
    footer: {
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con React & Vite."
    }
  },
  en: {
    navbar: {
      brand: "EBVAM ZAMBRANA",
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "Profile"
    },
    home: {
      badge: "Available for work",
      role: "Software Student | Frontend & Backend Developer",
      description: "I transform ideas into functional code. While my main focus is Frontend, I am capable of working on the Backend to build complete and scalable solutions.",
      btnPortfolio: "View Portfolio",
      btnAbout: "About Me",
      audioSync: "Sync PC Audio",
      audioStop: "Stop Effect"
    },
    about: {
      title: "About Me",
      bio: "I am Ebvam Brandon, a passionate developer with a multidisciplinary profile. My background not only covers software engineering but is complemented by experience in military leadership and administration. I combine tactical discipline with programming logic to solve complex problems.",
      areasTitle: "My Areas of Expertise",
      services: {
        frontend: {
          title: "Frontend Development",
          desc: "Creation of modern interfaces, fluid animations, and attractive user experiences using React and advanced CSS."
        },
        backend: {
          title: "Backend Development",
          desc: "Server logic, database management, and API creation to ensure applications function correctly."
        },
        mobile: {
          title: "Mobile Development",
          desc: "Construction of native or hybrid Android applications, bringing technological solutions to the palm of your hand."
        }
      },
      timelineTitle: "Education & Experience",
      timeline: {
        uni: {
          date: "Present",
          title: "Systems Engineering",
          place: "UNIVALLE",
          desc: "Advanced training in software development, systems architecture, and technology project management."
        },
        tech: {
          date: "Technician",
          title: "Hardware & Maintenance Technician",
          place: "ING DATA COMP",
          desc: "Specialist in assembly, diagnostics, and repair of desktop computers, laptops, and printers."
        },
        admin: {
          date: "Management",
          title: "Business Administration",
          place: "UMSS - Faculty of Economics (4 Semesters)",
          desc: "Acquisition of solid foundations in resource management, economics, and business organization."
        },
        gacip: {
          date: "Volunteering",
          title: "GACIP - Bolivian Police",
          place: "Volunteer & Paramedic",
          desc: "Community service with instruction in first aid and emergency response."
        },
        military: {
          date: "Military Service",
          title: "Pre-military Service - RI 18 Victoria CITE",
          place: "Company Commander & Combat Paramedic",
          desc: "Development of leadership under pressure, strict discipline, and advanced knowledge in tactical paramedicine."
        },
        school: {
          date: "High School",
          title: "Humanities Bachelor",
          place: "Evangelical College Emanuel",
          desc: "Basic academic training."
        }
      },
      downloadCV: "Download Resume"
    },
    // --- NEW SECTION: PROJECTS (ENGLISH) ---
    projects: {
      title: "My Career & Projects",
      subtitle: "A collection of solutions developed for real-world problems.",
      list: {
        shield: {
          title: "Citizen Shield (Integral Suite)",
          type: "Mobile & Web Full Stack Dev",
          desc: "Individual development of a complex security ecosystem composed of 3 synchronized applications."
        },
        wiltech: {
          title: "Wiltech Bolivia",
          type: "E-commerce & Management",
          desc: "Sales and administration platform for technical service. Robust system currently in progress."
        },
        panic: {
          title: "Panic Button",
          type: "IoT Prototype / Security",
          desc: "Rapid alert system for police support. Implementation of server logic and immediate response."
        },
        nursing: {
          title: "Nursing College (Univalle)",
          type: "Clinical Management System",
          desc: "Digital platform for the control and tracking of patient records."
        },
        loop: {
          title: "LoopShare",
          type: "Academic Social Network",
          desc: "Social network designed exclusively for students to share knowledge in a collaborative environment."
        },
        kaypikani: {
          title: "Kaypikani",
          type: "Logistics Platform",
          desc: "'Forging the Logistic Future of Bolivia'. Modern interface for logistics and transport services."
        },
        osdav: {
          title: "Osdav Corporate",
          type: "Landing Page",
          desc: "Corporate presentation website for the Osdav company."
        },
        prediletta: {
          title: "Prediletta 1825 Cafe",
          type: "Gastronomic Web",
          desc: "Local cafeteria website, focused on the visual experience of the menu."
        }
      }
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Languages, Frameworks, and Tools I use on a daily basis.",
      categories: {
        languages: "Programming Languages",
        frameworks: "Frameworks & Environments",
        databases: "Data Management",
        tools: "Tools & Management"
      }
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with React & Vite."
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);