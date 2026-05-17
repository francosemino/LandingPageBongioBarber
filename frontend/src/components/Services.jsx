import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { SERVICIOS, INFO } from "../data/site";
import Reveal from "./Reveal";

export const Services = () => {
  return (
    <section
      id="servicios"
      data-testid="services"
      className="relative bg-bongio-surface py-14 md:py-32 overflow-hidden"
    >
      {/* Side label */}
      <div className="hidden xl:block absolute left-6 top-32 vertical-tb font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-600">
        Servicios — Bongio Barber — 2024
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-500">
              / Servicios
            </p>
          </div>
          <Reveal className="lg:col-span-9">
            <h2 className="font-anton uppercase text-4xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight">
              <span className="text-chrome-soft">Lo que hacemos.</span>
              <br />
              <span className="text-zinc-600">Lo hacemos bien.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICIOS.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Scissors;
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={s.nombre} delay={i * 60}>
                <article
                  data-testid={`service-card-${i}`}
                  className="group relative h-full bg-bongio-card metal-border p-7 md:p-8 hover:border-white/15 hover:bg-[#161618] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-bongio-gold group-hover:text-bongio-gold text-zinc-300 transition">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                      {num}
                    </span>
                  </div>

                  <h3 className="font-anton uppercase text-2xl md:text-[28px] leading-tight tracking-wide text-white">
                    {s.nombre}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {s.descripcion}
                  </p>

                  <a
                    href={INFO.reservaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`service-reservar-${i}`}
                    className="mt-7 inline-flex items-center gap-2 font-oswald uppercase tracking-[0.2em] text-[12px] text-zinc-300 group-hover:text-white"
                  >
                    Reservar
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>

                  {/* hover glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_top_right,rgba(59,130,246,0.10),transparent_60%)]" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
