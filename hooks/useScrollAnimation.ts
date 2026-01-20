import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsapConfig from '@/utils/gsapConfig';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollAnimationOptions {
    trigger?: string | HTMLElement;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    toggleActions?: string;
    markers?: boolean;
}

/**
 * Custom hook for common scroll animations
 */
export const useScrollAnimation = () => {
    const animationsRef = useRef<ScrollTrigger[]>([]);

    useEffect(() => {
        return () => {
            // Cleanup all ScrollTrigger instances on unmount
            animationsRef.current.forEach((trigger) => trigger.kill());
            animationsRef.current = [];
        };
    }, []);

    /**
     * Fade in and slide up from bottom
     */
    const fadeInUp = (
        target: gsap.TweenTarget,
        options?: ScrollAnimationOptions
    ) => {
        const tween = gsap.from(target, {
            y: 50,
            opacity: 0,
            duration: gsapConfig.duration.normal,
            ease: gsapConfig.ease.default,
            scrollTrigger: {
                trigger: options?.trigger || (target as any),
                start: options?.start || gsapConfig.scrollTrigger.start,
                toggleActions: options?.toggleActions || gsapConfig.scrollTrigger.toggleActions,
                markers: options?.markers || false,
                onEnter: (self) => animationsRef.current.push(self),
            },
        });
        return tween;
    };

    /**
     * Fade in and slide from left
     */
    const fadeInLeft = (
        target: gsap.TweenTarget,
        options?: ScrollAnimationOptions
    ) => {
        const tween = gsap.from(target, {
            x: -50,
            opacity: 0,
            duration: gsapConfig.duration.normal,
            ease: gsapConfig.ease.default,
            scrollTrigger: {
                trigger: options?.trigger || (target as any),
                start: options?.start || gsapConfig.scrollTrigger.start,
                toggleActions: options?.toggleActions || gsapConfig.scrollTrigger.toggleActions,
                markers: options?.markers || false,
                onEnter: (self) => animationsRef.current.push(self),
            },
        });
        return tween;
    };

    /**
     * Fade in and slide from right
     */
    const fadeInRight = (
        target: gsap.TweenTarget,
        options?: ScrollAnimationOptions
    ) => {
        const tween = gsap.from(target, {
            x: 50,
            opacity: 0,
            duration: gsapConfig.duration.normal,
            ease: gsapConfig.ease.default,
            scrollTrigger: {
                trigger: options?.trigger || (target as any),
                start: options?.start || gsapConfig.scrollTrigger.start,
                toggleActions: options?.toggleActions || gsapConfig.scrollTrigger.toggleActions,
                markers: options?.markers || false,
                onEnter: (self) => animationsRef.current.push(self),
            },
        });
        return tween;
    };

    /**
     * Scale up and fade in
     */
    const scaleIn = (
        target: gsap.TweenTarget,
        options?: ScrollAnimationOptions
    ) => {
        const tween = gsap.from(target, {
            scale: 0.8,
            opacity: 0,
            duration: gsapConfig.duration.slow,
            ease: gsapConfig.ease.bounce,
            scrollTrigger: {
                trigger: options?.trigger || (target as any),
                start: options?.start || gsapConfig.scrollTrigger.start,
                toggleActions: options?.toggleActions || gsapConfig.scrollTrigger.toggleActions,
                markers: options?.markers || false,
                onEnter: (self) => animationsRef.current.push(self),
            },
        });
        return tween;
    };

    /**
     * Staggered animation for multiple elements
     */
    const stagger = (
        targets: gsap.TweenTarget,
        animationType: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' = 'fadeInUp',
        staggerAmount: number = gsapConfig.stagger.normal,
        options?: ScrollAnimationOptions
    ) => {
        const animationMap = {
            fadeInUp: { y: 50, opacity: 0 },
            fadeInLeft: { x: -50, opacity: 0 },
            fadeInRight: { x: 50, opacity: 0 },
            scaleIn: { scale: 0.8, opacity: 0 },
        };

        const tween = gsap.from(targets, {
            ...animationMap[animationType],
            duration: gsapConfig.duration.normal,
            ease: gsapConfig.ease.default,
            stagger: staggerAmount,
            scrollTrigger: {
                trigger: options?.trigger || (targets as any),
                start: options?.start || gsapConfig.scrollTrigger.start,
                toggleActions: options?.toggleActions || gsapConfig.scrollTrigger.toggleActions,
                markers: options?.markers || false,
                onEnter: (self) => animationsRef.current.push(self),
            },
        });
        return tween;
    };

    return {
        fadeInUp,
        fadeInLeft,
        fadeInRight,
        scaleIn,
        stagger,
    };
};
