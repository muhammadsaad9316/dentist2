'use client';

import React, { useRef } from 'react';
import './FeatureCarousel.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const FeatureCarousel = () => {
    const containerRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const dotsRef = useRef<HTMLButtonElement[]>([]);

    const features = [
        {
            emoji: '🔍',
            title: 'Led by Trust and Transparency',
            text: 'Expect full transparency on every treatment from start to finish and understand the cost of every procedure before it begins.'
        },
        {
            emoji: '😌',
            title: 'Anxiety-free dentistry',
            text: 'Put your dental anxieties to rest in our modern offices, designed by experts to serve as an oasis of calm and tranquility.'
        },
        {
            emoji: '🤝',
            title: 'A team you can count on',
            text: 'Every member of our team is focused on ensuring you receive clear, compassionate, and delightful treatments.'
        },
        {
            emoji: '🚀',
            title: 'Dentistry for the modern age',
            text: 'Book appointments, fill out patient forms, and make payments with ease - all online!'
        }
    ];

    useGSAP(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const cards = cardsRef.current;
        const dots = dotsRef.current;
        const totalSlides = features.length;
        const isMobile = window.innerWidth <= 768;

        // Create timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'center center',
                end: () => `+=${container.offsetHeight * (totalSlides - 1)}`,
                scrub: 1,
                pin: true,
                snap: {
                    snapTo: 1 / (totalSlides - 1),
                    duration: 0.5,
                    ease: 'power2.inOut'
                },
            }
        });

        // Initial setup - position cards off-screen
        cards.forEach((card, i) => {
            if (i === 0) {
                // First card starts visible
                gsap.set(card, {
                    opacity: 1,
                    scale: 1,
                    xPercent: 0,
                    yPercent: 0,
                    zIndex: i + 1 // Stack order: 1, 2, 3...
                });
            } else {
                // Other cards start off-screen but opaque (so they cover the previous one)
                gsap.set(card, {
                    opacity: 1,
                    scale: 1,
                    xPercent: isMobile ? 100 : 0,
                    yPercent: isMobile ? 0 : 100,
                    zIndex: i + 1
                });
            }
        });

        // Build timeline animations
        cards.forEach((card, i) => {
            if (i === 0) return; // Skip first card as it's already visible

            const label = `slide-${i}`;

            // Animate current card IN (Slide Over)
            tl.to(card, {
                xPercent: 0,
                yPercent: 0,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
                force3D: true
            }, label);

            // Animate previous card (Scale Down slightly, don't move away)
            const prevCard = cards[i - 1];
            const prevOverlay = prevCard.querySelector('.card-dim-overlay');

            tl.to(prevCard, {
                scale: 0.9,
                // filter: 'brightness(0.8)', // REMOVED to prevent black flash
                duration: 1,
                ease: 'power2.out',
                force3D: true
            }, label);

            if (prevOverlay) {
                tl.to(prevOverlay, {
                    opacity: 0.15, // Smooth dimming via overlay
                    duration: 1,
                    ease: 'power2.out',
                    force3D: true
                }, label);
            }

            // Update navigation dots
            tl.to(dots[i], {
                backgroundColor: '#6B4C3E',
                scale: 1.2,
                duration: 0.3,
            }, label);

            if (i > 0) {
                tl.to(dots[i - 1], {
                    backgroundColor: '#D4C4B8',
                    scale: 1,
                    duration: 0.3,
                }, label);
            }
        });

        // Click-to-scroll functionality
        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();

                const label = i === 0 ? 0 : tl.labels[`slide-${i}`];
                const percent = label / tl.totalDuration();
                const scrollTriggerInstance = ScrollTrigger.getById(tl.scrollTrigger?.vars.id || '');

                if (scrollTriggerInstance) {
                    const start = scrollTriggerInstance.start || 0;
                    const end = scrollTriggerInstance.end || 0;
                    const scrollPos = start + (end - start) * percent;

                    gsap.to(window, {
                        scrollTo: scrollPos,
                        duration: 1,
                        ease: 'power2.inOut'
                    });
                }
            });
        });

        // Cleanup
        return () => {
            tl.kill();
        };

    }, { dependencies: [] });

    return (
        <section className="feature-carousel-section" ref={containerRef}>
            <div className="feature-carousel-header">
                <h2 className="section-title">Why Choose Saad Dental Studio</h2>
                <p className="section-subtitle">Experience dentistry reimagined</p>
            </div>

            <div className="feature-carousel-container">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card"
                        ref={(el) => {
                            if (el) cardsRef.current[index] = el;
                        }}
                    >
                        <div className="card-dim-overlay"></div>
                        <div className="feature-icon">
                            <span className="feature-emoji">{feature.emoji}</span>
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-text">{feature.text}</p>
                        <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="carousel-nav">
                {features.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-nav-dot ${index === 0 ? 'active' : ''}`}
                        ref={(el) => {
                            if (el) dotsRef.current[index] = el;
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeatureCarousel;
