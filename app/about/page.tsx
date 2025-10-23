import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Technical Partner for Launch, Growth & Optimization | incentino',
  description: 'We work in a cofounder-like style to help startups launch, grow, and optimize. Remove friction, reduce costs, and accelerate your journey with experienced technical partners.',
}

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <section className={styles.aboutHero}>
          <div className={styles.aboutContainer}>
            <div className={styles.badge}>
              <span>👋</span>
              <span>About incentino</span>
            </div>
            <h1>Your Technical Partner for Growth</h1>
            <p className={styles.heroSubtitle}>
              We work in a cofounder-like style to help startups launch, grow, and optimize. From shipping your first feature to scaling sustainably and reducing costs - we remove what slows you down.
            </p>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.contentGrid}>
              <div className={styles.contentBlock}>
                <h2>Why We Exist</h2>
                <p>
                  Startups face friction at every stage: launching too slowly, scaling inefficiently, burning through runway on infrastructure costs, getting slowed down by technical debt.
                </p>
                <p>
                  We remove that friction. With years of startup experience, we know what works at each stage - whether you&apos;re launching your MVP, iterating toward product-market fit, scaling to handle growth, or optimizing to reduce costs.
                </p>
                <p>
                  Our mission is simple: work alongside founders in a cofounder-like style to accelerate their journey, without the enterprise overhead or hiring delays.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h2>How We Help</h2>
                <p>
                  We adapt to what you need at your current stage - launch, grow, or optimize:
                </p>
                <ul className={styles.servicesList}>
                  <li>Launch: Build and ship production-ready MVPs fast</li>
                  <li>Grow: Iterate quickly and scale infrastructure as you expand</li>
                  <li>Optimize: Reduce infrastructure costs and improve performance</li>
                  <li>DevOps: Automated deployments, monitoring, and CI/CD</li>
                  <li>Architecture: Strategic guidance on scaling and tech decisions</li>
                  <li>Code quality: Remove technical debt and improve efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.sectionHeader}>
              <h2>What Makes Us Different</h2>
              <p>Partnership over vendors, ownership over tickets</p>
            </div>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🚀</div>
                <h3>Startup DNA</h3>
                <p>We understand startup constraints. We&apos;ve built products under tight runways and aggressive timelines. We know what matters.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <h3>Cofounder-Level Commitment</h3>
                <p>We work in a cofounder-like style - deeply invested in your success. We think long-term, challenge assumptions, and adapt to what you need at each stage.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>⚡</div>
                <h3>Speed + Quality</h3>
                <p>Fast execution doesn&apos;t mean cutting corners. We use proven patterns and modern practices to ship quickly without technical debt.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💡</div>
                <h3>Strategic Thinking</h3>
                <p>We don&apos;t just execute specs. We challenge assumptions, suggest better approaches, and help you make smart technical decisions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.openSourceSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.contentCentered}>
              <h2>Built on Experience</h2>
              <p>
                Our team has worked with startups across different stages—from pre-seed to Series A. We&apos;ve launched MVPs in weeks, helped companies scale from thousands to millions of users, and reduced infrastructure costs by 60%+ through smart optimization.
              </p>
              <p>
                We know what friction looks like at each stage, and how to remove it. This isn&apos;t theoretical knowledge - it&apos;s hard-won experience from being in the trenches, solving real problems, and helping founders succeed.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Let&apos;s Remove What Slows You Down</h2>
            <p>Whether you&apos;re launching, growing, or optimizing - we adapt to your current stage and work alongside you with cofounder-level commitment.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Get in Touch
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
