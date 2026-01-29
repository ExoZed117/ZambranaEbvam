import React from 'react';
import './ProjectBackground.css';

const ProjectBackground = () => {
  // Creamos un array de 15 líneas
  const lines = new Array(15).fill(0);

  return (
    <div className="background-effect-container">
      {lines.map((_, index) => {
        // Generamos valores aleatorios para que no se vean repetitivas
        const randomLeft = Math.floor(Math.random() * 95); // Posición horizontal (0-95%)
        const randomDelay = Math.random() * 5;             // Retraso (0-5s)
        const randomDuration = 3 + Math.random() * 4;      // Duración (3-7s)

        return (
          <div 
            key={index} 
            className="light-trail"
            style={{
              left: `${randomLeft}%`,
              animationDelay: `${randomDelay}s`,
              animationDuration: `${randomDuration}s`
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ProjectBackground;