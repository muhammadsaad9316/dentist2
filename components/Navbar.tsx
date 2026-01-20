'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useGSAP(() => {
        if (!navRef.current) return;

        // Scroll-based navbar background and shadow
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top -50px',
            end: 'bottom bottom',
            onUpdate: (self) => {
                if (navRef.current) {
                    const progress = Math.min(self.progress * 2, 1);

                    // Update navbar styling based on scroll
                    if (progress > 0.05) {
                        navRef.current.classList.add('navbar-scrolled');
                        setIsScrolled(true);
                    } else {
                        navRef.current.classList.remove('navbar-scrolled');
                        setIsScrolled(false);
                    }
                }
            },
        });

        // Initial logo scale animation on mount
        gsap.from('.navbar-logo', {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.5)',
            delay: 0.2,
        });

        // Stagger nav links
        gsap.from('.nav-link', {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.4,
        });

        // Animate action buttons
        gsap.from('.navbar-actions button', {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            delay: 0.8,
        });

    }, { scope: navRef });

    return (
        <nav className="navbar" ref={navRef}>
            <div className="navbar-container">
                {/* Logo */}
                <Link href="/" className="navbar-logo">
                    <div className="logo-text">
                        <span className="logo-saad">SAAD</span>
                        <span className="logo-subtitle">dental studio</span>
                    </div>
                </Link>

                <div className="navbar-links">
                    {/* About Us Dropdown */}
                    <div className="nav-item-dropdown">
                        <Link href="/about" className="nav-link">About Us</Link>
                        <div className="dropdown-menu">
                            <Link href="/providers" className="dropdown-link">Providers</Link>
                            <Link href="/values" className="dropdown-link">Our Values</Link>
                            <Link href="/offices" className="dropdown-link">Our Offices</Link>
                        </div>
                    </div>

                    {/* Services Dropdown */}
                    <div className="nav-item-dropdown">
                        <Link href="/services" className="nav-link">Services</Link>
                        <div className="dropdown-menu">
                            <Link href="/services/preventive" className="dropdown-link">Preventive Care</Link>
                            <Link href="/services/restorative" className="dropdown-link">Restorative Dentistry</Link>
                            <Link href="/services/cosmetic" className="dropdown-link">Cosmetic Dentistry</Link>
                            <Link href="/services/technology" className="dropdown-link">Technology</Link>
                        </div>
                    </div>

                    {/* Patients Dropdown */}
                    <div className="nav-item-dropdown">
                        <Link href="/patients" className="nav-link">Patients</Link>
                        <div className="dropdown-menu">
                            <Link href="/patients/new-patient" className="dropdown-link">New Patient Visit</Link>
                            <Link href="/patients/insurance" className="dropdown-link">Insurance & Costs</Link>
                            <Link href="/patients/comfort" className="dropdown-link">Anxiety Relief</Link>
                        </div>
                    </div>

                    {/* Locations Dropdown */}
                    <div className="nav-item-dropdown">
                        <Link href="/locations" className="nav-link">Locations</Link>
                        <div className="dropdown-menu">
                            <Link href="/locations/san-francisco" className="dropdown-link">San Francisco</Link>
                            <Link href="/locations/mountain-view" className="dropdown-link">Mountain View</Link>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="navbar-actions">
                    <button className="btn-book-now">Book Now</button>
                    <button className="btn-call-now">Call Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

