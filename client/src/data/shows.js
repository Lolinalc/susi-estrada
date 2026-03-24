// =============================================
// DATA: OBRAS / SHOWS
//
// Estructura de cada show:
//   temporadas[]     → fechas actuales / próximas
//   pastTemporadas[] → fechas anteriores (para el historial)
//
// role: "actriz" | "produccion" | ["actriz", "produccion"]
// =============================================

import imgTren from "../assets/ElTrenMatraca5.webp";
import imgTrenPortada from "../assets/ElTrenMatraca5.webp";
import imgSabrosa3 from "../assets/SABROSA_3.webp";
import imgProfesora from "../assets/LaProfesora1.jpeg";
import imgEstaBoca from "../assets/EstaBocaEsMiaPortada.jpg";
import imgWomanWashing2 from "../assets/womanw_foroshkpr031_54714903133_o.webp";
import videoSabrosaWebm from "../assets/videoSabrosa.webm";
import videoSabrosaMP4 from "../assets/videoSabrosa_opt.mp4";

// ─────────────────────────────────────────────────────────────────────────────
// SHOWS ACTIVOS / PRÓXIMOS
// ─────────────────────────────────────────────────────────────────────────────
export const shows = [
  // ── EL TREN MATRACA ────────────────────────────────────────────────────────
  {
    id: "el-tren",
    slug: "el-tren",
    title: "El Tren Matraca",
    tagline: "¿Recuerdas tu primer gran recorrido?",
    synopsis: `Si a ti, como a María, te encanta viajar, hacer amigos y vivir historias a través del deseo y la curiosidad, El Tren te invita a subirte a una aventura escénica por la Sierra Tarahumara. En escena, la música en vivo, los títeres y la danza se combinan para jugar, imaginar y dejarnos sorprender.`,
    synopsisExtra: "¡El tren ya está en la estación… no esperes más a bordo!",
    production:
      "Una producción de Alma Arte Escénico y En Su Tinta Producciones.",
    image: imgTrenPortada,
    heroImage: imgTren,
    active: true,
    role: ["actriz", "produccion"],
    tags: ["familiar", "teatro infantil", "música en vivo", "títeres", "danza"],
    audience: "3 años en adelante",
    social: {
      instagram: "https://www.instagram.com/eltrenmatraca/",
      facebook: "https://www.facebook.com/profile.php?id=61584659514772",
    },
    temporadas: [
      {
        label: "Temporada 2026 · Ciudad de México",
        venue: 'Teatro El Galeón "Abraham Oceransky"',
        venueNote: "[por confirmar nombre exacto]",
        dates: "Del 1 de febrero al 19 de abril de 2026",
        schedule: "Sábados y domingos",
        time: "1:00 pm",
        ticketsUrl:
          "https://teatroinbal.sistemadeboletos.com/eventperformances.asp?evt=380",
        endDate: "2026-04-19",
      },
    ],
    pastTemporadas: [],
  },

  // ── S.A.B.R.O.S.A. ────────────────────────────────────────────────────────
  {
    id: "sabrosa",
    slug: "sabrosa",
    title: "S.A.B.R.O.S.A.",
    tagline:
      "Sistema de Autodefensa Bio-Robótica para Ocasiones Sexuales Agresivas",
    synopsis:
      "Doriana Moñonga tiene un plan: castigar a los acosadores callejeros con su revolucionario sistema bio-robótico. Frente a un público convertido en jurado, expone cinco historias de violencia cotidiana, desde el comentario aparentemente inofensivo hasta la agresión impune. ¿Merecen el castigo? ¿Es la venganza una solución? Con un humor ácido e incómodo, Sabrosa nos enfrenta a un dilema moral: si tuvieras el poder de hacer justicia, ¿hasta dónde llegarías? Entre risas nerviosas y verdades incómodas, la obra desmonta la impunidad normalizada y nos confronta con una pregunta urgente: ¿qué hacemos con la violencia que vivimos todos los días?",
    image: imgSabrosa3,
    heroImage: imgSabrosa3,
    video: { webm: videoSabrosaWebm, mp4: videoSabrosaMP4 },
    active: true,
    role: ["actriz", "produccion"],
    tags: [
      "monólogo",
      "violencia de género",
      "humor negro",
      "teatro feminista",
    ],
    dramaturgia: "Mariana Hartasánchez",
    direccion: "Mariana Hartasánchez",
    elenco: "Susi Estrada",
    audience: "+13 años",
    social: {
      instagram: "https://www.instagram.com/sabrosa.teatro/",
      facebook: "https://www.facebook.com/profile.php?id=61574026936588",
    },
    temporadas: [
      {
        label: "Festival de Monólogos de Chicago · National Museum of Mexican Art",
        venue: "National Museum of Mexican Art",
        venueNote: "Chicago, Illinois",
        dates: "2, 4 y 25 de Abril de 2026",
        schedule: "2, 4 y 25 de abril",
        ticketsUrl: "https://nationalmuseumofmexicanart.org/events/s-a-b-r-o-s-a",
        endDate: "2026-04-25",
      },
      {
        label: "2ª Temporada · Ciudad de México",
        venue: "Foro Alternativo, Centro Cultural Helénico",
        venueNote: "Ciudad de México",
        dates: "Del 4 de julio al 16 de agosto de 2026",
        schedule: "Sábados y domingos (sin funciones 18 y 19 de julio)",
        ticketsUrl: null,
        endDate: "2026-08-16",
      },
    ],
    pastTemporadas: [
      {
        label: "1ª Temporada · Ciudad de México",
        venue: "Foro Urgente 2, Foro Shakespeare",
        venueNote: "Ciudad de México",
        dates: "Temporada 2025",
      },
    ],
  },

  // ── MUJER TIERRA ──────────────────────────────────────────────────────────
  {
    id: "mujer-tierra",
    slug: "mujer-tierra",
    title: "Mujer Tierra",
    tagline: "Descripción y ficha técnica próximamente",
    synopsis: "",
    image: null,
    heroImage: null,
    active: true,
    role: ["actriz", "produccion"],
    tags: ["teatro", "producción"],
    social: {},
    temporadas: [
      {
        label: "Temporada 2026 · Ciudad de México",
        venue: "Foro Urgente 2, Foro Shakespeare",
        venueNote: "Ciudad de México",
        dates: "18 y 20 de Mayo de 2026",
        schedule: "18 y 20 de mayo",
        ticketsUrl: null,
        endDate: "2026-05-20",
      },
    ],
    pastTemporadas: [],
  },

  // ── WOMAN WASHING ─────────────────────────────────────────────────────────
  {
    id: "woman-washing",
    slug: "woman-washing",
    title: "Woman Washing",
    tagline: "Sátira",
    synopsis:
      "María, Sofía y Julieta no se conocen, pero tienen algo en común: la misma empresa intentó verles la cara. Descubre cómo una botarga de vaca se convierte en su mejor herramienta para enfrentarse a un gran corporativo y transformar sus dramas en comedia. Esta es la historia de tres mujeres, 70 534 tapitas y mucha leche. Una obra que mezcla sátira, memoria y una revolución con leche entera (y deslactosada, para los mayores de 30 años).",
    image: imgWomanWashing2,
    heroImage: imgWomanWashing2,
    active: true,
    role: "actriz",
    tags: ["sátira", "comedia", "teatro feminista", "colectivo"],
    dramaturgia: "Sandra Eloisa Estrada",
    direccion: "MariCarmen Núñez Utrilla",
    elenco: "Susi Estrada, Nattz Landaverde y Alejandra Zapata",
    temporadas: [
      {
        label: "2ª Temporada · Ciudad de México",
        venue: "Foro Urgente 2, Foro Shakespeare",
        venueNote: "Ciudad de México",
        dates: "Del 23 de agosto al 18 de octubre de 2026",
        schedule: "Solo sábados",
        ticketsUrl: null,
        endDate: "2026-10-18",
        reviewUrl:
          "https://foroshakespeare.com/woman-washing-una-denuncia-desde-la-satira/",
      },
    ],
    pastTemporadas: [
      {
        label: "1ª Temporada · Ciudad de México",
        venue: "Foro Urgente 2, Foro Shakespeare",
        venueNote: "Ciudad de México",
        dates: "Finalizó el 22 de noviembre de 2025",
      },
    ],
  },

  // ── LAS JUSTAS ────────────────────────────────────────────────────────────
  {
    id: "las-justas",
    slug: "las-justas",
    title: "Las Justas",
    tagline: "Descripción y ficha técnica próximamente",
    synopsis: "",
    image: null,
    heroImage: null,
    active: true,
    role: "actriz",
    tags: ["teatro"],
    social: {},
    temporadas: [
      {
        label: "Temporada 2026 · Ciudad de México",
        venue: "Foro Principal, Foro Shakespeare",
        venueNote: "Ciudad de México",
        dates: "Del 15 de septiembre al 18 de noviembre de 2026",
        schedule: "Martes y jueves",
        ticketsUrl: null,
        endDate: "2026-11-18",
      },
    ],
    pastTemporadas: [],
  },

  // ── GRITADERO ─────────────────────────────────────────────────────────────
  {
    id: "gritadero",
    slug: "gritadero",
    title: "Gritadero",
    tagline: "Descripción y ficha técnica próximamente",
    synopsis: "",
    image: null,
    heroImage: null,
    active: true,
    role: "produccion",
    tags: ["teatro", "producción"],
    social: {},
    temporadas: [
      {
        label: "Temporada 2026 · Ciudad de México",
        venue: "Foro La Gruta, Centro Cultural Helénico",
        venueNote: "Ciudad de México",
        dates: "Del 30 de octubre al 22 de noviembre de 2026",
        schedule: "Consultar cartelera",
        ticketsUrl: null,
        endDate: "2026-11-22",
      },
    ],
    pastTemporadas: [],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SHOWS PASADOS
// ─────────────────────────────────────────────────────────────────────────────
export const pastShows = [
  // ── LA PROFESORA ──────────────────────────────────────────────────────────
  {
    id: "la-profesora",
    slug: "la-profesora",
    title: "La Profesora",
    tagline: "Comedia",
    synopsis:
      "Narra la relación que se establece entre una profesora culta y el padre de una de sus alumnas, un pescadero sin educación. Ortiz, pescadero que trabaja en un supermercado, acude a una tutoría para solucionar la situación de su hija Daniel. El primer encuentro con la tutora Ámerica Alcalá, una mujer que no quiere jubilarse por miedo a la soledad, resulta un verdadero combate de boxeo. A lo largo de las reuniones, asistimos al encuentro y acercamiento entre dos personajes tan distantes…quienes en unos meses cambian sus vidas, sus objetivos y, sobre todo, la percepción del mundo que los rodea.",
    image: imgProfesora,
    heroImage: imgProfesora,
    active: false,
    role: "produccion",
    tags: ["comedia", "teatro", "drama humano"],
    dramaturgia: "Eduardo Galán",
    direccion: "Hugo Arrevillaga Serrano",
    elenco: "Sylvia Pasquel y Alberto Estrella",
    social: {
      instagram: "https://www.instagram.com/laprofesora_obra/?hl=es",
      facebook: "https://www.facebook.com/profile.php?id=61580906516567",
    },
    temporadas: [],
    pastTemporadas: [
      {
        label: "Temporada 2024–2025",
        dates: "Finalizó el 3 de agosto de 2025",
      },
    ],
  },

  // ── ESTA BOCA ES MÍA ──────────────────────────────────────────────────────
  {
    id: "esta-boca",
    slug: "esta-boca",
    title: "Esta Boca es Mía",
    tagline: "Testimonial",
    synopsis:
      "Aretha es una yucateca desarraigada que dejó Mérida ante la incredulidad de su madre. Ella no se queda callada, no sigue las reglas, no se deja intimidar en las calles, ni que acosen a sus amigas. Crea un podcast al que se unirán las voces de otras mujeres, pues muchas, todas, han sufrido acoso callejero.",
    image: imgEstaBoca,
    heroImage: imgEstaBoca,
    active: false,
    role: "actriz",
    tags: ["testimonial", "monólogo", "acoso callejero", "teatro feminista"],
    dramaturgia: "Conchi León",
    direccion: "Conchi León",
    elenco: "Susi Estrada",
    temporadas: [],
    pastTemporadas: [
      {
        label: "Temporada 2023",
        dates: "Finalizó el 9 de diciembre de 2023",
      },
    ],
  },
];
