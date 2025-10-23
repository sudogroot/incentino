import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'incentino - Your Technical Co-Founder & Engineering Team',
  description: 'We don\'t just build your product - we own it like it\'s ours. Full project ownership with startup mentality. DevOps, development, and infrastructure handled by engineers who care.',
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
              <span>We Own Your Success Like It's Ours</span>
            </div>
            <h1>Your Team. Your Vision. Our Ownership.</h1>
            <p className={styles.heroDescription}>
              We're not just another dev shop. We embed with your team, take full ownership, and treat your product like our own startup. High-tech expertise meets genuine project ownership.
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
              We're not just service providers - we're your technical co-founders. Every project gets the attention and ownership it deserves, as if we're building our own startup alongside you.
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

      {/* Values Section */}
      <section className={styles.statsSection}>
        <div className={`${styles.container} ${styles.statsContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.whiteTitle}`}>Built on Ownership & Excellence</h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>🎯</span>
              <span className={styles.statLabel}>Full Project Ownership</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>🚀</span>
              <span className={styles.statLabel}>Startup Mentality</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>⚡</span>
              <span className={styles.statLabel}>Move Fast, Build Right</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>🤝</span>
              <span className={styles.statLabel}>True Partnership</span>
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
              We integrate as your team, not as a vendor. Every decision we make is driven by long-term success and ownership thinking.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Embed & Understand</h3>
                <p>We become part of your team, diving deep into your vision, tech stack, and business goals. Your challenges become our challenges.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Own & Execute</h3>
                <p>With full ownership mindset, we architect, build, and deploy solutions as if it&apos;s our own startup. Quality and speed, no compromises.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Evolve & Scale</h3>
                <p>We stay invested in your success. Continuous improvement, proactive optimization, and scaling strategies that grow with your business.</p>
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
