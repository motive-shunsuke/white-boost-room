import './StickyCTA.css';
import { Instagram } from 'lucide-react';

const StickyCTA = () => {
    return (
        <div className="sticky-cta">
            <div className="sticky-cta-container">
                {/* Instagram removed for mobile sticky as requested */}

                <a
                    href="https://line.me/R/ti/p/@807fdfdt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn btn-line"
                >
                    <span className="btn-icon">LINE</span>
                    <span className="btn-text">
                        <span className="btn-main">LINEで予約・問い合わせ</span>
                        <span className="btn-sub">見学・体験入店もこちら</span>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default StickyCTA;
