import { FiCode, FiServer, FiSmartphone, FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from '../context/useLanguage';
import './About.css';

const serviceIcons = [FiCode, FiServer, FiSmartphone];
export default function About() {
  const { t, language } = useLanguage();
  return <div className="about-page page-container">
    <header className="page-heading"><h1>{t.about.title}</h1><p>Ebvam Brandon Zambrana Via</p></header>
    <section className="about-intro"><div className="identity-mark"><img src="/Zambrana.png" width="471" height="545" alt={language === 'es' ? 'Símbolo de ZambranaEbvam' : 'ZambranaEbvam symbol'}/></div><div><p className="about-bio">{t.about.bio}</p><a className="text-link" href="https://www.linkedin.com/in/zambrana-via-ebvam/" target="_blank" rel="noopener noreferrer">LinkedIn<FiArrowUpRight aria-hidden="true"/></a></div></section>
    <section className="specialties"><h2>{t.about.areasTitle}</h2><div className="services">{Object.values(t.about.services).map((service, index) => { const Icon = serviceIcons[index]; return <article key={service.title}><Icon aria-hidden="true"/><h3>{service.title}</h3><p>{service.desc}</p></article>; })}</div></section>
    <section className="career"><h2>{t.about.timelineTitle}</h2><ol>{Object.entries(t.about.timeline).map(([key, item]) => <li key={key}><span className="career-date">{item.date}</span><div><h3>{item.title}</h3><p className="career-place">{item.place}</p><p>{item.desc}</p></div></li>)}</ol></section>
    <div className="cv-status"><span>{t.about.downloadCV}</span><p>{language === 'es' ? 'Archivo todavía no disponible. Puedes contactarme por LinkedIn o WhatsApp.' : 'File not available yet. You can contact me on LinkedIn or WhatsApp.'}</p></div>
  </div>;
}
