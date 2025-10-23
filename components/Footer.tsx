import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="about">
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.logoContainer}>
              <Image
                src="/incentino. (1).svg"
                alt="incentino"
                width={40}
                height={40}
                className={styles.footerLogo}
              />
            </div>
            <p>Your technical co-founder for startup success. We empower founders with production-ready development and DevOps expertise to ship quality products fast.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/#services">What We Do</Link></li>
              <li><Link href="/#how-it-works">How It Works</Link></li>
              <li><Link href="/showcase">Showcase</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <ul className={styles.footerLinks}>
              <li><a href="mailto:hello@incentino.com">Email Us</a></li>
              <li><Link href="/#contact">Get Started</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} incentino. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
