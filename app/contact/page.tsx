import Layout from '@/components/Layout'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Your Technical Co-Founder',
  description: 'Ready to accelerate your startup\'s technical journey? Get in touch with incentino to discuss your development and DevOps needs.',
}

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
          <div className={styles.contactHeader}>
            <div className={styles.badge}>
              <span>📬</span>
              <span>Get In Touch</span>
            </div>
            <h1>Let&apos;s Build Together</h1>
            <p className={styles.subtitle}>
              Have a project in mind? Need DevOps support? Let&apos;s talk about how we can help your startup succeed.
            </p>
          </div>

          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📧</div>
                <h3>Email Us</h3>
                <a href="mailto:hello@incentino.com">hello@incentino.com</a>
                <p>We&apos;ll get back to you within 24 hours</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💬</div>
                <h3>Quick Response</h3>
                <p>Average response time: 4 hours</p>
                <p className={styles.muted}>During business hours</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🌍</div>
                <h3>Remote First</h3>
                <p>We work with startups worldwide</p>
                <p className={styles.muted}>Flexible timezone coverage</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your startup name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
