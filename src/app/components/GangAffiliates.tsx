import { ChunkyButton } from './ChunkyButton';

// SVG artwork for each affiliate (stylized, original post-apocalyptic versions)
// Defined before use to avoid TypeScript hoisting issues
const MILADY_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#111"/>
  <circle cx="50" cy="35" r="22" fill="none" stroke="#ff69b4" stroke-width="3"/>
  <ellipse cx="50" cy="72" rx="28" ry="18" fill="none" stroke="#ff69b4" stroke-width="3"/>
  <circle cx="42" cy="30" r="3" fill="#ff69b4"/>
  <circle cx="58" cy="30" r="3" fill="#ff69b4"/>
  <path d="M 42 45 Q 50 52 58 45" stroke="#ff69b4" stroke-width="2" fill="none"/>
  <text x="50" y="95" text-anchor="middle" fill="#ff69b4" font-family="VT323,monospace" font-size="12">MILADY</text>
</svg>`;

const REMILIA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#111"/>
  <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" fill="none" stroke="#9b59b6" stroke-width="3"/>
  <text x="50" y="58" text-anchor="middle" fill="#9b59b6" font-family="VT323,monospace" font-size="24" font-weight="bold">R</text>
  <text x="50" y="96" text-anchor="middle" fill="#9b59b6" font-family="VT323,monospace" font-size="11">REMILIA</text>
</svg>`;

const BASED_GHOULS_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#111"/>
  <ellipse cx="50" cy="45" rx="28" ry="32" fill="none" stroke="#00ff7f" stroke-width="3"/>
  <rect x="22" y="45" width="56" height="12" fill="#111"/>
  <circle cx="40" cy="35" r="5" fill="#00ff7f"/>
  <circle cx="60" cy="35" r="5" fill="#00ff7f"/>
  <path d="M 35 62 L 40 70 L 45 62 L 50 70 L 55 62 L 60 70 L 65 62" stroke="#00ff7f" stroke-width="2" fill="none"/>
  <text x="50" y="96" text-anchor="middle" fill="#00ff7f" font-family="VT323,monospace" font-size="10">BASED GHOULS</text>
</svg>`;

const CIGAWRETTTS_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#111"/>
  <rect x="15" y="42" width="55" height="10" rx="3" fill="none" stroke="#ffa500" stroke-width="3"/>
  <rect x="70" y="40" width="15" height="14" rx="2" fill="#ffa500" opacity="0.6"/>
  <line x1="85" y1="47" x2="90" y2="30" stroke="#ffa500" stroke-width="2" stroke-dasharray="3,2"/>
  <circle cx="88" cy="25" r="4" fill="none" stroke="#ffa500" stroke-width="2"/>
  <text x="50" y="96" text-anchor="middle" fill="#ffa500" font-family="VT323,monospace" font-size="10">CIGAWRETTTS</text>
</svg>`;

const FAKE_RARES_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#111"/>
  <rect x="15" y="20" width="70" height="55" rx="2" fill="none" stroke="#00bfff" stroke-width="3"/>
  <text x="50" y="53" text-anchor="middle" fill="#00bfff" font-family="VT323,monospace" font-size="18">FAKE</text>
  <line x1="15" y1="20" x2="85" y2="75" stroke="#00bfff" stroke-width="2" opacity="0.5"/>
  <line x1="85" y1="20" x2="15" y2="75" stroke="#00bfff" stroke-width="2" opacity="0.5"/>
  <text x="50" y="96" text-anchor="middle" fill="#00bfff" font-family="VT323,monospace" font-size="10">FAKE RARES</text>
</svg>`;

const SUPERFAKES_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#111"/>
  <rect x="10" y="15" width="80" height="60" rx="2" fill="none" stroke="#ff4500" stroke-width="3"/>
  <rect x="18" y="23" width="64" height="44" rx="1" fill="none" stroke="#ff4500" stroke-width="1" opacity="0.5"/>
  <text x="50" y="50" text-anchor="middle" fill="#ff4500" font-family="VT323,monospace" font-size="14">SUPER</text>
  <text x="50" y="63" text-anchor="middle" fill="#ff4500" font-family="VT323,monospace" font-size="14">FAKES</text>
  <text x="50" y="96" text-anchor="middle" fill="#ff4500" font-family="VT323,monospace" font-size="8">COUNTERFEIT</text>
</svg>`;

interface Affiliate {
  name: string;
  description: string;
  multiplier: string;
  url: string;
  svgPath: string;
  color: string;
}

const AFFILIATES: Affiliate[] = [
  {
    name: 'MILADY',
    description: 'Milady Maker',
    multiplier: '2x',
    url: 'https://miladymaker.net',
    svgPath: MILADY_SVG,
    color: '#ff69b4',
  },
  {
    name: 'REMILIA',
    description: 'Remilia Corporation',
    multiplier: '2x',
    url: 'https://remilia.org',
    svgPath: REMILIA_SVG,
    color: '#9b59b6',
  },
  {
    name: 'BASED GHOULS',
    description: 'Based Ghouls',
    multiplier: '1.5x',
    url: 'https://opensea.io/collection/basedghouls',
    svgPath: BASED_GHOULS_SVG,
    color: '#00ff7f',
  },
  {
    name: 'CIGAWRETTTS',
    description: 'Cigawrettts',
    multiplier: '1.5x',
    url: 'https://opensea.io/collection/cigawrettts',
    svgPath: CIGAWRETTTS_SVG,
    color: '#ffa500',
  },
  {
    name: 'FAKE RARES',
    description: 'Fake Rares',
    multiplier: '1.5x',
    url: 'https://fakerares.com',
    svgPath: FAKE_RARES_SVG,
    color: '#00bfff',
  },
  {
    name: 'COUNTERFEIT SUPERFAKES',
    description: 'Counterfeit Superfakes',
    multiplier: '1.5x',
    url: 'https://opensea.io/collection/counterfeit-superfakes',
    svgPath: SUPERFAKES_SVG,
    color: '#ff4500',
  },
];

export function GangAffiliates() {
  return (
    <section id="affiliates" className="py-20 px-6" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-green-400 mb-3 tracking-widest"
          style={{ fontFamily: 'VT323, monospace', fontSize: '2.5rem' }}
        >
          {'>'} BONUS AIRDROPS & QUARTERLY YIELD MULTIPLIERS {'<'}
        </h2>
        <p
          className="text-center text-yellow-400 mb-2 text-sm tracking-widest"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          FOR GOODLUMS GANG AFFILIATES
        </p>
        <p
          className="text-center text-gray-500 mb-12 text-xs tracking-widest"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          HOLD A GOODLUMS NFT + ANY AFFILIATED COLLECTION = AUTOMATIC MULTIPLIER APPLIED
        </p>

        {/* Affiliate grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
          {AFFILIATES.map((aff) => (
            <a
              key={aff.name}
              href={aff.url}
              target="_blank"
              rel="noopener noreferrer"
              className="affiliate-card block bg-black p-4 text-center group"
              style={{ border: `2px solid ${aff.color}33` }}
            >
              {/* Logo */}
              <div
                className="w-20 h-20 mx-auto mb-3 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: aff.svgPath }}
              />

              {/* Name */}
              <p
                className="text-xs font-black mb-1 tracking-widest"
                style={{ fontFamily: 'VT323, monospace', fontSize: '0.9rem', color: aff.color }}
              >
                {aff.name}
              </p>

              {/* Multiplier badge */}
              <div
                className="inline-block px-2 py-0.5 text-xs font-black"
                style={{
                  background: aff.color,
                  color: '#000',
                  fontFamily: 'VT323, monospace',
                  fontSize: '1rem',
                }}
              >
                {aff.multiplier} YIELD
              </div>
            </a>
          ))}
        </div>

        {/* Yield info box */}
        <div
          className="max-w-2xl mx-auto p-6 text-center"
          style={{ border: '3px solid #00ff00', background: '#001100' }}
        >
          <p
            className="text-green-400 mb-3"
            style={{ fontFamily: 'VT323, monospace', fontSize: '1.3rem' }}
          >
            HOW YIELD MULTIPLIERS WORK
          </p>
          <p
            className="text-gray-400 text-sm leading-relaxed mb-4"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            Mint a GOODLUMS NFT. Connect your wallet. Hold any affiliated collection NFT.
            Your quarterly GOODLUMS yield is automatically multiplied. Plus instant bonus airdrops upon mint.
          </p>
          <ChunkyButton
            variant="primary"
            href="https://opensea.io/collection/thegoodlums"
            target="_blank"
            rel="noopener noreferrer"
          >
            MINT NOW
          </ChunkyButton>
        </div>
      </div>
    </section>
  );
}
