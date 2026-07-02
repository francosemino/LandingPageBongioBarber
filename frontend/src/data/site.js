// =============================================================================
// BONGIO BARBER - DATOS EDITABLES
// =============================================================================
// Editá este archivo para cambiar contenido del sitio sin tocar componentes.
// Secciones: INFO, SERVICIOS, BARBEROS, GALERÍA, BENEFICIOS DEL CLUB.
// =============================================================================

// ----------------------------- INFO DE CONTACTO ------------------------------
// Modificá teléfonos, dirección, horarios, links de reserva y socios.
export const INFO = {
  marca: "BONGIO BARBER",
  tagline: "Barbería en Bahía Blanca",
  frasePrincipal: "Cortes con actitud, precisión y estilo propio.",
  direccion: "Vieytes 189, Bahía Blanca, Buenos Aires",
  ciudad: "Bahía Blanca",
  horarios: "Lun a Sáb · 10:00 — 21:00",
  domingo: "Domingo cerrado",
  modalidad: "Por orden de llegada · WhatsApp · Reserva online",
  telefonoMostrar: "0291 534-1108",
  // Formato internacional para WhatsApp (Argentina +54 9 291 534 1108)
  telefonoWhatsApp: "5492915341108",
  mensajeWhatsApp: "Hola Bongio Barber, quiero consultar por un turno.",
  instagramUser: "@bongiobarber",
  instagramUrl: "https://www.instagram.com/bongiobarber",
  reservaUrl: "https://app.barberoscontrol.com/reservar/BongioBarber",
  sociosUrl: "https://app.barberoscontrol.com/socios/BongioBarber",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bongio+Barber+Vieytes+189+Bah%C3%ADa+Blanca",
};

// Helper que arma el link de WhatsApp con mensaje pre-cargado.
export const waLink = (msg = INFO.mensajeWhatsApp) =>
  `https://wa.me/${INFO.telefonoWhatsApp}?text=${encodeURIComponent(msg)}`;

// --------------------------------- SERVICIOS ---------------------------------
// Agregá / editá / quitá servicios.  icon = nombre de Lucide React.
export const SERVICIOS = [
  {
    nombre: "Corte",
    descripcion:
      "Corte personalizado según tu estilo, tipo de pelo y forma de cara.",
    icon: "Scissors",
  },
  {
    nombre: "Barba",
    descripcion: "Perfilado, rebaje y diseño de barba con máquina y navaja.",
    icon: "Scissors",
  },
  {
    nombre: "Lavado y peinado",
    descripcion: "Lavado, secado y peinado con productos profesionales.",
    icon: "Scissors",
  },
];

// --------------------------------- BARBEROS ----------------------------------
// Agregá, editá o quitá barberos. Reemplazá `foto` con la URL real cuando esté.
export const BARBEROS = [
  {
    nombre: "Julian",
    especialidad: "Texturas · Tijeras · Perfilado",
    bio: "Especialista en desvanecidos finos y diseños con máquina. Mano firme y obsesión por la simetría.",
    foto: "/images/barberos/julian.jpg",
    instagram: "https://www.instagram.com/juliansantiago011?igsh=MXJtaTlleXgxM3NmMA==",
    horarios: "Lun a Sáb · 14:00 — 21:00",
  },
  {
    nombre: "Tiago",
    especialidad: "Texturas · Tijeras · Perfilado",
    bio: "Cortes a tijera con caída natural y texturas prolijas. Estilo entre clásico y moderno.",
    foto: "/images/barberos/tiago.jpg",
    instagram: "https://www.instagram.com/_tiago_barber?igsh=MXRvZWNuZWo4MzNqaQ==",
    horarios: "Lun a Sáb · 10:00 — 21:00",
  },
  {
    nombre: "Giselle",
    especialidad: "Corte · Perfilado · Color",
    bio: "Especialidad en barba: rebaje, perfilado y terminaciones a navaja. Detalle obsesivo.",
    foto: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=900&auto=format&fit=crop",
    instagram: "https://instagram.com/bongiobarber",
    horarios: "Lun a Sáb · 10:00 — 14:00",
  },
];


// ------------------------------ CLUB DE SOCIOS -------------------------------
export const BENEFICIOS = [
  {
    titulo: "Bienvenido a la comunidad Bongio",
    descripcion:
      "1 Cerveza Free Las Tías",
    icon: "Gift",
  },
  {
    titulo: "De la casa",
    descripcion:
      "Perfilado de barba o lavado de regalo + 1 Cerveza free Las tías",
    icon: "Gift",
  },
  {
    titulo: "Comunidad Bongio",
    descripcion:
      "Kit/merch BongioBarber (gorra, producto)",
    icon: "Gift",
  },
  {
    titulo: "Mesa Bongio",
    descripcion:
      "Cena para 4 personas en Bronx Social Club. Pizza y papas sin cargo.",
    icon: "Gift",
  },
  {
    titulo: "Cliente Élite Bongio",
    descripcion:
      "Socio Embajador: Regalo exclusivo y tu lugar en la pared.",
    icon: "Gift",
  },
];

// ---------------------------- COPY DE IDENTIDAD ------------------------------
export const ABOUT_BLOCKS = [
  {
    label: "01 / Origen",
    titulo: "Cuando suena la música, arranca Bongio.",
    texto:
      "En Bahía Blanca hay momentos en los que la ciudad baja un cambio… y otros en los que se activa. Cuando suena la música, el spray corta el aire y la máquina empieza a marcar, arranca Bongio Barber.",
  },
  {
    label: "02 / Criterio",
    titulo: "Salimos de lo genérico.",
    texto:
      "Nacimos para una barbería con criterio, donde cada corte tiene intención y cada detalle suma. Acá no se viene a ver qué sale: se viene a definir, a pulir, a encontrar un look que te quede bien de verdad.",
  },
  {
    label: "03 / Obsesión",
    titulo: "Precisión, prolijidad y constancia.",
    texto:
      "Trabajamos con barberos con experiencia y una obsesión simple: líneas limpias, desvanecidos finos y terminaciones que se notan y se sostienen.",
  },
  {
    label: "04 / Plan",
    titulo: "Crecer con la comunidad.",
    texto:
      "Cuando el corte está bien hecho, cambia la postura, cambia la cara, cambia el día. El plan es claro: construir una barbería que la gente elija por cómo te deja y por cómo te hace sentir.",
  },
];

export const PULL_QUOTES = [
  "Cada corte tiene intención.",
  "Líneas limpias. Desvanecidos finos. Terminaciones prolijas.",
  "Bongio Barber es actitud, cuidado y un estándar alto.",
];
