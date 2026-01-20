/**
 * GSAP Configuration
 * Centralized animation settings for consistent timing and behavior
 */

export const gsapConfig = {
    // Animation Durations
    duration: {
        fast: 0.4,
        normal: 0.6,
        slow: 0.8,
        verySlow: 1.2,
    },

    // Easing Functions
    ease: {
        default: 'power3.out',
        smooth: 'power2.out',
        bounce: 'back.out(1.2)',
        elastic: 'elastic.out(1, 0.5)',
    },

    // Stagger Timings
    stagger: {
        fast: 0.05,
        normal: 0.1,
        slow: 0.2,
    },

    // ScrollTrigger Defaults
    scrollTrigger: {
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
    },

    // Mobile Detection
    isMobile: () => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(max-width: 768px)').matches;
    },
};

export default gsapConfig;
