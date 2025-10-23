import Layout from '@/components/Layout'
import BlogList from '@/components/BlogList'
import { getAllPosts } from '@/lib/blog'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Startup Tech Insights',
  description: 'Technical insights, DevOps best practices, and startup advice from experienced engineers who help founders build and scale products.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <Layout>
      <div className={styles.blogPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Startup Tech Insights</h1>
            <p>Technical insights, DevOps best practices, and advice from engineers who help startups build and scale.</p>
          </div>
          <BlogList posts={posts} />
        </div>
      </div>
    </Layout>
  )
}
