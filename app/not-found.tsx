import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.notFound}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.homeButton}>
              Go to Homepage
            </Link>
            <Link href="/blog" className={styles.blogButton}>
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
