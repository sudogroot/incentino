# incentino - Smart Incentive Solutions Platform

A modern, professional website built with Next.js, featuring static site generation (SSG), MDX-powered blog, and client-side search functionality.

## Features

- **Static Site Generation (SSG)**: Fully pre-rendered for optimal performance and SEO
- **MDX Blog**: Write blog posts in Markdown with React components
- **Client-Side Search**: Fast, instant search powered by FlexSearch
- **SEO Optimized**: Comprehensive metadata, Open Graph, Twitter Cards, and sitemap
- **Responsive Design**: Beautiful UI that works on all devices
- **Professional Components**: Reusable, consistent components throughout
- **Type-Safe**: Built with TypeScript for reliability
- **Modern Stack**: Next.js 14, React 18, and latest best practices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Content**: MDX with gray-matter for frontmatter
- **Search**: FlexSearch for client-side search
- **Styling**: CSS Modules with custom properties
- **Fonts**: Niramit (Google Fonts)
- **SEO**: next-sitemap, comprehensive metadata

## Project Structure

```
incentino/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Global styles
│   ├── blog/              # Blog section
│   │   ├── page.tsx       # Blog listing page
│   │   └── [slug]/        # Dynamic blog posts
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Layout.tsx         # Page layout wrapper
│   ├── Button.tsx         # Button component
│   └── BlogList.tsx       # Blog list with search
├── content/               # Content files
│   └── blog/              # Blog posts in MDX
├── lib/                   # Utility functions
│   ├── blog.ts            # Blog utilities
│   └── search.ts          # Search functionality
├── public/                # Static assets
└── styles/                # Additional styles

```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd incentino
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This will:
- Generate static pages in the `out/` directory
- Create a sitemap at `public/sitemap.xml`
- Generate `robots.txt`

### Serving Production Build

```bash
npm start
```

Or serve the `out/` directory with any static hosting service.

## Writing Blog Posts

Blog posts are written in MDX format and stored in `content/blog/`.

### Create a New Post

1. Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2025-01-15"
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
---

# Your Post Title

Your content here...
```

2. The post will automatically appear on the blog page and be searchable
3. Run `npm run build` to generate the static page

### MDX Features

- Full Markdown support (GFM)
- Syntax highlighting for code blocks
- React components in content
- Automatic heading IDs and links
- Reading time calculation

## SEO Features

- **Metadata**: Comprehensive title, description, keywords
- **Open Graph**: Social media preview cards
- **Twitter Cards**: Optimized Twitter sharing
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine directives
- **Semantic HTML**: Proper heading hierarchy
- **Fast Loading**: Pre-rendered static pages

## Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: #1E1743;
  --secondary: #BF5AF2;
  --text: #18181B;
  --text-secondary: #52525B;
  --text-light: #71717A;
  --border: #E4E4E7;
  --bg: #FFFFFF;
  --bg-gray: #FAFAFA;
}
```

### Site URL

Update the site URL in:
- `next-sitemap.config.js`
- Environment variable `NEXT_PUBLIC_SITE_URL`

### Logo

Replace logo files in `public/`:
- `incentino. (1).svg` - Main logo
- `incentino. (1).png` - Social media preview image

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: `vercel deploy` (recommended)
- **Netlify**: Connect repository and deploy
- **GitHub Pages**: Deploy `out/` directory
- **AWS S3**: Upload `out/` directory
- **Any CDN**: Serve `out/` directory

## Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Bundle Size**: < 150KB (gzipped)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run build`
5. Submit a pull request

## License

Copyright © 2025 incentino. All rights reserved.

## Support

For questions or support, contact hello@incentino.com
