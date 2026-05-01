'use client';

import { useEffect, useState } from 'react';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export default function Footer() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [konamiActivated, setKonamiActivated] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1;
        if (next === KONAMI.length) {
          setKonamiActivated(true);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(next);
        }
      } else {
        setKonamiIndex(0);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [konamiIndex]);

  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '2px solid #0f0', padding: '32px 24px', fontFamily: 'VT323, monospace' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {konamiActivated && (
          <div style={{ textAlign: 'center', color: '#ffd700', fontSize: '24px', marginBottom: '16px', animation: 'flicker 1s infinite' }}>
            ⚡ CHEAT CODE ACTIVATED — YOU ARE NOW A TRUE GOODLUM ⚡
          </div>
        )}

        <div style={{ borderBottom: '1px solid #0f0', paddingBottom: '16px', marginBottom: '16px' }}>
          <div style={{ color: '#0f0', fontSize: '16px', marginBottom: '8px' }}>
            <span style={{ color: '#0a0' }}>root@goodlums:~$</span> system --status
          </div>
          <div style={{ color: '#888', fontSize: '14px', marginLeft: '16px' }}>
            ▸ BLOCKCHAIN: BASE CHAIN<br/>
            ▸ CONTRACT: VERIFIED<br/>
            ▸ COLLECTION: 500 SUSPECTS<br/>
            ▸ STATUS: ACTIVE<br/>
            ▸ HOOD PASS: REQUIRED FOR VIP ACCESS
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div>
            <div style={{ color: '#0f0', fontSize: '14px', marginBottom: '8px' }}>GOODLUMS NETWORK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[
                { label: 'OPENSEA', href: 'https://opensea.io/collection/thegoodlums' },
                { label: 'TWITTER/X', href: 'https://x.com/thegoodlums' },
                { label: 'FARCASTER', href: 'https://farcaster.xyz/~/channel/thegoodlums' },
                { label: 'DISCORD', href: 'https://discord.gg/bdAuGjBy7' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}>
                  &gt; {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: '#0f0', fontSize: '14px', marginBottom: '8px' }}>EASTER EGGS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="https://bio.site/goodlums" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '13px', textDecoration: 'none' }}>
                &gt; bio.site/goodlums
              </a>
              <a href="https://bio.site/thegoodlums" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '13px', textDecoration: 'none' }}>
                &gt; bio.site/thegoodlums
              </a>
              <span style={{ color: '#333', fontSize: '12px' }}>&gt; ↑↑↓↓←→←→BA [SECRET]</span>
            </div>
          </div>
          <div>
            <div style={{ color: '#0f0', fontSize: '14px', marginBottom: '8px' }}>SYSTEM INFO</div>
            <div style={{ color: '#888', fontSize: '12px', lineHeight: 1.8 }}>
              NETWORK: BASE<br/>
              TOKEN: ERC-721<br/>
              ROYALTIES: ON-CHAIN<br/>
              RENDERER: DECENTRALIZED
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '16px', textAlign: 'center', color: '#333', fontSize: '12px' }}>
          <div>© 2024 GOODLUMS — ALL RIGHTS RESERVED — ON-CHAIN FOREVER</div>
          <div style={{ marginTop: '4px' }}>BUILT ON BASE · POWERED BY DECENTRALIZATION · GANG GANG</div>
        </div>
      </div>
    </footer>
  );
}
