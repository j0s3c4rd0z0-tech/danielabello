# 👑 Daniela Bello — Nails & Salon · Sitio Web

Sitio web premium para **Daniela Bello Nails & Salon**, construido con **React + Vite + TailwindCSS**.

---

## 🚀 Inicio Rápido

### 1. Instalar dependencias
```bash
cd DB_Salon_Main
npm install
```

### 2. Iniciar en modo desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 3. Construir para producción
```bash
npm run build
```
Los archivos listos para publicar quedan en la carpeta `/dist`.

---

## ✏️ Cómo editar el contenido

**TODO el contenido del sitio se edita desde un único archivo:**

```
src/content/SITE_CONTENT.js
```

Desde ahí puedes cambiar:
- 📝 Textos, titulares y descripciones
- 💰 Precios y paquetes
- 📞 Teléfono de WhatsApp y email
- 📸 URLs de imágenes (logo, servicios, productos)
- 🕐 Horarios y dirección

**No necesitas tocar los componentes para cambiar el contenido.**

---

## 📁 Estructura del Proyecto

```
DB_Salon_Main/
├── index.html                  ← Entrada HTML (favicon, fuentes Google)
├── package.json
├── tailwind.config.js          ← Tema de colores DB Salon
├── vite.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                ← Punto de entrada React
    ├── App.jsx                 ← Ensambla todas las secciones
    ├── index.css               ← Estilos globales + utilidades custom
    │
    ├── content/
    │   └── SITE_CONTENT.js     ⭐ ARCHIVO PRINCIPAL DE CONTENIDO
    │
    ├── hooks/
    │   └── useScrollReveal.js  ← Animaciones al hacer scroll
    │
    └── components/
        ├── Navbar.jsx          ← Navegación sticky
        ├── Hero.jsx            ← Sección hero fullscreen
        ├── About.jsx           ← Misión, visión, stats
        ├── Services.jsx        ← Grid de servicios
        ├── Pricing.jsx         ← Tabla de precios
        ├── Packages.jsx        ← Paquetes VIP
        ├── Booking.jsx         ← Formulario de citas
        ├── Shop.jsx            ← Boutique + carrito flotante
        ├── Contact.jsx         ← Contacto y formulario
        ├── Footer.jsx          ← Pie de página
        └── WhatsAppFloat.jsx   ← Botón flotante WhatsApp
```

---

## 📸 Cómo cambiar imágenes

### Logo
1. Coloca tu logo en `src/assets/logo_db.png`
2. Actualiza la ruta en `SITE_CONTENT.js → brand.logo`

### Imágenes de servicios/productos
En `SITE_CONTENT.js`, reemplaza las URLs de Unsplash por rutas locales:
```js
// Imagen externa (Unsplash):
image: "https://images.unsplash.com/photo-xxx"

// Imagen local en /src/assets/:
image: "/src/assets/mi-imagen.jpg"
```

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Negro | `#0B0B0F` | Fondo principal |
| Oro | `#D4AF37` | Acento premium |
| Rosa Neón | `#FF4D8D` | Energía y vitalidad |
| Púrpura | `#7B2CFF` | Modernidad digital |

---

## 📱 Contacto

- **WhatsApp:** 3195609476
- **Instagram:** @_db_salon
- **Email:** bellojanna2@gmail.com

---

## 🛠 Tecnologías

- **React 18** — Componentes UI
- **Vite 5** — Bundler ultrarrápido
- **TailwindCSS 3** — Estilos utility-first con JIT
- **Google Fonts** — Cormorant Garamond + DM Sans + Great Vibes
