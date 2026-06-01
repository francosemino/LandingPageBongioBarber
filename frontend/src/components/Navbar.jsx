import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Calendar,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { INFO, waLink } from "../data/site";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Barberos", href: "#barberos" },
  { label: "Socios", href: "#socios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          data-testid="navbar-logo"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <span className="font-anton text-2xl md:text-[26px] tracking-[0.04em] text-chrome">
            BONGIOBARBER
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 border border-zinc-700 px-2 py-[2px] rounded-full hidden sm:inline-block">
            BARBERIA
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-${item.label.toLowerCase()}`}
              className="font-oswald text-[13px] tracking-[0.18em] uppercase text-zinc-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Reservar */}
        <div className="flex items-center gap-3">
          <a
            href={INFO.reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-reservar-btn"
            className="hidden sm:inline-flex items-center rounded-xl gap-2 bg-white text-black font-oswald uppercase tracking-[0.18em] text-[12px] px-5 py-2.5 hover:bg-zinc-200 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Reservar turno
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            data-testid="navbar-menu-toggle"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[16px] border border-white/10 text-white hover:border-bongio-gold/50 hover:text-bongio-gold hover:bg-white/5 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] bg-black text-white transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        data-testid="navbar-mobile-menu"
      >
        {/* Fondo premium */}
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_top_right,rgba(212,157,72,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_35%,rgba(0,0,0,0.95))]" />

        <div className="relative min-h-dvh px-5 pt-6 pb-8 flex flex-col overflow-y-auto">
          {/* Header mobile */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <a
              href="#inicio"
              onClick={() => setOpen(false)}
              className="font-anton uppercase text-3xl tracking-tight text-chrome-soft"
            >
              BongioBarber
            </a>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="w-12 h-12 inline-flex items-center justify-center rounded-[16px] border border-white/10 bg-white/5 text-white hover:border-bongio-gold/60 hover:text-bongio-gold transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Info rápida */}
          <div className="mt-5 grid grid-cols-1 gap-3">
            <a
              href={INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-4"
            >
              <span className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-bongio-gold/30 text-bongio-gold bg-black/30 shrink-0">
                <MapPin className="w-4 h-4" />
              </span>

              <div className="min-w-0">
                <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-zinc-500">
                  Ubicación
                </p>
                <p className="font-oswald uppercase tracking-wide text-sm text-zinc-200 truncate">
                  {INFO.direccion}
                </p>
              </div>
            </a>

            <a
              href={`tel:${INFO.telefonoMostrar.replace(/\s|-/g, "")}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-4"
            >
              <span className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-bongio-gold/30 text-bongio-gold bg-black/30 shrink-0">
                <Phone className="w-4 h-4" />
              </span>

              <div>
                <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-zinc-500">
                  Llamar
                </p>
                <p className="font-oswald uppercase tracking-wide text-sm text-zinc-200">
                  {INFO.telefonoMostrar}
                </p>
              </div>
            </a>
          </div>

          {/* Links */}
          <nav className="mt-7">
            <ul className="space-y-3">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                    className="group flex items-center justify-between rounded-[22px] border border-white/10 bg-bongio-card px-5 py-5 hover:border-bongio-gold/50 transition"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-600 group-hover:text-bongio-gold transition">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="font-anton uppercase text-[34px] leading-none tracking-tight text-white">
                        {item.label}
                      </span>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-bongio-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botones */}
          <div className="mt-7 grid grid-cols-1 gap-3">
            <a
              href={INFO.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              data-testid="navbar-mobile-reservar-btn"
              className="inline-flex items-center justify-center gap-3 rounded-[18px] bg-white px-5 py-4 font-oswald text-sm uppercase tracking-[0.25em] text-black hover:bg-zinc-200 transition"
            >
              <Calendar className="w-4 h-4" />
              Reservar turno
            </a>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-3 rounded-[18px] border border-bongio-gold/40 bg-bongio-gold/10 px-5 py-4 font-oswald text-sm uppercase tracking-[0.25em] text-bongio-gold hover:border-bongio-gold transition"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Footer del menú */}
          <div className="mt-7 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-600">
              / Bongio Barber
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Cortes, barba, estilo y comunidad en Bahía Blanca.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
