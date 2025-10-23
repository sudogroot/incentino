import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - incentino',
  description: 'Learn about incentino - expert DevOps and development support for startups. We help you build and deploy with confidence.',
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
            <h1>We Help Startups Ship Faster</h1>
            <p className={styles.heroSubtitle}>
              Expert DevOps operations and development support designed specifically for startups that need quality without compromise.
            </p>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.contentGrid}>
              <div className={styles.contentBlock}>
                <h2>Our Mission</h2>
                <p>
                  We believe startups deserve enterprise-grade infrastructure and development practices without the enterprise overhead. Our mission is to provide robust, scalable DevOps operations and high-quality development that lets founders focus on building their products.
                </p>
                <p>
                  Every startup is different, and we tailor our approach to your specific needs, tech stack, and goals.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h2>What We Do</h2>
                <p>
                  We&apos;re a team of experienced DevOps engineers and developers who&apos;ve been in the trenches. We know what it takes to build reliable systems that scale.
                </p>
                <ul className={styles.servicesList}>
                  <li>CI/CD pipeline setup and optimization</li>
                  <li>Cloud infrastructure (AWS, GCP, Azure)</li>
                  <li>Container orchestration (Docker, Kubernetes)</li>
                  <li>Full-stack development</li>
                  <li>Security and compliance</li>
                  <li>24/7 monitoring and support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.sectionHeader}>
              <h2>Our Values</h2>
              <p>The principles that guide everything we do</p>
            </div>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>⚡</div>
                <h3>Speed Without Shortcuts</h3>
                <p>We move fast but never compromise on quality. Rapid deployment doesn&apos;t mean fragile systems.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <h3>Startup Focused</h3>
                <p>We understand startup constraints and priorities. No enterprise bloat, just what you need to succeed.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🔒</div>
                <h3>Security First</h3>
                <p>Best practices baked in from day one. Your users&apos; trust is paramount.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>True Partnership</h3>
                <p>We&apos;re not just vendors - we&apos;re invested in your success and growth.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.openSourceSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.contentCentered}>
              <h2>Open Source Contributors</h2>
              <p>
                We believe in giving back to the community. While we haven&apos;t released our own tools yet, we actively contribute to open source projects and use them to build robust solutions for our clients.
              </p>
              <p>
                Our commitment to open source means we stay current with the latest tools and best practices in the DevOps and development ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to work together?</h2>
            <p>Let&apos;s discuss how we can help you build and scale your startup.</p>
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
