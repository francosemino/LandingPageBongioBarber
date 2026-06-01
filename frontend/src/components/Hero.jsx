import { Calendar, MessageCircle, Crown, MapPin, Clock, Instagram } from "lucide-react";
import { INFO, waLink } from "../data/site";

export const Hero = () => {
  return (
    <section
      id="inicio"
      data-testid="hero"
      className="relative min-h-[85svh] md:min-h-[100svh] flex flex-col justify-end overflow-hidden bg-bongio-bg grain"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2400&auto=format&fit=crop"
          alt="Interior de barbería oscura"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
        />
        {/* Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,90,0.12),transparent_55%)]" />
      </div>

      {/* Top meta strip */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 md:px-10 pt-28 md:pt-36">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Abierto · {INFO.horarios}
          </span>
          <span className="hidden md:inline-flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> {INFO.direccion}
          </span>
        </div>
      </div>

      {/* Main wordmark */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 md:px-10 mt-auto pb-8 md:pb-16">
        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-zinc-500 mb-2 md:mb-4">
          / Barbería en Bahía Blanca / Est. 2026
        </p>

        <h1
          className="font-anton uppercase leading-[0.82] tracking-tighter text-chrome"
          style={{ fontSize: "clamp(3rem, 14vw, 14rem)" }}
        >
          Bongio
          <br />
          <span className="inline-flex items-baseline gap-3 md:gap-6">
            Barber
            <span className="hidden md:inline-block w-3 h-3 lg:w-4 lg:h-4 bg-bongio-gold rounded-full translate-y-[-0.6em]" />
          </span>
        </h1>

        <div className="mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <p className="lg:col-span-6 text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed">
            <span className="text-white font-medium">
              {INFO.frasePrincipal}
            </span>{" "}
            Trabajamos por orden de llegada y también podés reservar tu turno por
            WhatsApp o desde nuestro link online.
          </p>

          <div className="lg:col-span-6 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={INFO.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-reservar-online-btn"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black font-oswald uppercase tracking-[0.18em] text-sm px-7 py-4 rounded-xl hover:bg-zinc-200 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Reservar online
              <span className="font-mono text-[10px] text-zinc-500 group-hover:text-black/60">
                →
              </span>
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-zinc-600 text-white font-oswald uppercase tracking-[0.18em] text-sm px-7 py-4 rounded-xl hover:border-bongio-gold hover:text-bongio-gold hover:bg-white/5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={INFO.sociosUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-socios-btn"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-zinc-600 text-white font-oswald uppercase tracking-[0.18em] text-sm px-7 py-4 rounded-xl hover:border-bongio-gold hover:text-bongio-gold transition-all"
            >
              <Crown className="w-4 h-4" />
              Club de socios
            </a>
          </div>
        </div>
      </div>

      {/* Bottom info strip */}
      <div className="relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
          <div className="flex items-start gap-2 text-zinc-300">
            <span className="w-9 h-9 inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-bongio-gold shrink-0">
              <Clock className="w-4 h-4" />
            </span>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                Horarios
              </p>
              <p>Lun a Sáb · 10–21 h</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-zinc-300">
            <span className="w-9 h-9 inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-bongio-gold shrink-0">
              <MapPin className="w-4 h-4" />
            </span>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                Dirección
              </p>
              <p>Vieytes 189, Bahía Blanca</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-zinc-300">
            <span className="w-9 h-9 inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-bongio-gold shrink-0">
              <Calendar className="w-4 h-4" />
            </span>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                Modalidad
              </p>
              <p>Orden de llegada · Turnos online</p>
            </div>
          </div>
          <a
            href={INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-zinc-300 hover:text-white transition"
          >
            <span className="w-9 h-9 inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-bongio-gold shrink-0">
              <Instagram className="w-4 h-4" />
            </span>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                Instagram
              </p>
              <p>{INFO.instagramUser}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
