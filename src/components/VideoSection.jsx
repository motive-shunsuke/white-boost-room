import './VideoSection.css';

const VideoSection = () => {
    return (
        <section className="video-section section-padding">
            <div className="container">
                <h2 className="section-title text-navy text-center">MEDIA</h2>
                <div className="title-underline bg-orange center-margin"></div>

                <div className="text-center mb-8">
                    <p className="text-xl font-bold text-navy mb-2">
                        山形テレビ（YTS）にて特集放映
                    </p>
                    <p className="text-sub video-description">
                        当施設の先進的な学習環境が、地域メディアにて特集されました。<br />
                        放送内容は下記よりご覧いただけます。
                    </p>
                </div>

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
