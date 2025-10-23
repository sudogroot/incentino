'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BlogPostMeta } from '@/lib/blog'
import { createSearchIndex, searchPosts } from '@/lib/search'
import styles from './BlogList.module.css'

interface BlogListProps {
  posts: BlogPostMeta[]
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const searchIndex = useMemo(() => createSearchIndex(posts), [posts])

  const filteredPosts = useMemo(() => {
    return searchPosts(searchQuery, searchIndex, posts)
  }, [searchQuery, searchIndex, posts])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className={styles.blogList}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className={styles.clearButton}
          >
            ✕
          </button>
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <div className={styles.noResults}>
          <p>No posts found{searchQuery && ` for "${searchQuery}"`}</p>
        </div>
      ) : (
        <>
          {searchQuery && (
            <p className={styles.resultsCount}>
              Found {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          )}
          <div className={styles.postsGrid}>
            {filteredPosts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                  <div className={styles.postMeta}>
                    <time className={styles.postDate}>{formatDate(post.date)}</time>
                    <span className={styles.readingTime}>{post.readingTime}</span>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postDescription}>{post.description}</p>
                  <div className={styles.postTags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.postFooter}>
                    <span className={styles.author}>{post.author}</span>
                    <span className={styles.readMore}>
                      Read more →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
