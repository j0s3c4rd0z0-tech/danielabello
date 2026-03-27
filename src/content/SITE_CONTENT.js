// ============================================================
// SITE_CONTENT.js — DB SALON · ARCHIVO DE CONTENIDO MAESTRO
// ============================================================
// ✏️  EDITA ESTE ARCHIVO para cambiar textos, precios,
//     imágenes, contacto y cualquier contenido del sitio.
//     NO necesitas tocar los componentes visuales.
// ============================================================

export const SITE_CONTENT = {

  // --- MARCA ---
  brand: {
    name: "Daniela Bello",
    subtitle: "Nails & Salon",
    tagline: "Donde la belleza se convierte en arte.",
    description: "Salón de Belleza · Estética · Spa",
    // 📸 Reemplaza con la ruta de tu logo en /src/assets/
    // Ejemplo: logo: "/src/assets/logo_db.png"
    logo: "/src/assets/logo_db.png",
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Tu Belleza,",
    headlineAccent: "Nuestra Obsesión.",
    subheadline: "Experiencia de lujo en cada servicio. Reserva tu transformación hoy.",
    // 📸 Imagen de fondo del Hero — usa Unsplash o ruta local
    backgroundImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80",
    cta: {
      primary: "Agendar Cita",
      secondary: "Ver Servicios",
    },
  },

  // --- ABOUT SECTION ---
  about: {
    sectionTitle: "Nuestra Esencia",
    title: "De Estilista Profesional a Destino de Ultralujo",
    description:
      "Daniela Bello es más que un salón; es una experiencia de transformación. Desde nuestros inicios, cada servicio ha sido diseñado para proyectar exclusividad, elevar tu confianza y redefinir tu presencia.",
    mission: "Ofrecer servicios de belleza de clase mundial con atención personalizada, usando técnicas premium y los mejores productos del mercado.",
    vision: "Ser el referente de lujo en belleza en nuestra ciudad, expandiendo nuestra marca a través de una experiencia digital impecable.",
    stats: [
      { value: "500+", label: "Clientas VIP" },
      { value: "5★", label: "Calificación" },
      { value: "8+", label: "Años de Experiencia" },
    ],
    // 📸 Imagen de la sección About
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },

  // --- SERVICES SECTION ---
  services: {
    sectionTitle: "Servicios de Élite",
    subtitle: "Cada servicio, una experiencia de transformación.",
    items: [
      {
        id: "alisados",
        name: "Alisados y Repolarizaciones",
        description: "Transformación capilar de alta gama. Técnicas japonesas y brasileñas para un liso perfecto y duradero.",
        priceFrom: "Desde $120.000",
        badge: null,
        // 📸 Imagen del servicio
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
        icon: "💇‍♀️",
      },
      {
        id: "depilaciones",
        name: "Depilaciones",
        description: "Técnicas avanzadas para el cuidado de la piel. Cera premium, hilo y láser para resultados suaves y duraderos.",
        priceFrom: "Desde $35.000",
        badge: null,
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
        icon: "✨",
      },
      {
        id: "semipermanentes",
        name: "Uñas Semipermanentes",
        description: "Color vibrante de larga duración. Hasta 3 semanas de brillo impecable con acabado profesional.",
        priceFrom: "Desde $45.000",
        badge: "Más Popular",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        icon: "💅",
      },
      {
        id: "acrilicas",
        name: "Uñas Acrílicas",
        description: "Extensiones resistentes y elegantes. Diseños personalizados con acabados de revista.",
        priceFrom: "Desde $70.000",
        badge: null,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        icon: "💎",
      },
      {
        id: "polygel",
        name: "Polygel",
        description: "La evolución del acrílico y el gel. Más liviano, flexible y natural. El estándar VIP en nail art.",
        priceFrom: "Desde $80.000",
        badge: "VIP",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        icon: "👑",
      },
      {
        id: "press-on",
        name: "Press-On Premium",
        description: "Uñas postizas de diseño exclusivo. Aplicación instantánea con acabado de salón profesional.",
        priceFrom: "Desde $55.000",
        badge: null,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        icon: "🌸",
      },
    ],
  },

  // --- PRICING SECTION ---
  pricing: {
    sectionTitle: "Arquitectura de Precios",
    subtitle: "Inversiones que transforman tu imagen.",
    tiers: [
      {
        name: "Esencial",
        badge: null,
        highlighted: false,
        description: "Para comenzar tu experiencia DB Salon",
        price: "$35.000",
        period: "por servicio",
        features: [
          "Uñas Semipermanentes",
          "Depilación básica",
          "Atención personalizada",
          "Productos premium",
        ],
        cta: "Agendar",
      },
      {
        name: "Premium",
        badge: "⭐ Recomendado",
        highlighted: true,
        description: "La experiencia completa DB Salon",
        price: "$150.000",
        period: "paquete",
        features: [
          "Uñas Acrílicas o Polygel",
          "Alisado profesional",
          "Depilación completa",
          "Kit de mantenimiento",
          "Prioridad en agenda",
        ],
        cta: "Agendar Ahora",
      },
      {
        name: "VIP Exclusivo",
        badge: "👑 VIP",
        highlighted: false,
        description: "Experiencia de ultralujo total",
        price: "$280.000",
        period: "paquete VIP",
        features: [
          "Todo lo Premium",
          "Spa completo",
          "Diseño de cejas",
          "Productos de regalo",
          "Acceso VIP priority",
          "Sesión de fotos",
        ],
        cta: "Reservar VIP",
      },
    ],
  },

  // --- PACKAGES SECTION ---
  packages: {
    sectionTitle: "Paquetes VIP",
    subtitle: "Combos diseñados para una transformación total.",
    items: [
      {
        name: "Combo Nails & Style",
        description: "Uñas en Polygel + Alisado Profesional. La combinación perfecta para lucir impecable de pies a cabeza.",
        price: "$180.000",
        originalPrice: "$200.000",
        badge: "Ahorra $20.000",
        recommended: false,
        services: ["Polygel completo", "Alisado o repolarización", "Diseño personalizado"],
        // 📸 Imagen del paquete
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
      },
      {
        name: "Experiencia VIP Total",
        description: "La transformación definitiva. Nails + Hair + Spa + Depilación. El paquete más completo del salón.",
        price: "$320.000",
        originalPrice: "$400.000",
        badge: "⭐ Más Vendido",
        recommended: true,
        services: ["Uñas Acrílicas o Polygel", "Alisado premium", "Depilación completa", "Spa facial", "Kit de regalo VIP"],
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
      },
      {
        name: "Glam Express",
        description: "Belleza rápida y poderosa. Para cuando necesitas lucir perfecta en tiempo récord.",
        price: "$95.000",
        originalPrice: "$120.000",
        badge: "Express",
        recommended: false,
        services: ["Semipermanentes", "Depilación facial", "Peinado express"],
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
      },
    ],
  },

  // --- BOOKING SECTION ---
  booking: {
    sectionTitle: "Agenda tu Cita",
    subtitle: "Reserva en minutos. Transforma tu imagen hoy.",
    whatsappNumber: "3195609476", // ← Tu número de WhatsApp (sin espacios ni +)
    whatsappMessage: "Hola! Quiero agendar una cita en DB Salon 💅",
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
  },

  // --- E-COMMERCE SECTION ---
  shop: {
    sectionTitle: "Boutique Digital",
    subtitle: "Productos exclusivos para el cuidado en casa.",
    products: [
      {
        id: "p1",
        name: "Aceite Cuticulas Luxury",
        description: "Hidratación profunda y brillo intenso para tus cutículas.",
        price: "$28.000",
        // 📸 Imagen del producto
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
        badge: "Más Vendido",
      },
      {
        id: "p2",
        name: "Top Coat Diamond Shine",
        description: "Sellador de larga duración con efecto espejo cristalino.",
        price: "$35.000",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
        badge: null,
      },
      {
        id: "p3",
        name: "Kit Mantenimiento Capilar",
        description: "Shampoo + acondicionador premium para cabellos alisados.",
        price: "$85.000",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
        badge: "Kit VIP",
      },
      {
        id: "p4",
        name: "Mascarilla Reconstructora",
        description: "Tratamiento intensivo para cabello dañado. Resultados desde la primera aplicación.",
        price: "$45.000",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80",
        badge: null,
      },
      {
        id: "p5",
        name: "Serum Brillo Capilar",
        description: "Fórmula concentrada para un cabello sedoso y con movimiento.",
        price: "$38.000",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
        badge: "Nuevo",
      },
      {
        id: "p6",
        name: "Nail Art Kit Premium",
        description: "Set completo para decoración de uñas en casa con acabado profesional.",
        price: "$55.000",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
        badge: null,
      },
    ],
  },

  // --- CONTACT SECTION ---
  contact: {
    sectionTitle: "Contáctanos",
    subtitle: "Estamos aquí para hacer tu experiencia perfecta.",
    whatsapp: "3195609476",      // ← Número principal
    phone: "3195609476",
    email: "bellojanna2@gmail.com",
    instagram: "@_db_salon",
    instagramUrl: "https://instagram.com/_db_salon",
    address: "Tu dirección aquí, Ciudad, Colombia", // ← Cambia tu dirección
    hours: "Lunes a Sábado: 8:00 AM – 7:00 PM",
  },

  // --- FOOTER ---
  footer: {
    tagline: "El lujo moderno, codificado a la perfección.",
    copyright: "© 2025 Daniela Bello Nails & Salon. Todos los derechos reservados.",
  },
};
