// --- SECTION: FOOTER ---
// src/components/Footer.jsx
// Footer con logo, navegación, redes sociales y copyright.
// 📝 Edita en SITE_CONTENT.js → footer / contact

import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { brand, contact, footer, booking } = SITE_CONTENT;

const FOOTER_LINKS = [
  { label: "Inicio",    href: "#hero" },
  { label: "Nosotros",  href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Precios",   href: "#pricing" },
  { label: "Paquetes",  href: "#packages" },
  { label: "Tienda",    href: "#shop" },
  { label: "Contacto",  href: "#contact" },
];

const scrollTo = (href) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(booking.whatsappMessage)}`;

  return (
    <footer className="relative border-t border-gold/10 overflow-hidden" aria-label="Footer">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#060408]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: Logo + Nav + Social */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start border-b border-white/5">

          {/* Marca */}
          <div>
            {/* 📸 Logo footer — mismo que el header */}
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 w-auto object-contain mb-4 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <p className="font-script text-gold text-3xl mb-1">{brand.name}</p>
            <p className="font-sans text-gold/40 text-xs uppercase tracking-[0.3em] mb-4">{brand.subtitle}</p>
            <p className="font-sans text-white/40 text-sm leading-relaxed">{footer.tagline}</p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-sans text-gold/60 text-xs uppercase tracking-[0.3em] mb-5">Navegación</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-sans text-white/40 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto & Social */}
          <div>
            <h3 className="font-sans text-gold/60 text-xs uppercase tracking-[0.3em] mb-5">Síguenos</h3>

            {/* Instagram */}
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/40 hover:text-pink transition-colors mb-3 group"
            >
              <InstagramIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,77,141,0.8)]" />
              <span className="font-sans text-sm">{contact.instagram}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/40 hover:text-green-400 transition-colors mb-3 group"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="font-sans text-sm">{contact.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors mb-6"
            >
              <span className="text-lg">✉</span>
              <span className="font-sans text-sm">{contact.email}</span>
            </a>

            {/* CTA final */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-black font-sans font-semibold text-sm btn-gold-glow"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar Cita
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/20 text-xs text-center">{footer.copyright}</p>
          <div className="flex items-center gap-1 font-sans text-white/20 text-xs">
            <span>Hecho con</span>
            <span className="text-pink animate-pulse">♥</span>
            <span>· React + Vite + TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
