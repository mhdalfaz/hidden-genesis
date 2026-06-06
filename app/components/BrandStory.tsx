import Image from 'next/image'
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
              <Image
                src="/images/logo.png"
                alt="Hidden Genesis brand label"
                fill
                className="object-cover"
              />
            </div>
            {/* Border frame effect */}
            <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] border border-dark-gray -z-0 pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
