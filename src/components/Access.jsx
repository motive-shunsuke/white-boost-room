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

                        <div className="landmarks-container">
                            <span className="landmark-badge text-sub">アズ七日町すぐ</span>
                            <span className="landmark-badge text-sub">山形グランドホテル近く</span>
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
                {/* Google Maps Embed */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.887640398642!2d140.3396783764831!3d38.250556071866336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb67d66761763%3A0x6b87612d4a1127b3!2zY3lhbm4t772t772O!5e0!3m2!1sja!2sjp!4v1703487345678!5m2!1sja!2sjp"
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
        </div>
            </div >
        </section >
    );
};

export default Access;
