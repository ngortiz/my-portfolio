import React from 'react';
import '../styles/music.css';

export default function MusicPlayer() {
  const [playing, setPlaying] = React.useState(false);
  const src = 'https://www.youtube.com/embed/99An68Ek6nU?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=99An68Ek6nU';
  return (
    <div className="music-player">
      <button className={`music-btn ${playing ? 'on' : ''}`} onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pausar música' : 'Reproducir música'}>
        {playing ? '⏸ Música' : '▶ Música'}
      </button>
      {playing && (
        <iframe className="music-iframe" src={src} title="Navidad" allow="autoplay" />
      )}
    </div>
  );
}
