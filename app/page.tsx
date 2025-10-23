import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'incentino - Transform Your Business with Smart Incentives',
  description: 'Empower your team, delight your customers, and accelerate growth with intelligent incentive solutions built for the modern business.',
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
              <span>Transform Your Business Today</span>
            </div>
            <h1>Smart Incentives That Drive Real Results</h1>
            <p className={styles.heroDescription}>
              Empower your team, delight your customers, and accelerate growth with intelligent incentive solutions built for the modern business.
            </p>
            <div className={styles.heroCtaContainer}>
              <Link href="#contact" className={styles.heroCta}>
                Get Started
                <span>→</span>
              </Link>
              <Link href="#features" className={styles.heroCtaSecondary}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Features</div>
            <h2 className={styles.sectionTitle}>Everything you need to succeed</h2>
            <p className={styles.sectionDescription}>
              Powerful features designed to help you create, manage, and optimize incentive programs that deliver measurable results.
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
            <h2 className={`${styles.sectionTitle} ${styles.whiteTitle}`}>Trusted by industry leaders</h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Active Users</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Customer Satisfaction</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2.5M+</span>
              <span className={styles.statLabel}>Incentives Distributed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>45%</span>
              <span className={styles.statLabel}>Average ROI Increase</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Process</div>
            <h2 className={styles.sectionTitle}>How it works</h2>
            <p className={styles.sectionDescription}>
              Get started in three simple steps and see results in days, not months.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Define Your Goals</h3>
                <p>Tell us what you want to achieve. Whether it&apos;s boosting sales, improving retention, or driving engagement, we&apos;ll help you create the perfect incentive strategy.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Launch Your Campaign</h3>
                <p>Use our intuitive platform to design and deploy your incentive program. Customize rewards, set rules, and target your audience with precision.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Track & Optimize</h3>
                <p>Monitor real-time performance, analyze results, and continuously optimize your campaigns for maximum impact and ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="contact">
        <div className={styles.ctaContent}>
          <h2>Ready to transform your business?</h2>
          <p>
            Join thousands of companies that trust incentino to power their growth. Start your free trial today and see the difference.
          </p>
          <a href="mailto:hello@incentino.com" className={styles.ctaButton}>
            Start Free Trial
            <span>→</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}
