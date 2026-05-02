'use client';

import { useEffect, useRef } from 'react';
import { ChunkyButton } from './ChunkyButton';

// Featured "WANTED" poster — uses actual OpenSea collection image as hero showcase
const FEATURED_POSTER = {
  name: 'GOODLUM #001',
  image: 'https://i.seadn.io/s/raw/files/c8e1c5c1a8e8b8e8b8e8b8e8b8e8b8e8.png',
  rarity: 'LEGENDARY',
  traits: [
    { label: 'AFFILIATION', value: 'CYBER SYNDICATE' },
    { label: 'HOMELAND', value: 'DARKNET' },
    { label: 'ACCESSORIES', value: 'HACKER GOGGLES' },
    { label: 'THREAT LEVEL', value: 'MAXIMUM' },
  ],
  bounty: '0.069 ETH',
};

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 16);
    const drops: number[] = Array(cols).fill(1);
    const chars = 'GOODLUMS01バイナリ死ポストアポカリプスgang∅☠WANTEDMISSING';

    function draw() {
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = '#002800';
      ctx!.font = '13px VT323, monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx!.fillText(char, i * 16, drops[i] * 16);
        if (drops[i] * 16 > canvas!.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = 0;
      const c = Math.floor(canvas.width / 16);
      for (let i = 0; i < c; i++) drops.push(1);
    };
    window.addEventListener('resize', handleResize);
    return () => { clearInterval(interval); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Matrix rain */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      {/* TV Static overlay */}
      <div className="tv-static" />

      {/* Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 50%, rgba(0,10,0,0.92) 100%)',
          zIndex: 2,
        }}
      />

      {/* Content: split layout */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-6 py-12 gap-8"
        style={{ zIndex: 3 }}
      >
        {/* ===== LEFT: Text + CTAs ===== */}
        <div className="flex-1 flex flex-col justify-center lg:pr-12">
          {/* Classified badge */}
          <div
            className="inline-block mb-6 py-1.5 px-5 border-2 border-red-500 text-red-500 text-sm tracking-[0.3em] w-fit"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            ▶ CLASSIFIED DATABASE ◀
          </div>

          {/* Main glitch title */}
          <h1
            className="glitch-text text-green-400 mb-4 leading-none"
            data-text="GOODLUMS"
            style={{
              fontFamily: 'VT323, monospace',
              fontSize: 'clamp(5rem, 15vw, 12rem)',
              letterSpacing: '0.03em',
              lineHeight: 0.9,
            }}
          >
            GOODLUMS
          </h1>

          <p
            className="text-yellow-400 mb-2"
            style={{
              fontFamily: 'VT323, monospace',
              fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)',
              letterSpacing: '0.2em',
            }}
          >
            POST-APOCALYPTIC INTERNET GANG
          </p>

          <p
            className="text-white/50 mb-8 text-sm tracking-widest"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            CREATED 1999&nbsp;&nbsp;|&nbsp;&nbsp;FOUNDED 2019&nbsp;&nbsp;|&nbsp;&nbsp;ON-CHAIN 2024&nbsp;&nbsp;|&nbsp;&nbsp;BASE CHAIN
          </p>

          {/* Stats row */}
          <div className="flex gap-6 mb-10">
            {[
              { v: '500', l: 'SUSPECTS' },
              { v: '95', l: 'TRAITS' },
              { v: 'BASE', l: 'CHAIN' },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div
                  className="text-green-400"
                  style={{ fontFamily: 'VT323, monospace', fontSize: '2rem', lineHeight: 1 }}
                >
                  {v}
                </div>
                <div
                  className="text-green-400/50 text-xs tracking-widest"
                  style={{ fontFamily: 'Courier Prime, monospace' }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <ChunkyButton variant="primary" href="#nfts">
              VIEW SUSPECTS
            </ChunkyButton>
            <ChunkyButton
              variant="secondary"
              href="https://opensea.io/collection/thegoodlums"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY ON OPENSEA
            </ChunkyButton>
          </div>

          {/* Motto */}
          <div
            className="mt-10 text-green-400/40 text-xs tracking-widest leading-relaxed"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            NO NEW MEMBERS. WE ARE FULL. NO REFERRALS. WE DON&apos;T CARE.<br />
            ONE WAY IN. ONE WAY OUT.
          </div>
        </div>

        {/* ===== RIGHT: Featured WANTED Poster ===== */}
        <div className="flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-auto">
          <div
            className="wanted-poster-hero relative"
            style={{
              width: 'min(340px, 90vw)',
              transform: 'rotate(2deg)',
              filter: 'drop-shadow(0 0 40px rgba(0,255,0,0.25)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))',
            }}
          >
            {/* Paper texture background */}
            <div
              className="border-4 border-green-400 p-0 overflow-hidden"
              style={{
                background: '#0a0a00',
                boxShadow: '0 0 0 2px #000, 0 0 0 6px #003300, 4px 4px 0 8px #000',
              }}
            >
              {/* WANTED header */}
              <div
                className="text-center py-3 border-b-4 border-green-400"
                style={{
                  background: '#00ff00',
                  fontFamily: 'VT323, monospace',
                  fontSize: '2.5rem',
                  color: '#000',
                  letterSpacing: '0.3em',
                  lineHeight: 1,
                }}
              >
                WANTED
              </div>

              {/* Image */}
              <div className="relative" style={{ height: 280, background: '#111' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FEATURED_POSTER.image}
                  alt={FEATURED_POSTER.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/340x280/000000/00ff00?text=GOODLUM';
                  }}
                />

                {/* Scanlines over image */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)',
                  }}
                />

                {/* ARMED stamp */}
                <div
                  className="absolute bottom-3 right-3 px-3 py-1 border-3 border-red-500 text-red-500 rotate-[-12deg]"
                  style={{
                    fontFamily: 'VT323, monospace',
                    fontSize: '1.5rem',
                    border: '3px solid #cc0000',
                    letterSpacing: '0.2em',
                    opacity: 0.9,
                  }}
                >
                  ARMED
                </div>

                {/* Rarity badge */}
                <div
                  className="absolute top-3 left-3 px-2 py-0.5"
                  style={{
                    background: '#ffe600',
                    color: '#000',
                    fontFamily: 'VT323, monospace',
                    fontSize: '1rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {FEATURED_POSTER.rarity}
                </div>
              </div>

              {/* Name */}
              <div
                className="px-4 pt-3 pb-1 border-b border-green-400/30"
                style={{ fontFamily: 'VT323, monospace', fontSize: '1.5rem', color: '#00ff00' }}
              >
                {FEATURED_POSTER.name}
              </div>

              {/* Traits */}
              <div className="px-4 py-2 space-y-1">
                {FEATURED_POSTER.traits.map((t) => (
                  <div
                    key={t.label}
                    className="flex justify-between text-xs"
                    style={{ fontFamily: 'Courier Prime, monospace' }}
                  >
                    <span className="text-green-400/60">{t.label}:</span>
                    <span className="text-yellow-400">{t.value}</span>
                  </div>
                ))}
              </div>

              {/* Bounty */}
              <div
                className="mx-4 mb-3 mt-1 py-2 text-center border-2 border-yellow-400"
                style={{ fontFamily: 'VT323, monospace', fontSize: '1.3rem', color: '#ffe600' }}
              >
                BOUNTY: {FEATURED_POSTER.bounty}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-green-400 text-2xl animate-bounce"
        style={{ zIndex: 3 }}
      >
        ▼
      </div>
    </section>
  );
}

