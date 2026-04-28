import { MessageCircle } from "lucide-react";
import { waLink } from "../data/site";

export const WhatsAppFloat = () => {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-20 right-5 md:bottom-7 md:right-[210px] z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-60" />
      <span className="relative flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-oswald uppercase tracking-[0.18em] text-xs px-4 py-3 md:px-5 md:py-4 rounded-full shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] transition-all">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </span>
    </a>
  );
};

export default WhatsAppFloat;
