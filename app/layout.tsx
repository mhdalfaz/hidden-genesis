import type { Metadata } from 'next'
import { jost, cormorant, bebas } from './fonts'
import './globals.css'
import Navbar from './components/Navbar'
import FloatingOrder from './components/FloatingOrder'
import ScrollToTop from './components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Hidden Genesis — Born from shadow, forged in silence.',
  description: 'Fashion Streetwear — Born from the quiet spaces between thoughts.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${jost.variable} ${cormorant.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <FloatingOrder />
        <ScrollToTop />
      </body>
    </html>
  )
}
