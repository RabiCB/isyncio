import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'NXGEN | Explore Tech Gadgets, Specs & Features in Detail',
  description: 'Discover the latest tech gadgets with detailed specifications, features breakdowns, design insights, and side-by-side comparisons. Headphones, smartwatches, drones, cameras, laptops & more.',
  keywords: ['tech gadgets', 'gadget specs', 'gadget features', 'headphones specs', 'smartwatch details', 'drone features', 'camera specifications', 'laptop specs', 'tech details', 'gadget information'],
  authors: [{ name: 'NXGEN' }],
  creator: 'NXGEN',
  publisher: 'NXGEN',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'NXGEN',
    title: 'NXGEN | Explore Tech Gadgets, Specs & Features',
    description: 'Discover the latest tech gadgets with detailed specifications, features breakdowns, and design insights.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NXGEN | Tech Gadget Specs & Features',
    description: 'Discover the latest tech gadgets with detailed specifications, features breakdowns, and design insights.',
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"  className={`${_inter.variable} ${_spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
            <Navbar />
        {children}
        
      </body>
    </html>
  )
}
