import * as Icons from "lucide-react";
import { Crown, Calendar, ArrowUpRight } from "lucide-react";
import { BENEFICIOS, INFO } from "../data/site";
import Reveal from "./Reveal";

export const MembersClub = () => {
  return (
    <section
      id="socios"
      data-testid="members-club"
      className="relative py-24 md:py-32 overflow-hidden"
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_55%)]" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-bongio-blue">
              / Club Bongio
            </p>
          </div>
          <Reveal className="lg:col-span-9">
            <div className="inline-flex items-center gap-2 border border-bongio-blue/40 px-3 py-1.5 mb-5">
              <Crown className="w-3.5 h-3.5 text-bongio-blue" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bongio-blue">
                Acceso premium
              </span>
            </div>
            <h2 className="font-anton uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.82] tracking-tight">
              <span className="text-chrome">Club de Socios</span>
              <br />
              <span className="text-white">Bongio Barber</span>
            </h2>
            <p className="mt-6 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed">
              Sumate al Club de Socios y accedé a beneficios exclusivos,
              novedades, promos y recompensas pensadas para la comunidad.
            </p>
          </Reveal>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {BENEFICIOS.map((b, i) => {
            const Icon = Icons[b.icon] || Icons.Star;
            return (
              <Reveal key={b.titulo} delay={i * 70}>
                <div
                  data-testid={`benefit-card-${i}`}
                  className="group relative h-full bg-gradient-to-b from-[#0e0e10] to-[#08080a] border border-white/10 p-7 hover:border-bongio-blue/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 inline-flex items-center justify-center bg-bongio-blue/10 border border-bongio-blue/30 text-bongio-blue">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-anton uppercase text-xl md:text-2xl tracking-wide text-white">
                    {b.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {b.descripcion}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-14 md:mt-20 relative bg-gradient-to-br from-bongio-blue/15 to-transparent border border-white/10 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-bongio-blue mb-2">
                / Empezá ahora
              </p>
              <h3 className="font-anton uppercase text-3xl md:text-5xl leading-tight text-white">
                Sumate al Club Bongio.
              </h3>
              <p className="mt-2 text-zinc-400">
                Comunidad, beneficios y recompensas para los que vuelven.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={INFO.sociosUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="club-entrar-btn"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-oswald uppercase tracking-[0.18em] text-sm px-7 py-4 hover:bg-zinc-200 transition"
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
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-oswald uppercase tracking-[0.18em] text-sm px-7 py-4 hover:border-white hover:bg-white/5 transition"
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
