import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vt323: ['VT323', 'monospace'],
        courier: ['Courier Prime', 'Courier New', 'monospace'],
      },
      colors: {
        'decay-gray': '#1a1a1a',
        'rust': '#8B4513',
        'acid-green': '#00ff00',
        'neon-yellow': '#FFE600',
      },
      animation: {
        'glitch': 'glitch 0.5s infinite',
        'flicker': 'flicker 0.15s infinite',
        'scan': 'scan 8s linear infinite',
        'tv-static': 'tv-static 0.2s infinite',
        'type-out': 'typeOut 4s steps(40) infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'matrix-fall': 'matrixFall 2s linear infinite',
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
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
      boxShadow: {
        'chunky': '0 6px 0 #000, 0 10px 0 #0a0, 0 14px 0 #000, 0 18px 25px rgba(0,0,0,0.4)',
        'chunky-hover': '0 10px 0 #000, 0 14px 0 #0a0, 0 18px 0 #000, 0 22px 35px rgba(0,0,0,0.5)',
        'chunky-active': '0 3px 0 #000, 0 5px 0 #0a0, 0 7px 15px rgba(0,0,0,0.3)',
        'neon-green': '0 0 20px #00ff00, 0 0 40px #00ff00',
        'neon-yellow': '0 0 20px #FFE600, 0 0 40px #FFE600',
      },
    },
  },
  plugins: [],
};

export default config;
