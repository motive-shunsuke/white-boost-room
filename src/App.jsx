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

// Bot detection function defined outside to be used for initial state
const detectBot = () => {
  if (typeof navigator === 'undefined') return false;
  return /googlebot|bingbot|applebot|baiduspider|crawler|spider|robots/i.test(navigator.userAgent.toLowerCase());
};

function App() {
  const [showAnimation, setShowAnimation] = useState(!detectBot());

  useEffect(() => {
    if (detectBot()) {
      document.body.classList.add('is-bot');
      setShowAnimation(false);
    }
  }, []);

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
