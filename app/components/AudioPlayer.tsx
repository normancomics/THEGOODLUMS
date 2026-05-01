'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { GOODLUMS_TRACKS, SUNO_PLAYLIST_URL } from '@/lib/audio';
import type { Track } from '@/lib/types';

const basePath = '/THEGOODLUMS';

interface AudioPlayerProps {
  tracks?: Track[];
}

export function AudioPlayer({ tracks = GOODLUMS_TRACKS }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const attemptAutoplay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.volume = volume;
      await audio.play();
      setIsPlaying(true);
      setHasInteracted(true);
    } catch {
      // Browser blocked autoplay - user interaction required
      setIsPlaying(false);
    }
  }, [volume]);

  useEffect(() => {
    attemptAutoplay();
  }, [attemptAutoplay]);

  // Enable autoplay on first user interaction
  useEffect(() => {
    if (hasInteracted) return;

    const unlock = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try {
        audio.volume = volume;
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
        document.removeEventListener('click', unlock);
        document.removeEventListener('keydown', unlock);
      } catch {
        // still blocked
      }
    };

    document.addEventListener('click', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });
    return () => {
      document.removeEventListener('click', unlock);
      document.removeEventListener('keydown', unlock);
    };
  }, [hasInteracted, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setCurrentTrack((prev) => (prev + 1) % tracks.length);
    };

    const handleError = () => {
      setAudioError(true);
      setIsPlaying(false);
    };

    const handleCanPlay = () => {
      setAudioError(false);
      if (isPlaying) {
        audio.play().catch(() => {});
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [tracks.length, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  // Load new track
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setAudioError(false);
    setProgress(0);
    if (isPlaying) {
      audio.load();
      audio.play().catch(() => {});
    }
  }, [currentTrack]); // eslint-disable-line react-hooks/exhaustive-deps

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audio.currentTime = pct * audio.duration;
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const currentTime = audioRef.current
    ? (progress / 100) * (audioRef.current.duration || 0)
    : 0;

  if (isMinimized) {
    return (
      <div
        className="fixed top-[60px] right-4 z-[10000] bg-black border-2 border-signal-green flex items-center gap-2 px-3 py-2 cursor-pointer"
        style={{ boxShadow: '0 0 20px #00ff00' }}
        onClick={() => setIsMinimized(false)}
      >
        <div
          className="w-2 h-2 rounded-full bg-signal-green"
          style={{ animation: isPlaying ? 'blink 1s infinite' : 'none', boxShadow: '0 0 5px #00ff00' }}
        />
        <span className="font-vt323 text-signal-green text-sm">
          {isPlaying ? 'PLAYING' : 'PAUSED'} -- {tracks[currentTrack]?.title || 'GOODLUMS RADIO'}
        </span>
      </div>
    );
  }

  return (
    <div
      className="fixed top-[60px] right-4 z-[10000] bg-black border-2 border-signal-green p-4 w-80"
      style={{ boxShadow: '0 0 30px #00ff00, inset 0 0 10px rgba(0,255,0,0.1)', transform: 'rotate(-0.5deg)' }}
    >
      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.url}
        preload="auto"
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="font-vt323 text-warning-red text-lg" style={{ animation: 'glitch 3s infinite' }}>
          GOODLUMS RADIO
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="font-vt323 text-decay-gray hover:text-signal-green text-sm transition-colors"
          >
            [_]
          </button>
        </div>
      </div>

      {/* Suno logo */}
      <div className="flex items-center gap-2 mb-3">
        <Image
          src={`${basePath}/logos/suno.svg`}
          alt="Suno"
          width={20}
          height={20}
          unoptimized
        />
        <div className="font-vt323 text-signal-green text-sm truncate flex-1">
          {audioError ? (
            <span className="text-warning-red">SIGNAL LOST -- STREAM UNAVAILABLE</span>
          ) : (
            tracks[currentTrack]?.title || 'LOADING...'
          )}
        </div>
        {/* Playing indicator */}
        <div className="flex items-end gap-[2px] h-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[3px] bg-signal-green"
              style={{
                height: isPlaying ? `${Math.random() * 12 + 4}px` : '4px',
                animation: isPlaying ? `blink ${0.3 + i * 0.1}s infinite` : 'none',
                transition: 'height 0.1s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Artist */}
      <div className="font-vt323 text-analog-yellow text-sm mb-3">
        {tracks[currentTrack]?.artist || 'THE GOODLUMS'}
      </div>

      {/* Progress bar */}
      <div
        className="h-2 bg-gray-800 border border-signal-green mb-1 cursor-pointer relative overflow-hidden"
        onClick={seek}
      >
        <div
          className="h-full bg-signal-green transition-all"
          style={{ width: `${progress}%`, boxShadow: '0 0 8px #00ff00' }}
        />
        {/* Glitch effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%)',
            animation: 'scan 2s linear infinite',
          }}
        />
      </div>
      <div className="flex justify-between font-vt323 text-xs text-decay-gray mb-3">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-3">
        <button
          onClick={prevTrack}
          className="font-vt323 text-signal-green text-2xl hover:text-analog-yellow hover:scale-110 transition-all"
          title="Previous"
        >
          &lt;&lt;
        </button>
        <button
          onClick={togglePlay}
          className="font-vt323 text-2xl px-4 py-1 border-2 border-signal-green hover:bg-signal-green hover:text-black transition-all"
          style={{ boxShadow: '0 0 10px #00ff00', minWidth: '80px' }}
        >
          {isPlaying ? '[ PAUSE ]' : '[ PLAY ]'}
        </button>
        <button
          onClick={nextTrack}
          className="font-vt323 text-signal-green text-2xl hover:text-analog-yellow hover:scale-110 transition-all"
          title="Next"
        >
          &gt;&gt;
        </button>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-vt323 text-signal-green text-sm">VOL:</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="flex-1"
          style={{ accentColor: '#00ff00' }}
        />
        <span className="font-vt323 text-signal-green text-sm w-8 text-right">
          {Math.round(volume * 100)}
        </span>
      </div>

      {/* Playlist toggle */}
      <button
        onClick={() => setShowPlaylist(!showPlaylist)}
        className="w-full font-vt323 text-sm text-analog-yellow border border-analog-yellow py-1 hover:bg-analog-yellow hover:text-black transition-all mb-2"
      >
        {showPlaylist ? '[ HIDE PLAYLIST ]' : '[ SHOW PLAYLIST ]'}
      </button>

      {/* Playlist */}
      {showPlaylist && (
        <div className="border border-signal-green max-h-32 overflow-y-auto mb-2">
          {tracks.map((track, i) => (
            <button
              key={track.id}
              onClick={() => {
                setCurrentTrack(i);
                setIsPlaying(true);
              }}
              className={`w-full text-left font-vt323 text-sm px-2 py-1 hover:bg-signal-green hover:text-black transition-colors ${
                i === currentTrack ? 'bg-signal-green text-black' : 'text-signal-green'
              }`}
            >
              {String(i + 1).padStart(2, '0')} -- {track.title}
            </button>
          ))}
        </div>
      )}

      {/* Open full playlist */}
      <a
        href={SUNO_PLAYLIST_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 font-vt323 text-xs text-decay-gray hover:text-signal-green transition-colors"
      >
        <Image
          src={`${basePath}/logos/suno.svg`}
          alt="Suno"
          width={12}
          height={12}
          unoptimized
        />
        OPEN FULL PLAYLIST ON SUNO
      </a>

      {!hasInteracted && !isPlaying && (
        <div className="mt-2 text-center font-vt323 text-warning-red text-sm animate-blink">
          CLICK ANYWHERE TO ACTIVATE RADIO
        </div>
      )}
    </div>
  );
}
