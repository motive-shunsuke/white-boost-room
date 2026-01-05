import './VideoSection.css';

const VideoSection = () => {
    return (
        <section className="video-section section-padding">
            <div className="container">
                <h2 className="section-title text-navy text-center">MOVIE</h2>
                <div className="title-underline bg-orange center-margin"></div>
                <p className="text-center text-sub mb-8">
                    施設の雰囲気を動画でご覧いただけます
                </p>

                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/omSkQ-Utu2g?si=F4dCH12KOXtCTUpf"
                        title="BoostRoom Promotion Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
