import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import Pricing from './components/Pricing';
import Access from './components/Access';
import Corporate from './components/Corporate';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import OpeningAnimation from './components/OpeningAnimation';
import './App.css';

function App() {
  // bot-detection to skip animation for SEO crawlers
  const isBot = () => {
    const ua = navigator.userAgent.toLowerCase();
    return /googlebot|bingbot|crawler|spider|robots/i.test(ua);
  };

  const [showAnimation, setShowAnimation] = useState(!isBot());

  // Dispatch event for prerenderer when content is ready
  useEffect(() => {
    if (!showAnimation) {
      document.dispatchEvent(new Event('render-complete'));
    }
  }, [showAnimation]);
  return (
    <div className="app-container">
      {showAnimation && (
        <OpeningAnimation onComplete={() => setShowAnimation(false)} />
      )}

      <Header />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <VideoSection />
        <Access />
        <Corporate />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}

export default App;
