import React from 'react';
import { motion } from 'framer-motion';
import '../styles/tree-star.css';

export default function TreeStar() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenCV = (e?: React.MouseEvent) => {
    if (isMobile) {
      // En móvil forzamos la descarga creando un link temporal
      // Quitamos target="_blank" para evitar problemas con bloqueadores de popups en móviles
      const link = document.createElement('a');
      link.href = '/CV.pdf';
      link.download = 'CV_Nidia_Ortiz.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      if (!e) {
        window.open('/CV.pdf', '_blank');
      }
    }
  };

  return (
    <motion.div
      className="tree-star-wrapper"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.5,
        type: 'spring',
        stiffness: 200
      }}
    >
      <motion.a
        href="/CV.pdf"
        {...(isMobile ? { download: "CV_Nidia_Ortiz.pdf" } : {})}
        target={isMobile ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="tree-star"
        onClick={(e) => isMobile && handleOpenCV(e)}
        whileHover={{ 
          scale: 1.2, 
          rotate: 15,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ver CV"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="star-icon">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        
        <div className="cv-text">CV</div>
      </motion.a>
      
      {/* Tooltip para Desktop */}
      <div className="star-tooltip desktop-only" onClick={() => handleOpenCV()}>Ver CV</div>

      {/* Botón explícito para Móvil */}
      <motion.button 
        className="mobile-download-btn mobile-only"
        onClick={(e) => handleOpenCV(e)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Descargar CV
      </motion.button>
    </motion.div>
  );
}
