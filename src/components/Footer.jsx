import { Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-white section-padding-sm">
            <div className="container">

                {/* SNS Buttons Section */}
                <div className="sns-section">
                    <h3 className="sns-title mb-4">公式SNS</h3>
                    <div className="sns-buttons-container">
                        {/* Instagram Button */}
                        <a
                            href="https://www.instagram.com/boostroom_official/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sns-btn btn-insta-footer"
                        >
                            <div className="sns-icon-wrapper">
                                <Instagram size={28} />
                            </div>
                            <div className="sns-text-col">
                                <span className="sns-label">@boostroom_official</span>
                                <span className="sns-sub">最新情報</span>
                            </div>
                        </a>

                        {/* LINE Button */}
                        <a
                            href="https://line.me/R/ti/p/@807fdfdt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sns-btn btn-line-footer"
                        >
                            <div className="sns-icon-wrapper">
                                <span className="line-icon-text">LINE</span>
                            </div>
                            <div className="sns-text-col">
                                <span className="sns-label">LINE公式アカウント</span>
                                <span className="sns-sub">入館証発行・お問い合わせ</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo text-navy">
                        <a href="https://boost-room.com/">
                            BOOST <span className="text-orange">ROOM</span>
                        </a>
                    </div>
                    <p className="copyright text-sub">&copy; {new Date().getFullYear()} 山形市の自習室 BOOST ROOM. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
