'use client'

import { useEffect, useCallback, useRef, useState } from 'react'
import Image from 'next/image'

import { ReactNode } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  images: string[]
  title: string
  subtitle?: string
  renderSlide?: (src: string, index: number) => ReactNode
}

export default function Modal({ open, onClose, images, title, subtitle, renderSlide }: ModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      setActiveIndex(0)
      if (scrollRef.current) scrollRef.current.scrollLeft = 0
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, handleKeyDown])

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    setActiveIndex(idx)
  }, [])

  const goTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const idx = Math.max(0, Math.min(index, images.length - 1))
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' })
    setActiveIndex(idx)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      <div
        className="relative w-full h-full md:h-auto md:max-w-5xl md:max-h-[85vh] bg-near-black md:rounded-sm overflow-hidden md:shadow-2xl md:shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image carousel */}
        <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden group/carousel">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto h-full scrollbar-hide snap-x snap-mandatory"
            onScroll={handleScroll}
          >
            {images.map((src, i) => (
              <div key={src} className="w-full h-full flex-shrink-0 snap-start relative">
                {renderSlide ? renderSlide(src, i) : (
                  <Image src={src} alt={title} fill sizes="100vw" className="object-contain" />
                )}
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/50 border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:text-black rounded-full disabled:opacity-0 disabled:pointer-events-none"
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === images.length - 1}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/50 border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:text-black rounded-full disabled:opacity-0 disabled:pointer-events-none"
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Bottom info */}
        <div className="p-6 md:p-8 border-t border-dark-gray">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-white tracking-[0.05em]">
                {title}
              </h3>
              {subtitle && (
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent mt-1">
                  {subtitle}
                </p>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'bg-accent w-5' : 'bg-dark-gray'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
