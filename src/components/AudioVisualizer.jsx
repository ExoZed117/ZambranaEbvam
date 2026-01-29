import React, { useEffect, useRef } from 'react';
import './AudioVisualizer.css';

const AudioVisualizer = ({ isActive, setIsActive }) => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      startSystemAudio();
    } else {
      stopVisualizer();
    }

    // Limpieza al salir
    return () => {
      stopVisualizer();
    };
  }, [isActive]);

  const startSystemAudio = async () => {
    try {
      // 1. Pedimos capturar audio del sistema (Truco: Pedir video + audio)
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true // IMPORTANTE: Esto habilita la casilla "Compartir audio del sistema"
      });

      streamRef.current = stream;

      // Si el usuario deja de compartir desde la barra del navegador, apagamos el botón
      stream.getVideoTracks()[0].onended = () => {
        if (setIsActive) setIsActive(false);
      };

      // 2. Crear Contexto de Audio
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      // 3. Crear Analizador
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256; // 128 barras
      analyserRef.current.smoothingTimeConstant = 0.85; // Suavizado para que no parpadee feo

      // 4. Conectar el audio capturado al analizador
      // Verificamos si nos dieron audio
      if (stream.getAudioTracks().length > 0) {
        sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
        sourceRef.current.connect(analyserRef.current);
        // NO conectamos a destination (altavoces) para evitar eco/feedback
        
        draw();
      } else {
        alert("⚠️ No activaste la casilla 'Compartir audio del sistema'. Inténtalo de nuevo.");
        stopVisualizer();
        if (setIsActive) setIsActive(false);
      }

    } catch (err) {
      console.log("Sincronización cancelada por el usuario.");
      if (setIsActive) setIsActive(false);
    }
  };

  const stopVisualizer = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    
    // Detener tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }

    // Limpiar Canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas || !analyserRef.current) return;

    const ctx = canvas.getContext('2d');
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const renderFrame = () => {
      // Si se desactivó, paramos
      if (!streamRef.current || !streamRef.current.active) return;

      animationRef.current = requestAnimationFrame(renderFrame);
      analyserRef.current.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujamos las barras
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        // Multiplicador de altura
        const barHeight = dataArray[i] * 2.0;

        // Estilo: Blanco semi-transparente
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 2;
      }
    };

    renderFrame();
  };

  return <canvas ref={canvasRef} className="audio-canvas" />;
};

export default AudioVisualizer;