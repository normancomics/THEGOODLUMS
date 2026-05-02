'use client';

import { useEffect, useState } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  color: string;
  target: number;
  decimals: number;
}

const STATS: Stat[] = [
  { label: 'TOTAL SUPPLY', value: 0, target: 500, suffix: '', color: '#00ff00', decimals: 0 },
  { label: 'FLOOR PRICE', value: 0, target: 0.069, suffix: ' ETH', color: '#ffe600', decimals: 3 },
  { label: 'HOLDERS', value: 0, target: 350, suffix: '', color: '#00cccc', decimals: 0 },
  { label: 'VOLUME', value: 0, target: 42.0, suffix: ' ETH', color: '#cc0000', decimals: 1 },
];

export function StatsDashboard() {
  const [stats, setStats] = useState<Stat[]>(STATS);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById('stats');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic

      setStats(STATS.map((s) => ({
        ...s,
        value: s.target * eased,
      })));

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [started]);

  return (
    <section
      id="stats"
      className="py-20 px-6"
      style={{ background: 'linear-gradient(to bottom, #000, #0a0a0a, #000)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-green-400 mb-12 tracking-widest"
          style={{ fontFamily: 'VT323, monospace', fontSize: '2.5rem' }}
        >
          {'>'} GANG INTEL — CLASSIFIED {'<'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Chain indicator */}
        <div
          className="mt-8 text-center text-green-400/60 text-sm tracking-widest"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          DEPLOYED ON BASE CHAIN &nbsp;|&nbsp; CONTRACT VERIFIED &nbsp;|&nbsp; IMMUTABLE
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  const displayValue =
    stat.decimals > 0
      ? stat.value.toFixed(stat.decimals)
      : Math.floor(stat.value).toString();

  return (
    <div
      className="bg-black p-6 md:p-8 relative overflow-hidden"
      style={{
        border: `3px solid ${stat.color}`,
        boxShadow: `0 0 20px ${stat.color}33, inset 0 0 20px ${stat.color}11`,
      }}
    >
      {/* Corner decoration */}
      <div
        className="absolute top-0 right-0 w-4 h-4"
        style={{ background: stat.color }}
      />

      <p
        className="text-xs md:text-sm opacity-60 mb-3 tracking-widest"
        style={{ fontFamily: 'Courier Prime, monospace', color: stat.color }}
      >
        {stat.label}
      </p>
      <p
        className="text-4xl md:text-5xl"
        style={{ fontFamily: 'VT323, monospace', color: stat.color }}
      >
        {displayValue}
        {stat.suffix}
      </p>

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${stat.color}08 2px, ${stat.color}08 4px)`,
        }}
      />
    </div>
  );
}
