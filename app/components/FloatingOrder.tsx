'use client'

import { useEffect, useState } from 'react'

export default function FloatingOrder() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      setVisible(window.scrollY > 200 && !atBottom)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#connect"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 px-5 py-3 bg-accent text-black no-underline text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-500 hover:bg-white shadow-lg shadow-black/30 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      Order
    </a>
  )
}
