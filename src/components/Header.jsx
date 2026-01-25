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
                    <a href="https://boost-room.com/" className="logo-link">
                        <img
                            src={logoImg}
                            alt="山形市の自習室 BoostRoom（ブーストルーム） ホーム"
                            className="header-logo-img"
                            width="40"
                            height="40"
                            fetchPriority="high"
                        />
                    </a>
                    <span className="text-navy">BOOST</span> <span className="text-orange">ROOM</span>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <a href="#features">特徴・設備</a>
                    <a href="#pricing">料金プラン</a>
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
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="メニューを開く">
                    {isMenuOpen ? <X size={28} color="var(--color-text-main)" /> : <Menu size={28} color="var(--color-text-main)" />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <a href="https://boost-room.com/#features" onClick={toggleMenu}>特徴・設備</a>
                    <a href="https://boost-room.com/#pricing" onClick={toggleMenu}>料金プラン</a>
                    <a href="https://boost-room.com/#access" onClick={toggleMenu}>アクセス</a>
                    <a href="https://line.me/R/ti/p/@807fdfdt" className="mobile-nav-cta bg-orange text-white" target="_blank" rel="noopener noreferrer">
                        LINEで予約
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
