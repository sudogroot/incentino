import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const showcaseDirectory = path.join(process.cwd(), 'content/showcase')

export interface ShowcaseItem {
  slug: string
  title: string
  description: string
  date: string
  technologies: string[]
  category: string
  image?: string
  content: string
}

export interface ShowcaseItemMeta {
  slug: string
  title: string
  description: string
  date: string
  technologies: string[]
  category: string
  image?: string
}

export function getAllShowcaseSlugs(): string[] {
  if (!fs.existsSync(showcaseDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(showcaseDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}

export function getShowcaseBySlug(slug: string): ShowcaseItem {
  const fullPath = path.join(showcaseDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    technologies: data.technologies || [],
    category: data.category || 'General',
    image: data.image,
    content,
  }
}

export function getAllShowcaseItems(): ShowcaseItemMeta[] {
  const slugs = getAllShowcaseSlugs()
  const items = slugs
    .map((slug) => {
      const item = getShowcaseBySlug(slug)
      return {
        slug: item.slug,
        title: item.title,
        description: item.description,
        date: item.date,
        technologies: item.technologies,
        category: item.category,
        image: item.image,
      }
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return items
}

export function getShowcaseByCategory(category: string): ShowcaseItemMeta[] {
  const allItems = getAllShowcaseItems()
  return allItems.filter((item) => item.category === category)
}

export function getAllCategories(): string[] {
  const allItems = getAllShowcaseItems()
  const categorySet = new Set<string>()

  allItems.forEach((item) => {
    categorySet.add(item.category)
  })

  return Array.from(categorySet).sort()
}
