import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor'; // <--- IMPORTANTE

// Páginas
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills'; 

// Contexto
import { LanguageProvider } from './context/LanguageContext'; 
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app-wrapper">
        
        {/* El Cursor va aquí, para que flote sobre todo lo demás */}
        <CustomCursor />

        <Navbar />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/skills" element={<Skills />} /> 
          </Routes>
        </div>
        
        <Footer />
        
      </div>
    </LanguageProvider>
  );
}

export default App;