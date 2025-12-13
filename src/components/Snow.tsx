import React from 'react';
import '../styles/snow.css';

// Generate 150 snowflakes for a fuller effect
const snowflakes = Array.from({ length: 150 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 8 + Math.random() * 12,
}));

export default function Snow() {
  return (
    <div className="snow-layer" aria-hidden>
      {snowflakes.map(flake => (
        <span
          key={flake.id}
          className="snow"
          style={{ 
            left: `${flake.left}%`, 
            animationDelay: `${flake.delay}s`, 
            animationDuration: `${flake.duration}s`
          }}
        />
      ))}
    </div>
  );
}
