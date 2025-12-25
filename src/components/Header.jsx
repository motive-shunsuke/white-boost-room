import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logoImg from '../assets/logo-animation.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <img src={logoImg} alt="Logo" className="header-logo-img" />
                    <span className="text-navy">BOOST</span> <span className="text-orange">ROOM</span>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <a href="#features">特徴</a>
                    <a href="#pricing">料金</a>
                    <a href="#access">アクセス</a>
                    <a
                        href="https://line.me/R/ti/p/@807fdfdt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-line-btn"
                    >
                        LINEで質問・相談
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
                    {isMenuOpen ? <X size={28} color="var(--color-text-main)" /> : <Menu size={28} color="var(--color-text-main)" />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#features" onClick={toggleMenu}>特徴</a>
                    <a href="#pricing" onClick={toggleMenu}>料金</a>
                    <a href="#access" onClick={toggleMenu}>アクセス</a>
                    <a href="https://line.me/R/ti/p/@807fdfdt" className="mobile-nav-cta bg-orange text-white" target="_blank" rel="noopener noreferrer">
                        LINEで予約
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
