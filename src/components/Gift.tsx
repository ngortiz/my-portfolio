import React from 'react';
import { motion } from 'framer-motion';
import '../styles/gift.css';

type GiftProps = {
  skill: string;
  index: number;
};

const skillIcons: Record<string, JSX.Element> = {
  React: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(120 12 12)" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect width="22" height="22" x="1" y="1" rx="3" fill="currentColor" />
      <text x="12" y="17" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">TS</text>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect width="22" height="22" x="1" y="1" rx="3" fill="currentColor" />
      <text x="12" y="17" textAnchor="middle" fill="#000" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">JS</text>
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 3L5.5 20L12 22L18.5 20L19.5 3H4.5ZM16.5 8H8L8.2 10.5H16.3L15.8 16L12 17L8.2 16L8 13.5H10L10.1 14.8L12 15.3L13.9 14.8L14.1 12.5H7.8L7.3 6.5H16.7L16.5 8Z"/>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 3L5.5 20L12 22L18.5 20L19.5 3H4.5ZM16 8.5L15.5 14L12 15.5L8.5 14L8.3 11.5H10.3L10.4 13L12 13.5L13.6 13L13.8 11H8L7.5 6.5H16.5L16.3 8.5H10L10.2 10H16L16 8.5Z"/>
    </svg>
  ),
  NestJS: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 4C14.5 4 13.8 4.3 13.2 4.8C12.8 5.1 12.5 5.5 12.3 6C12.2 6.3 12.1 6.6 12.1 7C12.1 7.8 12.4 8.5 12.9 9C13.4 9.5 14 9.8 14.7 9.9V16C14.7 16.8 14.4 17.5 13.9 18C13.4 18.5 12.7 18.8 12 18.8C11.3 18.8 10.6 18.5 10.1 18C9.6 17.5 9.3 16.8 9.3 16V12C9.3 11.2 9 10.5 8.5 10C8 9.5 7.3 9.2 6.6 9.2C5.9 9.2 5.2 9.5 4.7 10C4.2 10.5 3.9 11.2 3.9 12V16C3.9 17.6 4.5 19 5.6 20.1C6.7 21.2 8.1 21.8 9.7 21.8C11.3 21.8 12.7 21.2 13.8 20.1C14.9 19 15.5 17.6 15.5 16V7C15.5 6.7 15.6 6.4 15.8 6.2C16 6 16.3 5.9 16.6 5.9C16.9 5.9 17.2 6 17.4 6.2C17.6 6.4 17.7 6.7 17.7 7V11H19.5V7C19.5 5.9 19.1 4.9 18.4 4.2C17.7 3.5 16.7 3.1 15.6 3.1L15.5 4Z"/>
    </svg>
  ),
  TypeORM: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="7" rx="9" ry="3.5" />
      <ellipse cx="12" cy="7" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 7V12C3 13.9 7 15.5 12 15.5C17 15.5 21 13.9 21 12V7" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 12V17C3 18.9 7 20.5 12 20.5C17 20.5 21 18.9 21 17V12" fill="none" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C8.5 3 6.5 5 6 7.5C5.8 8.5 5.8 9.5 6 10.5C6.2 11.5 6.6 12.3 7.2 13C7.8 13.7 8.6 14.2 9.5 14.5C9.3 15.2 9.2 15.9 9.2 16.6C9.2 17.3 9.3 18 9.5 18.7C9.7 19.4 10 20 10.4 20.5C10.8 21 11.3 21.3 12 21.3C12.7 21.3 13.2 21 13.6 20.5C14 20 14.3 19.4 14.5 18.7C14.7 18 14.8 17.3 14.8 16.6C14.8 15.9 14.7 15.2 14.5 14.5C15.4 14.2 16.2 13.7 16.8 13C17.4 12.3 17.8 11.5 18 10.5C18.2 9.5 18.2 8.5 18 7.5C17.5 5 15.5 3 12 3ZM10 8C10 7.4 10.4 7 11 7C11.6 7 12 7.4 12 8C12 8.6 11.6 9 11 9C10.4 9 10 8.6 10 8ZM14 8C14 7.4 14.4 7 15 7C15.6 7 16 7.4 16 8C16 8.6 15.6 9 15 9C14.4 9 14 8.6 14 8Z"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 14L12 10L18 14M6 14V18L12 22L18 18V14M6 14L12 18L18 14"/>
      <path d="M12 2L6 6L12 10L18 6L12 2Z"/>
      <path d="M6 6V10L12 14L18 10V6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
};

const skillColors: Record<string, { box: string; ribbon: string }> = {
  React: { box: '#61DAFB', ribbon: '#0D2B3E' },
  TypeScript: { box: '#3178C6', ribbon: '#1A4D7A' },
  JavaScript: { box: '#F7DF1E', ribbon: '#8B7500' },
  HTML: { box: '#E34F26', ribbon: '#8B2500' },
  CSS: { box: '#1572B6', ribbon: '#0A3D5C' },
  NestJS: { box: '#E0234E', ribbon: '#8B0A26' },
  TypeORM: { box: '#FE0902', ribbon: '#8B0000' },
  PostgreSQL: { box: '#336791', ribbon: '#1A3449' },
  AWS: { box: '#FF9900', ribbon: '#8B5A00' },
};

export default function Gift({ skill, index }: GiftProps) {
  const colors = skillColors[skill] || { box: '#C41E3A', ribbon: '#8B0000' };
  const icon = skillIcons[skill];

  return (
    <motion.div
      className="gift-wrapper"
      initial={{ opacity: 0, y: -20, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        y: -8, 
        rotateY: 10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="gift-box" style={{ '--box-color': colors.box } as React.CSSProperties}>
        <div className="gift-top">
          <div className="gift-bow" style={{ '--ribbon-color': colors.ribbon } as React.CSSProperties} />
        </div>
        <div className="gift-body">
          <div className="gift-ribbon-h" style={{ '--ribbon-color': colors.ribbon } as React.CSSProperties} />
          <div className="gift-ribbon-v" style={{ '--ribbon-color': colors.ribbon } as React.CSSProperties} />
          <div className="gift-icon" style={{ color: colors.ribbon }}>
            {icon}
          </div>
        </div>
        <div className="gift-shadow" />
      </div>
      <div className="gift-label">{skill}</div>
    </motion.div>
  );
}
