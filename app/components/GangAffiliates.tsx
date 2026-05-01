import Image from 'next/image';

const basePath = '/THEGOODLUMS';

const affiliates = [
  {
    name: 'MILADY',
    logo: `${basePath}/logos/affiliates/milady.svg`,
    url: 'https://opensea.io/collection/milady',
    description: 'THE ORIGINAL GANG',
  },
  {
    name: 'REMILIA',
    logo: `${basePath}/logos/affiliates/remilia.svg`,
    url: 'https://remilia.org',
    description: 'CORP HEADQUARTERS',
  },
  {
    name: 'BASED GHOULS',
    logo: `${basePath}/logos/affiliates/based-ghouls.svg`,
    url: 'https://opensea.io/collection/based-ghouls',
    description: 'GHOUL DIVISION',
  },
  {
    name: 'CIGAWRETTTS',
    logo: `${basePath}/logos/affiliates/cigawrettts.svg`,
    url: 'https://opensea.io/collection/cigawrettts',
    description: 'THE HABIT CREW',
  },
  {
    name: 'FAKE RARES',
    logo: `${basePath}/logos/affiliates/fake-rares.svg`,
    url: 'https://opensea.io/collection/fake-rares',
    description: 'COUNTERFEIT KINGS',
  },
  {
    name: 'COUNTERFEIT SUPERFAKES',
    logo: `${basePath}/logos/affiliates/counterfeit-superfakes.svg`,
    url: 'https://opensea.io/collection/counterfeit-superfakes',
    description: 'SUPER FAKE SQUAD',
  },
];

export function GangAffiliates() {
  return (
    <section className="py-16 mx-4 my-12">
      {/* Border with warning stripes */}
      <div
        className="border-4 border-analog-yellow overflow-hidden"
        style={{ boxShadow: '0 0 30px #ffff00, inset 0 0 30px rgba(255,255,0,0.05)' }}
      >
        {/* Warning stripe header */}
        <div
          className="h-4"
          style={{
            background: 'repeating-linear-gradient(45deg, #000, #000 10px, #ffff00 10px, #ffff00 20px)',
          }}
        />

        <div className="bg-black p-8">
          {/* Title */}
          <h2
            className="font-vt323 text-analog-yellow text-center mb-2"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              textShadow: '0 0 20px #ffff00',
              animation: 'glitch 4s infinite',
            }}
          >
            BONUS AIRDROPS &amp; QUARTERLY YIELD MULTIPLIERS
          </h2>
          <h3
            className="font-vt323 text-signal-green text-center text-xl mb-10 tracking-widest"
            style={{ textShadow: '0 0 10px #00ff00' }}
          >
            FOR GOODLUMS GANG AFFILIATES
          </h3>

          {/* Affiliate grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {affiliates.map((affiliate) => (
              <a
                key={affiliate.name}
                href={affiliate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110"
              >
                {/* Logo container */}
                <div
                  className="relative w-full aspect-square max-w-[120px] grayscale group-hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={affiliate.logo}
                    alt={affiliate.name}
                    fill
                    className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#00ff00]"
                    unoptimized
                  />
                </div>

                {/* Name */}
                <div className="font-vt323 text-decay-gray group-hover:text-analog-yellow text-center text-sm transition-colors tracking-wider">
                  {affiliate.name}
                </div>
                <div className="font-vt323 text-xs text-gray-700 group-hover:text-signal-green text-center transition-colors">
                  {affiliate.description}
                </div>
              </a>
            ))}
          </div>

          {/* Info text */}
          <div className="mt-10 border border-signal-green p-4">
            <p className="font-vt323 text-signal-green text-center text-lg">
              HOLD A GOODLUM + AFFILIATE NFT = BONUS AIRDROP ELIGIBILITY
            </p>
            <p className="font-courier text-decay-gray text-center text-xs mt-2">
              Quarterly yield multipliers applied to wallets holding both Goodlums and affiliated collection NFTs.
              Hood Pass holders receive maximum multiplier bonuses.
            </p>
          </div>
        </div>

        {/* Warning stripe footer */}
        <div
          className="h-4"
          style={{
            background: 'repeating-linear-gradient(45deg, #000, #000 10px, #ffff00 10px, #ffff00 20px)',
          }}
        />
      </div>
    </section>
  );
}
