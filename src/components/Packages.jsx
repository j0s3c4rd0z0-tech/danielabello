// --- SECTION: PACKAGES ---
// src/components/Packages.jsx
// Paquetes VIP combinados con badges de ahorro y destacado "Recomendado".
// 📝 Edita en SITE_CONTENT.js → packages.items

import { useScrollReveal } from "../hooks/useScrollReveal";
import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { packages, contact, booking } = SITE_CONTENT;

export default function Packages() {
  const { ref, isVisible } = useScrollReveal();
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(booking.whatsappMessage)}`;

  return (
    <section
      id="packages"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Paquetes VIP"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#120a1a] to-black" />
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-particle bg-purple/8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-gold/60 text-xs uppercase tracking-[0.4em] mb-3">{packages.sectionTitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
            Paquetes <span className="text-pink-purple">VIP</span>
          </h2>
          <p className="font-sans text-white/50 text-base max-w-lg mx-auto">{packages.subtitle}</p>
          <div className="w-16 h-px bg-pink-purple mx-auto mt-6" />
        </div>

        {/* Grid de paquetes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.items.map((pkg, idx) => (
            <PackageCard
              key={pkg.name}
              pkg={pkg}
              delay={idx * 150}
              isVisible={isVisible}
              whatsappUrl={whatsappUrl}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent" />
    </section>
  );
}

function PackageCard({ pkg, delay, isVisible, whatsappUrl }) {
  return (
    <article
      className={`relative rounded-2xl overflow-hidden transition-all duration-700 group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(123,44,255,0.2)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${pkg.recommended ? "ring-2 ring-pink/50" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden">
        {/* 📸 Imagen del paquete — cambia en SITE_CONTENT.js → packages.items[n].image */}
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Badge de ahorro */}
        {pkg.badge && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider ${
              pkg.recommended
                ? "bg-pink/90 text-white shadow-pink-glow"
                : "bg-gold/90 text-black"
            }`}>
              {pkg.badge}
            </span>
          </div>
        )}

        {/* Recomendado ribbon */}
        {pkg.recommended && (
          <div className="absolute top-4 right-4 bg-pink text-white text-xs font-sans font-bold px-3 py-1 rounded-full shadow-pink-glow animate-pulse-gold">
            ⭐ RECOMENDADO
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="glass-card rounded-none p-6 border-0 border-t border-white/5">
        <h3 className="font-serif text-white text-xl mb-2">{pkg.name}</h3>
        <p className="font-sans text-white/50 text-sm mb-4 leading-relaxed">{pkg.description}</p>

        {/* Servicios incluidos */}
        <ul className="space-y-1.5 mb-5">
          {pkg.services.map((svc) => (
            <li key={svc} className="flex items-center gap-2 font-sans text-sm text-white/60">
              <span className="text-pink text-xs">✦</span>
              {svc}
            </li>
          ))}
        </ul>

        {/* Precios */}
        <div className="flex items-baseline gap-3 mb-5">
          <span className="font-serif text-3xl text-shimmer">{pkg.price}</span>
          <span className="font-sans text-white/30 text-sm line-through">{pkg.originalPrice}</span>
        </div>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
            pkg.recommended
              ? "bg-gradient-to-r from-pink to-purple text-white btn-pink-glow"
              : "border border-gold/30 text-gold hover:bg-gold/10"
          }`}
        >
          Reservar Paquete →
        </a>
      </div>
    </article>
  );
}
