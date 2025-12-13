import React from 'react';
import { motion } from 'framer-motion';
import '../styles/bauble.css';

type Props = {
  label: string;
  color: string;
  onClick: () => void;
  special?: boolean;
  className?: string;
  size?: number;
};

export default function Bauble({ label, color, onClick, special, className, size }: Props) {
  return (
    <motion.button
      className={`bauble ${special ? 'bauble--special' : ''} ${className ?? ''}`}
      style={{ ['--bauble-color' as any]: color, ['--size' as any]: size ? `${size}px` : undefined }}
      whileHover={{ scale: 1.12, filter: 'saturate(1.28) brightness(1.14)', boxShadow: '0 0 48px rgba(255, 205, 112, 0.75), 0 0 140px rgba(255, 205, 112, 0.50)' }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
    >
      <span className="bauble-cap" />
      <span className="bauble-label">{label}</span>
    </motion.button>
  );
}
