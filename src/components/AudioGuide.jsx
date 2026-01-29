import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import './AudioGuide.css';

const AudioGuide = ({ onConfirm, onCancel }) => {
  return (
    <div className="guide-overlay">
      <div className="guide-card">
        <button className="close-btn" onClick={onCancel}><FaTimes /></button>
        
        <h3>🎧 Sincronización de Audio</h3>
        <p className="guide-intro">
          Para que la web reaccione a tu música (Spotify/YouTube), el navegador necesita permiso especial.
        </p>

        <div className="steps-container">
          <div className="step-item">
            <span className="step-num">1</span>
            <p>Ve a la pestaña <strong>"Pantalla Completa"</strong></p>
          </div>
          
          <div className="step-item">
            <span className="step-num">2</span>
            <p>Activa la casilla <strong>"Compartir audio del sistema"</strong> (Abajo a la izquierda)</p>
          </div>

          <div className="step-item">
            <span className="step-num">3</span>
            <p>Haz clic en <strong>"Compartir"</strong></p>
          </div>
        </div>

        <button className="btn-confirm" onClick={onConfirm}>
          <FaCheckCircle /> Entendido, Iniciar
        </button>
      </div>
    </div>
  );
};

export default AudioGuide;