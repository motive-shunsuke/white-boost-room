import { useEffect, useState } from 'react';
import './OpeningAnimation.css';
import logoLine from '../assets/logo-animation.png';

const OpeningAnimation = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Show for 1.5 seconds, then start exit
        const timer1 = setTimeout(() => {
            setIsExiting(true);
        }, 1500);

        // Notify parent after animation finishes
        // 1.5s wait + 4.0s animation + 0.5s buffer
        const timer2 = setTimeout(() => {
            onComplete();
        }, 6000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <div className={`opening-overlay ${isExiting ? 'exit' : ''}`}>
            <div className="opening-logo-container">
                <img src={logoLine} alt="BOOST ROOM" className="opening-logo" />
            </div>
        </div>
    );
};

export default OpeningAnimation;
