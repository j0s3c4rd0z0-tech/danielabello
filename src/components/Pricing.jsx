// --- SECTION: PRICING ---
// src/components/Pricing.jsx
// Tabla de precios premium con cards destacadas y CTAs de WhatsApp.
// 📝 Edita los planes en SITE_CONTENT.js → pricing.tiers

import { useScrollReveal } from "../hooks/useScrollReveal";
import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { pricing, contact, booking } = SITE_CONTENT;

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal();
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(booking.whatsappMessage)}`;

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Precios"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a14] to-black" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-particle bg-gold/5" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-gold/60 text-xs uppercase tracking-[0.4em] mb-3">{pricing.sectionTitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
            Planes & <span className="text-gold-gradient">Tarifas</span>
          </h2>
          <p className="font-sans text-white/50 text-base max-w-lg mx-auto">{pricing.subtitle}</p>
          <div className="w-16 h-px bg-gold-gradient mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricing.tiers.map((tier, idx) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              delay={idx * 150}
              isVisible={isVisible}
              whatsappUrl={whatsappUrl}
            />
          ))}
        </div>

        {/* Nota al pie */}
        <p className="text-center font-sans text-white/30 text-xs mt-8">
          * Los precios son orientativos. Consulta por WhatsApp para cotización personalizada.
        </p>
      </div>
    </section>
  );
}

function PricingCard({ tier, delay, isVisible, whatsappUrl }) {
  return (
    <div
      className={`relative flex flex-col transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${tier.highlighted ? "scale-105 md:scale-110 z-10" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card principal */}
      <div
        className={`relative flex-1 rounded-2xl p-7 flex flex-col ${
          tier.highlighted
            ? "border-gold-gradient bg-gradient-to-b from-[#1a1205] to-[#0d0a0a]"
            : "glass-card"
        }`}
      >
        {/* Badge destacado */}
        {tier.badge && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider whitespace-nowrap ${
              tier.highlighted ? "bg-gold-gradient text-black" : "bg-pink-purple text-white"
            }`}>
              {tier.badge}
            </span>
          </div>
        )}

        {/* Nombre del plan */}
        <div className="mb-6 mt-2">
          <h3 className={`font-serif text-2xl mb-1 ${tier.highlighted ? "text-gold" : "text-white"}`}>
            {tier.name}
          </h3>
          <p className="font-sans text-white/40 text-sm">{tier.description}</p>
        </div>

        {/* Precio */}
        <div className="mb-8">
          <div className={`font-serif text-5xl font-light ${tier.highlighted ? "text-shimmer" : "text-white"}`}>
            {tier.price}
          </div>
          <p className="font-sans text-white/40 text-sm mt-1">{tier.period}</p>
        </div>

        {/* Features */}
        <ul className="flex-1 space-y-3 mb-8">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 font-sans text-sm text-white/60">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                tier.highlighted ? "bg-gold text-black" : "bg-white/10 text-gold"
              }`}>✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-3.5 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
            tier.highlighted
              ? "bg-gold-gradient text-black btn-gold-glow"
              : "border border-gold/30 text-gold hover:bg-gold/5 hover:border-gold"
          }`}
        >
          {tier.cta}
        </a>
      </div>
    </div>
  );
}
