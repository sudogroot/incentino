'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/incentino. (1).svg"
            alt="incentino"
            width={36}
            height={36}
            className={styles.logoIcon}
          />
        </Link>
        <div className={styles.navLinks}>
          <Link href="#services">Features</Link>
          <Link href="#how-it-works">How It Works</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#contact" className={styles.ctaBtn}>Get Started</Link>
        </div>
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link href="#contact" className={styles.ctaBtn} onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  )
}
