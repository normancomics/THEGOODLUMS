export function OpenSeaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M 14 4 L 10 8 L 14 6 L 18 8 Z" stroke="#0f0" strokeWidth="1.5" fill="none"/>
      <line x1="14" y1="4" x2="14" y2="20" stroke="#0f0" strokeWidth="1.5"/>
      <path d="M 8 14 Q 4 18 6 22 Q 10 26 14 24 Q 18 26 22 22 Q 24 18 20 14" stroke="#0f0" strokeWidth="1.5" fill="none"/>
      <line x1="8" y1="18" x2="20" y2="18" stroke="#0f0" strokeWidth="1.5"/>
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <line x1="14" y1="4" x2="14" y2="16" stroke="#0f0" strokeWidth="2"/>
      <line x1="8" y1="10" x2="20" y2="10" stroke="#0f0" strokeWidth="2"/>
      <path d="M 10 16 L 6 24 M 18 16 L 22 24" stroke="#0f0" strokeWidth="1.5"/>
      <rect x="10" y="16" width="8" height="4" stroke="#0f0" strokeWidth="1.5" fill="none"/>
      <line x1="4" y1="24" x2="24" y2="24" stroke="#0f0" strokeWidth="1.5"/>
      <circle cx="5" cy="24" r="2" fill="#0f0" opacity="0.5"/>
      <circle cx="23" cy="24" r="2" fill="#0f0" opacity="0.5"/>
    </svg>
  );
}

export function DiscordIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="8" width="20" height="14" rx="2" stroke="#0f0" strokeWidth="1.5" fill="none"/>
      <path d="M 4 12 L 14 18 L 24 12" stroke="#0f0" strokeWidth="1.5" fill="none"/>
      <circle cx="10" cy="15" r="2" fill="#0f0" opacity="0.6"/>
      <circle cx="18" cy="15" r="2" fill="#0f0" opacity="0.6"/>
      <line x1="4" y1="8" x2="0" y2="4" stroke="#0f0" strokeWidth="1.5" opacity="0.5"/>
      <line x1="24" y1="8" x2="28" y2="4" stroke="#0f0" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );
}

export function FarcasterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M 14 4 L 10 10 L 4 6 L 6 14 L 4 22 L 10 18 L 14 24 L 18 18 L 24 22 L 22 14 L 24 6 L 18 10 Z" stroke="#0f0" strokeWidth="1.5" fill="none"/>
      <line x1="10" y1="10" x2="18" y2="10" stroke="#0f0" strokeWidth="1" opacity="0.6"/>
      <line x1="10" y1="18" x2="18" y2="18" stroke="#0f0" strokeWidth="1" opacity="0.6"/>
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M 4 14 L 24 6 L 18 24 L 12 18 Z" stroke="#0f0" strokeWidth="1.5" fill="none"/>
      <line x1="12" y1="18" x2="24" y2="6" stroke="#0f0" strokeWidth="1" opacity="0.6"/>
      <line x1="12" y1="18" x2="14" y2="24" stroke="#0f0" strokeWidth="1.5"/>
      <line x1="4" y1="14" x2="24" y2="6" stroke="#0f0" strokeWidth="1.5"/>
    </svg>
  );
}

export function BioLinkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M 8 16 Q 4 16 4 12 Q 4 8 8 8 L 12 8 Q 16 8 16 12" stroke="#0f0" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 16 12 Q 20 12 20 16 Q 20 20 16 20 L 12 20 Q 8 20 8 16" stroke="#0f0" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="6" y1="14" x2="14" y2="14" stroke="#0f0" strokeWidth="1" strokeDasharray="2 2"/>
      <line x1="14" y1="14" x2="22" y2="14" stroke="#0f0" strokeWidth="1" strokeDasharray="2 2"/>
    </svg>
  );
}

export function SocialSidebar() {
  const socials = [
    { Icon: OpenSeaIcon, href: 'https://opensea.io/collection/thegoodlums', label: 'OpenSea' },
    { Icon: TwitterIcon, href: 'https://x.com/goodlumsnft', label: 'Twitter/X' },
    { Icon: DiscordIcon, href: 'https://discord.gg/goodlums', label: 'Discord' },
    { Icon: FarcasterIcon, href: 'https://warpcast.com/goodlums', label: 'Farcaster' },
    { Icon: TelegramIcon, href: 'https://t.me/goodlumsvip', label: 'Telegram' },
    { Icon: BioLinkIcon, href: 'https://bio.site/goodlums', label: 'Bio.link' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        left: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9980,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            border: '1px solid #0f0',
            backgroundColor: '#0a0a0a',
            transition: 'all 0.2s',
          }}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
