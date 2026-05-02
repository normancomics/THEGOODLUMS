import { Navigation } from './components/Navigation';
import { SOSBanner } from './components/SOSBanner';
import { Hero } from './components/Hero';
import { StatsDashboard } from './components/StatsDashboard';
import { NFTGrid } from './components/NFTGrid';
import { GangAffiliates } from './components/GangAffiliates';
import { HoodPassSection } from './components/HoodPassSection';
import { AudioPlayer } from './components/AudioPlayer';
import { SocialLinks } from './components/SocialLinks';
import { TerminalFooter } from './components/TerminalFooter';

export default function Home() {
  return (
    <>
      {/* Fixed overlays */}
      <SocialLinks />
      <AudioPlayer />

      {/* SOS ticker */}
      <SOSBanner />

      {/* Sticky nav */}
      <Navigation />

      {/* Main sections */}
      <main>
        <Hero />
        <StatsDashboard />
        <NFTGrid />
        <GangAffiliates />
        <HoodPassSection />
      </main>

      <TerminalFooter />
    </>
  );
}
