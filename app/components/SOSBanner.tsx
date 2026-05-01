'use client';

import { useState, useEffect } from 'react';

const messages = [
  { lang: 'binary', text: '01010011 01001111 01010011 -- 01000111 01001111 01001111 01000100 01001100 01010101 01001101 01010011' },
  { lang: 'hex', text: '0x534F53 -- 0x474F4F444C554D53' },
  { lang: 'en', text: 'SOS -- THE GOODLUMS: 500 UNIQUE NFTS ON BASE CHAIN. JOIN THE GANG. GET YOUR HOOD PASS.' },
  { lang: 'ja', text: 'SOS -- グッドルムズ: ベースチェーン上の500体のユニークなNFT。ギャングに参加して。フードパスを入手しよう。' },
  { lang: 'ru', text: 'SOS -- ГУДЛУМС: 500 УНИКАЛЬНЫХ NFT НА БЛОКЧЕЙНЕ BASE. ВСТУПАЙ В БАНДУ. ПОЛУЧИ HOOD PASS.' },
  { lang: 'ar', text: 'SOS -- جودلومز: 500 رمز NFT فريد على Base Chain. انضم إلى العصابة. احصل على بطاقة Hood Pass.' },
  { lang: 'he', text: 'SOS -- גודלומס: 500 NFT ייחודיים על Base Chain. הצטרף לכנופייה. קבל את ה-Hood Pass שלך.' },
  { lang: 'es', text: 'SOS -- GOODLUMS: 500 NFTS ÚNICOS EN BASE CHAIN. ÚNETE A LA BANDA. CONSIGUE TU HOOD PASS.' },
  { lang: 'fr', text: 'SOS -- GOODLUMS: 500 NFTS UNIQUES SUR BASE CHAIN. REJOINS LE GANG. OBTIENS TON HOOD PASS.' },
  { lang: 'nl', text: 'SOS -- GOODLUMS: 500 UNIEKE NFTS OP BASE CHAIN. SLUIT JE AAN BIJ DE BENDE. KRIJG JE HOOD PASS.' },
  { lang: 'zh', text: 'SOS -- GOODLUMS: Base Chain 上的 500 个独特 NFT。加入帮派。获取你的 Hood Pass。' },
];

export function SOSBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const message = messages[currentIndex].text;

    if (charIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayText(message.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      // Hold for 2 seconds then move to next
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setCharIndex(0);
        setDisplayText('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, charIndex]);

  return (
    <div className="fixed top-0 left-0 w-full bg-warning-red z-[10000] overflow-hidden">
      <div className="relative py-2 px-4">
        {/* Scrolling warning tape behind text */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="whitespace-nowrap text-black font-vt323 text-lg"
            style={{ animation: 'scroll-left 20s linear infinite' }}
          >
            {Array(20).fill('⚡ GOODLUMS COLLECTION ALERT ⚡ ').join('')}
          </div>
        </div>
        {/* Main text */}
        <p
          className="text-white font-vt323 text-lg text-center relative z-10 tracking-widest"
          style={{ minHeight: '1.5rem' }}
        >
          {displayText}
          <span className="animate-blink">_</span>
        </p>
      </div>
    </div>
  );
}
