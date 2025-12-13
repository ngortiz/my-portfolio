import React from 'react';
import '../styles/skills-shelf.css';

type Props = {
  skills: string[];
  onSelect?: (skill: string) => void;
};

const palette: Record<string, string> = {
  React: '#2563EB',
  TypeScript: '#1D4ED8',
  JavaScript: '#D97706',
  HTML: '#B91C1C',
  CSS: '#7C3AED',
};

export default function SkillsShelf({ skills, onSelect }: Props) {
  return (
    <div className="skills-shelf" aria-label="Skills">
      <div className="snow-ground" />
      <div className="skills-row">
        {skills.map((s) => (
          <button key={s} className="gift" style={{ ['--gift-color' as any]: palette[s] ?? '#334155' }} onClick={() => onSelect?.(s)}>
            <span className="gift-ribbon-h" />
            <span className="gift-ribbon-v" />
            <span className="gift-label">{s}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
