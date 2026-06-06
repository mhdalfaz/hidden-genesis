import ScrollReveal from './ScrollReveal'

const packThumbs = [
  {
    label: 'Open Box',
    svg: (
      <svg viewBox="0 0 240 200" style={{ width: '100%', height: '100%' }}>
        <rect width="240" height="200" fill="#181818" />
        <polygon points="30,80 140,55 210,95 100,120" fill="#1e1e1e" />
        <polygon points="30,120 100,145 100,120 30,80" fill="#1a1a1a" />
        <polygon points="100,120 210,95 210,135 100,160" fill="#161616" />
        <ellipse cx="120" cy="122" rx="58" ry="30" fill="#141414" />
        <rect x="88" y="108" width="64" height="32" rx="2" fill="#111" opacity="0.8" />
        <text x="120" y="128" fontFamily="serif" fontSize="8" fill="#1e1e1e" textAnchor="middle" letterSpacing="1">HG</text>
      </svg>
    ),
  },
  {
    label: 'Inside Detail',
    svg: (
      <svg viewBox="0 0 240 200" style={{ width: '100%', height: '100%' }}>
        <rect width="240" height="200" fill="#141414" />
        <rect x="35" y="40" width="170" height="130" rx="3" fill="#181818" />
        <path d="M35 80 Q120 65 205 80" stroke="#1e1e1e" strokeWidth="1.5" fill="none" />
        <path d="M35 90 Q120 75 205 90" stroke="#1c1c1c" strokeWidth="1" fill="none" />
        <text x="120" y="145" fontFamily="serif" fontSize="16" fill="#1e1e1e" textAnchor="middle" letterSpacing="4">HIDDEN</text>
        <text x="120" y="162" fontFamily="serif" fontSize="16" fill="#1e1e1e" textAnchor="middle" letterSpacing="4">GENESIS</text>
      </svg>
    ),
  },
  {
    label: 'Emboss Logo',
    svg: (
      <svg viewBox="0 0 240 200" style={{ width: '100%', height: '100%' }}>
        <rect width="240" height="200" fill="#161616" />
        <radialGradient id="emLight" cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#202020" />
          <stop offset="100%" stopColor="#131313" />
        </radialGradient>
        <rect width="240" height="200" fill="url(#emLight)" />
        <text x="120" y="95" fontFamily="serif" fontSize="22" fill="#1a1a1a" textAnchor="middle" letterSpacing="5">HIDDEN</text>
        <text x="120" y="118" fontFamily="serif" fontSize="22" fill="#1a1a1a" textAnchor="middle" letterSpacing="5">GENESIS</text>
        <text x="119" y="94" fontFamily="serif" fontSize="22" fill="#222" textAnchor="middle" letterSpacing="5">HIDDEN</text>
        <text x="119" y="117" fontFamily="serif" fontSize="22" fill="#222" textAnchor="middle" letterSpacing="5">GENESIS</text>
        <line x1="80" y1="128" x2="160" y2="128" stroke="#1c1c1c" strokeWidth="0.8" />
        <text x="120" y="140" fontFamily="sans-serif" fontSize="7" fill="#1a1a1a" textAnchor="middle" letterSpacing="3">BORN FROM SILENCE</text>
      </svg>
    ),
  },
  {
    label: 'Thank You Card',
    svg: (
      <svg viewBox="0 0 240 200" style={{ width: '100%', height: '100%' }}>
        <rect width="240" height="200" fill="#181818" />
        <rect x="40" y="45" width="160" height="110" rx="3" fill="#1a1a1a" />
        <rect x="40" y="45" width="160" height="4" rx="2" fill="#1e1e1e" />
        <text x="120" y="90" fontFamily="serif" fontSize="10" fill="#252525" textAnchor="middle" letterSpacing="1" fontStyle="italic">Sometimes,</text>
        <text x="120" y="106" fontFamily="serif" fontSize="10" fill="#252525" textAnchor="middle" letterSpacing="1" fontStyle="italic">not reacting is the</text>
        <text x="120" y="122" fontFamily="serif" fontSize="10" fill="#252525" textAnchor="middle" letterSpacing="1" fontStyle="italic">strongest response.</text>
        <line x1="80" y1="132" x2="160" y2="132" stroke="#1e1e1e" strokeWidth="0.8" />
        <text x="120" y="145" fontFamily="sans-serif" fontSize="7" fill="#1e1e1e" textAnchor="middle" letterSpacing="2">Thank you for supporting</text>
        <text x="120" y="155" fontFamily="sans-serif" fontSize="7" fill="#222" textAnchor="middle" letterSpacing="2">Hidden Genesis.</text>
      </svg>
    ),
  },
]

export default function Packaging() {
  return (
    <section id="packaging" className="px-6 md:px-[60px] py-[120px] bg-near-black">
      <div className="flex items-center gap-5 mb-16">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent">Packaging</span>
        <div className="flex-1 h-[1px] bg-dark-gray" />
        <span className="font-serif text-[11px] text-dark-gray">03</span>
      </div>

      {/* Hero */}
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[2px] mb-[2px]">
          {/* Left - box visual */}
          <div className="bg-charcoal min-h-[480px] flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 640 480" style={{ width: '100%', height: '100%' }}>
              <rect width="640" height="480" fill="#161616" />
              <radialGradient id="boxLight" cx="40%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#222" />
                <stop offset="100%" stopColor="#101010" />
              </radialGradient>
              <rect width="640" height="480" fill="url(#boxLight)" />
              <polygon points="120,140 400,100 540,185 260,225" fill="#1e1e1e" />
              <polygon points="120,140 260,225 260,265 120,180" fill="#1a1a1a" />
              <polygon points="400,100 540,185 540,225 400,140" fill="#222" />
              <polygon points="120,180 260,265 260,380 120,295" fill="#161616" />
              <polygon points="260,265 540,225 540,340 260,380" fill="#1a1a1a" />
              <text x="290" y="168" fontFamily="serif" fontSize="20" fill="#2a2a2a" textAnchor="middle" letterSpacing="5" transform="rotate(-12,290,168)">HIDDEN GENESIS</text>
              <line x1="195" y1="175" x2="385" y2="148" stroke="#252525" strokeWidth="0.8" />
              <text x="285" y="183" fontFamily="sans-serif" fontSize="8" fill="#222" textAnchor="middle" letterSpacing="4" transform="rotate(-12,285,183)">BORN FROM SILENCE</text>
              <path d="M330,100 Q330,195 330,265" stroke="#282828" strokeWidth="3" />
              <path d="M250,155 Q330,140 410,125" stroke="#282828" strokeWidth="3" />
              <ellipse cx="330" cy="148" rx="22" ry="14" fill="none" stroke="#2a2a2a" strokeWidth="2.5" transform="rotate(-12,330,148)" />
              <circle cx="330" cy="148" r="4" fill="#252525" />
              <ellipse cx="190" cy="264" rx="85" ry="60" fill="#141414" transform="rotate(-12,190,264)" />
              <rect x="128" y="186" width="124" height="90" fill="none" stroke="#1e1e1e" strokeWidth="0.5" transform="skewY(18) translate(0,-50)" />
              <text x="140" y="425" fontFamily="sans-serif" fontSize="9" fill="#252525" letterSpacing="4">EXTERIOR VIEW</text>
            </svg>
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
                  'Emboss Logo on Cover',
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
            <a href="#" className="inline-flex items-center gap-4 border border-white/30 px-8 py-[14px] text-[11px] tracking-[0.3em] uppercase text-white no-underline transition-all duration-[0.4s] w-fit hover:bg-white hover:text-black hover:border-white mt-10 group">
              Packaging Details
              <span className="transition-transform duration-300 group-hover:translate-x-[6px]">→</span>
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Thumb row */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {packThumbs.map((t) => (
            <div key={t.label} className="bg-charcoal aspect-square flex flex-col relative overflow-hidden group">
              <div className="flex-1 flex items-center justify-center">{t.svg}</div>
              <div className="px-[18px] py-[14px] border-t border-dark-gray text-[9px] tracking-[0.35em] uppercase text-mid-gray">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
