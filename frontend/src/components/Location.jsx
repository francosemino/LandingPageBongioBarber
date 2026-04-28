import { MapPin, Clock, Phone, Calendar, Navigation } from "lucide-react";
import { INFO } from "../data/site";
import Reveal from "./Reveal";

export const Location = () => {
  // Embedded Google Maps for Vieytes 189, Bahía Blanca
  const mapsEmbed =
    "https://www.google.com/maps?q=Vieytes+189,+Bah%C3%ADa+Blanca&output=embed";

  return (
    <section
      id="ubicacion"
      data-testid="location"
      className="relative bg-bongio-bg py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-500">
              / Ubicación
            </p>
          </div>
          <Reveal className="lg:col-span-9">
            <h2 className="font-anton uppercase text-5xl md:text-7xl leading-[0.85] tracking-tight text-chrome-soft">
              Vení a <span className="text-white">Vieytes 189.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Map */}
          <Reveal className="lg:col-span-7">
            <div className="relative h-[340px] md:h-[460px] overflow-hidden metal-border bg-bongio-card">
              <iframe
                title="Bongio Barber Mapa"
                src={mapsEmbed}
                className="w-full h-full grayscale-[0.6] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>

          {/* Info */}
          <Reveal className="lg:col-span-5">
            <div className="h-full bg-bongio-card metal-border p-7 md:p-10 flex flex-col">
              <div className="space-y-6">
                <InfoRow
                  icon={<MapPin className="w-4 h-4" />}
                  label="Dirección"
                  value={INFO.direccion}
                />
                <InfoRow
                  icon={<Clock className="w-4 h-4" />}
                  label="Horarios"
                  value={`${INFO.horarios} · ${INFO.domingo}`}
                />
                <InfoRow
                  icon={<Calendar className="w-4 h-4" />}
                  label="Modalidad"
                  value={INFO.modalidad}
                />
                <InfoRow
                  icon={<Phone className="w-4 h-4" />}
                  label="Teléfono"
                  value={INFO.telefonoMostrar}
                />
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <a
                  href={INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="location-como-llegar-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black font-oswald uppercase tracking-[0.18em] text-[12px] px-5 py-3.5 hover:bg-zinc-200 transition"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </a>
                <a
                  href={INFO.reservaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="location-reservar-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-white/15 text-white font-oswald uppercase tracking-[0.18em] text-[12px] px-5 py-3.5 hover:border-white hover:bg-white/5 transition"
                >
                  <Calendar className="w-4 h-4" />
                  Reservar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 inline-flex items-center justify-center border border-white/10 text-zinc-300 shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
        {label}
      </p>
      <p className="mt-1 font-oswald text-base md:text-lg uppercase tracking-wide text-white break-words">
        {value}
      </p>
    </div>
  </div>
);

export default Location;
