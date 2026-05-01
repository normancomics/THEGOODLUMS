import { SOSBanner } from './components/SOSBanner';
import { Navigation } from './components/Navigation';
import { MatrixRain } from './components/MatrixRain';
import { AudioPlayer } from './components/AudioPlayer';
import { NFTGrid } from './components/NFTGrid';
import { GangAffiliates } from './components/GangAffiliates';
import { SocialSidebar } from './components/SocialSidebar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      {/* Background effects */}
      <MatrixRain />

      {/* Fixed overlays */}
      <SOSBanner />
      <Navigation />
      <SocialSidebar />
      <AudioPlayer />

      {/* Main content - padded for fixed elements */}
      <div className="relative z-10 pt-24 pb-20 pl-0 md:pl-20">

        {/* HERO SECTION */}
        <section className="text-center px-4 py-12 relative">
          {/* Chaos background */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,0,0,0.1) 35px, rgba(255,0,0,0.1) 70px),
                repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0,255,0,0.1) 35px, rgba(0,255,0,0.1) 70px)
              `,
            }}
          />

          {/* Main title */}
          <div className="relative inline-block mb-4">
            <div
              className="glitch-text font-vt323 text-warning-red"
              data-text="GOODLUMS"
              style={{
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                textShadow: '3px 3px 0 #00ff00, -3px -3px 0 #0000ff, 0 0 30px #ff0000',
                transform: 'rotate(-2deg)',
                display: 'block',
              }}
            >
              GOODLUMS
            </div>
          </div>

          <div
            className="font-vt323 text-analog-yellow text-2xl md:text-3xl mb-6 tracking-widest"
            style={{ animation: 'glitch 2s infinite', transform: 'rotate(1deg)' }}
          >
            WANTED DATABASE // 500 SUSPECTS // BASE CHAIN
          </div>

          {/* Scrolling warning tape */}
          <div className="overflow-hidden border-y-2 border-warning-red py-2 mb-8">
            <div
              className="whitespace-nowrap font-vt323 text-warning-red text-lg"
              style={{ animation: 'scroll-left 15s linear infinite' }}
            >
              {Array(10).fill('[ UNAUTHORIZED ACCESS DETECTED ] [ IP TRACED ] [ GOODLUMS DATABASE CLASSIFIED ] [ 500 UNIQUE NFTS ON BASE CHAIN ] ').join('')}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { num: '500', label: 'SUSPECTS', color: '#00ff00', rotate: '-1deg' },
              { num: 'BASE', label: 'CHAIN', color: '#0000ff', rotate: '1deg' },
              { num: '95+', label: 'TRAITS', color: '#ff0000', rotate: '-0.5deg' },
              { num: '???', label: 'FLOOR', color: '#ffff00', rotate: '0.5deg' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-black border-2 p-4 text-center"
                style={{
                  borderColor: stat.color,
                  boxShadow: `0 0 15px ${stat.color}40`,
                  transform: `rotate(${stat.rotate})`,
                }}
              >
                <div
                  className="font-vt323 text-4xl"
                  style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}`, animation: 'flicker 3s infinite' }}
                >
                  {stat.num}
                </div>
                <div className="font-vt323 text-signal-green text-lg tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://opensea.io/collection/thegoodlums"
              target="_blank"
              rel="noopener noreferrer"
              className="font-vt323 text-xl px-8 py-3 bg-signal-green text-black hover:bg-analog-yellow transition-all hover:scale-105"
              style={{ boxShadow: '0 0 20px #00ff00' }}
            >
              VIEW COLLECTION
            </a>
            <a
              href="https://x.com/thegoodlums"
              target="_blank"
              rel="noopener noreferrer"
              className="font-vt323 text-xl px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all hover:scale-105"
            >
              FOLLOW ON X
            </a>
            <a
              href="https://farcaster.xyz/~/channel/thegoodlums"
              target="_blank"
              rel="noopener noreferrer"
              className="font-vt323 text-xl px-8 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black transition-all hover:scale-105"
            >
              FARCASTER CHANNEL
            </a>
          </div>
        </section>

        {/* HOOD PASS SECTION */}
        <section className="mx-4 my-8">
          <div
            className="border-4 border-analog-yellow overflow-hidden"
            style={{ boxShadow: '0 0 30px #ffff00, 10px 10px 0 rgba(255,0,0,0.3)' }}
          >
            <div
              className="h-4"
              style={{
                background: 'repeating-linear-gradient(45deg, #000, #000 10px, #ffff00 10px, #ffff00 20px)',
              }}
            />
            <div className="bg-black p-6">
              <h2
                className="font-vt323 text-analog-yellow text-3xl md:text-4xl text-center mb-2"
                style={{ textShadow: '0 0 20px #ffff00' }}
              >
                HOOD PASS
              </h2>
              <p className="font-vt323 text-signal-green text-center text-xl mb-2">
                SANKO CHAIN HOLDERS: YOUR PASS IS STILL VALID
              </p>
              <p className="font-courier text-decay-gray text-center text-sm mb-4 max-w-xl mx-auto">
                Hood Pass grants VIP access to Discord, Telegram, bonus airdrops,
                and quarterly yield multipliers. Even Sanko Chain holders remain valid.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://opensea.io/collection/the-goodlums-hood-pass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-vt323 text-lg px-6 py-2 bg-analog-yellow text-black hover:bg-warning-red hover:text-white transition-all"
                >
                  OPENSEA HOOD PASS
                </a>
                <a
                  href="https://mint.club/token/base/HOODPASS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-vt323 text-lg px-6 py-2 border-2 border-analog-yellow text-analog-yellow hover:bg-analog-yellow hover:text-black transition-all"
                >
                  HOOD PASS v2
                </a>
                <a
                  href="https://mint.club/token/base/HOODPASS3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-vt323 text-lg px-6 py-2 border-2 border-signal-green text-signal-green hover:bg-signal-green hover:text-black transition-all"
                >
                  HOOD PASS v3
                </a>
              </div>
            </div>
            <div
              className="h-4"
              style={{
                background: 'repeating-linear-gradient(45deg, #000, #000 10px, #ffff00 10px, #ffff00 20px)',
              }}
            />
          </div>
        </section>

        {/* NFT COLLECTION SECTION */}
        <section id="collection" className="py-8">
          <div className="text-center mb-8 px-4">
            <h2
              className="font-vt323 text-analog-yellow mb-2"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                textShadow: '0 0 20px #ffff00',
                animation: 'glitch 5s infinite',
              }}
            >
              SUSPECT DATABASE
            </h2>
            <p className="font-vt323 text-signal-green text-xl tracking-widest">
              ALL 500 GOODLUMS -- CLICK CARD TO FLIP -- SEE STATS ON BACK
            </p>
            <div className="mt-2 font-courier text-decay-gray text-sm">
              Ranked by rarity &bull; WiFi signal = rarity strength &bull; Flip for traits &amp; buy button
            </div>
          </div>
          <NFTGrid />
        </section>

        {/* GANG AFFILIATES SECTION */}
        <section id="affiliates">
          <GangAffiliates />
        </section>

        {/* TERMINAL FOOTER */}
        <footer className="mx-4 my-8 border-2 border-signal-green p-6" style={{ boxShadow: '0 0 20px rgba(0,255,0,0.2)' }}>
          <div className="font-vt323 text-signal-green space-y-2 mb-4">
            {[
              ['ACCESSING DATABASE...', '#0f0', 'OK'],
              ['DECRYPTING FILES...', '#0f0', 'OK'],
              ['LOADING GOODLUMS DATA...', '#0f0', 'OK'],
              ['COLLECTION: BASE CHAIN', '#ff0', null],
              ['SUPPLY: 500 UNIQUE SUSPECTS', '#ff0', null],
              ['STATUS: ONLINE', '#0f0', null],
            ].map(([line, color, status], i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ color: '#f00' }}>&gt;</span>
                <span style={{ color: color as string }}>{line}</span>
                {status && (
                  <span style={{ color: '#0f0', animation: 'flicker 2s infinite' }}>[{status}]</span>
                )}
              </div>
            ))}
          </div>

          {/* Easter egg links - hidden as terminal entries */}
          <div className="border-t border-signal-green pt-4 mt-4">
            <div className="font-vt323 text-decay-gray text-sm space-y-1">
              <div>
                <span style={{ color: '#f00' }}>&gt;</span>{' '}
                <a href="https://bio.site/thegoodlums" target="_blank" rel="noopener noreferrer"
                  className="hover:text-signal-green transition-colors">
                  BIO.SITE/THEGOODLUMS
                </a>
              </div>
              <div>
                <span style={{ color: '#f00' }}>&gt;</span>{' '}
                <a href="https://bio.site/goodlums" target="_blank" rel="noopener noreferrer"
                  className="hover:text-signal-green transition-colors">
                  BIO.SITE/GOODLUMS
                </a>
              </div>
              <div>
                <span style={{ color: '#f00' }}>&gt;</span>{' '}
                <a href="traits-explorer.html" className="hover:text-signal-green transition-colors">
                  TRAITS EXPLORER [LEGACY]
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 font-vt323 text-decay-gray text-sm">
            <span style={{ color: '#f00' }}>WARNING: </span>
            THIS DATA IS CLASSIFIED{' '}
            <span style={{ animation: 'flicker 0.5s infinite', color: '#f00' }}>[!!!]</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
