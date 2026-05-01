import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'static-black': '#0a0a0a',
        'signal-green': '#00ff00',
        'warning-red': '#ff0000',
        'analog-yellow': '#ffff00',
        'dead-blue': '#0000ff',
        'rust-orange': '#cc5500',
        'decay-gray': '#3a3a3a',
        'glitch-cyan': '#00ffff',
        'deep-black': '#000000',
      },
      fontFamily: {
        vt323: ['VT323', 'monospace'],
        courier: ['Courier Prime', 'monospace'],
      },
      animation: {
        glitch: 'glitch 0.3s infinite',
        flicker: 'flicker 4s infinite',
        scanline: 'scanline 8s linear infinite',
        'scroll-left': 'scroll-left 30s linear infinite',
        typewriter: 'typewriter 3s steps(40) forwards',
        blink: 'blink 1s step-end infinite',
        'static-noise': 'staticNoise 0.2s infinite',
        'matrix-drop': 'matrixDrop 2s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.8' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.6' },
          '99%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        staticNoise: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        matrixDrop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        green: '0 0 20px #00ff00',
        'green-lg': '0 0 40px #00ff00',
        red: '0 0 20px #ff0000',
        yellow: '0 0 20px #ffff00',
        cyan: '0 0 20px #00ffff',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};

export default config;
