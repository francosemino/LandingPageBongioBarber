import { useMemo, useState } from "react";
import { Instagram } from "lucide-react";
import { GALERIA, GALERIA_CATEGORIAS, INFO } from "../data/site";
import Reveal from "./Reveal";

export const Gallery = () => {
  const [filter, setFilter] = useState("Todo");

  const items = useMemo(
    () =>
      filter === "Todo"
        ? GALERIA
        : GALERIA.filter((g) => g.categoria === filter),
    [filter]
  );
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <section
      id="galeria"
      data-testid="gallery"
      className="relative bg-bongio-surface py-14 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-6 mb-8 md:mb-14">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-500 mb-2 md:mb-3">
              / Galería
            </p>
            <Reveal>
              <h2 className="font-anton uppercase text-4xl md:text-7xl leading-[0.85] tracking-tight text-chrome-soft">
                El proceso,
                <br />
                <span className="text-white">en imagen.</span>
              </h2>
            </Reveal>
          </div>
          <a
            href={INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gallery-instagram-btn"
            className="self-start inline-flex items-center gap-2 font-oswald uppercase tracking-[0.18em] text-sm text-zinc-300 hover:text-white border-b border-zinc-700 hover:border-white pb-1 transition"
          >
            <Instagram className="w-4 h-4" />
            Más en {INFO.instagramUser}
          </a>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GALERIA_CATEGORIAS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              data-testid={`gallery-filter-${c.toLowerCase()}`}
              className={`font-oswald uppercase tracking-[0.18em] text-[11px] px-4 py-2 border transition ${
                filter === c
                  ? "bg-white text-black border-white"
                  : "border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {visibleItems.map((g, i) => (
            <a
              key={`${g.titulo}-${i}`}
              href={INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`gallery-item-${i}`}
              className="group relative overflow-hidden bg-bongio-card metal-border aspect-square"
            >
              <img
                src={g.imagen}
                alt={g.titulo}
                loading="lazy"
                className="gallery-img w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-bongio-gold">
                  {g.categoria}
                </p>
                <p className="font-anton text-base md:text-lg uppercase text-white mt-1 leading-tight">
                  {g.titulo}
                </p>
              </div>
            </a>
          ))}
        </div>

        {items.length > 6 && (
          <div className="mt-6 md:mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              data-testid="gallery-toggle-more"
              className="font-oswald uppercase tracking-[0.2em] text-[11px] text-zinc-300 hover:text-white border border-white/15 hover:border-white px-6 py-3 transition"
            >
              {showAll ? "Ver menos" : `Ver más (${items.length - 6})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
