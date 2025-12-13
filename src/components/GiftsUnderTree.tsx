import React from 'react';
import Gift from './Gift';
import SkillsRibbon from './SkillsRibbon';
import '../styles/gifts-under-tree.css';

type GiftsUnderTreeProps = {
  skills: string[];
};

export default function GiftsUnderTree({ skills }: GiftsUnderTreeProps) {
  return (
    <div className="gifts-container">
      <SkillsRibbon />
      <div className="gifts-grid">
        {skills.map((skill, index) => (
          <Gift key={skill} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}
