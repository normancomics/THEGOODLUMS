interface WifiSignalProps {
  strength: number; // 1-5
}

const RARITY_LABELS: Record<number, string> = {
  5: 'LEGENDARY',
  4: 'EPIC',
  3: 'RARE',
  2: 'UNCOMMON',
  1: 'COMMON',
};

const RARITY_COLORS: Record<number, string> = {
  5: '#ffd700',
  4: '#9400d3',
  3: '#4169e1',
  2: '#0f0',
  1: '#888',
};

export default function WifiSignal({ strength }: WifiSignalProps) {
  const color = RARITY_COLORS[strength] || '#888';
  const label = RARITY_LABELS[strength] || 'COMMON';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
      <svg width="40" height="30" viewBox="0 0 40 30">
        {/* WiFi arcs - larger ones at bottom */}
        {[5, 4, 3, 2, 1].map((bar, i) => {
          const r = 8 + i * 5;
          const active = strength >= bar;
          return (
            <path
              key={bar}
              d={`M ${20 - r} ${28} A ${r} ${r} 0 0 1 ${20 + r} ${28}`}
              fill="none"
              stroke={active ? color : '#1a1a1a'}
              strokeWidth="3"
              strokeLinecap="round"
              style={active ? { filter: `drop-shadow(0 0 3px ${color})` } : {}}
            />
          );
        })}
        {/* Center dot */}
        <circle cx="20" cy="28" r="3" fill={color} style={{ filter: `drop-shadow(0 0 3px ${color})` }} />
      </svg>
      <span style={{ fontFamily: 'VT323, monospace', fontSize: '10px', color, letterSpacing: '1px' }}>
        {label}
      </span>
    </div>
  );
}
