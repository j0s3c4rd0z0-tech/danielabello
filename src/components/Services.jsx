// --- SECTION: SERVICES ---
// src/components/Services.jsx
// Grid de servicios con tarjetas glassmorphism y hover reveal.
// 📝 Edita los servicios en SITE_CONTENT.js → services.items

import { useScrollReveal } from "../hooks/useScrollReveal";
import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { services, contact, booking } = SITE_CONTENT;

export default function Services() {
  const { ref, isVisible } = useScrollReveal();
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(booking.whatsappMessage)}`;

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Servicios"
    >
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0a14] to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-particle bg-purple/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-gold/60 text-xs uppercase tracking-[0.4em] mb-3">{services.sectionTitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
            Nuestros <span className="text-gold-gradient">Servicios</span>
          </h2>
          <p className="font-sans text-white/50 text-base max-w-lg mx-auto">{services.subtitle}</p>
          <div className="w-16 h-px bg-gold-gradient mx-auto mt-6" />
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={idx * 100}
              isVisible={isVisible}
              whatsappUrl={whatsappUrl}
            />
          ))}
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}

// Tarjeta individual de servicio
function ServiceCard({ service, delay, isVisible, whatsappUrl }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Imagen de fondo */}
      <div className="relative h-72 overflow-hidden">
        {/* 📸 Imagen del servicio — cambia en SITE_CONTENT.js → services.items[n].image */}
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay base */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        {/* Badge */}
        {service.badge && (
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider ${
              service.badge === "VIP"
                ? "bg-gold-gradient text-black"
                : "bg-pink-purple text-white"
            }`}>
              {service.badge}
            </span>
          </div>
        )}

        {/* Icono grande */}
        <div className="absolute top-4 left-4 text-4xl opacity-80 group-hover:scale-125 transition-transform duration-300">
          {service.icon}
        </div>
      </div>

      {/* Contenido — capa de glass que sube al hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 glass-card rounded-b-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="font-serif text-white text-xl mb-2 group-hover:text-gold transition-colors duration-300">
          {service.name}
        </h3>
        <p className="font-sans text-white/50 text-sm leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gold font-sans font-semibold text-sm">{service.priceFrom}</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-1.5 rounded-full bg-gold-gradient text-black text-xs font-sans font-semibold btn-gold-glow"
          >
            Agendar →
          </a>
        </div>
      </div>
    </article>
  );
}
