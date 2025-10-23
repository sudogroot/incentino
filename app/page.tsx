import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'incentino - Expert DevOps & Development for Startups',
  description: 'High-quality DevOps operations and development support specifically designed for startups. Robust infrastructure, reliable deployments, expert team.',
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
              <span>🚀</span>
              <span>DevOps & Development for Startups</span>
            </div>
            <h1>Build Fast, Deploy Faster</h1>
            <p className={styles.heroDescription}>
              Expert DevOps operations and development support designed specifically for startups. Robust infrastructure, quality code, reliable deployments.
            </p>
            <div className={styles.heroCtaContainer}>
              <Link href="/contact" className={styles.heroCta}>
                Get in Touch
                <span>→</span>
              </Link>
              <Link href="/showcase" className={styles.heroCtaSecondary}>
                View Showcase
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <p className={styles.trustText}>Trusted by innovative startups</p>
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
            <div className={styles.sectionLabel}>Services</div>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionDescription}>
              Comprehensive DevOps and development services tailored for startups that need to move fast without compromising quality.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚙️</div>
              <h3>DevOps Operations</h3>
              <p>Robust CI/CD pipelines, infrastructure as code, monitoring, and automated deployments that scale with your business.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💻</div>
              <h3>Full-Stack Development</h3>
              <p>High-quality code across the stack. Modern frameworks, clean architecture, and best practices built in.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>☁️</div>
              <h3>Cloud Infrastructure</h3>
              <p>AWS, GCP, Azure setup and management. Optimized for performance, security, and cost-effectiveness.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Security & Compliance</h3>
              <p>Security best practices, vulnerability scanning, and compliance frameworks implemented from day one.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📦</div>
              <h3>Containerization</h3>
              <p>Docker and Kubernetes expertise. Build once, deploy anywhere with confidence.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛠️</div>
              <h3>Open Source Tools</h3>
              <p>Contributing to and leveraging open source. Building tools that benefit the entire developer community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={`${styles.container} ${styles.statsContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.whiteTitle}`}>Built for Speed & Reliability</h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support Available</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>Uptime SLA</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Fast</span>
              <span className={styles.statLabel}>Deployment Times</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Startup Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Process</div>
            <h2 className={styles.sectionTitle}>How We Work</h2>
            <p className={styles.sectionDescription}>
              Simple, transparent process designed to get you up and running quickly.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Discovery Call</h3>
                <p>We start with understanding your needs, tech stack, and goals. What are your pain points? What do you need to ship?</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Plan & Execute</h3>
                <p>We create a clear roadmap and get to work. Whether it&apos;s infrastructure, development, or both - we deliver quality fast.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Monitor & Support</h3>
                <p>Continuous monitoring, regular updates, and ongoing support. We&apos;re here when you need us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="cta">
        <div className={styles.ctaContent}>
          <h2>Ready to build something great?</h2>
          <p>
            Let&apos;s talk about your project. We&apos;ll help you ship faster with robust DevOps and quality development.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
            <span>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
