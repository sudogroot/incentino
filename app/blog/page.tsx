import Layout from '@/components/Layout'
import BlogList from '@/components/BlogList'
import { getAllPosts } from '@/lib/blog'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, updates, and best practices on incentive solutions, business growth, and technology.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <Layout>
      <div className={styles.blogPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Our Blog</h1>
            <p>Insights, updates, and best practices on incentive solutions, business growth, and technology.</p>
          </div>
          <BlogList posts={posts} />
        </div>
      </div>
    </Layout>
  )
}
