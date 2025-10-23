import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'incentino - Transform Your Business with Smart Incentives',
    template: '%s | incentino',
  },
  description: 'Building the future of incentive solutions with cutting-edge technology. Empower your team, delight your customers, and accelerate growth.',
  keywords: ['incentives', 'business growth', 'rewards', 'analytics', 'enterprise solutions'],
  authors: [{ name: 'incentino' }],
  creator: 'incentino',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://incentino.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'incentino',
    title: 'incentino - Transform Your Business with Smart Incentives',
    description: 'Building the future of incentive solutions with cutting-edge technology',
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
    title: 'incentino - Transform Your Business with Smart Incentives',
    description: 'Building the future of incentive solutions with cutting-edge technology',
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
