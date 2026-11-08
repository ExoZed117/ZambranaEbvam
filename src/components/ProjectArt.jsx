import { FiArrowUpRight, FiPlus, FiRadio } from 'react-icons/fi';
import { useLanguage } from '../context/useLanguage';

// Editorial covers, deliberately not fabricated application screenshots.
const covers = [
  <div className="cover-shield" key="shield"><span>Escudo<br/>Ciudadano</span><div><span>Web</span><span>App</span><span>API</span></div></div>,
  <div className="cover-wiltech" key="wiltech"><span>Wiltech</span><span>Bolivia</span></div>,
  <div className="cover-emergency" key="panic"><FiRadio/><span>SOS</span></div>,
  <div className="cover-nursing" key="nursing"><FiPlus/><span>Univalle</span></div>,
  <div className="cover-loop" key="loop"><span>Loop</span><span>Share</span></div>,
  <div className="cover-logistics" key="kaypikani"><FiArrowUpRight/><span>Kaypikani</span></div>,
  <div className="cover-osdav" key="osdav"><span>Osdav</span><span>Corporativo</span></div>,
  <div className="cover-coffee" key="prediletta"><span>Prediletta</span><span>1825</span></div>,
];

export default function ProjectArt({ index = 0, title }) {
  const { language } = useLanguage();
  return <div className={`project-cover cover-${index}`} role="img" aria-label={`${title}. ${language === 'es' ? 'Portada editorial; captura real pendiente.' : 'Editorial cover; actual screenshot pending.'}`}>
    <div className="cover-content" aria-hidden="true">{covers[index]}</div>
    <span className="preview-pending" aria-hidden="true">{language === 'es' ? 'Captura pendiente' : 'Screenshot pending'}</span>
  </div>;
}
