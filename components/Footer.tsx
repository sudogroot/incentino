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
            <p>Building the future of incentive solutions with cutting-edge technology and innovative thinking.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Product</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#how-it-works">How It Works</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="#">Pricing</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
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
