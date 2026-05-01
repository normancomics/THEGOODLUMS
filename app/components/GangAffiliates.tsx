export default function GangAffiliates() {
  const affiliates = [
    {
      name: 'Milady',
      url: 'https://opensea.io/collection/milady',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="22" r="14" stroke="#0f0" strokeWidth="2"/>
          <ellipse cx="30" cy="48" rx="16" ry="10" stroke="#0f0" strokeWidth="2"/>
          <circle cx="24" cy="20" r="2" fill="#0f0"/>
          <circle cx="36" cy="20" r="2" fill="#0f0"/>
          <path d="M 24 28 Q 30 34 36 28" stroke="#0f0" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 20 16 Q 22 10 30 10 Q 38 10 40 16" stroke="#0f0" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      name: 'Remilia',
      url: 'https://remilia.org',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M 15 45 L 30 10 L 45 45 Z" stroke="#0f0" strokeWidth="2" fill="none"/>
          <path d="M 20 35 L 40 35" stroke="#0f0" strokeWidth="2"/>
          <circle cx="30" cy="10" r="4" fill="#0f0"/>
          <text x="25" y="42" fill="#0f0" fontSize="16" fontFamily="monospace">R</text>
        </svg>
      ),
    },
    {
      name: 'Based Ghouls',
      url: 'https://opensea.io/collection/based-ghouls',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M 15 50 L 15 25 Q 15 10 30 10 Q 45 10 45 25 L 45 50 L 37 44 L 30 50 L 23 44 Z" stroke="#0f0" strokeWidth="2" fill="none"/>
          <circle cx="23" cy="27" r="4" fill="#0f0"/>
          <circle cx="37" cy="27" r="4" fill="#0f0"/>
          <circle cx="23" cy="27" r="2" fill="#0a0a0a"/>
          <circle cx="37" cy="27" r="2" fill="#0a0a0a"/>
        </svg>
      ),
    },
    {
      name: 'Cigawrettts',
      url: 'https://opensea.io/collection/cigawrettts',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="28" width="35" height="8" rx="2" stroke="#0f0" strokeWidth="2" fill="none"/>
          <rect x="45" y="28" width="5" height="8" rx="1" fill="#0f0" opacity="0.6"/>
          <path d="M 42 26 Q 44 20 42 14" stroke="#0f0" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M 46 24 Q 50 16 46 10" stroke="#0f0" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
          <path d="M 38 26 Q 36 18 40 12" stroke="#0f0" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
        </svg>
      ),
    },
    {
      name: 'Fake Rares',
      url: 'https://opensea.io/collection/fakerares',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M 30 8 L 45 22 L 30 52 L 15 22 Z" stroke="#0f0" strokeWidth="2" fill="none"/>
          <path d="M 15 22 L 45 22" stroke="#0f0" strokeWidth="1.5"/>
          <path d="M 22 22 L 30 8 M 38 22 L 30 8" stroke="#0f0" strokeWidth="1" opacity="0.6"/>
          <path d="M 22 22 L 30 52 M 38 22 L 30 52" stroke="#0f0" strokeWidth="1" opacity="0.6"/>
        </svg>
      ),
    },
    {
      name: 'Counterfeit Superfakes',
      url: 'https://opensea.io/collection/counterfeit-superfakes',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M 22 8 L 35 20 L 22 32 L 9 20 Z" stroke="#0f0" strokeWidth="2" fill="none"/>
          <path d="M 30 22 L 43 34 L 30 46 L 17 34 Z" stroke="#0f0" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M 35 20 L 43 34" stroke="#0f0" strokeWidth="1" opacity="0.4"/>
          <path d="M 22 32 L 30 46" stroke="#0f0" strokeWidth="1" opacity="0.4"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={{ padding: '48px 24px', borderTop: '1px solid #0f0', borderBottom: '1px solid #0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'VT323, monospace',
            fontSize: '28px',
            color: '#0f0',
            textAlign: 'center',
            marginBottom: '12px',
            letterSpacing: '2px',
            textShadow: '0 0 10px #0f0',
          }}
        >
          ⚠️ BONUS AIRDROPS &amp; QUARTERLY YIELD MULTIPLIERS ⚠️
        </h2>
        <p style={{ fontFamily: 'VT323, monospace', fontSize: '18px', color: '#888', textAlign: 'center', marginBottom: '32px', letterSpacing: '1px' }}>
          FOR GOODLUMS GANG AFFILIATES
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {affiliates.map((affiliate) => (
            <a
              key={affiliate.name}
              href={affiliate.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none', cursor: 'pointer' }}
            >
              <div
                style={{
                  border: '1px solid #0f0',
                  padding: '12px',
                  backgroundColor: '#0a0a0a',
                  transition: 'all 0.2s',
                  filter: 'drop-shadow(0 0 6px #0f0)',
                }}
              >
                {affiliate.svg}
              </div>
              <span style={{ fontFamily: 'VT323, monospace', fontSize: '14px', color: '#0f0', letterSpacing: '1px', textAlign: 'center' }}>
                {affiliate.name.toUpperCase()}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
