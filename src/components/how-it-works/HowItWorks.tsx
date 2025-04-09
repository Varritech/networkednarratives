import React from 'react';
import { Button } from '../ui/Button';
import styles from '../../styles/HowItWorks.module.css';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className={styles.stepCard}>
      <div className={styles.numberContainer}>
        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}>
            <span className={styles.stepNumber}>{number}</span>
          </div>
        </div>
      </div>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className={styles.section}>
      {/* Background elements */}
      <div className={styles.bgGradient1}></div>
      <div className={styles.bgGradient2}></div>
      
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.sectionTitle}>HOW IT WORKS</h2>
          <p className={styles.sectionDescription}>
            Our streamlined process makes creating professional content simple and stress-free.
          </p>
        </div>
        
        <div className={styles.stepsGrid}>
          <Step 
            number={1}
            title="You Talk"
            description="We guide you through a simple interview that captures your insights and expertise. No scripts, no stress."
          />
          
          <Step 
            number={2}
            title="We Edit"
            description="Our team transforms your interview into polished, engaging short-form video content optimized for social media."
          />
          
          <Step 
            number={3}
            title="You Post"
            description="Receive ready-to-publish content that elevates your brand and establishes you as a thought leader."
          />
        </div>
        
        <div className={styles.ctaContainer}>
          <div className={styles.button}>
            <div className={styles.buttonGlow}></div>
            <Button 
              as="link"
              href="#get-started"
              variant="outline"
              size="lg"
              className="text-lg tracking-wide"
            >
              START THE PROCESS
            </Button>
          </div>
          
          <div className={styles.servicesWrapper}>
            <a href="#services" className={styles.servicesLink}>
              OUR SERVICES
            </a>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.footerText}>
          Tailored content creation packages to amplify your professional brand.
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 
