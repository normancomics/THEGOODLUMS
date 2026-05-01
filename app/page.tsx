import SOSBanner from './components/SOSBanner';
import AudioPlayer from './components/AudioPlayer';
import { SocialSidebar } from './components/SocialIcons';
import NFTGrid from './components/NFTGrid';
import GangAffiliates from './components/GangAffiliates';
import VIPLink from './components/VIPLink';
import Footer from './components/Footer';
import { GOODLUMS_NFT_DATA } from '@/lib/nftData';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', paddingTop: '36px' }}>
      <SOSBanner />
      <AudioPlayer />
      <SocialSidebar />

      {/* HERO SECTION */}
      <section style={{ textAlign: 'center', padding: '80px 24px 48px', borderBottom: '1px solid #0f0' }}>
        <div style={{ marginBottom: '8px', fontFamily: 'VT323, monospace', fontSize: '14px', color: '#666', letterSpacing: '4px' }}>
          ▸ CLASSIFIED DATABASE · ACCESS GRANTED · BASE CHAIN ▸
        </div>
        
        {/* Main glitch title */}
        <h1
          className="glitch-text"
          data-text="⚠️ GOODLUMS ⚠️"
          style={{
            fontFamily: 'VT323, monospace',
            fontSize: 'clamp(60px, 12vw, 140px)',
            color: '#0f0',
            textShadow: '0 0 20px #0f0, 0 0 40px #0f0',
            margin: '0 0 16px',
            letterSpacing: '8px',
            lineHeight: 1,
          }}
        >
          ⚠️ GOODLUMS ⚠️
        </h1>

        <div style={{ fontFamily: 'VT323, monospace', fontSize: '22px', color: '#888', letterSpacing: '3px', marginBottom: '32px' }}>
          500 SUSPECTS · BASE CHAIN · HOOD PASS REQUIRED
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {[
            { label: 'SUSPECTS', value: '500' },
            { label: 'TRAITS', value: '95+' },
            { label: 'CHAIN', value: 'BASE' },
            { label: 'FLOOR', value: '???' },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center', border: '1px solid #0f0', padding: '16px 24px', backgroundColor: '#050505' }}>
              <div style={{ fontFamily: 'VT323, monospace', fontSize: '36px', color: '#0f0', textShadow: '0 0 10px #0f0' }}>{value}</div>
              <div style={{ fontFamily: 'VT323, monospace', fontSize: '14px', color: '#666', letterSpacing: '2px' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="https://opensea.io/collection/thegoodlums" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'VT323, monospace', fontSize: '22px', padding: '12px 32px', backgroundColor: '#0f0', color: '#0a0a0a', textDecoration: 'none', letterSpacing: '3px', fontWeight: 'bold', boxShadow: '0 0 20px #0f0' }}>
            🌊 BUY ON OPENSEA
          </a>
          <a href="https://x.com/thegoodlums" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'VT323, monospace', fontSize: '22px', padding: '12px 32px', border: '2px solid #0f0', color: '#0f0', textDecoration: 'none', letterSpacing: '3px' }}>
            𝕏 FOLLOW ON X
          </a>
          <a href="https://farcaster.xyz/~/channel/thegoodlums" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'VT323, monospace', fontSize: '22px', padding: '12px 32px', border: '2px solid #9400d3', color: '#9400d3', textDecoration: 'none', letterSpacing: '3px' }}>
            ⬡ FARCASTER
          </a>
        </div>
      </section>

      {/* NFT GRID */}
      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'VT323, monospace', fontSize: '36px', color: '#0f0', textAlign: 'center', letterSpacing: '4px', marginBottom: '32px', textShadow: '0 0 10px #0f0' }}>
            ⚠️ SUSPECT DATABASE ⚠️
          </h2>
          <NFTGrid nfts={GOODLUMS_NFT_DATA} />
        </div>
      </section>

      {/* GANG AFFILIATES */}
      <GangAffiliates />

      {/* VIP SECTION */}
      <section style={{ padding: '48px 24px', textAlign: 'center', backgroundColor: '#050505' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'VT323, monospace', fontSize: '12px', color: '#666', letterSpacing: '4px', marginBottom: '8px' }}>
            CLASSIFIED — HOOD PASS HOLDERS ONLY
          </div>
          <h2 style={{ fontFamily: 'VT323, monospace', fontSize: '36px', color: '#ffd700', textShadow: '0 0 20px #ffd700', letterSpacing: '4px', marginBottom: '16px' }}>
            🔐 VIP GANG CHANNELS
          </h2>
          <p style={{ fontFamily: 'VT323, monospace', fontSize: '18px', color: '#888', marginBottom: '16px' }}>
            EXCLUSIVE ACCESS FOR HOOD PASS HOLDERS · BONUS AIRDROPS · INNER CIRCLE INTEL
          </p>
          {/* Hood Pass purchase links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <a href="https://opensea.io/collection/the-goodlums-hood-pass" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'VT323, monospace', fontSize: '16px', padding: '8px 20px', border: '1px solid #ffd700', color: '#ffd700', textDecoration: 'none', letterSpacing: '2px' }}>
              🌊 HOOD PASS (OPENSEA)
            </a>
            <a href="https://mint.club/token/base/HOODPASS" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'VT323, monospace', fontSize: '16px', padding: '8px 20px', border: '1px solid #cc5500', color: '#cc5500', textDecoration: 'none', letterSpacing: '2px' }}>
              ⛏ HOOD PASS v2
            </a>
            <a href="https://mint.club/token/base/HOODPASS3" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'VT323, monospace', fontSize: '16px', padding: '8px 20px', border: '1px solid #4169e1', color: '#4169e1', textDecoration: 'none', letterSpacing: '2px' }}>
              ⛏ HOOD PASS v3
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <VIPLink href="https://t.me/thegoodlums" label="VIP TELEGRAM" icon="📡" />
            <VIPLink href="https://discord.gg/bdAuGjBy7" label="VIP DISCORD" icon="🎮" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
