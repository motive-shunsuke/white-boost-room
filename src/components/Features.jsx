import { useState } from 'react';
import { Wifi, Coffee, BookOpen, Monitor, Activity, ShieldCheck, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import OptimizedImage from './OptimizedImage';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Features.css';

const Features = () => {
    // State now holds both the active gallery images and the current index
    const [lightboxState, setLightboxState] = useState({
        isOpen: false,
        images: [],
        currentIndex: 0
    });

    const services = [
        { icon: <Wifi size={24} />, label: "Wi-Fi" },
        { icon: <Coffee size={24} />, label: "フリードリンク" },
        { icon: <BookOpen size={24} />, label: "ライブラリ" },
        { icon: <Monitor size={24} />, label: "モニター貸出" },
        { icon: <Activity size={24} />, label: "ストレッチ" },
        { icon: <ShieldCheck size={24} />, label: "防犯カメラ", highlight: true },
    ];

    const loungeImages = [
        "/images/lounge/lounge-1.jpg",
        "/images/lounge/lounge-2.jpg",
        "/images/lounge/lounge-3.jpg"
    ];

    const focusImages = [
        "/images/focus/focus-1.jpg",
        "/images/focus/focus-2.jpg",
        "/images/focus/focus-3.jpg",
        "/images/focus/focus-4.jpg"
    ];

    const openLightbox = (images, index) => {
        setLightboxState({
            isOpen: true,
            images,
            currentIndex: index
        });
    };

    const closeLightbox = () => {
        setLightboxState(prev => ({ ...prev, isOpen: false }));
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setLightboxState(prev => ({
            ...prev,
            currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
        }));
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setLightboxState(prev => ({
            ...prev,
            currentIndex: prev.currentIndex === prev.images.length - 1 ? 0 : prev.currentIndex + 1
        }));
    };

    return (
        <section id="features" className="features section-padding">
            <div className="container">
                <h2 className="section-title text-navy text-center">特徴・設備</h2>
                <div className="title-underline bg-orange center-margin"></div>
                <p className="features-intro text-center text-sub mb-5">
                    勉強に集中するための環境を、<br className="mobile-only" />こだわり抜いて用意しました。
                </p>

                {/* Services Icons - Minimal */}
                <div className="services-bar">
                    {services.map((s, i) => (
                        <div key={i} className="service-pill">
                            <span className="text-orange service-icon-sm">{s.icon}</span>
                            <span className="service-text">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Areas - Better Cards */}
                <div className="area-guide-section">
                    <h3 className="text-center text-navy font-bold text-xl mb-4">選べる3つのエリア</h3>

                    <div className="area-cards-grid">
                        {/* Lounge */}
                        <div className="area-card">
                            <div className="area-header bg-lounge">
                                <span className="area-eng">LOUNGE</span>
                                <span className="area-jp">ラウンジエリア</span>
                            </div>
                            <div className="area-body">
                                <p>カフェのような開放的な空間。<br />友達と教え合ったり、リラックスしながらの学習に。</p>
                                <div className="area-tags">
                                    <span className="tag">会話OK</span>
                                    <span className="tag">飲食OK</span>
                                </div>

                                {/* Lounge Images Carousel */}
                                <div className="lounge-carousel-wrapper">
                                    <Swiper
                                        modules={[Pagination, Autoplay, Navigation]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                        navigation={true}
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                        className="lounge-swiper"
                                    >
                                        {loungeImages.map((src, index) => (
                                            <SwiperSlide key={index} onClick={() => openLightbox(loungeImages, index)}>
                                                <div className="lounge-slide-img-wrapper cursor-pointer">
                                                    <OptimizedImage
                                                        src={src}
                                                        alt={`ラウンジエリア 写真${index + 1}`}
                                                        aspectRatio="4/3"
                                                        className="lounge-slide-img"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <p className="text-center text-xs text-gray-400 mt-2">クリックで拡大</p>
                                </div>
                            </div>
                        </div>

                        {/* Focus */}
                        <div className="area-card">
                            <div className="area-header bg-focus">
                                <span className="area-eng">FOCUS</span>
                                <span className="area-jp">集中エリア</span>
                            </div>
                            <div className="area-body">
                                <p>パーティションで区切られた半個室。<br />周りを気にせず、自分の世界に没頭できます。</p>
                                <div className="area-tags">
                                    <span className="tag text-red">私語厳禁</span>
                                    <span className="tag">集中特化</span>
                                </div>

                                {/* Focus Images Carousel */}
                                <div className="lounge-carousel-wrapper">
                                    <Swiper
                                        modules={[Pagination, Autoplay, Navigation]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                        navigation={true}
                                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                                        className="lounge-swiper"
                                    >
                                        {focusImages.map((src, index) => (
                                            <SwiperSlide key={index} onClick={() => openLightbox(focusImages, index)}>
                                                <div className="lounge-slide-img-wrapper cursor-pointer">
                                                    <OptimizedImage
                                                        src={src}
                                                        alt={`集中エリア 写真${index + 1}`}
                                                        aspectRatio="4/3"
                                                        className="lounge-slide-img"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <p className="text-center text-xs text-gray-400 mt-2">クリックで拡大</p>
                                </div>
                            </div>
                        </div>

                        {/* Silent */}
                        <div className="area-card">
                            <div className="area-header bg-silent">
                                <span className="area-eng">SILENT</span>
                                <span className="area-jp">サイレントブース</span>
                            </div>
                            <div className="area-body">
                                <p>完全防音の個室ブース。<br />音読学習や、Web授業の受講にも最適です。</p>
                                <div className="area-tags">
                                    <span className="tag">完全個室</span>
                                    <span className="tag">通話OK</span>
                                </div>
                                <div className="lounge-carousel-wrapper coming-soon-wrapper">
                                    <div className="coming-soon-container">
                                        <p className="coming-soon-text">Coming Soon...</p>
                                        <p className="coming-soon-sub">写真は準備中です</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxState.isOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <X size={32} />
                        </button>

                        <button className="lightbox-nav lightbox-prev" onClick={handlePrevImage}>
                            <ChevronLeft size={24} />
                        </button>

                        <OptimizedImage
                            src={lightboxState.images[lightboxState.currentIndex]}
                            alt="エリア拡大写真"
                            className="lightbox-img"
                            priority={true}
                            style={{ maxWidth: '90vw', maxHeight: '80vh', width: 'auto', height: 'auto' }}
                        />

                        <button className="lightbox-nav lightbox-next" onClick={handleNextImage}>
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Features;
