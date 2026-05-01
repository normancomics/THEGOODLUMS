import Image from 'next/image';
import { VIPLink } from './VIPLink';

const basePath = '/THEGOODLUMS';

const socials = [
  {
    name: 'OpenSea',
    url: 'https://opensea.io/collection/thegoodlums',
    logo: `${basePath}/logos/opensea.png`,
    color: '#2081E2',
    vip: false,
    label: 'COLLECTION',
  },
  {
    name: 'X',
    url: 'https://x.com/thegoodlums',
    logo: `${basePath}/logos/x-twitter.svg`,
    color: '#ffffff',
    vip: false,
    label: 'TWITTER/X',
  },
  {
    name: 'Farcaster',
    url: 'https://farcaster.xyz/~/channel/thegoodlums',
    logo: `${basePath}/logos/farcaster.png`,
    color: '#8A63D2',
    vip: false,
    label: 'FARCASTER',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/bdAuGjBy7',
    logo: `${basePath}/logos/discord.svg`,
    color: '#5865F2',
    vip: true,
    label: 'VIP DISCORD',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/thegoodlums',
    logo: `${basePath}/logos/telegram.png`,
    color: '#229ED9',
    vip: true,
    label: 'VIP TELEGRAM',
  },
  {
    name: 'Suno',
    url: 'https://suno.com/playlist/9cd81cff-725c-4f07-97ca-d8fd86c72810',
    logo: `${basePath}/logos/suno.png`,
    color: '#FF6B35',
    vip: false,
    label: 'PLAYLIST',
  },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[10000]">
      {socials.map((social) => {
        const button = (
          <div
            key={social.name}
            className="group relative w-14 h-14 flex items-center justify-center border-2 transition-all duration-200 hover:scale-110"
            style={{
              background: '#000',
              borderColor: social.color,
              boxShadow: `0 0 10px ${social.color}40`,
              transform: 'rotate(-2deg)',
            }}
          >
            <Image
              src={social.logo}
              alt={social.name}
              width={32}
              height={32}
              className="object-contain"
              unoptimized
            />
            {social.vip && (
              <div
                className="absolute -top-2 -right-2 bg-analog-yellow text-black font-vt323 text-xs px-1"
                style={{ transform: 'rotate(15deg)', fontSize: '10px' }}
              >
                VIP
              </div>
            )}
            {/* Tooltip */}
            <div
              className="absolute left-16 bg-black border border-signal-green font-vt323 text-signal-green text-sm px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ boxShadow: '0 0 10px #00ff00' }}
            >
              {social.label}
            </div>
          </div>
        );

        if (social.vip) {
          return (
            <VIPLink
              key={social.name}
              href={social.url}
              platform={social.name}
              className="block"
            >
              {button}
            </VIPLink>
          );
        }

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {button}
          </a>
        );
      })}
    </div>
  );
}
