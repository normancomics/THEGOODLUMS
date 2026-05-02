// Social links with actual platform SVG logos (no emojis)

interface SocialLink {
  name: string;
  url: string;
  color: string;
  vipOnly?: boolean;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'OpenSea', url: 'https://opensea.io/collection/thegoodlums', color: '#2081e2', label: 'OS' },
  { name: 'X / Twitter', url: 'https://x.com/thegoodlums', color: '#ffffff', label: 'X' },
  { name: 'Farcaster', url: 'https://farcaster.xyz/~/channel/thegoodlums', color: '#8a63d2', label: 'FC' },
  { name: 'Discord', url: 'https://discord.gg/bdAuGjBy7', color: '#5865f2', label: 'DC', vipOnly: true },
  { name: 'Telegram', url: 'https://t.me/thegoodlums', color: '#24a1de', label: 'TG', vipOnly: true },
  { name: 'Suno', url: 'https://suno.com/playlist/9cd81cff-725c-4f07-97ca-d8fd86c72810', color: '#ff6b00', label: '♫' },
];

// Minimal SVG icons for each platform (clean, no emoji)
function PlatformIcon({ name, color }: { name: string; color: string }) {
  switch (name) {
    case 'OpenSea':
      return (
        <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <circle cx="45" cy="45" r="40" fill={color} opacity="0.2" />
          <text x="45" y="55" textAnchor="middle" fill={color} fontSize="28" fontFamily="VT323,monospace" fontWeight="bold">OS</text>
        </svg>
      );
    case 'X / Twitter':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={color}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      );
    case 'Farcaster':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M11.39 5.7H18v2.43h-.62l.003 8.38h.617V19H14.2v-2.49h.619L14.816 8.13h-1.055l.003 8.38h.617V19h-3.82v-2.49h.617L11.18 8.13H10.12l.003 8.38H10.74V19H6.96v-2.49h.617L7.58 8.13H6.96V5.7h4.43z" fill={color} />
          <path d="M4.38 2.78h15.24v2.92H4.38V2.78z" fill={color} />
          <path d="M4.38 18.3h15.24v2.92H4.38V18.3z" fill={color} />
        </svg>
      );
    case 'Discord':
      return (
        <svg viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M216.856 16.597C203.21 10.163 188.566 5.45 173.22 2.793c-2.327 4.226-4.669 8.218-6.279 11.572-16.083-2.409-32.122-2.409-47.874 0-1.611-3.407-4.013-7.345-6.026-10.217-15.399 2.656-30.096 7.368-43.742 13.803C8.008 48.254-.856 78.594.068 108.481c15.658 11.639 30.83 18.699 45.759 23.335 3.663-4.994 6.931-10.301 9.75-15.883-5.366-2.023-10.502-4.508-15.362-7.426.394-.289.776-.593 1.144-.883 28.998 13.538 60.389 13.538 89.08 0 .374.29.756.594 1.144.883-4.864 2.92-10.005 5.405-15.366 7.426 2.819 5.582 6.086 10.889 9.75 15.883 14.932-4.636 30.101-11.696 45.762-23.335C258.895 78.594 249.888 48.254 216.856 16.597zM85.474 89.31c-7.95 0-14.458-7.345-14.458-16.342 0-9 6.357-16.343 14.458-16.343s14.609 7.347 14.458 16.343c0 9-6.357 16.342-14.458 16.342zm85.052 0c-7.95 0-14.458-7.345-14.458-16.342 0-9 6.354-16.343 14.458-16.343 8.101 0 14.609 7.347 14.458 16.343 0 9-6.354 16.342-14.458 16.342z" fill={color} />
        </svg>
      );
    case 'Telegram':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill={color} />
        </svg>
      );
    case 'Suno':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2" />
          <polygon points="9,7 19,12 9,17" fill={color} />
        </svg>
      );
    default:
      return <span style={{ color, fontSize: 14, fontFamily: 'VT323, monospace' }}>?</span>;
  }
}

export function SocialLinks() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name + (link.vipOnly ? ' (Hood Pass Required)' : '')}
          className="group relative w-10 h-10 border-2 flex items-center justify-center transition-all duration-200 hover:-translate-x-0.5 hover:scale-110"
          style={{
            background: '#000',
            borderColor: link.color,
            boxShadow: `0 0 6px ${link.color}55`,
          }}
        >
          <PlatformIcon name={link.name} color={link.color} />

          {/* VIP badge */}
          {link.vipOnly && (
            <div
              className="absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center"
              style={{ background: '#ffe600', fontSize: 6, fontFamily: 'Courier Prime, monospace', color: '#000' }}
            >
              V
            </div>
          )}

          {/* Tooltip */}
          <div
            className="absolute left-12 hidden group-hover:block bg-black text-xs px-2 py-1 whitespace-nowrap border z-50"
            style={{
              fontFamily: 'Courier Prime, monospace',
              color: link.color,
              borderColor: link.color,
            }}
          >
            {link.name}
            {link.vipOnly && ' [VIP]'}
          </div>
        </a>
      ))}
    </div>
  );
}
