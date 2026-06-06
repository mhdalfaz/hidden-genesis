import Image from 'next/image'
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
            <Image
              src="/images/model-1-collection-5.png"
              alt="Moodboard"
              fill
              className="object-cover"
            />
          </div>

          {/* Fabric texture */}
          <div className="bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[120px]">
            <Image
              src="/images/design-collection-1.png"
              alt="Fabric detail"
              fill
              className="object-cover"
            />
          </div>

          {/* Plant/nature - tall */}
          <div className="row-span-2 bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[200px]">
            <Image
              src="/images/design-collection-2.png"
              alt="Design detail"
              fill
              className="object-cover"
            />
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
            <Image
              src="/images/design-collection-3.png"
              alt="Design detail"
              fill
              className="object-cover"
            />
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
