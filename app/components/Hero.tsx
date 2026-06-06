import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      style={{ padding: 0 }}
    >
      {/* Left */}
      <div className="flex flex-col justify-end px-6 md:px-[60px] pt-30 md:pb-[160px] relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-10 h-[1px] bg-accent" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent">
            Fashion Streetwear
          </span>
        </div>

        <h1 className="font-display text-white leading-[0.92] md:mb-8 text-[clamp(72px,9vw,130px)]">
          HIDDEN GENESIS
        </h1>

        <p className="font-serif text-base italic text-light-gray leading-relaxed max-w-[320px] mb-6 md:mb-12">
          Born from the quiet spaces between thoughts. Worn by those who speak through presence, not noise.
        </p>

        <a
          href="#catalogue"
          className="inline-flex items-center gap-4 border border-white/30 px-8 py-[14px] text-[11px] tracking-[0.3em] uppercase text-white no-underline transition-all duration-[0.4s] w-fit hover:bg-white hover:text-black hover:border-white group"
        >
          Explore Collection
          <span className="transition-transform duration-300 group-hover:translate-x-[6px]">→</span>
        </a>

        {/* Scroll hint */}
        <div className="absolute bottom-[-40px] md:bottom-10 left-6 md:left-[60px] flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-mid-gray z-[3]">
          <div className="w-12 h-[1px] bg-mid-gray animate-pulse" />
          <span>Scroll</span>
        </div>
      </div>

      {/* Right - Hero image */}
      <div className="relative min-h-[60vh] md:h-full">
        <Image
          src="/images/hero.png"
          alt="Hidden Genesis model"
          fill
          className="object-contain md:object-bottom"
          preload
        />
      </div>
    </section>
  )
}
