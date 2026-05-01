'use client';

import { useState } from 'react';

interface VIPLinkProps {
  href: string;
  label: string;
  icon?: string;
}

export default function VIPLink({ href, label, icon = '🔒' }: VIPLinkProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{
          fontFamily: 'VT323, monospace',
          fontSize: '20px',
          letterSpacing: '2px',
          padding: '12px 24px',
          backgroundColor: 'transparent',
          color: '#ffd700',
          border: '2px solid #ffd700',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 0 10px #ffd70040',
          transition: 'all 0.2s',
        }}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </button>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: '#0a0a0a',
              border: '2px solid #ffd700',
              boxShadow: '0 0 30px #ffd700',
              padding: '32px',
              maxWidth: '400px',
              width: '90%',
              fontFamily: 'VT323, monospace',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔐</div>
            <h2 style={{ color: '#ffd700', fontSize: '28px', letterSpacing: '3px', marginBottom: '12px' }}>
              HOOD PASS REQUIRED
            </h2>
            <p style={{ color: '#888', fontSize: '16px', marginBottom: '24px', lineHeight: 1.4 }}>
              THIS AREA IS RESTRICTED TO GOODLUMS HOOD PASS HOLDERS ONLY.
              ACQUIRE A HOOD PASS NFT TO GAIN ACCESS.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <a
                href="https://opensea.io/collection/the-goodlums-hood-pass"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  backgroundColor: '#ffd700',
                  color: '#0a0a0a',
                  padding: '10px 20px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  letterSpacing: '2px',
                }}
              >
                🌊 HOOD PASS ON OPENSEA
              </a>
              <a
                href="https://mint.club/token/base/HOODPASS"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  backgroundColor: '#cc5500',
                  color: '#fff',
                  padding: '10px 20px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  letterSpacing: '2px',
                }}
              >
                ⛏ HOOD PASS v2 (MINT.CLUB)
              </a>
              <a
                href="https://mint.club/token/base/HOODPASS3"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  backgroundColor: '#4169e1',
                  color: '#fff',
                  padding: '10px 20px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  letterSpacing: '2px',
                }}
              >
                ⛏ HOOD PASS v3 (MINT.CLUB)
              </a>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  border: '1px solid #666',
                  color: '#666',
                  padding: '10px 20px',
                  fontSize: '16px',
                  textDecoration: 'none',
                  letterSpacing: '1px',
                }}
              >
                CONTINUE ANYWAY (LIMITED ACCESS)
              </a>
            </div>
            <button
              onClick={() => setShowModal(false)}
              style={{
                background: 'none',
                border: '1px solid #ff0000',
                color: '#ff0000',
                cursor: 'pointer',
                padding: '6px 16px',
                fontFamily: 'VT323, monospace',
                fontSize: '16px',
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
