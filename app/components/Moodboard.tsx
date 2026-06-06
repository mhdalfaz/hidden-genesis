import ScrollReveal from './ScrollReveal'

export default function Moodboard() {
  return (
    <section id="moodboard" className="px-6 md:px-[60px] py-[120px] bg-near-black">
      <div className="flex items-center gap-5 mb-16">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent">Moodboard</span>
        <div className="flex-1 h-[1px] bg-dark-gray" />
        <span className="font-serif text-[11px] text-dark-gray">05</span>
      </div>

      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] mt-16">
          {/* Large - main image */}
          <div className="col-span-2 row-span-2 bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[200px]">
            <svg viewBox="0 0 400 370" style={{ width: '100%', height: '100%' }}>
              <rect width="400" height="370" fill="#151515" />
              <radialGradient id="moodLight1" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#1e1e1e" />
                <stop offset="100%" stopColor="#0d0d0d" />
              </radialGradient>
              <rect width="400" height="370" fill="url(#moodLight1)" />
              <path d="M0 260 Q100 220 200 240 Q300 255 400 230 L400 370 L0 370Z" fill="#111" />
              <path d="M0 280 Q80 260 180 270 Q280 278 400 255 L400 370 L0 370Z" fill="#0e0e0e" />
              <rect x="182" y="155" width="36" height="90" rx="5" fill="#1a1a1a" />
              <ellipse cx="200" cy="140" rx="22" ry="25" fill="#181818" />
              <path d="M182 240 Q174 290 168 340" stroke="#181818" strokeWidth="22" strokeLinecap="round" />
              <path d="M218 240 Q226 290 232 340" stroke="#181818" strokeWidth="22" strokeLinecap="round" />
              <path d="M182 260 Q174 290 170 320" stroke="#141414" strokeWidth="14" strokeLinecap="round" opacity="0.5" />
              <path d="M218 260 Q226 290 228 320" stroke="#141414" strokeWidth="14" strokeLinecap="round" opacity="0.5" />
              <ellipse cx="200" cy="265" rx="20" ry="5" fill="#141414" opacity="0.4" />
            </svg>
          </div>

          {/* Fabric texture */}
          <div className="bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[120px]">
            <svg viewBox="0 0 200 185" style={{ width: '100%', height: '100%' }}>
              <rect width="200" height="185" fill="#1a1a1a" />
              <defs>
                <pattern id="weave" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" fill="#1c1c1c" />
                  <rect x="4" y="4" width="4" height="4" fill="#1c1c1c" />
                  <rect x="0" y="4" width="4" height="4" fill="#181818" />
                  <rect x="4" y="0" width="4" height="4" fill="#181818" />
                </pattern>
              </defs>
              <rect width="200" height="185" fill="url(#weave)" />
              <rect x="30" y="50" width="140" height="85" rx="3" fill="none" stroke="#222" strokeWidth="0.5" />
              <text x="100" y="98" fontFamily="serif" fontSize="11" fill="#252525" textAnchor="middle" letterSpacing="2">24S Cotton</text>
              <text x="100" y="114" fontFamily="sans-serif" fontSize="7" fill="#1e1e1e" textAnchor="middle" letterSpacing="2">Premium Fabric</text>
            </svg>
          </div>

          {/* Plant/nature - tall */}
          <div className="row-span-2 bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[200px]">
            <svg viewBox="0 0 200 370" style={{ width: '100%', height: '100%' }}>
              <rect width="200" height="370" fill="#121212" />
              <line x1="100" y1="370" x2="100" y2="80" stroke="#1a1a1a" strokeWidth="3" />
              <path d="M100 150 Q140 120 180 90 Q170 130 140 160 Q115 175 100 180Z" fill="#161616" />
              <path d="M100 200 Q60 170 20 140 Q30 180 60 210 Q85 225 100 230Z" fill="#141414" />
              <path d="M100 260 Q145 230 185 195 Q172 238 142 268 Q118 282 100 288Z" fill="#161616" />
              <path d="M100 310 Q55 280 15 245 Q28 288 58 318 Q82 332 100 338Z" fill="#141414" />
              <path d="M100 150 Q130 118 178 92" stroke="#191919" strokeWidth="1" fill="none" />
              <path d="M100 200 Q65 172 22 142" stroke="#181818" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* Quote cell */}
          <div className="bg-black p-8 flex flex-col justify-center min-h-[120px]">
            <p className="font-serif text-[20px] italic font-light text-white leading-relaxed">
              &ldquo;Not every space needs to be filled.&rdquo;
            </p>
            <div className="text-[10px] tracking-[0.3em] uppercase text-mid-gray mt-4">
              &mdash; Hidden Genesis
            </div>
          </div>

          {/* Cap product detail */}
          <div className="bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[120px]">
            <svg viewBox="0 0 200 185" style={{ width: '100%', height: '100%' }}>
              <rect width="200" height="185" fill="#181818" />
              <radialGradient id="capLight" cx="45%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#222" />
                <stop offset="100%" stopColor="#141414" />
              </radialGradient>
              <rect width="200" height="185" fill="url(#capLight)" />
              <path d="M40 115 Q40 72 100 68 Q160 72 160 115 Z" fill="#1a1a1a" />
              <path d="M30 120 Q100 132 170 120 Q165 128 100 133 Q35 128 30 120Z" fill="#161616" />
              <line x1="100" y1="70" x2="100" y2="115" stroke="#222" strokeWidth="1" />
              <text x="100" y="100" fontFamily="serif" fontSize="11" fill="#252525" textAnchor="middle" letterSpacing="2">HG</text>
              <rect x="83" y="113" width="34" height="7" rx="2" fill="#161616" />
              <text x="100" y="152" fontFamily="sans-serif" fontSize="7" fill="#252525" textAnchor="middle" letterSpacing="2">Signature Cap</text>
            </svg>
          </div>

          {/* Logo brand identity */}
          <div className="bg-[#111] p-8 flex flex-col items-center justify-center gap-4 min-h-[120px]">
            <div className="border border-[#1e1e1e] px-8 py-6 text-center">
              <div className="font-serif text-[22px] tracking-[6px] text-[#282828] uppercase mb-2">
                Hidden Genesis
              </div>
              <div className="font-sans text-[8px] tracking-[5px] text-[#1e1e1e] uppercase">
                Born From Silence
              </div>
            </div>
          </div>

          {/* Color palette */}
          <div className="grid grid-cols-2 min-h-[120px]">
            <div className="bg-[#0a0a0a]" />
            <div className="bg-[#1a1a1a]" />
            <div className="bg-[#3a3a3a]" />
            <div className="bg-[#c8b89a]" />
          </div>

          {/* Wide quote */}
          <div className="col-span-2 bg-[#0e0e0e] p-8 flex flex-col justify-center min-h-[120px]">
            <p className="font-serif text-[clamp(20px,3vw,26px)] italic font-light text-white leading-relaxed">
              &ldquo;Silence is also a choice.&rdquo;
            </p>
            <div className="text-[10px] tracking-[0.3em] uppercase text-mid-gray mt-4">
              Not everything needs a reaction
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
