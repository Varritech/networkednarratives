import React from 'react';
import { Button } from '../ui/Button';
import styles from '../../styles/Services.module.css';

interface ServiceProps {
  title: string;
  description: string;
  features: string[];
  iconName: string;
  index: number;
}

const Service: React.FC<ServiceProps> = ({ title, description, features, iconName, index }) => {
  return (
    <div className={styles.serviceCard} style={{ animationDelay: `${index * 150}ms` }}>
      <div className={styles.cardGradient1}></div>
      <div className={styles.cardGradient2}></div>
      
      <div className={styles.cardContent}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{iconName}</span>
          <div className={styles.iconGlow}></div>
        </div>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
      </div>
      
      <ul className={styles.featuresList}>
        {features.map((feature, i) => (
          <li key={i} className={styles.featureItem}>
            <span className={styles.featureIcon}>✓</span>
            <span className={styles.featureText}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className={styles.cardNumber}>
        {index + 1}
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className={styles.section}>
      {/* Background elements */}
      <div className={styles.bgGradient1}></div>
      <div className={styles.bgGradient2}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>OUR</span> SERVICES
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Discover our specialized content creation services designed to elevate your professional presence and engage your audience across platforms.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          <Service 
            title="LinkedIn Accelerator"
            description="Build authority and grow your network with consistent LinkedIn-optimized content."
            features={[
              "4 short-form video clips per month",
              "Custom captions and hashtags",
              "Content calendar planning",
              "Performance analytics"
            ]}
            iconName="LinkedIn"
            index={0}
          />
          
          <Service 
            title="Multi-Platform Package"
            description="Extend your reach across multiple platforms with content optimized for each."
            features={[
              "8 platform-specific clips per month",
              "Cross-platform content strategy",
              "Custom formatting for each platform",
              "Engagement strategy consultation"
            ]}
            iconName="Multi"
            index={1}
          />
          
          <Service 
            title="Enterprise Solutions"
            description="Comprehensive content creation for leadership teams and larger organizations."
            features={[
              "Custom video volume based on needs",
              "Priority production timeline",
              "Multiple team member support",
              "Quarterly strategy sessions"
            ]}
            iconName="Enterprise"
            index={2}
          />
        </div>
        
        <div className={styles.ctaContainer}>
          <div className={styles.buttonWrapper}>
            <div className={styles.buttonGlow}></div>
            <Button 
              as="link"
              href="#get-started" 
              variant="outline"
              size="lg"
              className="uppercase tracking-wider relative z-10 px-16 py-4"
            >
              GET STARTED
            </Button>
          </div>
          <p className={styles.ctaText}>Start your journey to effortless content creation</p>
        </div>
      </div>
    </section>
  );
};

export default Services; 
