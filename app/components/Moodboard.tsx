import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function Moodboard() {
  return (
    <section id="moodboard" className="px-6 md:px-[60px] py-[120px] bg-near-black">
      <div className="flex items-center gap-5 mb-16">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent">Moodboard</span>
        <div className="flex-1 h-[1px] bg-dark-gray" />
        <span className="font-serif text-[11px] text-dark-gray">01</span>
      </div>

      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] mt-16">
          {/* Row 1 & 2 */}
          {/* Large - main image */}
          <div className="col-span-2 row-span-2 bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[250px] md:min-h-[400px]">
            <Image
              src="/images/model-metamorphosis-1.jpg"
              alt="Moodboard Main"
              fill
              className="object-cover"
            />
          </div>

          {/* Fabric texture -> Model */}
          <div className="bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[125px] md:min-h-[200px]">
            <Image
              src="/images/model-hidden-genesis-v1-4.jpg"
              alt="Model Genesis V1 Extra"
              fill
              className="object-cover"
            />
          </div>

          {/* Tall model 1 */}
          <div className="row-span-2 bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[250px] md:min-h-[400px]">
            <Image
              src="/images/model-oblivion-1.jpg"
              alt="Model Oblivion"
              fill
              className="object-cover"
            />
          </div>

          {/* Quote cell 1 */}
          <div className="bg-black p-6 md:p-8 flex flex-col justify-center min-h-[125px] md:min-h-[200px]">
            <p className="font-serif text-[16px] md:text-[20px] italic font-light text-white leading-relaxed">
              &ldquo;Not every space needs to be filled.&rdquo;
            </p>
            <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-mid-gray mt-4">
              &mdash; Hidden Genesis
            </div>
          </div>

          {/* Row 3 & 4 */}
          {/* Square Model 1 */}
          <div className="bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[125px] md:min-h-[200px]">
            <Image
              src="/images/model-hidden-genesis-v1-1.jpg"
              alt="Model Genesis V1"
              fill
              className="object-cover"
            />
          </div>

          {/* Logo brand identity */}
          <div className="bg-[#0a0a0a] p-4 md:p-8 flex flex-col items-center justify-center gap-4 min-h-[125px] md:min-h-[200px]">
            <div className="border border-[#1e1e1e] px-4 py-4 md:px-8 md:py-6 text-center w-full max-w-[180px]">
              <div className="font-serif text-[14px] md:text-[18px] tracking-[4px] md:tracking-[6px] text-[#282828] uppercase mb-2">
                HG
              </div>
              <div className="font-sans text-[7px] md:text-[8px] tracking-[3px] md:tracking-[5px] text-[#1e1e1e] uppercase">
                Born From Silence
              </div>
            </div>
          </div>

          {/* Large Model 2 (Bottom right of this block) */}
          <div className="col-span-2 row-span-2 bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[250px] md:min-h-[400px]">
            <Image
              src="/images/model-oblivion-2.jpg"
              alt="Model Genesis V1 Alternative"
              fill
              className="object-cover object-[center_50%]"
            />
          </div>

          {/* Wide quote */}
          <div className="col-span-2 bg-[#0e0e0e] p-6 md:p-8 flex flex-col justify-center min-h-[125px] md:min-h-[200px]">
            <p className="font-serif text-[clamp(18px,2.5vw,26px)] italic font-light text-white leading-relaxed">
              &ldquo;Silence is also a choice.&rdquo;
            </p>
            <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-mid-gray mt-4">
              Not everything needs a reaction
            </div>
          </div>

          {/* Row 5 & 6 */}
          {/* Color palette */}
          <div className="grid grid-cols-2 min-h-[125px] md:min-h-[200px]">
            <div className="bg-[#050505]" />
            <div className="bg-[#121212]" />
            <div className="bg-[#242424]" />
            <div className="bg-[#a89f91]" />
          </div>

          {/* Tall model 2 */}
          <div className="row-span-2 bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[250px] md:min-h-[400px]">
            <Image
              src="/images/model-hidden-genesis-v2-1.jpg"
              alt="Model Genesis V2"
              fill
              className="object-cover"
            />
          </div>

          {/* Detail 1 -> Model */}
          <div className="bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[125px] md:min-h-[200px]">
            <Image
              src="/images/model-hidden-genesis-v2-2.jpg"
              alt="Model Genesis V2 Detail"
              fill
              className="object-cover"
            />
          </div>

          {/* Square Model 2 */}
          <div className="bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[125px] md:min-h-[200px]">
            <Image
              src="/images/model-hidden-genesis-v1-3.jpg"
              alt="Model Oblivion Wide"
              fill
              className="object-cover"
            />
          </div>

          {/* Quote cell 3 */}
          <div className="bg-[#111] p-6 md:p-8 flex flex-col justify-center min-h-[125px] md:min-h-[200px]">
            <p className="font-serif text-[16px] md:text-[20px] italic font-light text-[#888] leading-relaxed">
              &ldquo;Form follows intention.&rdquo;
            </p>
          </div>

          {/* Wide Detail -> Wide Model */}
          <div className="col-span-2 bg-charcoal flex items-center justify-center overflow-hidden relative min-h-[125px] md:min-h-[200px]">
            <Image
              src="/images/model-metamorphosis-2.jpg"
              alt="Model Metamorphosis 2"
              fill
              className="object-cover object-[center_35%]"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
