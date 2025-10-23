import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Your Technical Co-Founder | incentino',
  description: 'We empower startups with production-ready development and DevOps. As your technical partner, we bring years of experience helping founders ship quality products fast.',
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
            <h1>Your Technical Co-Founder</h1>
            <p className={styles.heroSubtitle}>
              We partner with startups to build production-ready products that scale. Fast execution, enterprise-grade quality, founder-friendly pricing.
            </p>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.contentGrid}>
              <div className={styles.contentBlock}>
                <h2>Why We Exist</h2>
                <p>
                  Startups face an impossible challenge: ship fast, build right, and stay within budget. Most teams make you choose two of three.
                </p>
                <p>
                  We solve this by bringing years of startup experience directly to your team. We&apos;ve been through the journey before—we know what works, what breaks, and how to avoid expensive mistakes.
                </p>
                <p>
                  Our mission is simple: empower startups with the technical expertise they need to succeed, without the enterprise overhead.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h2>How We Help</h2>
                <p>
                  We work alongside founders as true technical partners, bringing expertise in:
                </p>
                <ul className={styles.servicesList}>
                  <li>Full-stack product development</li>
                  <li>Scalable architecture design</li>
                  <li>Modern DevOps and CI/CD</li>
                  <li>Cloud infrastructure (AWS, GCP, Azure)</li>
                  <li>Strategic technical guidance</li>
                  <li>From MVP to scale</li>
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
                <h3>Real Ownership</h3>
                <p>We treat your project like co-founders would. Your success is our success. We think long-term, not just about the next sprint.</p>
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
                Our team has worked with startups across different stages—from pre-seed to Series A. We&apos;ve seen what works when you&apos;re building an MVP, what matters when you hit product-market fit, and how to scale when growth accelerates.
              </p>
              <p>
                This isn&apos;t theoretical knowledge. It&apos;s hard-won experience from being in the trenches, solving real problems, and helping founders succeed.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Let&apos;s Build Together</h2>
            <p>Ready to accelerate your startup&apos;s technical journey? Let&apos;s talk about how we can help.</p>
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
