/** @type {import('tailwindcss').Config} */
// ============================================================
// tailwind.config.js — Configuración del tema DB Salon
// Puedes ajustar colores, fuentes y animaciones aquí.
// ============================================================
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta principal DB Salon
        black:   "#0B0B0F",
        gold:    "#D4AF37",
        "gold-light": "#F0D060",
        "gold-dark":  "#A07A20",
        pink:    "#FF4D8D",
        purple:  "#7B2CFF",
        "purple-light": "#A855F7",
        glass:   "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        // Tipografías: serif elegante + sans moderna
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:  ["'DM Sans'", "system-ui", "sans-serif"],
        script: ["'Great Vibes'", "cursive"],
      },
      backgroundImage: {
        "gold-gradient":    "linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #A07A20 100%)",
        "pink-purple":      "linear-gradient(135deg, #FF4D8D 0%, #7B2CFF 100%)",
        "dark-gradient":    "linear-gradient(180deg, #0B0B0F 0%, #1a1020 100%)",
        "card-glow":        "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(123,44,255,0.05))",
      },
      boxShadow: {
        "gold-glow":   "0 0 30px rgba(212,175,55,0.4), 0 0 60px rgba(212,175,55,0.15)",
        "pink-glow":   "0 0 30px rgba(255,77,141,0.5), 0 0 60px rgba(255,77,141,0.2)",
        "purple-glow": "0 0 30px rgba(123,44,255,0.5), 0 0 60px rgba(123,44,255,0.2)",
        "glass":       "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "pulse-gold":   "pulseGold 2s ease-in-out infinite",
        "fade-up":      "fadeUp 0.8s ease-out forwards",
        "shimmer":      "shimmer 3s linear infinite",
        "glow-pulse":   "glowPulse 2s ease-in-out infinite",
        "spin-slow":    "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3)" },
          "50%":      { boxShadow: "0 0 50px rgba(212,175,55,0.7), 0 0 100px rgba(212,175,55,0.3)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%":      { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
