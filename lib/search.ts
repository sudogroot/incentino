import FlexSearch from 'flexsearch'
import { BlogPostMeta } from './blog'

export interface SearchIndex {
  index: FlexSearch.Index
  posts: BlogPostMeta[]
}

export function createSearchIndex(posts: BlogPostMeta[]): FlexSearch.Index {
  const index = new FlexSearch.Index({
    tokenize: 'forward',
    cache: true,
  })

  posts.forEach((post, i) => {
    const searchableContent = `${post.title} ${post.description} ${post.tags.join(' ')}`
    index.add(i, searchableContent)
  })

  return index
}

export function searchPosts(
  query: string,
  index: FlexSearch.Index,
  posts: BlogPostMeta[]
): BlogPostMeta[] {
  if (!query || query.trim() === '') {
    return posts
  }

  const results = index.search(query)
  return results.map((i) => posts[i as number]).filter(Boolean)
}
