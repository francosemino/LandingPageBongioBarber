import { Star } from "lucide-react";

const PHRASES = [
  "Cada corte tiene intención",
  "Líneas limpias",
  "Desvanecidos finos",
  "Terminaciones prolijas",
  "Bongio Barber es actitud",
  "Estándar alto, siempre",
];

export const Marquee = () => {
  // duplicate for seamless loop
  const items = [...PHRASES, ...PHRASES];
  return (
    <div
      data-testid="marquee"
      className="border-y border-white/5 bg-bongio-surface overflow-hidden py-5 md:py-6"
    >
      <div className="flex w-max animate-marquee">
        {items.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-6 md:gap-10 px-6 md:px-10"
          >
            <span className="font-anton uppercase text-2xl md:text-4xl tracking-wider text-zinc-200 whitespace-nowrap">
              {p}
            </span>
            <Star className="w-4 h-4 md:w-5 md:h-5 text-bongio-gold shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
