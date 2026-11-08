import { useEffect, useRef, useState } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';
import { useLanguage } from '../context/useLanguage';

export default function AmbientBackground({ theme }) {
  const { language } = useLanguage();
  const layer = useRef(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const element = layer.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let intersecting = false;
    const sync = () => {
      setReduced(motion.matches);
      setVisible(intersecting && !document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting;
      sync();
    });
    observer.observe(element);
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    const sections = document.querySelectorAll('.career li');
    sections.forEach(section => revealObserver.observe(section));
    document.addEventListener('visibilitychange', sync);
    motion.addEventListener('change', sync);
    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      document.removeEventListener('visibilitychange', sync);
      motion.removeEventListener('change', sync);
    };
  }, [theme]);

  return <>
    <div ref={layer} className={`ambient-layer ambient-${theme}`} data-running={visible && !paused && !reduced} aria-hidden="true">
      <div className="ambient-light light-violet" />
      <div className="ambient-light light-magenta" />
      <div className="ambient-particles" />
      {theme === 'projects' && <div className="ambient-scan" />}
      {theme === 'skills' && <svg className="ambient-connections" viewBox="0 0 1200 800" fill="none"><path d="M60 100H320L440 220H800L940 360H1140M80 600H260L420 440H700L860 600H1160M320 100V360L500 540V760"/><g><circle className="connection-node node-a" cx="440" cy="220" r="7"/><circle className="connection-node node-b" cx="700" cy="440" r="7"/><circle className="connection-node node-c" cx="320" cy="100" r="7"/></g></svg>}
    </div>
    {!reduced && <button className="motion-toggle" onClick={() => setPaused(value => !value)} aria-pressed={paused}>
      {paused ? <FiPlay aria-hidden="true"/> : <FiPause aria-hidden="true"/>}
      {language === 'es' ? (paused ? 'Activar ambiente' : 'Pausar ambiente') : (paused ? 'Play ambience' : 'Pause ambience')}
    </button>}
  </>;
}
