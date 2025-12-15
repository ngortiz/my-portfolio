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
      // En móvil forzamos la descarga
      const link = document.createElement('a');
      link.href = '/CV.pdf';
      link.download = 'CV_Nidia_Ortiz.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // En escritorio abrimos en nueva pestaña (comportamiento por defecto del enlace)
      // No es necesario hacer nada extra si es un click en el enlace <a>
      if (!e) {
        // Si viene del tooltip (que no es un enlace), abrimos ventana
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
        target="_blank"
        rel="noopener noreferrer"
        className="tree-star"
        onClick={(e) => isMobile && handleOpenCV(e)} // En móvil interceptamos para asegurar descarga
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
      
      <div className="star-tooltip" onClick={() => handleOpenCV()}>Ver CV</div>
    </motion.div>
  );
}
