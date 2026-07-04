'use client'

import React, { useState, ReactNode } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import Modal from './Modal'

type SlideItem = { label: string; svg?: ReactNode; image?: string }

const accItems: SlideItem[] = [
  {
    label: 'Sticker Pack',
    image: '/images/sticker-1.jpg',
  },
  {
    label: 'Thanks Card',
    image: '/images/ty-card.jpg',
  },
]

const extraItems = [
  {
    label: 'Branded Lanyard',
    sub: 'One size — all colorways',
    svg: (
      <svg viewBox="0 0 80 100" style={{ width: 60, height: 80, flexShrink: 0 }}>
        <path d="M40 5 Q25 20 20 50 Q18 65 22 75" stroke="#2a2a2a" strokeWidth="3" fill="none" />
        <path d="M40 5 Q55 20 60 50 Q62 65 58 75" stroke="#2a2a2a" strokeWidth="3" fill="none" />
        <rect x="20" y="72" width="40" height="22" rx="3" fill="#1a1a1a" />
        <text x="40" y="87" fontFamily="serif" fontSize="7" fill="#2a2a2a" textAnchor="middle" letterSpacing="1">HG</text>
      </svg>
    ),
  },
  {
    label: 'Sticker Pack',
    sub: '6 pcs per set',
    image: '/images/stickers.jpg',
  },
  {
    label: 'Silicone Wristband',
    sub: 'Matte black finish',
    svg: (
      <svg viewBox="0 0 100 60" style={{ width: 80, height: 48, flexShrink: 0 }}>
        <path d="M10 30 Q10 10 50 10 Q90 10 90 30 Q90 50 50 50 Q10 50 10 30Z" fill="none" stroke="#1e1e1e" strokeWidth="10" />
        <text x="50" y="34" fontFamily="serif" fontSize="9" fill="#2a2a2a" textAnchor="middle" letterSpacing="2">HG</text>
      </svg>
    ),
  },
]

const allSlides: SlideItem[] = [
  ...accItems,
  ...extraItems,
]

export default function Accessories() {
  const [modalOpen, setModalOpen] = useState(false)

  const slideKeys = allSlides.map((s) => s.label)

  const renderSlide = (label: string) => {
    const item = allSlides.find((s) => s.label === label)
    if (!item) return null
    if (item.image) {
      return <Image src={item.image} alt={item.label} fill sizes="100vw" className="object-contain" />
    }
    return (
      <div className="flex items-center justify-center w-full h-full p-12 md:p-20">
        {item.svg}
      </div>
    )
  }

  return (
    <section id="accessories" className="px-6 md:px-[60px] py-[120px] bg-black">
      <div className="flex items-center gap-5 mb-16">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent">Accessories</span>
        <div className="flex-1 h-[1px] bg-dark-gray" />
        <span className="font-serif text-[11px] text-dark-gray">02</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Left */}
        <ScrollReveal>
          <div>
            <h2 className="font-display text-white leading-none tracking-[0.05em] text-[clamp(48px,6vw,80px)] mb-8">
              COMPLETE<br />THE LOOK
            </h2>
            <p className="font-serif text-[18px] italic text-light-gray leading-relaxed mb-12">
              Each accessory carries the same silence.<br />
              The same intention. The same restraint.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-4 border border-white/30 px-8 py-[14px] text-[11px] tracking-[0.3em] uppercase text-white no-underline transition-all duration-[0.4s] w-fit hover:bg-white hover:text-black hover:border-white group cursor-pointer"
            >
              View All Accessories
              <span className="transition-transform duration-300 group-hover:translate-x-[6px]">→</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Acc grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-[2px]">
            {accItems.map((a, i) => (
              <React.Fragment key={a.label}>
                {i === 1 && <div className="bg-transparent aspect-square" />}
                <div className="bg-charcoal aspect-square flex flex-col relative overflow-hidden group">
                  <div className="flex-1 flex items-center justify-center relative">
                    {a.image ? (
                      <Image src={a.image} alt={a.label} fill className="object-cover" />
                    ) : (
                      <div className="p-8 flex items-center justify-center w-full h-full">{a.svg}</div>
                    )}
                  </div>
                  <div className="relative z-10 bg-charcoal px-5 py-4 border-t border-dark-gray text-[10px] tracking-[0.3em] uppercase text-mid-gray group-hover:text-accent transition-colors">
                    {a.label}
                  </div>
                </div>
                {i === 0 && <div className="bg-transparent aspect-square" />}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Extra row */}
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-[2px]">
          {extraItems.map((e) => (
            <div
              key={e.label}
              className="bg-charcoal flex flex-row items-center p-8 gap-8"
              style={{ aspectRatio: 'auto' }}
            >
              {'image' in e ? (
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image src={e.image!} alt={e.label} fill className="object-cover rounded" />
                </div>
              ) : (
                e.svg
              )}
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-mid-gray mb-2">{e.label}</div>
                <div className="text-[12px] text-dark-gray">{e.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        images={slideKeys}
        title="Accessories"
        subtitle="Complete the look"
        renderSlide={renderSlide}
      />
    </section>
  )
}
