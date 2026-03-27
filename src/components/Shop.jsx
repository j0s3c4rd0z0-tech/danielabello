// --- SECTION: SHOP / E-COMMERCE ---
// src/components/Shop.jsx
// Boutique digital de productos con carrito flotante.
// 📝 Edita los productos en SITE_CONTENT.js → shop.products

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SITE_CONTENT } from "../content/SITE_CONTENT";

const { shop, contact } = SITE_CONTENT;

export default function Shop() {
  const { ref, isVisible } = useScrollReveal();
  const [cart, setCart]       = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Parsear precio a número (quita $ y . )
  const parsePrice = (priceStr) =>
    parseFloat(priceStr.replace(/[$.,]/g, "").replace(",", ".")) || 0;

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const totalItems = cart.reduce((a, i) => a + i.qty, 0);

  // Mensaje WhatsApp con carrito
  const buildCartMessage = () => {
    if (cart.length === 0) return "Hola! Quiero consultar sobre sus productos.";
    let msg = "Hola! Quiero pedir los siguientes productos:\n\n";
    cart.forEach((i) => { msg += `• ${i.name} x${i.qty} — ${i.price}\n`; });
    return msg;
  };

  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(buildCartMessage())}`;

  return (
    <section
      id="shop"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Boutique Digital"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0a14] to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-gold/60 text-xs uppercase tracking-[0.4em] mb-3">{shop.sectionTitle}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
            <span className="text-gold-gradient">Boutique</span> Digital
          </h2>
          <p className="font-sans text-white/50">{shop.subtitle}</p>
          <div className="w-16 h-px bg-gold-gradient mx-auto mt-6" />
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {shop.products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={idx * 80}
              isVisible={isVisible}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>

      {/* Carrito flotante */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 right-6 z-40">

          {/* Panel del carrito */}
          {cartOpen && (
            <div className="absolute bottom-16 right-0 w-80 glass-card rounded-2xl p-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <h3 className="font-serif text-gold text-lg mb-4">Tu Carrito</h3>
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-sans text-white text-sm">{item.name}</p>
                      <p className="font-sans text-gold/60 text-xs">x{item.qty} — {item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/30 hover:text-red-400 text-xs transition-colors"
                    >✕</button>
                  </div>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans font-semibold text-sm"
              >
                Pedir por WhatsApp 🛒
              </a>
            </div>
          )}

          {/* Botón del carrito */}
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="relative w-14 h-14 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-gold-glow hover:scale-110 transition-transform animate-pulse-gold"
            aria-label="Ver carrito"
          >
            🛒
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink text-white text-xs rounded-full flex items-center justify-center font-sans font-bold">
              {totalItems}
            </span>
          </button>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}

function ProductCard({ product, delay, isVisible, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article
      className={`group relative glass-card overflow-hidden hover:border-gold/30 hover:-translate-y-1 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Imagen */}
      <div className="relative h-44 overflow-hidden">
        {/* 📸 Imagen del producto — cambia en SITE_CONTENT.js → shop.products[n].image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {product.badge && (
          <span className="absolute top-2 right-2 px-2 py-1 bg-gold/90 text-black text-[10px] font-sans font-bold rounded-full uppercase tracking-wide">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-serif text-white text-base mb-1 leading-tight">{product.name}</h3>
        <p className="font-sans text-white/40 text-xs mb-3 leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-gold font-sans font-semibold">{product.price}</span>
          <button
            onClick={handleAdd}
            className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-300 ${
              added
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-gold-gradient text-black btn-gold-glow hover:scale-105"
            }`}
          >
            {added ? "✓ Añadido" : "+ Carrito"}
          </button>
        </div>
      </div>
    </article>
  );
}
