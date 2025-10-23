import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Layout from '@/components/Layout'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import styles from './page.module.css'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params

  try {
    const post = getPostBySlug(slug)

    const formatDate = (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }

    return (
      <Layout>
        <article className={styles.blogPost}>
          <div className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
              ← Back to Blog
            </Link>

            <header className={styles.header}>
              <div className={styles.meta}>
                <time className={styles.date}>{formatDate(post.date)}</time>
                <span className={styles.separator}>•</span>
                <span className={styles.readingTime}>{post.readingTime}</span>
              </div>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.description}>{post.description}</p>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.author}>
                <span>By {post.author}</span>
              </div>
            </header>

            <div className={`${styles.content} mdx-content`}>
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeHighlight,
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    ],
                  },
                }}
              />
            </div>

            <footer className={styles.footer}>
              <Link href="/blog" className={styles.backButton}>
                ← Back to All Posts
              </Link>
            </footer>
          </div>
        </article>
      </Layout>
    )
  } catch (error) {
    notFound()
  }
}
