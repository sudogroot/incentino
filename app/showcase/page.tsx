import Layout from '@/components/Layout'
import Link from 'next/link'
import { getAllShowcaseItems } from '@/lib/showcase'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Showcase - incentino',
  description: 'Explore our portfolio of DevOps implementations, infrastructure projects, and development work for startups.',
}

export default function Showcase() {
  const showcaseItems = getAllShowcaseItems()

  return (
    <Layout>
      <div className={styles.showcasePage}>
        <div className={styles.showcaseHeader}>
          <div className={styles.badge}>
            <span>🎨</span>
            <span>Our Work</span>
          </div>
          <h1>Showcase</h1>
          <p className={styles.subtitle}>
            Real projects, real results. See how we&apos;ve helped startups build and deploy with confidence.
          </p>
        </div>

        {showcaseItems.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📦</div>
            <h2>Coming Soon</h2>
            <p>We&apos;re working on adding showcase items. Check back soon to see our latest projects!</p>
            <p className={styles.emptyHint}>
              In the meantime, feel free to <Link href="/contact">reach out</Link> to discuss your project.
            </p>
          </div>
        ) : (
          <div className={styles.showcaseGrid}>
            {showcaseItems.map((item) => (
              <Link
                key={item.slug}
                href={`/showcase/${item.slug}`}
                className={styles.showcaseCard}
              >
                {item.image && (
                  <div
                    className={styles.showcaseImage}
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}
                <div className={styles.showcaseContent}>
                  <div className={styles.showcaseCategory}>{item.category}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={styles.technologies}>
                    {item.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
