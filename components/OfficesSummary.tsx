'use client';

import React, { useRef } from 'react';
import './OfficesSummary.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsapConfig from '@/utils/gsapConfig';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const OfficesSummary = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        // Animate headline from left
        gsap.from('.hero_bottom-left-content', {
            x: -50,
            opacity: 0,
            duration: gsapConfig.duration.slow,
            ease: gsapConfig.ease.default,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
            },
        });

        // Animate office cards with stagger
        gsap.from('.hero_bottom-star-rating-wrapper', {
            y: 50,
            opacity: 0,
            duration: gsapConfig.duration.slow,
            ease: gsapConfig.ease.default,
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
        });

        // Animate star ratings with scale effect
        gsap.from('.star-rating', {
            scale: 0.8,
            opacity: 0,
            duration: gsapConfig.duration.slow,
            ease: gsapConfig.ease.bounce,
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 65%',
                toggleActions: 'play none none reverse',
            },
        });

        // Animate buttons
        gsap.from('.button-secondary', {
            scale: 0.9,
            opacity: 0,
            duration: gsapConfig.duration.normal,
            ease: gsapConfig.ease.default,
            stagger: 0.15,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%',
                toggleActions: 'play none none reverse',
            },
        });

    }, { scope: sectionRef });

    return (
        <div className="hero_bottom-content" ref={sectionRef}>
            <div className="container-large-3 is-hero-bottom">
                {/* Headline */}
                <div className="hero_bottom-left-content">
                    <div className="hero-bottom-text-2 text-size-large text-color-white">
                        Two Bay Area dental offices <br />worth smiling about
                    </div>
                </div>

                {/* San Francisco */}
                <div className="hero_bottom-star-rating-wrapper">
                    <div className="hero-bottom-text-2 text-size-large text-color-white">
                        San Francisco
                    </div>
                    <div className="star-rating-wrapper">
                        <img
                            src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/6230bfc886c8143202c440f3_start-rating-png%201.png"
                            loading="lazy"
                            height="32"
                            width="148"
                            alt="Five golden stars"
                            className="star-rating"
                        />
                        <div className="hero-bottom-text-2 text-size-regular text-color-white">
                            on Yelp & Google
                        </div>
                    </div>
                    <a href="#" className="button-secondary is-margin-auto">
                        Book Now
                    </a>
                </div>

                {/* Mountain View */}
                <div className="hero_bottom-star-rating-wrapper">
                    <div className="hero-bottom-text-2 text-size-large text-color-white">
                        Mountain View
                    </div>
                    <div className="star-rating-wrapper">
                        <img
                            src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/6230bfc886c8143202c440f3_start-rating-png%201.png"
                            loading="lazy"
                            height="32"
                            width="148"
                            alt="Five golden stars"
                            className="star-rating"
                        />
                        <div className="hero-bottom-text-2 text-size-regular text-color-white">
                            on Yelp & Google
                        </div>
                    </div>
                    <a href="#" className="button-secondary is-margin-auto">
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OfficesSummary;

