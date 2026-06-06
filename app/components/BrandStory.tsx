import ScrollReveal from './ScrollReveal'

export default function BrandStory() {
  return (
    <section id="brand-story" className="px-6 md:px-[60px] py-[120px] md:py-[160px] bg-black">
      <div className="flex items-center gap-5 mb-16">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent">Brand Story</span>
        <div className="flex-1 h-[1px] bg-dark-gray" />
        <span className="font-serif text-[11px] text-dark-gray">04</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[120px] items-center">
        {/* Text */}
        <ScrollReveal>
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent block mb-8">
              Our Origin
            </span>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-tight text-white mb-10">
              A brand born<br />in the space between<br />
              <em className="italic text-accent not-italic">thought and silence.</em>
            </h2>
            <p className="text-[14px] text-light-gray leading-relaxed mb-6">
              Hidden Genesis speaks without shouting. It exists for those who understand that the most powerful
              presence needs no announcement. Inspired by the beauty of restraint and the strength of inner
              stillness.
            </p>
            <p className="text-[14px] text-light-gray leading-relaxed mb-6">
              We believe that not everything needs a reaction. That silence is a choice — a powerful one. Each
              piece is designed to carry that philosophy on the body.
            </p>
            <p className="text-[14px] text-light-gray leading-relaxed mb-6">
              Wear your mindset.<br />Live in your calm.
            </p>
            <div className="mt-12 pt-8 border-t border-dark-gray">
              <div className="font-serif text-[22px] italic text-white">Hidden Genesis</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-mid-gray mt-1">Born From Silence</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Visual */}
        <ScrollReveal delay={300}>
          <div className="relative">
            <div className="bg-charcoal aspect-[3/4] relative overflow-hidden">
              <svg viewBox="0 0 400 540" style={{ width: '100%', height: '100%', display: 'block' }}>
                <rect width="400" height="540" fill="#141414" />
                <radialGradient id="storyLight" cx="60%" cy="25%" r="60%">
                  <stop offset="0%" stopColor="#222" />
                  <stop offset="100%" stopColor="#0e0e0e" />
                </radialGradient>
                <rect width="400" height="540" fill="url(#storyLight)" />
                <path d="M145 340 Q135 400 128 490 Q138 495 155 492 Q162 420 178 355Z" fill="#131313" />
                <path d="M255 340 Q265 400 272 490 Q262 495 245 492 Q238 420 222 355Z" fill="#131313" />
                <ellipse cx="140" cy="492" rx="25" ry="9" fill="#111" transform="rotate(-3,140,492)" />
                <rect x="118" y="485" width="44" height="12" rx="3" fill="#1a1a1a" transform="rotate(-3,140,492)" />
                <ellipse cx="260" cy="492" rx="25" ry="9" fill="#111" transform="rotate(3,260,492)" />
                <rect x="238" y="485" width="44" height="12" rx="3" fill="#1a1a1a" transform="rotate(3,260,492)" />
                <path d="M135 210 Q122 225 120 270 Q117 320 120 340 L280 340 Q283 320 280 270 Q278 225 265 210Z" fill="#171717" />
                <text x="200" y="268" fontFamily="serif" fontSize="12" fill="#222" textAnchor="middle" letterSpacing="1.5">NOT EVERYTHING</text>
                <text x="200" y="286" fontFamily="serif" fontSize="12" fill="#222" textAnchor="middle" letterSpacing="1.5">NEEDS A REACTION</text>
                <line x1="170" y1="295" x2="230" y2="295" stroke="#1e1e1e" strokeWidth="0.8" />
                <rect x="185" y="212" width="30" height="15" rx="2" fill="#141414" />
                <text x="200" y="223" fontFamily="serif" fontSize="6" fill="#202020" textAnchor="middle" letterSpacing="1">HG</text>
                <path d="M120 210 Q102 218 96 248 Q92 264 100 276 Q110 287 122 281 Q133 258 142 232Z" fill="#171717" />
                <path d="M280 210 Q298 218 304 248 Q308 264 300 276 Q290 287 278 281 Q267 258 258 232Z" fill="#171717" />
                <ellipse cx="200" cy="185" rx="38" ry="42" fill="#1e130d" />
                <path d="M162 178 Q165 150 200 145 Q235 150 238 178 Q228 162 200 160 Q172 162 162 178Z" fill="#111" />
                <rect x="185" y="195" width="30" height="22" rx="5" fill="#1c1108" opacity="0.9" />
                <rect x="289" y="272" width="20" height="14" rx="3" fill="#1c1c1c" />
                <rect x="290" y="273" width="18" height="12" rx="2" fill="#111" />
                <text x="30" y="520" fontFamily="serif" fontSize="10" fill="#1c1c1c" letterSpacing="6">HIDDEN GENESIS</text>
              </svg>
            </div>
            {/* Border frame effect */}
            <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] border border-dark-gray -z-0 pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
