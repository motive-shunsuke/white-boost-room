import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Access from './components/Access';
import Corporate from './components/Corporate';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Access />
        <Corporate />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}

export default App;
