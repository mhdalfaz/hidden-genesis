'use client'

import { useState, ReactNode } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import Modal from './Modal'

type SlideItem = { label: string; svg?: ReactNode; image?: string }

const packThumbs: SlideItem[] = [
  {
    label: 'Open Box',
    image: '/images/hang-tag.jpg',
  },
  {
    label: 'Inside Detail',
    image: '/images/neck-label.jpg',
  },
  {
    label: 'Brand Label',
    image: '/images/brand-label.jpg',
  },
  {
    label: 'Thank You Card',
    image: '/images/ty-card.jpg',
  },
]

const allSlides: SlideItem[] = [
  { label: 'Premium Packaging Box', image: '/images/package.jpg' },
  ...packThumbs,
]

export default function Packaging() {
  const [modalOpen, setModalOpen] = useState(false)

  const slideKeys = allSlides.map((s) => s.label)

  const renderSlide = (label: string) => {
    const item = allSlides.find((s) => s.label === label)
    if (!item) return null
    if (item.image) {
      return <Image src={item.image} alt={item.label} fill sizes="100vw" className="object-contain" />
    }
    return (
      <div className="flex items-center justify-center w-full h-full p-12 md:p-16">
        {item.svg}
      </div>
    )
  }

  return (
    <section id="packaging" className="px-6 md:px-[60px] py-[120px] bg-near-black">
      <div className="flex items-center gap-5 mb-16">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent">Packaging</span>
        <div className="flex-1 h-[1px] bg-dark-gray" />
        <span className="font-serif text-[11px] text-dark-gray">04</span>
      </div>

      {/* Hero */}
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[2px] mb-[2px]">
          {/* Left - packaging image */}
          <div className="bg-charcoal min-h-[480px] flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/package.jpg"
              alt="Premium Packaging Box"
              fill
              className="object-contain bg-black"
            />
            <div className="absolute bottom-8 left-8 text-[10px] tracking-[0.4em] uppercase text-mid-gray">
              Premium Packaging Box
            </div>
          </div>

          {/* Right - info */}
          <div className="bg-black p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-serif text-[36px] font-light leading-tight text-white mb-6">
                Packaging as<br />a Statement
              </p>
              <p className="text-[13px] text-light-gray leading-relaxed mb-10">
                The unboxing is part of the experience. Every fold deliberate. Every material chosen for its
                silence — matte black surfaces that absorb light, embossed marks that ask to be touched.
              </p>
              <ul className="list-none flex flex-col gap-3">
                {[
                  'Premium Matte Finish',
                  'Brand Label',
                  'Magnetic Closure',
                  'Thank You Card Included',
                  'Black Tissue Paper Inner',
                  'Custom Wax Seal',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-silver">
                    <span className="text-accent text-[6px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-4 border border-white/30 px-8 py-[14px] text-[11px] tracking-[0.3em] uppercase text-white no-underline transition-all duration-[0.4s] w-fit hover:bg-white hover:text-black hover:border-white mt-10 group cursor-pointer"
            >
              Packaging Details
              <span className="transition-transform duration-300 group-hover:translate-x-[6px]">→</span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Thumb row */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {packThumbs.map((t) => (
            <div key={t.label} className="bg-charcoal aspect-square flex flex-col relative overflow-hidden group">
              <div className="flex-1 flex items-center justify-center relative">
                {'image' in t ? (
                  <Image src={t.image!} alt={t.label} fill className="object-cover" />
                ) : (
                  t.svg
                )}
              </div>
              <div className="px-[18px] py-[14px] border-t border-dark-gray text-[9px] tracking-[0.35em] uppercase text-mid-gray">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        images={slideKeys}
        title="Packaging"
        subtitle="Packaging as a Statement"
        renderSlide={renderSlide}
      />
    </section>
  )
}
