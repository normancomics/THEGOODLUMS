import type { WifiStrength } from '@/lib/types';

interface WifiSignalProps {
  strength: WifiStrength;
  className?: string;
}

export function WifiSignal({ strength, className = '' }: WifiSignalProps) {
  const bars = [1, 2, 3, 4, 5] as const;

  const getColor = (strength: WifiStrength) => {
    if (strength >= 5) return '#ffd700';
    if (strength >= 4) return '#a855f7';
    if (strength >= 3) return '#3b82f6';
    if (strength >= 2) return '#10b981';
    return '#6b7280';
  };

  const color = getColor(strength);

  return (
    <div className={`flex items-end gap-[2px] ${className}`} title={`Signal: ${strength}/5`}>
      {bars.map((bar) => (
        <div
          key={bar}
          style={{
            width: '4px',
            height: `${bar * 5}px`,
            backgroundColor: bar <= strength ? color : '#333',
            opacity: bar <= strength ? 1 : 0.3,
            boxShadow: bar <= strength ? `0 0 6px ${color}` : 'none',
            transition: 'all 0.3s',
          }}
        />
      ))}
    </div>
  );
}
