import * as  Icons from "lucide-react";
import { Crown, Calendar, ArrowUpRight } from "lucide-react";
import { BENEFICIOS, INFO } from "../data/site";
import Reveal from "./Reveal";

export const MembersClub = () => {
  return (
    <section
      id="socios"
      data-testid="members-club"
      className="relative py-16 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bongio-bg" />
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1712166040541-1ebe4ac6a7a1?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover grayscale"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,90,0.18),transparent_55%)]" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-bongio-gold">
              / Club Bongio
            </p>
          </div>
          <Reveal className="lg:col-span-9">
            <div className="inline-flex items-center gap-2 border border-bongio-gold/40 px-3 py-1.5 mb-4 md:mb-5">
              <Crown className="w-3.5 h-3.5 text-bongio-gold" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bongio-gold">
                Acceso premium
              </span>
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-7xl lg:text-8xl leading-[0.82] tracking-tight">
              <span className="text-chrome">Club de Socios</span>
              <br />
              <span className="text-white">Bongio Barber</span>
            </h2>
            <p className="mt-4 md:mt-6 max-w-2xl text-zinc-400 text-sm md:text-lg leading-relaxed">
              Sumate al Club de Socios y accedé a beneficios exclusivos,
              novedades, promos y recompensas pensadas para la comunidad.
            </p>
          </Reveal>
        </div>

        {/* Benefits grid — empty placeholder cards (editá BENEFICIOS en /src/data/site.js) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {BENEFICIOS.map((b, i) => {
            const Icon = Icons[b.icon] || Icons.Star;
            const hasContent = b.titulo || b.descripcion;
            return (
              <Reveal key={i} delay={i * 70}>
                <div
                  data-testid={`benefit-card-${i}`}
                  className="group relative h-full min-h-[180px] md:min-h-[220px] bg-gradient-to-b from-[#0e0e10] to-[#08080a] border border-white/10 p-6 md:p-7 hover:border-bongio-gold/40 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 inline-flex items-center justify-center bg-bongio-gold/10 border border-bongio-gold/30 text-bongio-gold">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">
                      0{i + 1}
                    </span>
                  </div>
                  {hasContent ? (
                    <>
                      <h3 className="font-anton uppercase text-xl md:text-2xl tracking-wide text-white">
                        {b.titulo}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {b.descripcion}
                      </p>
                    </>
                  ) : (
                    <div className="mt-auto pt-6 border-t border-dashed border-white/10">
                      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-600">
                        Beneficio {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="font-oswald uppercase tracking-wide text-zinc-500 text-sm mt-1">
                        Próximamente
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-10 md:mt-20 relative bg-gradient-to-br from-bongio-gold/15 to-transparent border border-white/10 p-6 md:p-12 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-bongio-gold mb-2">
                / Empezá ahora
              </p>
              <h3 className="font-anton uppercase text-2xl md:text-5xl leading-tight text-white">
                Sumate al Club Bongio.
              </h3>
              <p className="mt-2 text-zinc-400 text-sm md:text-base">
                Comunidad, beneficios y recompensas para los que vuelven.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={INFO.sociosUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="club-entrar-btn"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-oswald uppercase tracking-[0.18em] text-sm px-6 md:px-7 py-3.5 md:py-4 hover:bg-zinc-200 transition"
              >
                <Crown className="w-4 h-4" />
                Entrar al club
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={INFO.reservaUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="club-reservar-btn"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-oswald uppercase tracking-[0.18em] text-sm px-6 md:px-7 py-3.5 md:py-4 hover:border-white hover:bg-white/5 transition"
              >
                <Calendar className="w-4 h-4" />
                Reservar turno
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MembersClub;