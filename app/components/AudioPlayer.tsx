'use client';

import { useState, useEffect } from 'react';

const TRACKS = [
  { id: '1', title: 'DIGITAL DECAY', artist: 'GOODLUMS RADIO' },
  { id: '2', title: 'POST-APOCALYPTIC ANTHEM', artist: 'GOODLUMS RADIO' },
  { id: '3', title: 'NO SIGNAL', artist: 'GOODLUMS RADIO' },
  { id: '4', title: 'GANG FREQUENCIES', artist: 'GOODLUMS RADIO' },
  { id: '5', title: 'HOOD PASS', artist: 'GOODLUMS RADIO' },
];

export default function AudioPlayer() {
  const [collapsed, setCollapsed] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrentTrack((t) => (t + 1) % TRACKS.length);
          return 0;
        }
        return p + 0.1;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const prevTrack = () => { setCurrentTrack((t) => (t - 1 + TRACKS.length) % TRACKS.length); setProgress(0); };
  const nextTrack = () => { setCurrentTrack((t) => (t + 1) % TRACKS.length); setProgress(0); };

  const track = TRACKS[currentTrack];

  return (
    <div
      style={{
        position: 'fixed',
        top: '36px',
        right: '16px',
        zIndex: 9990,
        backgroundColor: '#0a0a0a',
        border: '2px solid #0f0',
        boxShadow: '0 0 10px #0f0, 0 0 20px #0f0',
        fontFamily: 'VT323, monospace',
        minWidth: collapsed ? '140px' : '280px',
        transition: 'all 0.3s',
      }}
    >
      {/* Header */}
      <div
        style={{ backgroundColor: '#0f0', color: '#0a0a0a', padding: '4px 8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>📻 GOODLUMS RADIO</span>
        <span>{collapsed ? '▼' : '▲'}</span>
      </div>

      {!collapsed && (
        <div style={{ padding: '8px', color: '#0f0' }}>
          {/* Track display */}
          <div style={{ fontSize: '12px', marginBottom: '6px', borderBottom: '1px solid #0f0', paddingBottom: '4px' }}>
            <div style={{ fontSize: '10px', color: '#888' }}>NOW PLAYING:</div>
            <div style={{ fontSize: '16px' }}>{track.title}</div>
            <div style={{ fontSize: '12px', color: '#0a0' }}>{track.artist}</div>
          </div>

          {/* Progress */}
          <div style={{ height: '4px', backgroundColor: '#1a1a1a', marginBottom: '8px', cursor: 'pointer' }}>
            <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#0f0', boxShadow: '0 0 4px #0f0' }} />
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
            <button onClick={prevTrack} style={{ background: 'none', border: '1px solid #0f0', color: '#0f0', cursor: 'pointer', padding: '2px 8px', fontFamily: 'VT323, monospace', fontSize: '16px' }}>◀◀</button>
            <button onClick={togglePlay} style={{ background: isPlaying ? '#0f0' : 'none', border: '1px solid #0f0', color: isPlaying ? '#0a0a0a' : '#0f0', cursor: 'pointer', padding: '2px 12px', fontFamily: 'VT323, monospace', fontSize: '16px' }}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button onClick={nextTrack} style={{ background: 'none', border: '1px solid #0f0', color: '#0f0', cursor: 'pointer', padding: '2px 8px', fontFamily: 'VT323, monospace', fontSize: '16px' }}>▶▶</button>
          </div>

          {/* Volume */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '12px' }}>
            <span>VOL:</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              style={{ flex: 1, accentColor: '#0f0' }}
            />
            <span>{volume}%</span>
          </div>

          {/* Note */}
          <div style={{ fontSize: '10px', color: '#666', marginBottom: '8px', textAlign: 'center' }}>
            * SIMULATED PLAYER - CLICK BELOW FOR REAL AUDIO
          </div>

          {/* Suno link */}
          <a
            href="https://suno.com/playlist/9cd81cff-725c-4f07-97ca-d8fd86c72810"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: '#0f0',
              color: '#0a0a0a',
              padding: '4px 8px',
              fontSize: '14px',
              fontWeight: 'bold',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            🎵 OPEN FULL PLAYLIST
          </a>
        </div>
      )}
    </div>
  );
}
