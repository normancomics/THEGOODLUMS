import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        staticBlack: '#0a0a0a',
        signalGreen: '#0f0',
        warningRed: '#ff0000',
        analogYellow: '#ffff00',
        deadBlue: '#00008b',
        rustOrange: '#cc5500',
        decayGray: '#3a3a3a',
        glitchCyan: '#00ffff',
        noiseWhite: '#f0f0f0',
      },
      fontFamily: {
        vt323: ['VT323', 'monospace'],
        courier: ['Courier Prime', 'monospace'],
      },
      animation: {
        glitch: 'glitch 1s infinite',
        flicker: 'flicker 0.15s infinite',
        scanline: 'scanline 6s linear infinite',
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        scanline: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
