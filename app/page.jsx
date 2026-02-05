import HeroSection from './components/HeroSection';
import ServicePreview from './components/ServicePreview';
import PortfolioPreview from './components/PortfolioPreview';
import TrustSection from './components/TrustSection';
import FinalCTA from './components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicePreview />
      <PortfolioPreview />
      <TrustSection />
      <FinalCTA />
    </>
  );
}
