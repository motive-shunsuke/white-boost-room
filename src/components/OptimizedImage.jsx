import { useState, useRef, useEffect } from 'react';

/**
 * 最適化された画像コンポーネント
 * - lazy loading対応
 * - aspect-ratioでCLS防止
 * - 適切なalt属性必須
 */
const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    aspectRatio,
    className = '',
    priority = false,
    onClick,
    style = {}
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef(null);

    useEffect(() => {
        if (priority) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    const containerStyle = {
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f1f5f9',
        ...(aspectRatio ? { aspectRatio } : {}),
        ...(width && height && !aspectRatio ? { width, height } : {}),
        ...style
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
    };

    return (
        <div
            ref={imgRef}
            className={`optimized-image-container ${className}`}
            style={containerStyle}
            onClick={onClick}
        >
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding={priority ? 'sync' : 'async'}
                    fetchPriority={priority ? 'high' : 'auto'}
                    onLoad={() => setIsLoaded(true)}
                    style={imgStyle}
                />
            )}
        </div>
    );
};

export default OptimizedImage;
