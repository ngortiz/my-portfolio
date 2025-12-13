import React from 'react';
import '../styles/santa.css';

type Props = { onContact?: () => void };

export default function Santa({ onContact }: Props) {
  const handleClick = () => {
    if (onContact) onContact();
    else window.location.hash = '#contacto';
  };

  return (
    <div className="santa" onClick={handleClick} role="button" aria-label="Contáctame">
      <div className="santa-body">
        <svg viewBox="0 0 140 160" className="santa-svg" aria-hidden>
          <circle cx="70" cy="58" r="26" fill="#fde68a" />
          <rect x="26" y="80" width="88" height="62" rx="18" fill="#dc2626" />
          <rect x="26" y="108" width="88" height="12" fill="#111827" />
          <rect x="60" y="106" width="20" height="18" fill="#f7f7f7" stroke="#d1d5db" />
          <circle cx="58" cy="60" r="6" fill="#0f172a" />
          <circle cx="82" cy="60" r="6" fill="#0f172a" />
          <path d="M54 72 C62 80, 78 80, 86 72" stroke="#0f172a" strokeWidth="3" fill="none" />
          <path d="M40 40 L68 30 L100 40 L90 48 L50 48 Z" fill="#f7f7f7" />
          <circle cx="68" cy="28" r="10" fill="#dc2626" />
          <circle cx="68" cy="28" r="3" fill="#f7f7f7" />
          <rect x="22" y="140" width="28" height="14" rx="4" fill="#b45309" />
          <rect x="90" y="140" width="28" height="14" rx="4" fill="#b45309" />
        </svg>
        <div className="santa-sign">
          <span>Contáctame</span>
        </div>
      </div>
    </div>
  );
}

