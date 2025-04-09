import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import styles from '../../styles/Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Enhanced background effects */}
      <div className={styles.backgroundGradient}></div>
      <div className={styles.topGlow}></div>
      <div className={styles.bottomGlow}></div>
      
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left side content */}
          <div className={styles.leftContent}>
            <div className={styles.logoContainer}>
              <div className={styles.logoBox}>
                <div className={styles.logoGlow}></div>
                <div className={styles.logoInner}>
                  <span className={styles.logoLetter}>N</span>
                </div>
              </div>
              <div className={styles.brandTitle}>
                <span className={styles.brandText}>NETWORKED</span>
                <span className={styles.brandText}>NARRATIVES</span>
              </div>
            </div>
            
            <div className={styles.headlineContainer}>
              <div className={styles.headline}>NO SCRIPTS.</div>
              <div className={styles.headline}>NO STRESS.</div>
            </div>
            
            <p className={styles.subheading}>
              Just your insights—refined. We guide founders through a simple interview, then craft short-form, done-for-you video content.
            </p>
            
            <div className={styles.ctaButton}>
              <Button 
                as="link"
                href="#get-started" 
                variant="outline"
                size="lg"
                className="uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-shadow duration-300"
              >
                GET STARTED
              </Button>
            </div>
          </div>
          
          {/* Right side - Jeremy's photo */}
          <div className={styles.imageContainer}>
            <div className={styles.imageBorder}></div>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageWrapper}>
              <div className={styles.imageAspect}>
                {/* Image with gradient overlay */}
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageGradientTop}></div>
                
                <Image 
                  src="/jeremy-thone.jpg" 
                  alt="Jeremy Thone" 
                  fill 
                  className={styles.image}
                  priority
                />
                
                <div className={styles.imageName}>
                  Jeremy<br />Thone
                </div>
                <div className={styles.imageGradientBottom}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollBox}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
