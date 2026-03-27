// --- SECTION: HERO ---
// src/components/Hero.jsx
// Sección Hero fullscreen con imagen de fondo, glow, logo y CTAs.
// 📸 Cambia hero.backgroundImage y hero.logo en SITE_CONTENT.js

import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { hero, brand, contact, booking } = SITE_CONTENT;

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(booking.whatsappMessage)}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — Bienvenida"
    >
      {/* Background Image con overlay */}
      <div className="absolute inset-0 z-0">
        {/* 📸 Imagen de fondo — cambia la URL en SITE_CONTENT.js → hero.backgroundImage */}
        <img
          src={hero.backgroundImage}
          alt="DB Salon background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay gradiente oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        {/* Overlay gradiente lateral */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
      </div>

      {/* Partículas de fondo decorativas */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-particle bg-purple/30" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-particle bg-pink/20" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-particle bg-gold/10" style={{ animationDelay: "1.5s" }} />

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">

        {/* Logo con glow — flota suavemente */}
        {/* 📸 Reemplaza el src con tu logo real en /src/assets/ */}
        <div className="animate-float mb-8 flex justify-center">
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="h-40 md:h-56 w-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]"
            onError={(e) => {
              // Fallback si el logo no existe: texto con estilo
              e.target.parentNode.innerHTML = `
                <div class="text-center">
                  <p class="font-script text-gold text-6xl md:text-8xl drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]">${brand.name}</p>
                  <p class="font-sans text-gold/60 text-sm uppercase tracking-[0.4em] mt-2">${brand.subtitle}</p>
                </div>
              `;
            }}
          />
        </div>

        {/* Tagline de la marca */}
        <p
          className="font-sans text-gold/60 text-xs md:text-sm uppercase tracking-[0.5em] mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {brand.description}
        </p>

        {/* Headline principal */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-white block">{hero.headline}</span>
          <span className="text-shimmer block">{hero.headlineAccent}</span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-sans text-white/60 text-base md:text-xl max-w-xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          {/* Botón primario — Agendar */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full font-sans font-semibold text-black bg-gold-gradient btn-gold-glow overflow-hidden text-base"
          >
            <span className="relative z-10">💅 {hero.cta.primary}</span>
            {/* Efecto brillo al hover */}
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </a>

          {/* Botón secundario — Ver servicios */}
          <button
            onClick={() => scrollTo("services")}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-sans font-medium text-gold border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-300 text-base"
          >
            {hero.cta.secondary}
            <span className="text-xs">↓</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-sans text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
