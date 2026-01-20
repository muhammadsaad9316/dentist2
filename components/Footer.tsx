import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link href="/" className="footer-logo">
                            <span className="logo-text-footer">Saad Dental Studio</span>
                        </Link>
                        <p className="footer-tagline">
                            Experience dentistry reimagined. Your comfort and smile are our top priority.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col links-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/book">Book Online</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col contact-col">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>123 Dental Ave, San Francisco, CA 94103</span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>(415) 555-0123</span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <span>hello@saaddental.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="footer-col hours-col">
                        <h4 className="footer-heading">Opening Hours</h4>
                        <ul className="hours-list">
                            <li><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
                            <li><span>Saturday:</span> <span>9:00 AM - 3:00 PM</span></li>
                            <li><span>Sunday:</span> <span>Closed</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Saad Dental Studio. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
