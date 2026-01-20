import React from 'react';
import {
    Cpu,
    Tv,
    Coffee,
    Wifi,
    Wind,
    SlidersHorizontal,
    Layers,
    ScanLine,
    EyeOff,
    Sparkles
} from 'lucide-react';
import './Amenities.css';

const Amenities = () => {
    const amenities = [
        { icon: <ScanLine />, label: 'Hi-Tech Equipment' },
        { icon: <Coffee />, label: 'Beverage Station' },
        { icon: <Cpu />, label: 'AI Powered Dentistry' },
        { icon: <Wifi />, label: 'Wifi' },
        { icon: <Tv />, label: 'Netflix/Spotify' },
        { icon: <Wind />, label: 'Aromatherapy' },
        { icon: <EyeOff />, label: 'Heated-Eye Mask' },
        { icon: <SlidersHorizontal />, label: 'Bespoke Oral-Care Amenities' },
        { icon: <Layers />, label: 'Soft, 100% Cotton Blankets' },
        { icon: <Sparkles />, label: 'Curated Selection Of Oral Care Products' }
    ];

    return (
        <section className="amenities-section">
            <div className="amenities-container">
                <div className="amenities-text-content">
                    <h2 className="amenities-title">
                        Your dental<br />
                        needs, in one<br />
                        place
                    </h2>
                    <p className="amenities-description">
                        Zen Dental Studio provides a range of restorative, preventative and cosmetic treatments to keep your teeth safe and healthy. A dentist in San Francisco you can count on.
                    </p>
                </div>

                <div className="amenities-grid">
                    {amenities.map((item, index) => (
                        <div key={index} className="amenity-item">
                            <div className="amenity-icon-wrapper">
                                {React.cloneElement(item.icon as React.ReactElement, {
                                    size: 28,
                                    strokeWidth: 1.5
                                })}
                            </div>
                            <span className="amenity-label">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
