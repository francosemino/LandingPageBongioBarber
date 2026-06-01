import { Instagram, Calendar, Clock } from "lucide-react";
import { BARBEROS, INFO } from "../data/site";
import Reveal from "./Reveal";

export const Team = () => {
  return (
    <section
      id="barberos"
      data-testid="team"
      className="relative bg-bongio-bg py-14 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-500">
              / Equipo
            </p>
          </div>
          <Reveal className="lg:col-span-9">
            <h2 className="font-anton uppercase text-4xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight text-chrome-soft">
              Los que <span className="text-white">marcan</span>
              <br />
              la línea.
            </h2>
            <p className="mt-4 md:mt-5 max-w-2xl text-zinc-400 text-sm md:text-base">
              Barberos con experiencia, mano firme y obsesión por la prolijidad.
              Elegí con quién te querés sentar.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {BARBEROS.map((b, i) => (
            <Reveal key={b.nombre} delay={i * 100}>
              <article
                data-testid={`barber-card-${i}`}
                className="group relative h-full bg-bongio-card metal-border rounded-[18px] overflow-hidden hover:border-white/15 transition"              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={b.foto}
                    alt={b.nombre}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-300 bg-black/60 px-3 py-1.5 border border-white/10 rounded-xl">
                    0{i + 1} · Barbero
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 md:p-7">
                  <h3 className="font-anton uppercase text-2xl md:text-3xl tracking-wide text-white">
                    {b.nombre}
                  </h3>
                  <p className="mt-1 font-oswald uppercase tracking-[0.18em] text-[12px] text-bongio-gold">
                    {b.especialidad}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {b.bio}
                  </p>

                  {b.horarios && (
                    <p className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
                      <Clock className="w-3.5 h-3.5" /> {b.horarios}
                    </p>
                  )}

                  <div className="mt-6 flex items-center gap-2">
                    <a
                      href={INFO.reservaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`barber-reservar-${i}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black font-oswald uppercase tracking-[0.18em] text-[12px] px-4 py-3 rounded-xl hover:bg-zinc-200 transition"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Reservar
                    </a>
                    {b.instagram && (
                      <a
                        href={b.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram ${b.nombre}`}
                        data-testid={`barber-instagram-${i}`}
                        className="w-11 h-11 inline-flex items-center justify-center border border-white/10 text-zinc-300 rounded-xl hover:text-white hover:border-white/30 transition"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
