import React from 'react';
import '../styles/sleigh.css';

type Props = {
  skills: string[];
};

const colors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F59E0B',
  HTML: '#E11D48',
  CSS: '#7C3AED',
  NestJS: '#E11D48',
  TypeORM: '#0EA5E9',
  PostgreSQL: '#1D4ED8',
  AWS: '#F59E0B',
};

const ribbons: Record<string, string> = {
  TypeScript: '#ffffff',
  JavaScript: '#fff6a6',
  HTML: '#fca5a5',
  CSS: '#c4b5fd',
  NestJS: '#fecaca',
  TypeORM: '#bae6fd',
  PostgreSQL: '#93c5fd',
  AWS: '#fde68a',
};

const chipColors: Record<string, string> = {
  React: '#bae6fd',
  TypeScript: '#bfdbfe',
  JavaScript: '#fde68a',
  HTML: '#fbcfe8',
  CSS: '#e9d5ff',
  NestJS: '#fecaca',
  TypeORM: '#bae6fd',
  PostgreSQL: '#bfdbfe',
  AWS: '#fde68a',
};

export default function Sleigh({ skills }: Props) {
  return (
    <div className="sleigh" aria-label="Mis habilidades">
      <div className="trail">
        {skills.map((s, i) => (
          <div key={s} className="trail-gift" style={{ ['--i' as any]: i, ['--ribbon-color' as any]: ribbons[s] }}>
            <div className="gift" style={{ ['--gift-color' as any]: colors[s] }}>
              <span className="gift-ribbon-h" />
              <span className="gift-ribbon-v" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
