import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'incentino - Your Partner in Smart Incentive Solutions',
  description: 'We partner with businesses to design and implement intelligent incentive solutions that empower teams, engage customers, and accelerate sustainable growth.',
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>✨</span>
              <span>Built in Collaboration</span>
            </div>
            <h1>Smart Incentive Solutions That Drive Real Results</h1>
            <p className={styles.heroDescription}>
              We partner with businesses to design and implement intelligent incentive solutions that empower teams, engage customers, and accelerate sustainable growth.
            </p>
            <div className={styles.heroCtaContainer}>
              <Link href="#contact" className={styles.heroCta}>
                Get Started
                <span>→</span>
              </Link>
              <Link href="#services" className={styles.heroCtaSecondary}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <p className={styles.trustText}>Empowering ambitious startups to scale</p>
          <div className={styles.logoGrid}>
            <div className={styles.logoPlaceholder}>Your Logo</div>
            <div className={styles.logoPlaceholder}>Your Logo</div>
            <div className={styles.logoPlaceholder}>Your Logo</div>
            <div className={styles.logoPlaceholder}>Your Logo</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.features} id="services">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Features</div>
            <h2 className={styles.sectionTitle}>Everything You Need to Succeed</h2>
            <p className={styles.sectionDescription}>
              A comprehensive platform to create, manage, and optimize incentive programs that deliver measurable results for your business.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Smart Targeting</h3>
              <p>Target the right people at the right time with intelligent segmentation and personalized incentive strategies.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Real-Time Analytics</h3>
              <p>Track performance, measure ROI, and make data-driven decisions with comprehensive analytics dashboards.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Instant Deployment</h3>
              <p>Launch campaigns in minutes with our intuitive platform. No technical expertise required.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Enterprise Security</h3>
              <p>Bank-level security and compliance standards ensure your data and transactions are always protected.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Seamless Integration</h3>
              <p>Connect with your existing tools and workflows through our robust API and pre-built integrations.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💡</div>
              <h3>AI-Powered Insights</h3>
              <p>Leverage machine learning to optimize your programs and predict future performance trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={`${styles.container} ${styles.statsContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.whiteTitle}`}>Your Tech Partner for Startup Growth</h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Development</span>
              <span className={styles.statLabel}>Full-stack engineering expertise to build your product</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>DevOps</span>
              <span className={styles.statLabel}>Scalable infrastructure and deployment automation</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Architecture</span>
              <span className={styles.statLabel}>Strategic technical guidance for sustainable growth</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Partnership</span>
              <span className={styles.statLabel}>We grow with you as your dedicated tech team</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Process</div>
            <h2 className={styles.sectionTitle}>Our Approach</h2>
            <p className={styles.sectionDescription}>
              A streamlined process in three simple steps. We collaborate closely with you to deliver results in days, not months.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Define Your Strategy</h3>
                <p>We start by understanding your business objectives. Whether it&apos;s boosting sales, improving retention, or driving engagement, we work with you to develop an incentive strategy aligned with your goals.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Design & Deploy</h3>
                <p>Using our intuitive platform, we help you design and launch your incentive program. Customize rewards, configure rules, and target your audience with precision while maintaining complete control.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Optimize & Scale</h3>
                <p>Monitor real-time performance, analyze key metrics, and continuously refine your campaigns for maximum impact and ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="contact">
        <div className={styles.ctaContent}>
          <h2>Ready to Build Something Great?</h2>
          <p>
            Partner with incentino to accelerate your startup&apos;s technical journey. Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <a href="mailto:hello@incentino.com" className={styles.ctaButton}>
            Get in Touch
            <span>→</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}
