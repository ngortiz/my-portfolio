import React from 'react';
import { motion } from 'framer-motion';
import '../styles/tree-star.css';

export default function TreeStar() {
  const handleOpenCV = () => {
    window.open('/CV.pdf', '_blank');
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
        target="_blank"
        rel="noopener noreferrer"
        className="tree-star"
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
      
      <div className="star-tooltip" onClick={handleOpenCV}>Ver CV</div>
    </motion.div>
  );
}
