import ScrollReveal from './ScrollReveal'

const accItems = [
  {
    label: 'Signature Cap',
    svg: (
      <svg viewBox="0 0 180 160" style={{ width: 140, height: 120 }}>
        <ellipse cx="90" cy="110" rx="78" ry="20" fill="#111" />
        <path d="M30 100 Q30 50 90 45 Q150 50 150 100 Z" fill="#1a1a1a" />
        <path d="M20 105 Q90 115 160 105 Q155 112 90 118 Q25 112 20 105Z" fill="#151515" />
        <line x1="90" y1="48" x2="90" y2="100" stroke="#222" strokeWidth="1" />
        <text x="90" y="82" fontFamily="serif" fontSize="12" fill="#252525" textAnchor="middle" letterSpacing="2">HG</text>
        <rect x="78" y="98" width="24" height="6" rx="2" fill="#161616" />
      </svg>
    ),
  },
  {
    label: 'Canvas Tote',
    svg: (
      <svg viewBox="0 0 160 180" style={{ width: 120, height: 140 }}>
        <path d="M55 60 Q55 30 80 25 Q105 30 105 60" stroke="#2a2a2a" strokeWidth="5" fill="none" strokeLinecap="round" />
        <rect x="30" y="58" width="100" height="110" rx="4" fill="#181818" />
        <rect x="30" y="58" width="100" height="18" rx="4" fill="#1c1c1c" />
        <text x="80" y="122" fontFamily="serif" fontSize="13" fill="#252525" textAnchor="middle" letterSpacing="2">HG</text>
        <text x="80" y="138" fontFamily="sans-serif" fontSize="6" fill="#202020" textAnchor="middle" letterSpacing="2">HIDDEN GENESIS</text>
        <ellipse cx="80" cy="172" rx="50" ry="8" fill="#111" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: 'Logo Socks',
    svg: (
      <svg viewBox="0 0 160 160" style={{ width: 130, height: 130 }}>
        <path d="M50 30 Q44 30 42 40 L38 110 Q36 130 55 138 Q72 144 82 130 Q90 118 78 108 L74 85 L86 80 L80 38 Q78 30 70 30Z" fill="#1a1a1a" />
        <rect x="44" y="30" width="34" height="4" rx="1" fill="#222" />
        <rect x="44" y="36" width="34" height="2" rx="1" fill="#1e1e1e" />
        <text x="61" y="44" fontFamily="serif" fontSize="7" fill="#2a2a2a" textAnchor="middle" letterSpacing="1">HG</text>
        <path d="M85 38 Q79 38 77 48 L73 112 Q71 132 90 140 Q107 146 117 132 Q125 120 113 110 L109 87 L121 82 L115 46 Q113 38 105 38Z" fill="#161616" />
        <rect x="79" y="38" width="34" height="4" rx="1" fill="#1c1c1c" />
      </svg>
    ),
  },
  {
    label: 'Brand Keychain',
    svg: (
      <svg viewBox="0 0 160 160" style={{ width: 130, height: 130 }}>
        <circle cx="80" cy="28" r="8" fill="none" stroke="#2a2a2a" strokeWidth="2" />
        <line x1="80" y1="36" x2="80" y2="55" stroke="#222" strokeWidth="2" />
        <rect x="54" y="55" width="52" height="72" rx="6" fill="#1a1a1a" />
        <circle cx="80" cy="63" r="5" fill="#141414" />
        <text x="80" y="98" fontFamily="serif" fontSize="14" fill="#2a2a2a" textAnchor="middle" letterSpacing="2">HG</text>
        <line x1="64" y1="106" x2="96" y2="106" stroke="#222" strokeWidth="0.8" />
        <text x="80" y="116" fontFamily="sans-serif" fontSize="5" fill="#1e1e1e" textAnchor="middle" letterSpacing="1.5">HIDDEN GENESIS</text>
        <ellipse cx="80" cy="132" rx="30" ry="5" fill="#111" opacity="0.5" />
      </svg>
    ),
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
    svg: (
      <svg viewBox="0 0 100 80" style={{ width: 80, height: 60, flexShrink: 0 }}>
        <rect x="5" y="10" width="40" height="55" rx="4" fill="#1a1a1a" />
        <text x="25" y="42" fontFamily="serif" fontSize="10" fill="#2a2a2a" textAnchor="middle" letterSpacing="1">HG</text>
        <rect x="52" y="18" width="42" height="42" rx="21" fill="#1c1c1c" />
        <text x="73" y="44" fontFamily="serif" fontSize="10" fill="#252525" textAnchor="middle">HG</text>
      </svg>
    ),
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

export default function Accessories() {
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
            <a href="#" className="inline-flex items-center gap-4 border border-white/30 px-8 py-[14px] text-[11px] tracking-[0.3em] uppercase text-white no-underline transition-all duration-[0.4s] w-fit hover:bg-white hover:text-black hover:border-white group">
              View All Accessories
              <span className="transition-transform duration-300 group-hover:translate-x-[6px]">→</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Acc grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-[2px]">
            {accItems.map((a) => (
              <div key={a.label} className="bg-charcoal aspect-square flex flex-col relative overflow-hidden group">
                <div className="flex-1 flex items-center justify-center p-8">{a.svg}</div>
                <div className="px-5 py-4 border-t border-dark-gray text-[10px] tracking-[0.3em] uppercase text-mid-gray group-hover:text-accent transition-colors">
                  {a.label}
                </div>
              </div>
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
              className="bg-charcoal flex flex-row items-center p-8 md:p-8 gap-8"
              style={{ aspectRatio: 'auto' }}
            >
              {e.svg}
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-mid-gray mb-2">{e.label}</div>
                <div className="text-[12px] text-dark-gray">{e.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
