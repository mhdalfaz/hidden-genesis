import type { Metadata } from 'next'
import { jost, cormorant, bebas } from './fonts'
import './globals.css'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Hidden Genesis — Born From Silence',
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
      </body>
    </html>
  )
}
