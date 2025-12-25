import { useEffect, useState } from 'react';
import './OpeningAnimation.css';
import logoLine from '../assets/logo-animation.jpg';

const OpeningAnimation = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Show for 1.5 seconds, then start exit
        const timer1 = setTimeout(() => {
            setIsExiting(true);
        }, 1500);

        // Notify parent after animation finishes
        const timer2 = setTimeout(() => {
            onComplete();
        }, 5500); // 1.5s + 3.5s animation cushion

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
