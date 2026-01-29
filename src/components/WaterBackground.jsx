import React, { useMemo } from 'react';
import './WaterBackground.css';

const WaterBackground = () => {

  const drops = useMemo(() => {
    return new Array(60).fill(0).map((_, i) => ({
      id: i,
      left: Math.random() * 100,     
      top: Math.random() * 100,      
      delay: Math.random() * 10,      
      duration: 3 + Math.random() * 3, 
      scale: 0.2 + Math.random() * 0.8 
    }));
  }, []);

  return (
    <div className="water-container-realistic">
      {/* Luz de luna/horizonte sutil al fondo */}
      <div className="horizon-glow"></div> 
      
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="rain-ripple"
          style={{
            left: `${drop.left}%`,
            top: `${drop.top}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            // Pasamos la escala como variable para no sobreescribir la perspectiva en CSS
            '--scale': drop.scale 
          }}
        >
          {/* El núcleo del impacto (la gotita saltando) */}
          <div className="splash-core"></div>
        </div>
      ))}
    </div>
  );
};

export default WaterBackground;