import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'incentino - Technical Partner for Startups | Launch, Grow & Optimize',
  description: 'Remove friction and accelerate growth. We help startups launch, iterate, scale, and optimize - with cofounder-level commitment and startup-friendly execution.',
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
              <span>Your Technical Partner for Growth</span>
            </div>
            <h1>Launch. Grow. Optimize.</h1>
            <p className={styles.heroDescription}>
              We remove friction and accelerate your journey - from launch to scale to cost optimization. Cofounder-level commitment, startup-friendly execution.
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
            <div className={styles.sectionLabel}>How We Help</div>
            <h2 className={styles.sectionTitle}>We Remove Friction Across Your Entire Journey</h2>
            <p className={styles.sectionDescription}>
              From launch to growth to optimization, we provide the technical expertise startups need at every stage. We work alongside you, solving what slows you down.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>Rapid Development</h3>
              <p>No more endless hiring or onboarding delays. We start building immediately with proven tech stacks and battle-tested architecture patterns.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💎</div>
              <h3>Production-Grade Quality</h3>
              <p>Ship with confidence. Every line of code follows best practices, includes proper testing, and is built to scale as you grow.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>DevOps & Infrastructure</h3>
              <p>Automated deployments, monitoring, and scalable infrastructure. We optimize your setup to reduce costs and improve performance as you grow.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Cost Optimization</h3>
              <p>We help reduce infrastructure and operational costs without sacrificing performance. From cloud optimization to code efficiency, we keep your burn rate healthy.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Strategic Technical Guidance</h3>
              <p>Make informed decisions about architecture, tech stack, and scaling strategies. We have been through this journey before.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤝</div>
              <h3>True Partnership</h3>
              <p>We invest in your success. Your wins are our wins. We are here for the long term, not just the next sprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={`${styles.container} ${styles.statsContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.whiteTitle}`}>Technical Partnership at Every Stage</h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Launch</span>
              <span className={styles.statLabel}>Build and ship your product fast with production-ready quality</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Grow</span>
              <span className={styles.statLabel}>Iterate quickly, scale infrastructure, and expand functionality</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Optimize</span>
              <span className={styles.statLabel}>Reduce costs, improve performance, and eliminate bottlenecks</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Partnership</span>
              <span className={styles.statLabel}>Cofounder-level commitment through your entire journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Process</div>
            <h2 className={styles.sectionTitle}>Your Long-Term Technical Partner</h2>
            <p className={styles.sectionDescription}>
              We work in a cofounder-like style - committed to your success at every stage. Whether you&apos;re launching, iterating, scaling, or optimizing, we adapt to what you need right now.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Discovery & Alignment</h3>
                <p>We deep-dive into your vision, market opportunity, and technical requirements. No fluff, just strategic questions that shape the right solution for your unique challenges and timeline.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Build & Iterate</h3>
                <p>Weekly deployable increments keep you in the loop. See progress early and often. Adjust priorities as you learn from users. We adapt to your evolving needs without derailing momentum.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Scale & Optimize</h3>
                <p>Launch confidently, then grow sustainably. We continuously optimize your infrastructure, reduce costs, improve performance, and remove bottlenecks. As you scale, we ensure your tech foundation stays solid and efficient.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="contact">
        <div className={styles.ctaContent}>
          <h2>Ready to Remove What Slows You Down?</h2>
          <p>
            Whether you&apos;re launching, growing, or optimizing, we work alongside you with cofounder-level commitment. Let&apos;s accelerate your journey.
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
