import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'incentino - Your Technical Co-Founder | Dev & DevOps for Startups',
  description: 'Quality. Speed. Value. Your dedicated tech partner for production-ready solutions that help startups launch fast and scale smart.',
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
              <span>Your Technical Co-Founder</span>
            </div>
            <h1>Quality. Speed. Value.</h1>
            <p className={styles.heroDescription}>
              Your dedicated tech partner for production-ready solutions.
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
            <h2 className={styles.sectionTitle}>We Solve the Challenges That Slow You Down</h2>
            <p className={styles.sectionDescription}>
              From idea to launch, we provide the technical expertise startups need to move fast and build right.
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
              <h3>Modern DevOps</h3>
              <p>Automated deployments, monitoring, and infrastructure as code. Focus on product, not server management.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Startup-Friendly Pricing</h3>
              <p>Flexible engagement models that respect your runway. Get senior-level expertise without the senior-level burn rate.</p>
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
            <h2 className={styles.sectionTitle}>From Kickoff to Launch in Weeks, Not Months</h2>
            <p className={styles.sectionDescription}>
              A proven partnership model designed for startup speed. We move fast, communicate clearly, and deliver working software from day one.
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
                <h3>Launch & Grow</h3>
                <p>Go live with confidence backed by proper infrastructure, monitoring, and support. As your user base grows, we scale your architecture and optimize performance. Your growth is our roadmap.</p>
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
