import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'incentino - Expert DevOps & Development for Startups',
    template: '%s | incentino',
  },
  description: 'High-quality DevOps operations and development support specifically designed for startups. Robust infrastructure, reliable deployments, expert team.',
  keywords: ['devops', 'kubernetes', 'docker', 'ci/cd', 'cloud infrastructure', 'startup development', 'aws', 'terraform'],
  authors: [{ name: 'incentino' }],
  creator: 'incentino',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://incentino.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'incentino',
    title: 'incentino - Expert DevOps & Development for Startups',
    description: 'High-quality DevOps operations and development support for startups',
    images: [
      {
        url: '/incentino. (1).png',
        width: 1200,
        height: 630,
        alt: 'incentino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'incentino - Expert DevOps & Development for Startups',
    description: 'High-quality DevOps operations and development support for startups',
    images: ['/incentino. (1).png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/incentino. (1).svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
