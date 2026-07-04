import ScrollReveal from './ScrollReveal'

const links = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/62882001428923',
    desc: 'Contact with us',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hidden.genesis_',
    desc: '@hidden.genesis_',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Shopee',
    href: 'https://id.shp.ee/UcKqEJBH',
    desc: 'Browse store',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@hidden_genesis',
    desc: '@hidden_genesis',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
]

export default function Connect() {
  return (
    <section id="connect" className="px-6 md:px-[60px] py-[120px] bg-black">
      <div className="flex items-center gap-5 mb-16">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent">Connect</span>
        <div className="flex-1 h-[1px] bg-dark-gray" />
        <span className="font-serif text-[11px] text-dark-gray">06</span>
      </div>

      <ScrollReveal>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-display text-white leading-none tracking-[0.05em] text-[clamp(48px,6vw,80px)] mb-6">
            GET CONNECTED
          </h2>
          <p className="font-serif text-[16px] italic text-light-gray leading-relaxed mb-16">
            Follow, reach out, or shop directly.
          </p>

          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-8 py-4 border border-dark-gray no-underline transition-all duration-300 hover:border-accent hover:bg-accent/5 group"
              >
                <span className="flex items-center gap-4 text-silver text-[12px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {l.icon}
                  </span>
                  {l.label}
                </span>
                <span className="text-[11px] text-mid-gray tracking-[0.15em] group-hover:text-accent transition-colors">
                  {l.desc}
                </span>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
