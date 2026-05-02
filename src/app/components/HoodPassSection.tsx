import { ChunkyButton } from './ChunkyButton';

export function HoodPassSection() {
  return (
    <section
      id="hoodpass"
      className="py-20 px-6"
      style={{ background: 'linear-gradient(to bottom, #000, #0a0000, #000)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-red-500 mb-3 tracking-widest"
          style={{ fontFamily: 'VT323, monospace', fontSize: '2.5rem' }}
        >
          {'>'} HOOD PASS — VIP ACCESS {'<'}
        </h2>
        <p
          className="text-center text-yellow-400 mb-8 text-sm tracking-widest"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          LIMITED EDITION. V4 ACTIVE — ONLY 60 VALID PASSES REMAINING.
        </p>

        {/* Warning banner */}
        <div
          className="max-w-3xl mx-auto p-4 mb-10 text-center"
          style={{ border: '3px dashed #cc0000', background: '#110000' }}
        >
          <p
            className="text-red-500 text-sm"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            ⚠ SANKO CHAIN HOLDERS: YOUR PASS IS STILL VALID (even though Sanko Chain is discontinued)
          </p>
        </div>

        {/* Pass cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {[
            {
              label: 'HOOD PASS',
              sublabel: 'V1 — SOLD OUT',
              desc: 'The original. Legendary status.',
              color: '#ffe600',
              url: 'https://opensea.io/collection/the-goodlums-hood-pass',
              available: false,
            },
            {
              label: 'HOOD PASS V2',
              sublabel: 'V2 — SOLD OUT',
              desc: 'Mint.club edition. Base chain.',
              color: '#00cccc',
              url: 'https://mint.club/token/base/HOODPASS',
              available: false,
            },
            {
              label: 'HOOD PASS V4',
              sublabel: 'V4 — ACTIVE',
              desc: '60 passes. Limited. Get yours.',
              color: '#00ff00',
              url: 'https://mint.club/token/base/HOODPASS3',
              available: true,
            },
          ].map((pass) => (
            <div
              key={pass.label}
              className="bg-black p-6 text-center"
              style={{ border: `3px solid ${pass.color}`, boxShadow: `0 0 20px ${pass.color}33` }}
            >
              <p
                className="text-xs tracking-widest mb-1"
                style={{ fontFamily: 'Courier Prime, monospace', color: pass.color }}
              >
                {pass.sublabel}
              </p>
              <h3
                className="mb-3"
                style={{ fontFamily: 'VT323, monospace', fontSize: '1.8rem', color: pass.color }}
              >
                {pass.label}
              </h3>
              <p
                className="text-gray-400 text-xs mb-4"
                style={{ fontFamily: 'Courier Prime, monospace' }}
              >
                {pass.desc}
              </p>

              {pass.available ? (
                <ChunkyButton
                  variant="warning"
                  href={pass.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY HOOD PASS
                </ChunkyButton>
              ) : (
                <div
                  className="py-3 text-center text-xs tracking-widest"
                  style={{
                    border: `2px solid ${pass.color}33`,
                    color: `${pass.color}88`,
                    fontFamily: 'Courier Prime, monospace',
                  }}
                >
                  SOLD OUT
                </div>
              )}
            </div>
          ))}
        </div>

        {/* VIP benefits */}
        <div
          className="max-w-2xl mx-auto p-6"
          style={{ border: '2px solid #cc0000', background: '#0a0000' }}
        >
          <p
            className="text-red-500 text-center mb-4"
            style={{ fontFamily: 'VT323, monospace', fontSize: '1.3rem' }}
          >
            HOOD PASS BENEFITS
          </p>
          <ul
            className="space-y-2 text-sm text-gray-400"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            {[
              'VIP Discord access (hood-pass-holders channel)',
              'Private Telegram gang chat',
              'Early access to new collections',
              'Bonus airdrop multiplier (3x)',
              'Quarterly yield priority',
              'Voting rights on gang decisions',
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="text-red-500 flex-shrink-0">›</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
