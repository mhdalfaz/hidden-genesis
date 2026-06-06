import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const products = [
  {
    name: 'Collection 1',
    price: 'Rp 155.000',
    featured: true,
    image: '/images/design-collection-1.png',
  },
  {
    name: 'Collection 2',
    price: 'Rp 155.000',
    image: '/images/design-collection-2.png',
  },
  {
    name: 'Collection 3',
    price: 'Rp 155.000',
    image: '/images/design-collection-3.png',
  },
  {
    name: 'Collection 4',
    price: 'Rp 155.000',
    image: '/images/model-1-collection-5.png',
  },
]

const details = [
  { label: 'Material', title: 'Premium\nCotton 24S' },
  { label: 'Silhouette', title: 'Oversize\nFit' },
  { label: 'Print Method', title: 'High Quality\nDTG Print' },
  { label: 'Availability', title: 'Limited\nEdition' },
]

const features = [
  {
    name: 'Premium Cotton 24S',
    desc: 'Ultra-soft heavyweight cotton for lasting comfort',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="#555" strokeWidth="1" />
        <path d="M10 16 Q16 8 22 16 Q16 24 10 16Z" fill="none" stroke="#888" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="3" fill="#666" />
      </svg>
    ),
  },
  {
    name: 'Oversize Fit',
    desc: 'Silhouette crafted for unrestricted movement',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="22" rx="2" stroke="#555" strokeWidth="1" />
        <line x1="10" y1="12" x2="22" y2="12" stroke="#666" strokeWidth="1" />
        <line x1="10" y1="16" x2="22" y2="16" stroke="#555" strokeWidth="1" />
        <line x1="10" y1="20" x2="18" y2="20" stroke="#444" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'High Quality Print',
    desc: 'Fade-resistant screen printing technique',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="7" y="7" width="18" height="18" rx="2" stroke="#555" strokeWidth="1" />
        <path d="M11 19 L15 14 L18 17 L21 13" stroke="#777" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Limited Edition',
    desc: 'Each drop, numbered and finite',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 5 L18 11 L24 11 L19 15 L21 21 L16 17 L11 21 L13 15 L8 11 L14 11Z" stroke="#666" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
]

export default function Catalogue() {
  return (
    <section id="catalogue" className="px-6 md:px-[60px] py-[120px] bg-near-black">
      {/* Header */}
      <div className="flex items-center gap-5 mb-16">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent">Product Catalogue</span>
        <div className="flex-1 h-[1px] bg-dark-gray" />
        <span className="font-serif text-[11px] text-dark-gray">01</span>
      </div>

      {/* Intro */}
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-20">
          <h2 className="font-display text-white leading-none tracking-[0.05em] text-[clamp(48px,6vw,80px)]">
            THE CORE<br />COLLECTION
          </h2>
          <p className="font-serif text-[13px] italic text-light-gray leading-relaxed pl-6 border-l border-accent">
            &ldquo;Fabric that moves like silence.<br />
            Cut to disappear into the crowd,<br />
            yet impossible to ignore.&rdquo;<br />
            <br />
            &mdash; Hidden Genesis, SS 2026
          </p>
        </div>
      </ScrollReveal>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
        {products.map((p) => (
          <div key={p.name} className="bg-charcoal overflow-hidden group">
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.4s]">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white border border-white/40 px-6 py-[10px]">
                  Quick View
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-5 border-t border-dark-gray">
              <span className="text-[12px] tracking-[0.2em] uppercase text-silver">{p.name}</span>
              <span className="font-serif text-[16px] text-accent">{p.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] mt-[2px]">
        {details.map((d, i) => (
          <ScrollReveal key={d.label} delay={i * 100}>
            <div className="bg-charcoal px-6 py-8 overflow-hidden">
              <div className="text-[9px] tracking-[0.4em] uppercase text-mid-gray mb-4">{d.label}</div>
              <div className="font-serif text-[22px] text-white font-light whitespace-pre-line">{d.title}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Features strip */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-dark-gray my-20">
          {features.map((f) => (
            <div key={f.name} className="py-8 px-4 border-r border-dark-gray last:border-r-0 flex flex-col items-center gap-3">
              {f.svg}
              <div className="text-[10px] tracking-[0.3em] uppercase text-silver text-center">{f.name}</div>
              <div className="text-[11px] text-mid-gray text-center leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
