import ScrollReveal from './ScrollReveal'

const products = [
  {
    name: 'Oversized Silence Tee',
    price: 'Rp 395.000',
    featured: true,
    svg: (
      <svg viewBox="0 0 400 560" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="560" fill="#1a1a1a" />
        <radialGradient id="p1light" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#282828" />
          <stop offset="100%" stopColor="#111" />
        </radialGradient>
        <rect width="400" height="560" fill="url(#p1light)" />
        <path d="M130 140 Q120 155 118 200 Q115 270 118 340 Q120 365 135 375 L265 375 Q280 365 282 340 Q285 270 282 200 Q280 155 270 140Z" fill="#161616" />
        <text x="200" y="230" fontFamily="serif" fontSize="11" fill="#2a2a2a" textAnchor="middle" letterSpacing="1">NOT EVERYTHING</text>
        <text x="200" y="248" fontFamily="serif" fontSize="11" fill="#2a2a2a" textAnchor="middle" letterSpacing="1">NEEDS A REACTION</text>
        <line x1="175" y1="256" x2="225" y2="256" stroke="#2a2a2a" strokeWidth="0.8" />
        <path d="M118 140 Q100 148 93 178 Q89 195 96 208 Q105 220 118 215 Q128 190 138 165Z" fill="#161616" />
        <path d="M282 140 Q300 148 307 178 Q311 195 304 208 Q295 220 282 215 Q272 190 262 165Z" fill="#161616" />
        <path d="M165 140 Q185 152 200 140 Q185 125 168 128Z" fill="#141414" />
        <text x="200" y="355" fontFamily="serif" fontSize="8" fill="#252525" textAnchor="middle" letterSpacing="2">HG</text>
        <ellipse cx="200" cy="500" rx="100" ry="20" fill="#111" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'Front Minimal Tee',
    price: 'Rp 375.000',
    svg: (
      <svg viewBox="0 0 300 380" style={{ width: '100%', height: '100%' }}>
        <rect width="300" height="380" fill="#1c1c1c" />
        <path d="M90 95 Q80 108 78 145 Q75 200 78 255 Q80 275 92 283 L208 283 Q220 275 222 255 Q225 200 222 145 Q220 108 210 95Z" fill="#141414" />
        <circle cx="175" cy="155" r="3" fill="#252525" />
        <path d="M125 95 Q148 108 150 95 Q135 82 118 85Z" fill="#111" />
        <rect x="138" y="268" width="24" height="12" rx="2" fill="#1a1a1a" />
        <text x="150" y="277" fontFamily="serif" fontSize="5" fill="#2a2a2a" textAnchor="middle" letterSpacing="0.5">HG</text>
        <path d="M78 95 Q60 102 55 128 Q52 142 58 153 Q66 163 78 158 Q86 135 96 112Z" fill="#141414" />
        <path d="M222 95 Q240 102 245 128 Q248 142 242 153 Q234 163 222 158 Q214 135 204 112Z" fill="#141414" />
        <ellipse cx="150" cy="340" rx="75" ry="12" fill="#131313" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'Wide Leg Cargo',
    price: 'Rp 520.000',
    svg: (
      <svg viewBox="0 0 300 380" style={{ width: '100%', height: '100%' }}>
        <rect width="300" height="380" fill="#181818" />
        <path d="M90 50 L210 50 L220 200 L175 200 L150 320 L125 200 L80 200 Z" fill="#141414" />
        <rect x="88" y="48" width="124" height="20" rx="3" fill="#1c1c1c" />
        <line x1="150" y1="200" x2="155" y2="320" stroke="#111" strokeWidth="1" opacity="0.8" />
        <line x1="150" y1="200" x2="145" y2="320" stroke="#111" strokeWidth="1" opacity="0.8" />
        <path d="M90 80 Q85 100 88 118" stroke="#111" strokeWidth="1.5" fill="none" />
        <path d="M210 80 Q215 100 212 118" stroke="#111" strokeWidth="1.5" fill="none" />
        <ellipse cx="150" cy="350" rx="85" ry="10" fill="#111" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'Phantom Hoodie',
    price: 'Rp 650.000',
    svg: (
      <svg viewBox="0 0 300 380" style={{ width: '100%', height: '100%' }}>
        <rect width="300" height="380" fill="#161616" />
        <path d="M75 110 Q65 125 62 175 Q58 240 62 295 Q65 320 80 328 L220 328 Q235 320 238 295 Q242 240 238 175 Q235 125 225 110Z" fill="#131313" />
        <path d="M100 110 Q105 85 150 75 Q195 85 200 110 Q180 98 150 95 Q120 98 100 110Z" fill="#131313" />
        <line x1="150" y1="115" x2="150" y2="325" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M62 115 Q40 122 34 158 Q30 178 38 192 Q48 205 62 198 Q72 168 85 138Z" fill="#131313" />
        <path d="M238 115 Q260 122 266 158 Q270 178 262 192 Q252 205 238 198 Q228 168 215 138Z" fill="#131313" />
        <path d="M110 220 Q110 250 115 260 L185 260 Q190 250 190 220 Z" fill="#161616" stroke="#1a1a1a" strokeWidth="1" />
        <text x="150" y="165" fontFamily="serif" fontSize="14" fill="#1e1e1e" textAnchor="middle" letterSpacing="3">HG</text>
        <ellipse cx="150" cy="350" rx="85" ry="10" fill="#111" opacity="0.4" />
      </svg>
    ),
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px]">
        {products.map((p, i) => (
          <div
            key={p.name}
            className={`bg-charcoal overflow-hidden group ${i === 0 ? 'sm:row-span-2' : ''}`}
          >
            <div className={`relative overflow-hidden ${i === 0 ? 'aspect-auto min-h-[300px] sm:min-h-[560px]' : 'aspect-[3/4]'}`}>
              {p.svg}
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
