'use client';

import { useState, useEffect } from 'react';

const SOS_MESSAGES = [
  '01010011 01001111 01010011',
  '0x534F53',
  'SOS - GOODLUMS COLLECTION ALERT',
  'SOS - GOODLUMS COLLECTION ALERT',
  'SOS - ALERTA DE COLECCION GOODLUMS',
  'SOS - ALERTE COLLECTION GOODLUMS',
  'SOS - GOODLUMS COLLECTIE WAARSCHUWING',
  'SOS - GOODLUMS COLLECTION ALERT [BASE CHAIN]',
  'SOS - HOOD PASS REQUIRED',
  'SOS - 500 SUSPECTS IDENTIFIED',
  'SOS - GANG FREQUENCIES DETECTED',
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
