// --- SECTION: CONTACT ---
// src/components/Contact.jsx
// Contacto con WhatsApp como CTA principal, redes sociales y formulario.
// 📝 Edita datos en SITE_CONTENT.js → contact

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { contact, booking } = SITE_CONTENT;

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(booking.whatsappMessage)}`;

  // El formulario construye un mensaje de WhatsApp con los datos ingresados
  const handleSubmit = () => {
    if (!formData.name || !formData.message) return;
    const msg = `Hola! Soy ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email || "No especificado"}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => { setSent(false); setFormData({ name: "", email: "", message: "" }); }, 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Contacto"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a14] to-black" />
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-particle bg-pink/8" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-particle bg-gold/5" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-gold/60 text-xs uppercase tracking-[0.4em] mb-3">{contact.sectionTitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
            Estamos <span className="text-gold-gradient">Aquí</span>
          </h2>
          <p className="font-sans text-white/50">{contact.subtitle}</p>
          <div className="w-16 h-px bg-gold-gradient mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Info de contacto */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

            {/* WhatsApp CTA principal */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 glass-card p-6 rounded-2xl mb-4 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                <WhatsAppIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">WhatsApp — Atención inmediata</p>
                <p className="font-serif text-white text-xl">{contact.phone}</p>
                <p className="font-sans text-green-400 text-sm mt-0.5">Agendar por WhatsApp →</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 glass-card p-5 rounded-2xl mb-4 hover:border-pink/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink to-purple flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-pink-glow">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-0.5">Instagram</p>
                <p className="font-sans text-white">{contact.instagram}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-4 glass-card p-5 rounded-2xl mb-4 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-gold text-xl">✉</span>
              </div>
              <div>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</p>
                <p className="font-sans text-white text-sm">{contact.email}</p>
              </div>
            </a>

            {/* Horario */}
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xl">🕐</span>
                </div>
                <div>
                  <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-0.5">Horario</p>
                  <p className="font-sans text-white text-sm">{contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="glass-card p-7 rounded-2xl">
              <h3 className="font-serif text-white text-xl mb-6">Envía un mensaje</h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-sans text-gold/60 text-xs uppercase tracking-wider mb-2">Nombre *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-sans text-white placeholder-white/20 text-sm focus:outline-none focus:border-gold/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-sans text-gold/60 text-xs uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-sans text-white placeholder-white/20 text-sm focus:outline-none focus:border-gold/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-sans text-gold/60 text-xs uppercase tracking-wider mb-2">Mensaje *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-sans text-white placeholder-white/20 text-sm focus:outline-none focus:border-gold/40 transition-all resize-none"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={sent}
                className={`w-full mt-6 py-3.5 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
                  sent
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-gold-gradient text-black btn-gold-glow hover:scale-[1.02]"
                }`}
              >
                {sent ? "✓ Mensaje enviado por WhatsApp" : "Enviar por WhatsApp →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}
