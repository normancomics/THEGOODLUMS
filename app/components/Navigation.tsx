import Image from 'next/image';

const basePath = '/THEGOODLUMS';

export function Navigation() {
  return (
    <nav
      className="fixed top-8 left-0 right-0 z-[9999] flex items-center justify-between px-4 md:px-24 py-2"
      style={{
        background: 'rgba(0,0,0,0.95)',
        borderBottom: '2px solid #00ff00',
        boxShadow: '0 0 20px rgba(0,255,0,0.3)',
      }}
    >
      {/* Logo / Title */}
      <a
        href={`${basePath}/`}
        className="font-vt323 text-signal-green text-2xl tracking-widest hover:text-analog-yellow transition-colors"
        style={{ textShadow: '0 0 10px #00ff00' }}
      >
        GOODLUMS_DB
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-6">
        <a
          href="#collection"
          className="font-vt323 text-signal-green text-lg hover:text-analog-yellow transition-colors tracking-wider"
        >
          COLLECTION
        </a>
        <a
          href="#affiliates"
          className="font-vt323 text-signal-green text-lg hover:text-analog-yellow transition-colors tracking-wider"
        >
          AFFILIATES
        </a>
        <a
          href="https://opensea.io/collection/thegoodlums"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-signal-green px-3 py-1 font-vt323 text-signal-green hover:bg-signal-green hover:text-black transition-all"
          style={{ boxShadow: '0 0 10px rgba(0,255,0,0.3)' }}
        >
          <Image
            src={`${basePath}/logos/opensea.svg`}
            alt="OpenSea"
            width={16}
            height={16}
            unoptimized
          />
          OPENSEA
        </a>
        <a
          href="https://x.com/thegoodlums"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-white px-3 py-1 font-vt323 text-white hover:bg-white hover:text-black transition-all"
        >
          <Image
            src={`${basePath}/logos/x-twitter.svg`}
            alt="X"
            width={14}
            height={14}
            unoptimized
          />
          X
        </a>
      </div>
    </nav>
  );
}
