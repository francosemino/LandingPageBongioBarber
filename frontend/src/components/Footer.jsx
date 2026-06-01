import { Instagram, MessageCircle, Calendar, Crown } from "lucide-react";
import { INFO, waLink } from "../data/site";

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="relative bg-black border-t border-white/5 pt-10 md:pt-16 pb-8"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Massive wordmark */}
        <div className="border-b border-white/5 pb-8 md:pb-12 mb-8 md:mb-12">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-600 mb-2 md:mb-3">
            / Bahía Blanca · Vieytes 189
          </p>
          <h3
            className="font-anton uppercase leading-[0.82] tracking-tighter text-chrome-soft"
            style={{ fontSize: "clamp(2.25rem, 12vw, 11rem)" }}
          >
            BONGIO BARBER
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-3">
              / Estudio
            </p>
            <p className="text-zinc-300 leading-relaxed">{INFO.direccion}</p>
            <p className="mt-2 text-zinc-500 text-sm">
              {INFO.horarios}
              <br />
              {INFO.domingo}
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-3">
              / Navegar
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li><a className="hover:text-white" href="#servicios">Servicios</a></li>
              <li><a className="hover:text-white" href="#barberos">Barberos</a></li>
              <li><a className="hover:text-white" href="#galeria">Galería</a></li>
              <li><a className="hover:text-white" href="#socios">Club de socios</a></li>
              <li><a className="hover:text-white" href="#ubicacion">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-3">
              / Reservas
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a
                  href={INFO.reservaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-2"
                  data-testid="footer-reservar"
                >
                  <span className="w-7 h-7 inline-flex items-center justify-center border border-white/10 rounded-lg text-zinc-300">
                    <Calendar className="w-3.5 h-3.5" />
                  </span>
                  Turno online
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-2"
                  data-testid="footer-whatsapp"
                >
                  <span className="w-7 h-7 inline-flex items-center justify-center border border-white/10 rounded-lg text-zinc-300">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INFO.sociosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-2"
                  data-testid="footer-socios"
                >
                  <span className="w-7 h-7 inline-flex items-center justify-center border border-white/10 rounded-lg text-zinc-300">
                    <Crown className="w-3.5 h-3.5" />
                  </span>
                  Club de socios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-3">
              / Seguinos
            </p>
            <a
              href={INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="group inline-flex items-center gap-2 text-zinc-300 hover:text-white border border-white/10 hover:border-bongio-gold/50 rounded-xl px-4 py-2.5 transition"
            >
              <span className="w-7 h-7 inline-flex items-center justify-center border border-white/10 rounded-lg text-zinc-300 group-hover:text-bongio-gold group-hover:border-bongio-gold/50 transition">
                <Instagram className="w-4 h-4" />
              </span>
              {INFO.instagramUser}
            </a>
            <p className="mt-4 text-zinc-500 text-sm">{INFO.telefonoMostrar}</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Bongio Barber · Todos los derechos reservados</p>
          <p>Bahía Blanca, Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
