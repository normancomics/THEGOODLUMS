export function TerminalFooter() {
  const lines = [
    'SYSTEM: GOODLUMS NETWORK v1.999.2024',
    'STATUS: ONLINE [BASE CHAIN]',
    'ACCESSING DATABASE... [OK]',
    'DECRYPTING GANG FILES... [OK]',
    'TOTAL SUSPECTS: 500/500',
    'HOOD PASS STATUS: V4 ACTIVE',
    '---',
    'BIO.SITE/THEGOODLUMS → ACCESS',
    'BIO.SITE/GOODLUMS → ACCESS',
    'TRAITS EXPLORER → traits-explorer.html',
    '---',
    'WARNING: THIS DATA IS CLASSIFIED [!!!]',
    'NO NEW MEMBERS. WE ARE FULL.',
    'JOIN OR PERISH.',
  ];

  return (
    <footer
      className="py-16 px-6"
      style={{ background: '#000', borderTop: '4px solid #00ff00' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Terminal window */}
        <div
          className="border-2 border-green-400 overflow-hidden"
          style={{ boxShadow: '0 0 30px rgba(0,255,0,0.2)' }}
        >
          {/* Terminal title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2 border-b-2 border-green-400"
            style={{ background: '#001100' }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span
              className="text-green-400 text-xs ml-2 tracking-widest"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            >
              GOODLUMS_TERMINAL_v1.999.2024
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6" style={{ background: '#000811' }}>
            {lines.map((line, i) => (
              <div
                key={i}
                className="mb-1 text-sm"
                style={{
                  fontFamily: 'Courier Prime, monospace',
                  color: line.includes('WARNING') ? '#cc0000'
                    : line.includes('[OK]') ? '#00ff00'
                    : line.includes('---') ? '#333'
                    : line.includes('→') ? '#ffe600'
                    : '#00aa00',
                  opacity: line === '---' ? 0.3 : 1,
                }}
              >
                {line !== '---' && (
                  <span className="text-green-400/50 mr-2">$</span>
                )}
                {line}
              </div>
            ))}

            {/* Blinking cursor */}
            <div
              className="mt-3 flex items-center gap-1"
              style={{ fontFamily: 'Courier Prime, monospace', color: '#00ff00', fontSize: '0.875rem' }}
            >
              <span className="text-green-400/50">$</span>
              <span>_</span>
              <span
                className="inline-block w-2.5 h-4 bg-green-400"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center mt-6 text-green-400/40 text-xs tracking-widest"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          © 1999-2024 GOODLUMS. ALL RIGHTS RESERVED. NO GOBLINS. NO GOONERS.
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {[
            { label: 'OPENSEA', url: 'https://opensea.io/collection/thegoodlums' },
            { label: 'HOOD PASS', url: 'https://opensea.io/collection/the-goodlums-hood-pass' },
            { label: 'MINT.CLUB', url: 'https://mint.club/token/base/HOODPASS3' },
            { label: 'BIO.SITE', url: 'https://bio.site/thegoodlums' },
          ].map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400/60 hover:text-green-400 transition-colors text-xs tracking-widest"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
