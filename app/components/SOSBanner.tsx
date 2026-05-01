'use client';

import { useState, useEffect } from 'react';

const SOS_MESSAGES = [
  '01010011 01001111 01010011',
  '0x534F53',
  'SOS - GOODLUMS COLLECTION ALERT',
  'SOS - \u30B0\u30C3\u30C9\u30EB\u30E0\u30BA\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u8B66\u544A',
  'SOS - \u041F\u0420\u0415\u0414\u0423\u041F\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0415 \u041A\u041E\u041B\u041B\u0415\u041A\u0426\u0418\u0418 GOODLUMS',
  'SOS - \u062A\u0646\u0628\u064A\u0647 \u0645\u062C\u0645\u0648\u0639\u0629 \u062C\u0648\u062F\u0644\u0648\u0645\u0632',
  'SOS - \u05D4\u05EA\u05E8\u05D0\u05EA \u05D0\u05D5\u05E1\u05E3 \u05D2\u05D5\u05D3\u05DC\u05D5\u05DE\u05E1',
  'SOS - ALERTA DE COLECCION GOODLUMS',
  'SOS - ALERTE COLLECTION GOODLUMS',
  'SOS - GOODLUMS COLLECTIE WAARSCHUWING',
  'SOS - GOODLUMS \u6536\u85CF\u8B66\u62A5',
];

export default function SOSBanner() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const message = SOS_MESSAGES[messageIndex];
    if (charIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayed(message.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % SOS_MESSAGES.length);
        setCharIndex(0);
        setDisplayed('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, messageIndex]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        backgroundColor: '#ff0000',
        padding: '4px 0',
        overflow: 'hidden',
        borderBottom: '2px solid #fff',
      }}
    >
      <div
        style={{
          fontFamily: 'VT323, monospace',
          fontSize: '18px',
          color: '#ffffff',
          textAlign: 'center',
          letterSpacing: '2px',
          animation: 'flicker 3s infinite',
          minHeight: '24px',
        }}
      >
        ⚠️ {displayed}▌
      </div>
    </div>
  );
}
