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
    label: 'Sticker Pack',
    image: '/images/sticker-2.jpg',
  },
  {
    label: 'Sticker Pack',
    image: '/images/sticker-3.jpg',
  },
  {
    label: 'Thanks Card',
    image: '/images/ty-card.jpg',
  },
]

const allSlides: SlideItem[] = [
  ...accItems,
]

export default function Accessories() {
  const [modalOpen, setModalOpen] = useState(false)

  const slideKeys = allSlides.map((_, i) => i.toString())

  const renderSlide = (key: string, index: number) => {
    const item = allSlides[index]
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
        <span className="font-serif text-[11px] text-dark-gray">03</span>
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
              <React.Fragment key={i}>
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
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>
      </div>

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
