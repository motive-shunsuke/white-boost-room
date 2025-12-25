import { Wifi, Coffee, BookOpen, Monitor, Activity, ShieldCheck } from 'lucide-react';
import './Features.css';

const Features = () => {
    // Services stay mostly the same but maybe smaller
    const services = [
        { icon: <Wifi size={24} />, label: "Wi-Fi" },
        { icon: <Coffee size={24} />, label: "フリードリンク" },
        { icon: <BookOpen size={24} />, label: "ライブラリ" },
        { icon: <Monitor size={24} />, label: "モニター貸出" },
        { icon: <Activity size={24} />, label: "ストレッチ" },
        { icon: <ShieldCheck size={24} />, label: "防犯カメラ", highlight: true },
    ];

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
