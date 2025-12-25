import { MapPin, Clock, Map as MapIcon } from 'lucide-react';
import './Access.css';

const Access = () => {
    return (
        <section id="access" className="access section-padding">
            <div className="container">
                <h2 className="section-title text-navy text-center">アクセス</h2>
                <div className="title-underline bg-orange center-margin"></div>

                <div className="access-content">
                    <div className="access-info bg-white">
                        <h3 className="store-name text-navy">BOOST ROOM <span className="text-orange text-sm">山形七日町店</span></h3>
                        <div>
                            <p className="address text-navy">
                                〒990-0042<br />
                                山形県山形市七日町1-2-42<br />
                                <span className="building text-navy">TAN6SQUARE 3階</span>
                            </p>
                            <div className="landmarks-container">
                                <span className="landmark-badge text-sub">アズ七日町すぐ</span>
                                <span className="landmark-badge text-sub">山形グランドホテル近く</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info-row">
                    <Clock className="text-orange flex-shrink-0" size={24} />
                    <div>
                        <p className="hours text-navy">7:00 〜 22:00</p>
                        <p className="days text-sub">年中無休（365日オープン）</p>
                    </div>
                </div>
            </div>

            <div className="map-container">
                {/* Google Maps Embed with Pin */}
                <iframe
                    src="https://maps.google.com/maps?q=山形県山形市七日町1-2-42+TAN6SQUARE&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                    className="map-iframe"
                ></iframe>
            </div>
        </section >
    );
};

export default Access;
