import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="about">
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Image
              src="/incentino. (1).svg"
              alt="incentino"
              width={40}
              height={40}
              className={styles.footerLogo}
            />
            <p>Building innovative incentive solutions with cutting-edge technology. We work alongside businesses to create measurable results and sustainable growth.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Product</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/#services">Features</Link></li>
              <li><Link href="/#how-it-works">How It Works</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Case Studies</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
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
