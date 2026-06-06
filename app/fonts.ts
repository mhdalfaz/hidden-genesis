import { Cormorant_Garamond, Bebas_Neue, Jost } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})

export const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-jost',
})
