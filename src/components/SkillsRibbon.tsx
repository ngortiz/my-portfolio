import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills-ribbon.css';

export default function SkillsRibbon() {
  return (
    <motion.div
      className="skills-ribbon-wrapper"
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.8,
        type: 'spring',
        stiffness: 150
      }}
    >
      <div className="skills-ribbon">
        <div className="ribbon-bow">
          <div className="bow-left"></div>
          <div className="bow-right"></div>
          <div className="bow-center"></div>
        </div>
        <div className="ribbon-text">My Skills</div>
      </div>
    </motion.div>
  );
}
