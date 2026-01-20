'use client';

import React, { useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsapConfig from '@/utils/gsapConfig';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        const isMobile = gsapConfig.isMobile();

        // Animate hero text content with stagger
        gsap.from('.hero-top-text', {
            y: 30,
            opacity: 0,
            duration: gsapConfig.duration.slow,
            ease: gsapConfig.ease.default,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        gsap.from('.h1.is-jumbo', {
            y: 50,
            opacity: 0,
            duration: gsapConfig.duration.verySlow,
            ease: gsapConfig.ease.default,
            delay: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        gsap.from('.hero-bottom-text.homepage', {
            y: 30,
            opacity: 0,
            duration: gsapConfig.duration.slow,
            ease: gsapConfig.ease.default,
            delay: 0.4,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        // Animate buttons with bounce effect
        gsap.from('.hero-actions button', {
            scale: 0.8,
            opacity: 0,
            duration: gsapConfig.duration.slow,
            ease: gsapConfig.ease.bounce,
            stagger: 0.1,
            delay: 0.6,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        // Enhanced parallax for image marquee (desktop only)
        if (!isMobile && marqueeRef.current) {
            gsap.to('.track-vertical', {
                y: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: marqueeRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        }

        // Fade in marquee images on mount
        gsap.from('.icon-container', {
            opacity: 0,
            scale: 0.95,
            duration: gsapConfig.duration.normal,
            stagger: 0.05,
            ease: gsapConfig.ease.default,
            delay: 0.8,
        });

    }, { scope: sectionRef });

    return (
        <section className="hero-section" ref={sectionRef}>
            <div className="hero-container">
                <div className="hero-content-left" ref={contentRef}>
                    <div className="hero_content-wrapper">
                        <div className="hero-top-text">Let us help you</div>
                        <h1 className="h1 is-jumbo">Reconnect with <br />your smile</h1>
                        <div className="hero-bottom-text homepage">
                            Saad Dental Studio brings you a modern, calming experience that leaves your teeth healthy and your soul rejuvenated.
                            <br /><br />
                            Come experience the modern, transformative way to receive dental care in San Francisco and Mountain View.
                        </div>
                    </div>

                    <div className="hero-actions">
                        <button className="btn-book-now-hero">Book Now</button>
                        <button className="btn-call-now-hero">Call Now</button>
                    </div>
                </div>

                <div className="hero-content-right">
                    <div className="marquee" ref={marqueeRef}>
                        <div className="marquee-cover"></div>
                        <div className="track-vertical">
                            <div className="flex-vertical marquee-fix">
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5d9fa61e2f88038d57_1.jpg" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5d9fa61e2f88038d57_1-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5d9fa61e2f88038d57_1.jpg 960w" alt="Inside of dentist office in San Francisco" className="icon-3" />
                                </div>
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e80490749e9d59736_2.webp" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e80490749e9d59736_2-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e80490749e9d59736_2.webp 960w" alt="Inside of Dentist office in Mountain View" className="icon-3" />
                                </div>
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5efdc36f55f398e9d8_3.jpg" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5efdc36f55f398e9d8_3-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5efdc36f55f398e9d8_3.jpg 960w" alt="Inside of Dentist office in Mountain View - third image" className="icon-3" />
                                </div>
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e89bf4f9d3e5d7a37_4.webp" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e89bf4f9d3e5d7a37_4-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e89bf4f9d3e5d7a37_4.webp 960w" alt="Inside of Dentist office in Mountain View - second image" className="icon-3" />
                                </div>
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e117a5d389a834c7c_5.webp" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e117a5d389a834c7c_5-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e117a5d389a834c7c_5.webp 960w" alt="Inside of Dentist office in San Francisco - third image" className="icon-3" />
                                </div>
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e8372d06a85dd0d5c_6.webp" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e8372d06a85dd0d5c_6-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e8372d06a85dd0d5c_6.webp 960w" alt="Inside of Dentist office in San Francisco - second image" className="icon-3" />
                                </div>
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e89bf4f59805d7a38_7.jpg" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e89bf4f59805d7a38_7-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e89bf4f59805d7a38_7.jpg 960w" alt="Inside of Dentist office in San Francisco - forth image" className="icon-3" />
                                </div>
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5ea5fea56ed8b875de_8.webp" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5ea5fea56ed8b875de_8-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5ea5fea56ed8b875de_8.webp 960w" alt="Inside of Dentist office in San Francisco - fifth image" className="icon-3" />
                                </div>
                                {/* Duplicated set for seamless marquee */}
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5d9fa61e2f88038d57_1.jpg" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5d9fa61e2f88038d57_1-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5d9fa61e2f88038d57_1.jpg 960w" alt="Inside of dentist office in San Francisco" className="icon-3" />
                                </div>
                                <div className="spacer-30 _15-xsvp"></div>
                                <div className="icon-container">
                                    <img src="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e80490749e9d59736_2.webp" sizes="(max-width: 479px) 100vw, 240px" srcSet="https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e80490749e9d59736_2-p-500.webp 500w, https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e80490749e9d59736_2.webp 960w" alt="Inside of Dentist office in Mountain View" className="icon-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

