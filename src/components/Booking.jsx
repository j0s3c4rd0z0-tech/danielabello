// --- SECTION: BOOKING ---
// src/components/Booking.jsx
// Interfaz de agendamiento: selección de servicio, fecha y hora.
// La confirmación final se realiza por WhatsApp (número en SITE_CONTENT.js).

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { booking, services, contact } = SITE_CONTENT;

export default function Booking() {
  const { ref, isVisible } = useScrollReveal();

  // Estado del formulario
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate]       = useState("");
  const [selectedTime, setSelectedTime]       = useState("");

  // Construir mensaje de WhatsApp con la selección
  const buildWhatsAppMessage = () => {
    let msg = booking.whatsappMessage;
    if (selectedService) msg += `\n\nServicio: ${selectedService}`;
    if (selectedDate)    msg += `\nFecha: ${selectedDate}`;
    if (selectedTime)    msg += `\nHora: ${selectedTime}`;
    return msg;
  };

  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Agendar Cita"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#120a1a] to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-particle bg-gold/5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-gold/60 text-xs uppercase tracking-[0.4em] mb-3">{booking.sectionTitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-4">
            Reserva tu <span className="text-gold-gradient">Cita</span>
          </h2>
          <p className="font-sans text-white/50">{booking.subtitle}</p>
          <div className="w-16 h-px bg-gold-gradient mx-auto mt-6" />
        </div>

        {/* Formulario glass */}
        <div
          className={`glass-card p-8 md:p-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Selección de servicio */}
            <div>
              <label className="block font-sans text-gold/80 text-xs uppercase tracking-wider mb-3">
                Servicio
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-sans text-white/70 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all cursor-pointer"
              >
                <option value="" className="bg-[#0B0B0F]">Selecciona un servicio</option>
                {services.items.map((svc) => (
                  <option key={svc.id} value={svc.name} className="bg-[#0B0B0F]">
                    {svc.icon} {svc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Selección de fecha */}
            <div>
              <label className="block font-sans text-gold/80 text-xs uppercase tracking-wider mb-3">
                Fecha
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-sans text-white/70 text-sm focus:outline-none focus:border-gold/50 transition-all"
                style={{ colorScheme: "dark" }}
              />
            </div>

            {/* Selección de hora */}
            <div>
              <label className="block font-sans text-gold/80 text-xs uppercase tracking-wider mb-3">
                Hora
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-sans text-white/70 text-sm focus:outline-none focus:border-gold/50 transition-all cursor-pointer"
              >
                <option value="" className="bg-[#0B0B0F]">Selecciona una hora</option>
                {booking.timeSlots.map((slot) => (
                  <option key={slot} value={slot} className="bg-[#0B0B0F]">{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Resumen de selección */}
          {(selectedService || selectedDate || selectedTime) && (
            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 mb-8 font-sans text-sm text-white/60">
              <p className="text-gold/80 font-semibold mb-2 text-xs uppercase tracking-wider">Tu selección:</p>
              {selectedService && <p>📅 Servicio: <span className="text-white">{selectedService}</span></p>}
              {selectedDate    && <p>🗓 Fecha: <span className="text-white">{selectedDate}</span></p>}
              {selectedTime    && <p>🕐 Hora: <span className="text-white">{selectedTime}</span></p>}
            </div>
          )}

          {/* CTA WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans font-semibold text-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            <WhatsAppIcon />
            Confirmar por WhatsApp
          </a>

          <p className="text-center font-sans text-white/30 text-xs mt-4">
            Te redirigirá a WhatsApp con tu selección para confirmar la cita ✨
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
