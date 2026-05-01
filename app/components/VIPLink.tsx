'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VIPLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  platform?: string;
}

export function VIPLink({ href, children, className = '', platform = '' }: VIPLinkProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[99999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-black border-4 border-warning-red p-8 max-w-md w-full mx-4 relative"
              style={{ boxShadow: '0 0 30px #ff0000, inset 0 0 30px rgba(255,0,0,0.1)' }}
              initial={{ scale: 0.8, rotateZ: -2 }}
              animate={{ scale: 1, rotateZ: 0 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Warning stripes top */}
              <div
                className="absolute -top-2 left-0 right-0 h-3"
                style={{
                  background: 'repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #ffff00 10px, #ffff00 20px)',
                }}
              />

              <div className="text-center">
                <div
                  className="font-vt323 text-warning-red text-5xl mb-4"
                  style={{ animation: 'glitch 0.5s infinite' }}
                >
                  ACCESS DENIED
                </div>

                <div
                  className="font-vt323 text-analog-yellow text-3xl mb-4"
                  style={{ textShadow: '0 0 20px #ffff00' }}
                >
                  HOOD PASS REQUIRED
                </div>

                {platform && (
                  <p className="font-vt323 text-signal-green text-xl mb-4">
                    {platform.toUpperCase()} IS VIP ONLY
                  </p>
                )}

                <p className="font-courier text-signal-green text-sm mb-6 opacity-80">
                  This area is restricted to Hood Pass holders only.
                  Acquire a Hood Pass to unlock VIP access to Discord, Telegram,
                  and exclusive Goodlums content.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://opensea.io/collection/the-goodlums-hood-pass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-analog-yellow text-black font-vt323 text-xl py-3 px-6 hover:bg-warning-red hover:text-white transition-all"
                    style={{ boxShadow: '0 0 15px #ffff00' }}
                  >
                    GET HOOD PASS ON OPENSEA
                  </a>
                  <a
                    href="https://mint.club/token/base/HOODPASS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-transparent text-analog-yellow border-2 border-analog-yellow font-vt323 text-xl py-3 px-6 hover:bg-analog-yellow hover:text-black transition-all"
                  >
                    HOOD PASS v2 (MINT.CLUB)
                  </a>
                  <a
                    href="https://mint.club/token/base/HOODPASS3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-transparent text-signal-green border-2 border-signal-green font-vt323 text-xl py-3 px-6 hover:bg-signal-green hover:text-black transition-all"
                  >
                    HOOD PASS v3 (MINT.CLUB)
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="font-vt323 text-decay-gray text-lg hover:text-warning-red transition-colors"
                  >
                    [CLOSE]
                  </button>
                </div>
              </div>

              {/* Warning stripes bottom */}
              <div
                className="absolute -bottom-2 left-0 right-0 h-3"
                style={{
                  background: 'repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #ffff00 10px, #ffff00 20px)',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
