import './Corporate.css';

const Corporate = () => {
    return (
        <section id="corporate" className="corporate section-padding">
            <div className="container">
                <h2 className="section-title text-navy text-center">法人・スポンサー様へ</h2>
                <div className="title-underline bg-navy center-margin"></div>

                <div className="corporate-card bg-white">
                    <div className="corporate-content">
                        <h3 className="corp-heading">地元の高校生を共に応援しませんか？</h3>
                        <p className="corp-text">
                            BOOST ROOMでは、夢に向かって努力する高校生を支援してくださる<br className="desktop-br" />
                            法人様・スポンサー様を募集しております。
                        </p>
                        <p className="corp-text">
                            店内のサイネージ広告や、会員向けサンプリングなど、<br className="desktop-br" />
                            貴社のプロモーションと地域貢献を両立できるプランをご用意しております。
                        </p>
                        <div className="corp-cta">
                            <a
                                href="https://motivepower.co.jp/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-corp"
                            >
                                スポンサーに関するお問い合わせ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Corporate;
