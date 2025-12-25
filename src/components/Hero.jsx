import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                {/* Simple Light Gradient Background */}
                <div className="hero-shape"></div>
            </div>

            <div className="container hero-content">
                <p className="hero-label text-orange">山形で一番、没頭できる場所</p>
                <h1 className="hero-title text-navy">
                    <span className="block">自分史上</span>
                    <span className="block text-gradient">最高の集中を</span>
                </h1>
                <p className="hero-subtitle text-sub">
                    家やカフェより静かで、図書館より自由。<br />
                    BOOST ROOMは、本気になれる自習室です。
                </p>

                {/* Campaign Banner - Light Style */}
                <div className="campaign-banner bg-white">
                    <p className="campaign-date text-orange">2026.1.5 オープン！</p>
                    <p className="campaign-offer text-navy">
                        2/28まで 入会金 <span className="strike text-sub">¥5,500</span> → <span className="highlight text-orange">¥0</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
