'use client';

import { useEffect, useRef, useState } from 'react';

const TRACKS = [
  { title: 'GOODLUMS RADIO — SIGNAL 1', url: 'https://suno.com/playlist/9cd81cff-725c-4f07-97ca-d8fd86c72810' },
];

export function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [minimized, setMinimized] = useState(false);

  // Browser autoplay policy: we can't autoplay without user gesture
  // Show a pulsing CTA on first load
  const [needsInteraction, setNeedsInteraction] = useState(true);

  const handlePlaylistClick = () => {
    window.open('https://suno.com/playlist/9cd81cff-725c-4f07-97ca-d8fd86c72810', '_blank');
    setNeedsInteraction(false);
    setPlaying(true);
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 right-6 z-50 px-4 py-3 text-black font-black text-sm border-4 border-black"
        style={{
          background: '#00ff00',
          fontFamily: 'VT323, monospace',
          fontSize: '1rem',
          boxShadow: '0 4px 0 #000, 0 6px 0 #0a0',
          letterSpacing: '0.1em',
        }}
      >
        ▶ RADIO
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 bg-black p-4 w-64"
      style={{ border: '3px solid #00ff00', boxShadow: '0 0 20px rgba(0,255,0,0.3)' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span
          className="text-green-400 font-black tracking-widest"
          style={{ fontFamily: 'VT323, monospace', fontSize: '1.1rem' }}
        >
          📻 GOODLUMS RADIO
        </span>
        <button
          onClick={() => setMinimized(true)}
          className="text-green-400 hover:text-yellow-400 text-xs"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          [—]
        </button>
      </div>

      {/* Now playing */}
      <div
        className="text-xs text-gray-400 mb-3 truncate"
        style={{ fontFamily: 'Courier Prime, monospace' }}
      >
        {playing ? '▶ PLAYING: GOODLUMS SOUNDTRACK' : '■ OFFLINE — CLICK TO TUNE IN'}
      </div>

      {/* Visualizer bars */}
      <div className="flex items-end gap-0.5 h-8 mb-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex-1"
            style={{
              background: '#00ff00',
              height: playing ? `${Math.random() * 100}%` : '10%',
              opacity: playing ? 1 : 0.3,
              animation: playing ? `matrixFall ${0.5 + Math.random() * 0.5}s ease-in-out infinite alternate` : 'none',
              transition: 'height 0.1s ease',
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={handlePlaylistClick}
          className="flex-1 py-2 text-black font-black text-sm border-2 border-black"
          style={{
            background: '#00ff00',
            fontFamily: 'VT323, monospace',
            fontSize: '1rem',
            boxShadow: '0 3px 0 #000, 0 5px 0 #0a0',
          }}
        >
          OPEN PLAYLIST
        </button>
      </div>

      {needsInteraction && (
        <p
          className="text-yellow-400 text-xs mt-2 text-center animate-pulse"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          Click to tune in →
        </p>
      )}
    </div>
  );
}
