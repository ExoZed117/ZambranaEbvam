# ZambranaEbvam

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El portafolio se dirige con la misma prioridad a reclutadores y equipos que buscan contratar a un desarrollador, y a clientes que necesitan proyectos web o aplicaciones.

## Product Purpose

Presentar el trabajo, las habilidades y la trayectoria de Ebvam Brandon Zambrana Via para facilitar la evaluación de su perfil y el contacto por oportunidades laborales o proyectos.

## Operating Context

- Proyecto existente en React + Vite, con navegación mediante React Router.
- Desarrollo en Windows con GitHub Desktop y Codex.
- Repositorio: https://github.com/ExoZed117/ZambranaEbvam
- Web de referencia: https://zambrana-ebvam.vercel.app/
- Rama comprobada al inicializar: `redesign/neo-cyber-2026`.

## Capabilities and Constraints

- Conservar las cuatro páginas: Inicio (`/`), Proyectos (`/proyectos`), Habilidades (`/skills`) y Sobre mí (`/sobre-mi`).
- Rediseñar el proyecto existente, conservando su contenido real y sus funciones pertinentes; no crear un sitio independiente desde cero.
- Preservar los idiomas existentes y los enlaces reales de proyectos y contacto.
- Sustituir el visualizador de audio de Inicio por una experiencia visual que no solicite permisos. El código actual captura pantalla y audio del sistema mediante `getDisplayMedia`.
- Priorizar una experiencia responsive, rápida y accesible.
- No modificar directamente `main` ni publicar cambios automáticamente.
- Trabajar por etapas y esperar la respuesta del usuario antes de avanzar a la siguiente.
- Ahorrar cupo de Codex mediante inspecciones acotadas, verificación agrupada y evitando auditorías repetidas o consultas innecesarias.
- No ejecutar Taste Skill hasta que el usuario revise su alerta de seguridad y autorice su uso.

## Brand Commitments

- Nombre del portafolio: ZambranaEbvam.
- Dirección actualizada por el usuario: Cinematic Neo-Cyber Portfolio; negro profundo y blanco, violetas luminosos y magenta discreto, imagen protagonista original, tipografía editorial y movimiento ambiental accesible. Sin copiar personajes, logos ni composiciones de las referencias.
- La definición visual implementada se conserva en DESIGN.md.

## Evidence on Hand

- `src/context/LanguageContext.jsx`: textos actuales sobre identidad, formación, experiencia, habilidades y proyectos, con traducciones.
- `src/pages/Home.jsx`: presentación y enlaces de GitHub, LinkedIn y WhatsApp.
- `src/pages/Projects.jsx`: proyectos y enlaces de repositorios.
- `src/pages/Skills.jsx` y `src/pages/About.jsx`: habilidades y trayectoria.
- `public/Zambrana.png`: recurso de imagen existente; su idoneidad visual se revisará durante el rediseño.
- No inventar experiencia, clientes, testimonios, métricas ni resultados de proyectos.

## Open Decisions

- Pendiente confirmar la vigencia del perfil profesional. El contenido actual presenta al autor como estudiante de Ingeniería de Sistemas y desarrollador con enfoque frontend y capacidad backend. Conservarlo mientras el usuario no indique cambios; no tratar su vigencia como recién confirmada.

## Product Principles

- Dar igual importancia a la evaluación profesional y a las oportunidades de proyectos con clientes.
- Mostrar trabajo y capacidades reales con claridad.
- Conservar la verdad del contenido durante el cambio visual.
- Evitar permisos de dispositivos para efectos decorativos.
- Equilibrar expresión visual, accesibilidad y rendimiento.
