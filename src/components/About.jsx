// --- SECTION: ABOUT ---
// src/components/About.jsx
// Sección "Nuestra Esencia": historia de marca, misión, visión y stats.
// 📸 Cambia about.image en SITE_CONTENT.js

import { useScrollReveal } from "../hooks/useScrollReveal";
import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { about } = SITE_CONTENT;

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Nosotros"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-particle bg-purple/10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-particle bg-gold/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-gold/60 text-xs uppercase tracking-[0.4em] mb-3">{about.sectionTitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light">
            {about.title}
          </h2>
          <div className="w-16 h-px bg-gold-gradient mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-[0_0_60px_rgba(212,175,55,0.1)]">
              {/* 📸 Imagen del About — cambia en SITE_CONTENT.js → about.image */}
              <img
                src={about.image}
                alt="Daniela Bello Salon"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Decoración: marco dorado flotante */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl" />
          </div>

          {/* Texto */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>

            <p className="font-sans text-white/70 text-lg leading-relaxed mb-8">
              {about.description}
            </p>

            {/* Misión */}
            <div className="glass-card p-6 mb-4 hover:border-gold/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-serif text-gold text-xl mb-2">Misión</h3>
                  <p className="font-sans text-white/60 text-sm leading-relaxed">{about.mission}</p>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="glass-card p-6 mb-8 hover:border-gold/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-serif text-gold text-xl mb-2">Visión</h3>
                  <p className="font-sans text-white/60 text-sm leading-relaxed">{about.vision}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="text-center glass-card py-5 px-2">
                  <p className="text-shimmer font-serif text-3xl font-semibold mb-1">{stat.value}</p>
                  <p className="font-sans text-white/40 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
