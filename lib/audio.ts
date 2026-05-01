import type { Track } from './types';

// Suno playlist: https://suno.com/playlist/9cd81cff-725c-4f07-97ca-d8fd86c72810
// Tracks from The Goodlums - update with actual track IDs from Suno
export const GOODLUMS_TRACKS: Track[] = [
  {
    id: 'goodlums-1',
    title: 'POST-APOCALYPTIC ANTHEM',
    artist: 'THE GOODLUMS',
    url: 'https://cdn1.suno.ai/9cd81cff-725c-4f07-97ca-d8fd86c72810.mp3',
    duration: 180,
  },
  {
    id: 'goodlums-2',
    title: 'HOOD PASS VIBES',
    artist: 'THE GOODLUMS',
    url: 'https://cdn1.suno.ai/hood-pass-vibes.mp3',
    duration: 210,
  },
  {
    id: 'goodlums-3',
    title: 'SIGNAL LOST',
    artist: 'THE GOODLUMS',
    url: 'https://cdn1.suno.ai/signal-lost.mp3',
    duration: 195,
  },
  {
    id: 'goodlums-4',
    title: 'BASE CHAIN BANGERS',
    artist: 'THE GOODLUMS',
    url: 'https://cdn1.suno.ai/base-chain-bangers.mp3',
    duration: 225,
  },
  {
    id: 'goodlums-5',
    title: 'GANG AFFILIATED',
    artist: 'THE GOODLUMS',
    url: 'https://cdn1.suno.ai/gang-affiliated.mp3',
    duration: 168,
  },
];

export const SUNO_PLAYLIST_URL = 'https://suno.com/playlist/9cd81cff-725c-4f07-97ca-d8fd86c72810';
