import type { Metadata } from 'next'
import { jost, cormorant, bebas } from './fonts'
import './globals.css'
import Navbar from './components/Navbar'
import FloatingOrder from './components/FloatingOrder'
import ScrollToTop from './components/ScrollToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://hiddengenesis.store'),
  title: 'Hidden Genesis — Born from shadow, forged in silence.',
  description: 'Fashion Streetwear eksklusif — Born from the quiet spaces between thoughts.',
  keywords: ['fashion streetwear', 'hidden genesis', 'pakaian distro', 'streetwear indonesia', 'baju eksklusif', 'clothing brand'],
  openGraph: {
    title: 'Hidden Genesis — Born from shadow, forged in silence.',
    description: 'Fashion Streetwear — Born from the quiet spaces between thoughts.',
    url: 'https://hiddengenesis.store',
    siteName: 'Hidden Genesis',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hidden Genesis',
    description: 'Fashion Streetwear — Born from the quiet spaces between thoughts.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hidden Genesis',
    url: 'https://hiddengenesis.store',
    logo: 'https://hiddengenesis.store/images/logo-hidden-genesis.png',
    sameAs: [
      'https://instagram.com/hidden.genesis_',
      'https://shopee.co.id/hiddengenesis',
      'https://tiktok.com/@hidden_genesis',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62882001428923',
      contactType: 'customer service',
      contactOption: 'TollFree',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English']
    }
  }

  return (
    <html
      lang="id"
      className={`${jost.variable} ${cormorant.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <FloatingOrder />
        <ScrollToTop />
      </body>
    </html>
  )
}
