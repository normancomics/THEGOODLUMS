'use client';

import { useEffect, useRef, useState } from 'react';

const SOS_MESSAGES = [
  { lang: 'Binary', text: '01010011 01001111 01010011' },
  { lang: 'Hex', text: '53 4F 53' },
  { lang: 'English', text: 'SOS — SAVE OUR SOULS' },
  { lang: 'Japanese', text: '助けてください' },
  { lang: 'Russian', text: 'СПАСИТЕ НАС' },
  { lang: 'Arabic', text: 'أنقذونا' },
  { lang: 'Hebrew', text: 'הצילו אותנו' },
  { lang: 'Spanish', text: 'SALVA NUESTRAS ALMAS' },
  { lang: 'French', text: 'SAUVEZ NOS ÂMES' },
  { lang: 'Dutch', text: 'RED ONZE ZIELEN' },
  { lang: 'Chinese', text: '救救我们' },
  { lang: 'GOODLUMS', text: 'NO WIFI. NO PROBLEM. JOIN OR PERISH.' },
];

export function SOSBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const message = SOS_MESSAGES[currentIndex];
    const fullText = `[${message.lang}] ${message.text}`;
    let charIndex = 0;
    setDisplayText('');
    setIsTyping(true);

    function typeChar() {
      if (charIndex < fullText.length) {
        setDisplayText(fullText.slice(0, charIndex + 1));
        charIndex++;
        typeRef.current = setTimeout(typeChar, 60);
      } else {
        setIsTyping(false);
        // Hold for 1.5s then switch
        typeRef.current = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % SOS_MESSAGES.length);
        }, 1500);
      }
    }

    typeRef.current = setTimeout(typeChar, 100);

    return () => {
      if (typeRef.current) clearTimeout(typeRef.current);
    };
  }, [currentIndex]);

  return (
    <div
      className="w-full py-3 px-4 flex items-center justify-center gap-3 overflow-hidden border-b-2 border-red-600"
      style={{ background: '#0a0', borderTop: '2px solid #cc0000' }}
    >
      {/* Blinking SOS */}
      <span
        className="text-black font-black px-2 py-0.5 text-sm animate-pulse"
        style={{
          background: '#cc0000',
          fontFamily: 'Courier Prime, monospace',
          letterSpacing: '0.2em',
          flexShrink: 0,
        }}
      >
        SOS
      </span>

      {/* Scrolling message */}
      <span
        className="text-black text-sm md:text-base truncate"
        style={{ fontFamily: 'Courier Prime, monospace', letterSpacing: '0.1em' }}
      >
        {displayText}
        {isTyping && <span className="animate-blink">█</span>}
      </span>

      {/* Language indicator */}
      <span
        className="text-black/60 text-xs hidden md:block"
        style={{ fontFamily: 'Courier Prime, monospace', flexShrink: 0 }}
      >
        [{currentIndex + 1}/{SOS_MESSAGES.length}]
      </span>
    </div>
  );
}
