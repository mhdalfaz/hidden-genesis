const footerNav = [
  { href: '#catalogue', label: 'Catalogue' },
  { href: '#accessories', label: 'Accessories' },
  { href: '#packaging', label: 'Packaging' },
  { href: '#brand-story', label: 'Brand Story' },
]

const footerContact = [
  { href: 'https://www.instagram.com/hidden.genesis_', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@hidden.genesis4', label: 'TikTok' },
  { href: 'https://wa.me/62882001428923', label: 'WhatsApp' },
  { href: 'https://id.shp.ee/UcKqEJBH', label: 'Shopee' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-dark-gray px-6 md:px-[60px] pt-20 md:pt-[80px] pb-10 md:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-[60px] mb-20 md:mb-[80px]">
        {/* Brand */}
        <div>
          <div className="font-serif text-[28px] font-light tracking-[0.3em] text-white uppercase mb-5">
            Hidden Genesis
          </div>
          <p className="text-[12px] text-mid-gray leading-relaxed max-w-[260px]">
            Born from silence. Worn by those who understand that presence needs no announcement.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Navigate</div>
          <ul className="list-none flex flex-col gap-3">
            {footerNav.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-[13px] text-mid-gray no-underline transition-colors hover:text-white tracking-[0.05em]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Contact</div>
          <ul className="list-none flex flex-col gap-3">
            {footerContact.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-mid-gray no-underline transition-colors hover:text-white tracking-[0.05em]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-8 border-t border-dark-gray text-center">
        <div className="text-[11px] text-white tracking-[0.2em]">
          &copy; 2026 Hidden Genesis. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
