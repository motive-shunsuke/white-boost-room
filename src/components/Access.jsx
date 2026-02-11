import { MapPin, Clock, ExternalLink } from 'lucide-react';
import './Access.css';

const Access = () => {
    return (
        <section id="access" className="access section-padding">
            <div className="container">
                <h2 className="section-title text-navy text-center">アクセス</h2>
                <div className="title-underline bg-orange center-margin"></div>

                <div className="access-content">
                    {/* Left Side: Info */}
                    <div className="access-info bg-white">
                        <h3 className="store-name text-navy">BOOST ROOM</h3>

                        {/* Address Section */}
                        <div className="info-row">
                            <MapPin className="text-orange flex-shrink-0" size={24} />
                            <div>
                                <p className="address text-navy">
                                    〒990-0042<br />
                                    山形県山形市七日町1-2-42<br />
                                    <span className="building text-navy">TAN6SQUARE 3階奥 東側</span>
                                </p>
                                <div className="landmarks-container">
                                    <span className="landmark-badge text-sub">アズ七日町すぐ</span>
                                    <span className="landmark-badge text-sub">山形グランドホテル近く</span>
                                </div>
                            </div>
                        </div>

                        {/* Hours Section */}
                        <div className="info-row">
                            <Clock className="text-orange flex-shrink-0" size={24} />
                            <div>
                                <p className="hours text-navy">7:00 〜 22:00</p>
                                <p className="days text-sub">年中無休（365日オープン）</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Map */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.195238356047!2d140.3379578!3d38.2517777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb79ab64578b3%3A0xc121bd26dd0ec389!2z5bGx5b2i5LiD5pel55S66Ieq57-S5a6kIEJvb3N0Um9vbSDjgrPjg6_jg7zjgq3jg7PjgrDjgrnjg5rjg7zjgrkv44K344Kn44Ki44Op44Km44Oz44K4!5e0!3m2!1sja!2sjp!4v1770815326874!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps - 山形七日町自習室 BoostRoom"
                            className="map-iframe"
                        ></iframe>
                        <div className="map-link-container">
                            <a
                                href="https://maps.app.goo.gl/JX4znJ4uADRRpPnR8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-external-link"
                            >
                                <ExternalLink size={16} style={{ marginRight: '8px' }} />
                                Google マップで見る
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Access;
