// src/App.jsx — Componente raíz de la aplicación DB Salon
// ============================================================
// Aquí se ensamblan todas las secciones del sitio web.
// Para activar/desactivar una sección, comenta/descomenta
// el componente correspondiente.
// ============================================================

import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Services      from "./components/Services";
import Pricing       from "./components/Pricing";
import Packages      from "./components/Packages";
import Booking       from "./components/Booking";
import Shop          from "./components/Shop";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      {/* Navegación fija */}
      <Navbar />

      {/* Contenido principal */}
      <main>
        {/* 1. Hero — Pantalla completa de bienvenida */}
        <Hero />

        {/* 2. About — Historia de marca, misión y visión */}
        <About />

        {/* 3. Services — Grid de servicios con tarjetas */}
        <Services />

        {/* 4. Pricing — Tabla de precios premium */}
        <Pricing />

        {/* 5. Packages — Paquetes VIP combinados */}
        <Packages />

        {/* 6. Booking — Interfaz de agendamiento de citas */}
        <Booking />

        {/* 7. Shop — Boutique digital de productos */}
        <Shop />

        {/* 8. Contact — Contacto con WhatsApp e Instagram */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp — siempre visible */}
      <WhatsAppFloat />
    </>
  );
}
