// =============================================
// DATA: OBRAS / SHOWS
// Edita este archivo para actualizar el contenido
// role: "actriz" | "produccion" | ["actriz", "produccion"]
// =============================================

import imgTren from "../assets/ElTrenMatraca.jpg";
import imgTrenPortada from "../assets/eltrenmatracaportada.jpg";
import imgSabrosa from "../assets/SABROSA.webp";
import imgProfesora from "../assets/LaProfesora1.jpg";
import imgWomanWashing from "../assets/WomanWashing.jpg";
import imgEstaBoca from "../assets/EstaBocaEsMiaPortada.jpg";

export const shows = [
  {
    id: "el-tren",
    slug: "el-tren",
    title: "El Tren",
    tagline: "¿Recuerdas tu primer gran recorrido?",
    synopsis: `Si a ti, como a María, te encanta viajar, hacer amigos y vivir historias a través del deseo y la curiosidad, El Tren te invita a subirte a una aventura escénica por la Sierra Tarahumara. En escena, la música en vivo, los títeres y la danza se combinan para jugar, imaginar y dejarnos sorprender.`,
    synopsisExtra: "¡El tren ya está en la estación… no esperes más a bordo!",
    image: imgTrenPortada,
    heroImage: imgTren,
    venue: 'Teatro El Galeón "Abraham Oceransky"',
    venueNote: "[por confirmar nombre exacto]",
    schedule: "Sábados y domingos",
    dates: "Del 1 de febrero al 19 de abril de 2026",
    time: "1:00 pm",
    audience: "3 años en adelante",
    ticketsUrl:
      "https://teatroinbal.sistemadeboletos.com/eventperformances.asp?evt=380",
    production:
      "Una producción de Alma Arte Escénico y En Su Tinta Producciones.",
    active: true,
    role: ["actriz", "produccion"],
    tags: ["familiar", "teatro infantil", "música en vivo", "títeres", "danza"],
    social: {
      instagram: "https://www.instagram.com/eltrenmatraca/",
      facebook: "https://www.facebook.com/profile.php?id=61584659514772",
    },
  },
];

export const pastShows = [
  {
    id: "sabrosa",
    slug: "sabrosa",
    title: "S.A.B.R.O.S.A.",
    tagline: "Sistema de Autodefensa Bio-Robótica para Ocasiones Sexuales Agresivas",
    synopsis:
      "Doriana Moñonga tiene un plan: castigar a los acosadores callejeros con su revolucionario sistema bio-robótico. Frente a un público convertido en jurado, expone cinco historias de violencia cotidiana, desde el comentario aparentemente inofensivo hasta la agresión impune. ¿Merecen el castigo? ¿Es la venganza una solución? Con un humor ácido e incómodo, Sabrosa nos enfrenta a un dilema moral: si tuvieras el poder de hacer justicia, ¿hasta dónde llegarías? Entre risas nerviosas y verdades incómodas, la obra desmonta la impunidad normalizada y nos confronta con una pregunta urgente: ¿qué hacemos con la violencia que vivimos todos los días?",
    image: imgSabrosa,
    heroImage: imgSabrosa,
    dramaturgia: "Mariana Hartasánchez",
    direccion: "Mariana Hartasánchez",
    elenco: "Susi Estrada",
    venue: "Foro Urgente 2, Foro Shakespeare",
    dates: "Temporada 2025",
    audience: "+13 años",
    active: false,
    role: "actriz",
    tags: ["monólogo", "violencia de género", "humor negro", "teatro feminista"],
    social: {
      instagram: "https://www.instagram.com/sabrosa.teatro/",
      facebook: "https://www.facebook.com/profile.php?id=61574026936588",
    },
  },
  {
    id: "la-profesora",
    slug: "la-profesora",
    title: "La Profesora",
    tagline: "Comedia",
    synopsis:
      "Narra la relación que se establece entre una profesora culta y el padre de una de sus alumnas, un pescadero sin educación. Ortiz, pescadero que trabaja en un supermercado, acude a una tutoría para solucionar la situación de su hija Daniel. El primer encuentro con la tutora Ámerica Alcalá, una mujer que no quiere jubilarse por miedo a la soledad, resulta un verdadero combate de boxeo. A lo largo de las reuniones, asistimos al encuentro y acercamiento entre dos personajes tan distantes…quienes en unos meses cambian sus vidas, sus objetivos y, sobre todo, la percepción del mundo que los rodea.",
    image: imgProfesora,
    heroImage: imgProfesora,
    dramaturgia: "Eduardo Galán",
    direccion: "Hugo Arrevillaga Serrano",
    elenco: "Sylvia Pasquel y Alberto Estrella",
    dates: "Finalizó el 3 de agosto de 2025",
    active: false,
    role: "produccion",
    tags: ["comedia", "teatro", "drama humano"],
    social: {
      instagram: "https://www.instagram.com/laprofesora_obra/?hl=es",
      facebook: "https://www.facebook.com/profile.php?id=61580906516567",
    },
  },
  {
    id: "woman-washing",
    slug: "woman-washing",
    title: "Woman Washing",
    tagline: "Sátira",
    synopsis:
      "María, Sofía y Julieta no se conocen, pero tienen algo en común: la misma empresa intentó verles la cara. Descubre cómo una botarga de vaca se convierte en su mejor herramienta para enfrentarse a un gran corporativo y transformar sus dramas en comedia. Esta es la historia de tres mujeres, 70 534 tapitas y mucha leche. Una obra que mezcla sátira, memoria y una revolución con leche entera (y deslactosada, para los mayores de 30 años).",
    image: imgWomanWashing,
    heroImage: imgWomanWashing,
    dramaturgia: "Sandra Eloisa Estrada",
    direccion: "MariCarmen Núñez Utrilla",
    elenco: "Susi Estrada, Nattz Landaverde y Alejandra Zapata",
    dates: "Finalizó el 22 de noviembre de 2025",
    active: false,
    role: "actriz",
    tags: ["sátira", "comedia", "teatro feminista", "colectivo"],
  },
  {
    id: "esta-boca",
    slug: "esta-boca",
    title: "Esta Boca es Mía",
    tagline: "Testimonial",
    synopsis:
      "Aretha es una yucateca desarraigada que dejó Mérida ante la incredulidad de su madre. Ella no se queda callada, no sigue las reglas, no se deja intimidar en las calles, ni que acosen a sus amigas. Crea un podcast al que se unirán las voces de otras mujeres, pues muchas, todas, han sufrido acoso callejero.",
    image: imgEstaBoca,
    heroImage: imgEstaBoca,
    dramaturgia: "Conchi León",
    direccion: "Conchi León",
    elenco: "Susi Estrada",
    dates: "Finalizó el 9 de diciembre de 2023",
    active: false,
    role: "actriz",
    tags: ["testimonial", "monólogo", "acoso callejero", "teatro feminista"],
  },
];
