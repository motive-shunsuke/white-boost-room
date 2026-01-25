import { useEffect, useState } from 'react';
import './OpeningAnimation.css';
import logoLine from '../assets/logo-animation.png';

const OpeningAnimation = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Show for 0.8 seconds, then start exit
        const timer1 = setTimeout(() => {
            setIsExiting(true);
        }, 800);

        // Notify parent after animation finishes
        // 0.8s wait + 2.2s animation = 3.0s total
        const timer2 = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <div className={`opening-overlay ${isExiting ? 'exit' : ''}`}>
            <div className="opening-logo-container">
                <img
                    src={logoLine}
                    alt="BOOST ROOM"
                    className="opening-logo"
                    width="200"
                    height="200"
                    fetchPriority="high"
                />
            </div>
        </div>
    );
};

export default OpeningAnimation;
