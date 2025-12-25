import './Pricing.css';

const Pricing = () => {
    return (
        <section id="pricing" className="pricing section-padding">
            <div className="container">
                <h2 className="section-title text-navy text-center">料金プラン</h2>
                <div className="title-underline bg-orange center-margin"></div>

                {/* Campaign Banner - Simplified */}
                <div className="pricing-banner bg-white">
                    <div className="banner-content">
                        <span className="banner-badge">期間限定</span>
                        <span className="text-navy font-bold">入会金 5,500円</span>
                        <span className="arrow text-orange">→</span>
                        <span className="text-orange font-bold text-xl">0円</span>
                        <span className="text-sub text-sm ml-2">(2026/2/28まで)</span>
                    </div>
                </div>

                {/* Clean Table Layout */}
                <div className="pricing-wrapper">

                    {/* Headers */}
                    <div className="pricing-header-row">
                        <div className="ph-plan">プラン内容</div>
                        <div className="ph-price">社会人</div>
                        <div className="ph-price">学生</div>
                    </div>

                    {/* SPOT Section */}
                    <div className="plan-section-title">都度利用 (SPOT)</div>
                    <div className="pricing-item-row">
                        <div className="pi-info">
                            <div className="pi-name">1Hプラン</div>
                            <div className="pi-desc">ちょっとした隙間時間に</div>
                        </div>
                        <div className="pi-price">330<span className="unit">円/時</span></div>
                        <div className="pi-price">330<span className="unit">円/時</span></div>
                    </div>
                    <div className="pricing-item-row">
                        <div className="pi-info">
                            <div className="pi-name">1Dayプラン</div>
                            <div className="pi-desc">1日使い放題でたっぷり</div>
                        </div>
                        <div className="pi-price">1,200<span className="unit">円/日</span></div>
                        <div className="pi-price">1,200<span className="unit">円/日</span></div>
                    </div>

                    {/* Monthly Section */}
                    <div className="plan-section-title mt-6">月額会員 (MONTHLY)</div>

                    <div className="pricing-item-row recommended-row">
                        <div className="reco-label">人気 No.1</div>
                        <div className="pi-info">
                            <div className="pi-name text-orange">ハイブリッド</div>
                            <div className="pi-desc">平日ナイト(16:00~) ＋ 土日祝フル</div>
                        </div>
                        <div className="pi-price">8,800<span className="unit">円/月</span></div>
                        <div className="pi-price text-orange text-bold">6,600<span className="unit">円/月</span></div>
                    </div>

                    <div className="pricing-item-row">
                        <div className="pi-info">
                            <div className="pi-name">ベーシック</div>
                            <div className="pi-desc">全日 7:00〜22:00 フルタイム</div>
                        </div>
                        <div className="pi-price">9,900<span className="unit">円/月</span></div>
                        <div className="pi-price">7,700<span className="unit">円/月</span></div>
                    </div>

                    <div className="pricing-item-row">
                        <div className="pi-info">
                            <div className="pi-name">ナイト</div>
                            <div className="pi-desc">全日 16:00〜22:00</div>
                        </div>
                        <div className="pi-price">6,600<span className="unit">円/月</span></div>
                        <div className="pi-price">5,500<span className="unit">円/月</span></div>
                    </div>

                    <div className="pricing-item-row">
                        <div className="pi-info">
                            <div className="pi-name">ウィークデー</div>
                            <div className="pi-desc">平日 7:00〜22:00</div>
                        </div>
                        <div className="pi-price">7,700<span className="unit">円/月</span></div>
                        <div className="pi-price">5,500<span className="unit">円/月</span></div>
                    </div>

                    <div className="pricing-item-row">
                        <div className="pi-info">
                            <div className="pi-name">ウィークエンド</div>
                            <div className="pi-desc">土日祝 7:00〜22:00</div>
                        </div>
                        <div className="pi-price">5,500<span className="unit">円/月</span></div>
                        <div className="pi-price">4,400<span className="unit">円/月</span></div>
                    </div>

                    <div className="pricing-item-row">
                        <div className="pi-info">
                            <div className="pi-name">モーニング</div>
                            <div className="pi-desc">全日 7:00〜14:00</div>
                        </div>
                        <div className="pi-price">3,500<span className="unit">円/月</span></div>
                        <div className="pi-price">2,500<span className="unit">円/月</span></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
