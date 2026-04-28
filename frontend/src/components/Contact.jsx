import { Instagram, MessageCircle, Calendar, Crown, Phone, MapPin } from "lucide-react";
import { INFO, waLink } from "../data/site";
import Reveal from "./Reveal";

export const Contact = () => {
  return (
    <section
      id="contacto"
      data-testid="contact"
      className="relative bg-bongio-surface py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-500">
              / Contacto
            </p>
          </div>
          <Reveal className="lg:col-span-9">
            <h2 className="font-anton uppercase text-5xl md:text-7xl leading-[0.85] tracking-tight">
              <span className="text-chrome-soft">Hablemos.</span>{" "}
              <span className="text-zinc-600">Reservá.</span>
            </h2>
            <p className="mt-5 max-w-xl text-zinc-400">
              ¿Querés consultar por un turno o un servicio? Estamos a un mensaje
              de distancia.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <ContactCard
            icon={<MessageCircle className="w-5 h-5" />}
            label="WhatsApp"
            value={INFO.telefonoMostrar}
            cta="Enviar WhatsApp"
            href={waLink()}
            testId="contact-whatsapp"
          />
          <ContactCard
            icon={<Calendar className="w-5 h-5" />}
            label="Reservas"
            value="barberoscontrol.com"
            cta="Reservar online"
            href={INFO.reservaUrl}
            testId="contact-reservar"
            primary
          />
          <ContactCard
            icon={<Instagram className="w-5 h-5" />}
            label="Instagram"
            value={INFO.instagramUser}
            cta="Ver Instagram"
            href={INFO.instagramUrl}
            testId="contact-instagram"
          />
          <ContactCard
            icon={<Crown className="w-5 h-5" />}
            label="Club Bongio"
            value="Beneficios y promos"
            cta="Club de socios"
            href={INFO.sociosUrl}
            testId="contact-socios"
          />
        </div>

        {/* Address strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <a
            href={INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-bongio-card metal-border p-5 hover:border-white/15 transition"
            data-testid="contact-address-link"
          >
            <MapPin className="w-5 h-5 text-bongio-blue shrink-0" />
            <div className="min-w-0">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
                Dirección
              </p>
              <p className="font-oswald uppercase tracking-wide text-white truncate">
                {INFO.direccion}
              </p>
            </div>
          </a>
          <a
            href={`tel:${INFO.telefonoMostrar.replace(/\s|-/g, "")}`}
            className="group flex items-center gap-4 bg-bongio-card metal-border p-5 hover:border-white/15 transition"
            data-testid="contact-phone-link"
          >
            <Phone className="w-5 h-5 text-bongio-blue shrink-0" />
            <div className="min-w-0">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
                Llamar
              </p>
              <p className="font-oswald uppercase tracking-wide text-white">
                {INFO.telefonoMostrar}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, cta, href, primary, testId }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testId}
    className={`group relative flex flex-col justify-between p-7 metal-border h-full transition ${
      primary
        ? "bg-white text-black hover:bg-zinc-200"
        : "bg-bongio-card text-white hover:border-white/15"
    }`}
  >
    <div className="flex items-start justify-between">
      <div
        className={`w-11 h-11 inline-flex items-center justify-center border ${
          primary ? "border-black/20" : "border-white/10 text-zinc-300"
        }`}
      >
        {icon}
      </div>
      <span
        className={`font-mono text-[10px] tracking-[0.3em] uppercase ${
          primary ? "text-black/60" : "text-zinc-600"
        }`}
      >
        {label}
      </span>
    </div>
    <div className="mt-10">
      <p
        className={`font-anton uppercase text-2xl tracking-wide ${
          primary ? "text-black" : "text-white"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-3 font-oswald uppercase tracking-[0.18em] text-[11px] ${
          primary ? "text-black/70" : "text-zinc-400 group-hover:text-white"
        } transition`}
      >
        {cta} →
      </p>
    </div>
  </a>
);

export default Contact;
