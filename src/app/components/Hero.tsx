'use client';

import { useEffect, useRef } from 'react';
import { ChunkyButton } from './ChunkyButton';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 18);
    const drops: number[] = Array(cols).fill(1);
    const chars = 'GOODLUMS01バイナリ死ポストアポカリプスgang∅☠01010011010011110101001100100001';

    function draw() {
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = '#003300';
      ctx!.font = '14px VT323, monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx!.fillText(char, i * 18, drops[i] * 18);
        if (drops[i] * 18 > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = 0;
      const newCols = Math.floor(canvas.width / 18);
      for (let i = 0; i < newCols; i++) drops.push(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix rain background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)',
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div className="relative text-center px-6 max-w-5xl mx-auto" style={{ zIndex: 2 }}>
        {/* Warning tape */}
        <div
          className="text-sm tracking-[0.3em] mb-6 py-2 px-4 inline-block border-2 border-yellow-400 text-yellow-400"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          ⚠ WARNING: CLASSIFIED INTEL ⚠
        </div>

        {/* Main title */}
        <h1
          className="glitch-text text-green-400 mb-4"
          data-text="GOODLUMS"
          style={{
            fontFamily: 'VT323, monospace',
            fontSize: 'clamp(5rem, 18vw, 14rem)',
            lineHeight: 1,
            letterSpacing: '0.05em',
          }}
        >
          GOODLUMS
        </h1>

        {/* Subtitle */}
        <p
          className="text-yellow-400 mb-3"
          style={{
            fontFamily: 'VT323, monospace',
            fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
            letterSpacing: '0.2em',
          }}
        >
          POST-APOCALYPTIC INTERNET GANG
        </p>

        <p
          className="text-white/60 mb-10"
          style={{
            fontFamily: 'Courier Prime, monospace',
            fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
            letterSpacing: '0.15em',
          }}
        >
          CREATED 1999 &nbsp;|&nbsp; FOUNDED 2019 &nbsp;|&nbsp; ON-CHAIN 2024 &nbsp;|&nbsp; BASE CHAIN
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ChunkyButton variant="primary" href="#nfts">
            VIEW COLLECTION
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

        {/* Gang motto */}
        <div
          className="mt-12 text-green-400/60 text-sm tracking-widest"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          NO NEW MEMBERS. WE ARE FULL. NO REFERRALS. WE DON&apos;T CARE.
          <br />
          ONE WAY IN. ONE WAY OUT.
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400 text-2xl animate-bounce"
        style={{ zIndex: 2 }}
      >
        ▼
      </div>
    </section>
  );
}
