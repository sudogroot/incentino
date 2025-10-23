import { MDXRemote } from 'next-mdx-remote/rsc'
import Layout from '@/components/Layout'
import { getAllShowcaseSlugs, getShowcaseBySlug } from '@/lib/showcase'
import styles from './page.module.css'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = getAllShowcaseSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = getShowcaseBySlug(params.slug)
  return {
    title: `${item.title} - Showcase - incentino`,
    description: item.description,
  }
}

export default function ShowcaseItem({ params }: { params: { slug: string } }) {
  const item = getShowcaseBySlug(params.slug)

  return (
    <Layout>
      <article className={styles.showcaseArticle}>
        <div className={styles.showcaseHeader}>
          <div className={styles.category}>{item.category}</div>
          <h1>{item.title}</h1>
          <p className={styles.description}>{item.description}</p>
          <div className={styles.technologies}>
            {item.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.showcaseContent}>
          <MDXRemote source={item.content} />
        </div>
      </article>
    </Layout>
  )
}
