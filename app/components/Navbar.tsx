'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { href: '#catalogue', label: 'Catalogue' },
  { href: '#accessories', label: 'Accessories' },
  { href: '#packaging', label: 'Packaging' },
  { href: '#brand-story', label: 'Story' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled
    ? 'rgba(10,10,10,0.97)'
    : '#0a0a0a'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
      style={{ background: navBg, backdropFilter: scrolled ? 'blur(10px)' : 'none' }}
    >
      <a href="#" className="flex items-center gap-3 no-underline">
        <Image
          src="/images/logo-hidden-genesis.png"
          alt="Hidden Genesis"
          width={36}
          height={36}
          className="rounded-full"
          unoptimized
        />
        <span className="font-serif text-lg tracking-[0.3em] uppercase text-white leading-none">
          Hidden Genesis
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-silver no-underline text-[11px] tracking-[0.25em] uppercase transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-0 cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="block bg-white h-[1px] w-7 transition-all" />
        <span className="block bg-white h-[1px] w-[18px] transition-all" />
        <span className="block bg-white h-[1px] w-6 transition-all" />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black flex flex-col items-center py-8 gap-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-silver no-underline text-[11px] tracking-[0.25em] uppercase transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
