'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine which section is active based on scroll position
      const sections = ['about', 'how-it-works', 'services', 'get-started'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const isActive = (href: string) => {
    return activeLink === href.replace('#', '');
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.transparent}`}>
      {/* Subtle animated gradient line on top */}
      <div className={`${styles.topGradientLine} ${isScrolled ? styles.visible : styles.hidden}`}>
        <div className={styles.gradientLineInner}>
          <div className={styles.gradientLineAnimation}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoGlow}></div>
          <div>
            <Image 
              src="/logo.svg" 
              alt="Networked Narratives Logo" 
              width={180} 
              height={40}
              className={styles.logoImage}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <div className={styles.navItems}>
            {[
              { href: '#about', label: 'About' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#services', label: 'Services' }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : styles.inactive}`}
                onClick={() => setActiveLink(link.href.replace('#', ''))}
              >
                <span>{link.label}</span>
                <span className={styles.underline}></span>
                <span className={styles.inactiveUnderline}></span>
              </Link>
            ))}
            
            <Link 
              href="#get-started" 
              className={styles.getStartedButton}
              onClick={() => setActiveLink('get-started')}
            >
              <span className={styles.buttonGlow}></span>
              <div className={styles.button}>
                <span className={styles.buttonLabel}>GET STARTED</span>
                <span className={styles.buttonOverlay}></span>
                <span className={styles.buttonBlur}></span>
              </div>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className={styles.menuButtonGlow}></div>
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.closeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.menuIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed}`}>
        <div 
          className={`${styles.menuOverlay} ${isMobileMenuOpen ? styles.visible : styles.hidden}`} 
          onClick={toggleMobileMenu}
        ></div>
        
        <div className={`${styles.menuContent} ${!isMobileMenuOpen ? styles.menuContentClosed : ''}`}>
          <div className={styles.menuItems}>
            {[
              { href: '#about', label: 'About' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#services', label: 'Services' }
            ].map((link) => (
              <div key={link.href} className={styles.mobileNavItem}>
                <Link 
                  href={link.href} 
                  className={`${styles.mobileLink} ${isActive(link.href) ? styles.mobileActive : styles.mobileInactive}`}
                  onClick={() => {
                    setActiveLink(link.href.replace('#', ''));
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            
            <div className={styles.mobileButtonContainer}>
              <Link 
                href="#get-started" 
                className={styles.mobileGetStarted}
                onClick={() => {
                  setActiveLink('get-started');
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className={styles.mobileButtonGlow}></span>
                <div className={styles.mobileButton}>
                  GET STARTED
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 
