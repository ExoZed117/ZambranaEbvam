import React, { useMemo } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  // Generamos 60 partículas
  const particles = useMemo(() => {
    return new Array(60).fill(0).map((_, i) => ({
      id: i,
      left: Math.random() * 100,      // Posición horizontal
      top: Math.random() * 100,       // Posición vertical inicial
      size: 1 + Math.random() * 3,    // Tamaño variable (1px a 4px)
      duration: 10 + Math.random() * 20, // Se mueven MUY lento (10s a 30s)
      delay: Math.random() * -30,     // Empiezan en momentos distintos (negativo para que ya estén en pantalla)
      opacity: 0.1 + Math.random() * 0.5 // Opacidad variable
    }));
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default ParticlesBackground;