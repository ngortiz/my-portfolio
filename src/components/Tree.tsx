import React from 'react';
import { motion } from 'framer-motion';
import Bauble from './Bauble';
import TreeStar from './TreeStar';
import fallbackTree from '../assets/christmas-tree-placeholder.png';
import '../styles/tree.css';
import '../styles/skills-shelf.css';

type Project = { label: string; color: string; url: string };

type Props = {
  imageSrc?: string;
  baubles?: Project[];
  skillsBauble?: { label: string; color: string; onClick: () => void };
  skills?: string[];
};

const row1: Array<{ top: string; left: string }> = [
  { top: '30%', left: '50%' },
];
const row2: Array<{ top: string; left: string }> = [
  { top: '44%', left: '40%' },
  { top: '44%', left: '60%' },
];
const row3Skills: Array<{ top: string; left: string }> = [
  { top: '56%', left: '50%' },
];
const row4: Array<{ top: string; left: string }> = [
  { top: '74%', left: '42%' },
  { top: '74%', left: '58%' },
];

const skillColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F59E0B',
  HTML: '#E11D48',
  CSS: '#7C3AED',
  NestJS: '#E11D48',
  TypeORM: '#0EA5E9',
  PostgreSQL: '#1D4ED8',
  AWS: '#F59E0B',
};

const ribbonColors: Record<string, string> = {
  TypeScript: '#ffffff',
  JavaScript: '#fff6a6',
  HTML: '#fca5a5',
  CSS: '#c4b5fd',
  NestJS: '#fecaca',
  TypeORM: '#bae6fd',
  PostgreSQL: '#93c5fd',
  AWS: '#fde68a',
};

const giftPositions: Array<{ top: string; left: string }> = [];

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case 'TypeScript':
      return (<svg className="gift-icon" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1f2937"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Cinzel">TS</text></svg>);
    case 'JavaScript':
      return (<svg className="gift-icon" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#111827"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Cinzel">JS</text></svg>);
    case 'HTML':
      return (<svg className="gift-icon" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0f172a"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="Cinzel">HTML</text></svg>);
    case 'CSS':
      return (<svg className="gift-icon" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0f172a"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="Cinzel">CSS</text></svg>);
    case 'NestJS':
      return (<svg className="gift-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#7f1d1d"/><path d="M6 8 C10 5, 14 5, 18 8 C14 10, 10 10, 6 8 Z" fill="#fca5a5"/></svg>);
    case 'TypeORM':
      return (<svg className="gift-icon" viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="8" ry="3" fill="#0ea5e9"/><rect x="4" y="7" width="16" height="9" fill="#0284c7"/><ellipse cx="12" cy="16" rx="8" ry="3" fill="#0ea5e9"/></svg>);
    case 'PostgreSQL':
      return (<svg className="gift-icon" viewBox="0 0 24 24"><path d="M12 3 C7 3, 6 8, 6 11 C6 16, 9 17, 12 17 C15 17, 18 16, 18 11 C18 8, 17 3, 12 3 Z" fill="#1d4ed8"/><circle cx="9" cy="9" r="1.5" fill="#fff"/><circle cx="15" cy="9" r="1.5" fill="#fff"/></svg>);
    case 'AWS':
      return (<svg className="gift-icon" viewBox="0 0 24 24"><path d="M3 15 C6 12, 18 12, 21 15" stroke="#f59e0b" strokeWidth="2" fill="none"/><ellipse cx="12" cy="9" rx="7" ry="3.5" fill="#f59e0b"/></svg>);
    default:
      return null;
  }
}

export default function Tree({ imageSrc, baubles = [], skillsBauble, skills = [] }: Props) {
  const [src, setSrc] = React.useState<string>(imageSrc ?? fallbackTree);
  const [activeGift, setActiveGift] = React.useState<string | null>(null);
  React.useEffect(() => { setSrc(imageSrc ?? fallbackTree); }, [imageSrc]);
  return (
    <div className="tree-wrapper">
      <motion.div
        className="tree"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <TreeStar />
        <img className="tree-image" src={src} alt="Árbol de Navidad" onError={() => setSrc(fallbackTree)} draggable={false} />

        

        <div className="tree-baubles">
          {baubles[0] && (
            <div className="bauble-slot" style={row1[0]}>
              <Bauble label={baubles[0].label} color={baubles[0].color} onClick={() => window.open(baubles[0].url, '_blank')} className="bauble--on-tree" size={76} />
            </div>
          )}

          {baubles.slice(1, 3).map((b, i) => (
            <div key={b.label} className="bauble-slot" style={row2[i]}>
              <Bauble label={b.label} color={b.color} onClick={() => window.open(b.url, '_blank')} className="bauble--on-tree" size={76} />
            </div>
          ))}

          {skillsBauble && (
            <div className="bauble-slot" style={row3Skills[0]}>
              <Bauble label={skillsBauble.label} color={skillsBauble.color} onClick={skillsBauble.onClick} className="bauble--on-tree bauble--special" size={76} />
            </div>
          )}

          {baubles.slice(3, 5).map((b, i) => (
            <div key={b.label} className="bauble-slot" style={row4[i]}>
              <Bauble label={b.label} color={b.color} onClick={() => window.open(b.url, '_blank')} className="bauble--on-tree" size={74} />
            </div>
          ))}
        </div>

        <div className="tree-base">
          <div className="tree-trunk" />
          <div className="tree-stand" />
        </div>
      </motion.div>
    </div>
  );
}
