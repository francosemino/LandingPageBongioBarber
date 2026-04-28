import { useEffect, useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { INFO } from "../data/site";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Barberos", href: "#barberos" },
  { label: "Galería", href: "#galeria" },
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
            className="hidden sm:inline-flex items-center gap-2 bg-white text-black font-oswald uppercase tracking-[0.18em] text-[12px] px-5 py-2.5 hover:bg-zinc-200 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Reservar turno
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            data-testid="navbar-menu-toggle"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-white/10 text-white hover:bg-white/5 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0a0a0a] border-t border-white/10 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        data-testid="navbar-mobile-menu"
      >
        <div className="px-6 py-10 flex flex-col gap-1 h-full">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              data-testid={`nav-mobile-${item.label.toLowerCase()}`}
              className="font-anton text-3xl tracking-wide text-zinc-200 hover:text-white py-3 border-b border-white/5 flex items-baseline gap-3"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                0{i + 1}
              </span>
              {item.label.toUpperCase()}
            </a>
          ))}
          <a
            href={INFO.reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            data-testid="navbar-mobile-reservar-btn"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-black font-oswald uppercase tracking-[0.2em] text-sm px-6 py-4"
          >
            <Calendar className="w-4 h-4" />
            Reservar turno
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
