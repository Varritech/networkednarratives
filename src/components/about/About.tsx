import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* Background elements */}
      <div className={styles.bgGradientTop}></div>
      <div className={styles.bgGradientBottom}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ABOUT JEREMY</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className="relative mb-8">
              <h3 className={styles.subtitle}>
                Marketing Professional & Podcast Host
                <span className={styles.subtitleUnderline}></span>
              </h3>
            </div>
            
            <p className={styles.paragraph}>
              Jeremy Thone is a seasoned marketing professional with a rich background in digital marketing, podcast production, and social media growth. He earned his Bachelor of Science in Marketing from the University of Southern California.
            </p>
            
            <p className={styles.paragraph}>
              Jeremy has held pivotal roles, including Marketing Director at 3PL Systems, where he focused on transportation management system software. He is also the host of the &quot;3PL Live&quot; podcast, engaging with notable figures in the freight and logistics industry.
            </p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <div className={styles.statGradient}></div>
                <div className={styles.statInner}>
                  <h4 className={styles.statNumber}>10+</h4>
                  <p className={styles.statLabel}>Years in Media & Marketing</p>
                </div>
              </div>
              
              <div className={styles.statBox}>
                <div className={styles.statGradient}></div>
                <div className={styles.statInner}>
                  <h4 className={styles.statNumber}>100+</h4>
                  <p className={styles.statLabel}>Stories Told</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBorderTL}></div>
              <div className={styles.imageBorderBR}></div>
              
              <div className={styles.imageInnerWrapper}>
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageGlow}></div>
                <Image 
                  src="https://placehold.co/600x800"
                  alt="Jeremy Thone"
                  width={600}
                  height={800}
                  className={styles.image}
                />
                
                <div className={styles.imageGradientBottom}></div>
                <div className={styles.imageLabel}>
                  <div className={styles.imageText}>JEREMY THONE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
