import React from 'react';
import { motion } from 'framer-motion';
import '../styles/modal.css';

type Props = {
  onClose: () => void;
};

export default function SkillsModal({ onClose }: Props) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-card"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Habilidades Técnicas</h3>
        <p>Coloca aquí tus stacks, herramientas y tecnologías principales.</p>
        <ul className="skills-list">
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>CSS</li>
          <li>Framer Motion</li>
        </ul>
        <div className="modal-actions">
          <button className="close-btn" onClick={onClose}>Cerrar</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
