import { ABOUT_BLOCKS, PULL_QUOTES } from "../data/site";
import Reveal from "./Reveal";

export const About = () => {
  return (
    <section
      id="sobre"
      data-testid="about"
      className="relative bg-bongio-bg py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-500">
              / Sobre Bongio
            </p>
          </div>
          <Reveal className="lg:col-span-9">
            <h2 className="font-anton uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight text-chrome-soft">
              No venimos a hacer
              <br />
              <span className="text-white">cortes genéricos.</span>
            </h2>
          </Reveal>
        </div>

        {/* Bento layout: image + 4 blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Image card */}
          <Reveal className="lg:col-span-5 lg:row-span-2">
            <div className="relative h-[420px] lg:h-full min-h-[480px] overflow-hidden metal-border bg-bongio-card">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1400&auto=format&fit=crop"
                alt="Barbero trabajando"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-400">
                  / Estudio
                </p>
                <p className="font-anton text-2xl md:text-3xl uppercase mt-1 text-white">
                  Vieytes 189 · Bahía Blanca
                </p>
              </div>
              <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-bongio-blue shadow-[0_0_24px_rgba(59,130,246,0.7)]" />
            </div>
          </Reveal>

          {/* Text blocks */}
          {ABOUT_BLOCKS.map((b, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className={i % 2 === 0 ? "lg:col-span-4" : "lg:col-span-3"}
            >
              <div className="h-full bg-bongio-card metal-border p-7 md:p-8 hover:border-white/15 transition group">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
                  {b.label}
                </p>
                <h3 className="mt-3 font-anton uppercase text-2xl md:text-3xl leading-tight text-white">
                  {b.titulo}
                </h3>
                <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-zinc-400">
                  {b.texto}
                </p>
                <div className="mt-6 h-px w-12 bg-zinc-700 group-hover:w-24 group-hover:bg-bongio-blue transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pull quotes strip */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {PULL_QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 80}>
              <blockquote className="relative bg-gradient-to-b from-bongio-card to-black metal-border p-7 h-full">
                <span className="font-anton text-6xl text-bongio-blue/40 leading-none absolute top-4 left-5">
                  “
                </span>
                <p className="relative font-oswald uppercase text-lg md:text-xl tracking-wide text-zinc-100 pt-6">
                  {q}
                </p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
