# Bongio Barber — Web

## Original Problem Statement
Página web profesional, moderna y responsive para BONGIO BARBER (barbería en Bahía Blanca, Vieytes 189). Estilo urbano/callejero/premium, fondo oscuro, detalles chrome/azul. Solo frontend. Datos editables en arrays.

## Architecture
- React 19 + Tailwind CSS (frontend only, no backend)
- Single-page site with anchor sections + sticky navbar
- All editable content centralized in `/app/frontend/src/data/site.js`
- Lucide icons, IntersectionObserver scroll reveals
- Fonts: Anton (display), Oswald (subheads), Manrope (body), JetBrains Mono (labels)

## What's Implemented (Dec 2025)
- Navbar fijo + menú hamburguesa mobile + CTA "Reservar turno"
- Hero cinematográfico con wordmark BONGIO BARBER en chrome, 3 CTAs (online/WhatsApp/Socios), bottom info strip
- Marquee animado con frases de marca
- Sección "Sobre Bongio" — bento layout (imagen + 4 bloques) + 3 pull-quotes
- Servicios — 9 cards con iconos Lucide, hover glow, botón Reservar
- Barberos — 3 cards editables con foto, especialidad, bio, IG y reserva
- Galería — 12 imágenes con filtro por categoría y hover B&W→color
- Club de Socios — 6 beneficios + CTA dual (Entrar al club / Reservar)
- Ubicación — Google Maps embebido + info card + Cómo llegar / Reservar
- Contacto — 4 cards (WhatsApp/Reservas/Instagram/Club) + dirección + teléfono
- Footer wordmark XXL + 4 columnas + créditos
- Botón flotante WhatsApp con pulse
- Todos los CTAs apuntan a los links reales (barberoscontrol, wa.me, IG, Maps)

## Editable Files
- `/app/frontend/src/data/site.js` — INFO, SERVICIOS, BARBEROS, GALERIA, BENEFICIOS, ABOUT_BLOCKS, PULL_QUOTES

## Backlog / Next Action Items
- P1: Reemplazar fotos placeholder de barberos y galería por las reales
- P1: Subir logo real (PNG/SVG) y sustituir el wordmark CSS chrome si se desea
- P2: SEO — agregar JSON-LD LocalBusiness, sitemap, og:image
- P2: Analytics (PostHog ya integrado por la plantilla)
