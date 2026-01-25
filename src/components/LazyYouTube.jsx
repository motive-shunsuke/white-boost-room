import { useState, useRef, useEffect } from 'react';
import './LazyYouTube.css';

/**
 * YouTube動画の遅延読み込みコンポーネント
 * - プレースホルダー表示でLCP改善
 * - クリック時のみiframe読み込み
 * - Intersection Observerで画面内判定
 */
const LazyYouTube = ({
    videoId,
    title = 'YouTube Video',
    aspectRatio = '16/9'
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    // YouTube動画のサムネイルURL（高品質版）
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleClick = () => {
        setIsLoaded(true);
    };

    return (
        <div
            ref={containerRef}
            className="lazy-youtube-container"
            style={{ aspectRatio }}
        >
            {isLoaded ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="lazy-youtube-iframe"
                />
            ) : (
                <button
                    className="lazy-youtube-placeholder"
                    onClick={handleClick}
                    aria-label={`${title}を再生`}
                >
                    {isInView && (
                        <img
                            src={thumbnailUrl}
                            alt={title}
                            className="lazy-youtube-thumbnail"
                            loading="lazy"
                        />
                    )}
                    <div className="lazy-youtube-play-btn">
                        <svg viewBox="0 0 68 48" width="68" height="48">
                            <path
                                d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                                fill="#f00"
                            />
                            <path d="M45 24L27 14v20" fill="#fff" />
                        </svg>
                    </div>
                </button>
            )}
        </div>
    );
};

export default LazyYouTube;
