// =============================================
// DATA: GALERÍA / GALLERY
// Sustituye las URLs de picsum por tus imágenes reales
// =============================================

// S.A.B.R.O.S.A.
import sabrosa1 from '../assets/SABROSA.webp'
import sabrosa2 from '../assets/SABROSA_1.webp'
import sabrosa3 from '../assets/SABROSA_3.webp'
import sabrosa4 from '../assets/SABROSA_4.webp'

// EL TREN MATRACA
import tren1 from '../assets/eltrenmatracaportada.jpg'
import tren2 from '../assets/ElTrenMatraca.jpg'

// LA PROFESORA
import profesora1 from '../assets/LaProfesora1.jpg'
import profesora2 from '../assets/LaProfesora2.jpg'
import profesora3 from '../assets/LaProfesora3.jpg'
import profesora4 from '../assets/LaProfeora4.jpg'

// WOMAN WASHING
import ww1 from '../assets/WomanWashing.jpg'
import ww2 from '../assets/WomanWashing2.jpg'
import ww3 from '../assets/WomanWashing3.jpg'
import ww4 from '../assets/WomanWashing4.jpg'
import ww5 from '../assets/WomanWashing5.jpg'

// ESTA BOCA ES MÍA
import boca1 from '../assets/EstaBocaEsMiaPortada.jpg'
import boca2 from '../assets/EstaBocaEsMia2.jpg'
import boca3 from '../assets/EstaBocaEsMia3.jpg'
import boca4 from '../assets/EstaBocaEsMia4.jpg'
import bocaFlyer from '../assets/EstaBocaEsMiaFlyer.jpg'

// OTROS / RETRATOS
import susiEscena from '../assets/SusiEnEscena.jpg'
import susiRetratoBN from '../assets/SusiRetratoBN.jpg'
import susiRetratoColor from '../assets/SusiRetratoColor.jpg'

export const galleryCategories = [
  { id: 'all',             label: 'Todo',           labelEn: 'All' },
  { id: 'el-tren',        label: 'El Tren',        labelEn: 'El Tren' },
  { id: 'la-profesora',   label: 'La Profesora',   labelEn: 'La Profesora' },
  { id: 'sabrosa',        label: 'S.A.B.R.O.S.A.', labelEn: 'S.A.B.R.O.S.A.' },
  { id: 'woman-washing',  label: 'Woman Washing',  labelEn: 'Woman Washing' },
  { id: 'esta-boca',      label: 'Esta Boca es Mía', labelEn: 'Esta Boca es Mía' },
  { id: 'otros',          label: 'Otros',          labelEn: 'Other' },
]

export const galleryImages = [
  // EL TREN MATRACA
  { id: 'g01', category: 'el-tren',       src: tren1,       alt: 'El Tren Matraca — portada',  thumb: tren1 },
  { id: 'g02', category: 'el-tren',       src: tren2,       alt: 'El Tren Matraca — escena',   thumb: tren2 },

  // LA PROFESORA
  { id: 'g07', category: 'la-profesora',  src: profesora1,  alt: 'La Profesora — escena 1',    thumb: profesora1 },
  { id: 'g08', category: 'la-profesora',  src: profesora2,  alt: 'La Profesora — escena 2',    thumb: profesora2 },
  { id: 'g09', category: 'la-profesora',  src: profesora3,  alt: 'La Profesora — escena 3',    thumb: profesora3 },
  { id: 'g10', category: 'la-profesora',  src: profesora4,  alt: 'La Profesora — escena 4',    thumb: profesora4 },

  // S.A.B.R.O.S.A.
  { id: 'g11', category: 'sabrosa',       src: sabrosa1,    alt: 'S.A.B.R.O.S.A. — escena 1', thumb: sabrosa1 },
  { id: 'g12', category: 'sabrosa',       src: sabrosa2,    alt: 'S.A.B.R.O.S.A. — escena 2', thumb: sabrosa2 },
  { id: 'g13', category: 'sabrosa',       src: sabrosa3,    alt: 'S.A.B.R.O.S.A. — escena 3', thumb: sabrosa3 },
  { id: 'g14', category: 'sabrosa',       src: sabrosa4,    alt: 'S.A.B.R.O.S.A. — escena 4', thumb: sabrosa4 },

  // WOMAN WASHING
  { id: 'g20', category: 'woman-washing', src: ww1,         alt: 'Woman Washing — escena 1',   thumb: ww1 },
  { id: 'g21', category: 'woman-washing', src: ww2,         alt: 'Woman Washing — escena 2',   thumb: ww2 },
  { id: 'g22', category: 'woman-washing', src: ww3,         alt: 'Woman Washing — escena 3',   thumb: ww3 },
  { id: 'g23', category: 'woman-washing', src: ww4,         alt: 'Woman Washing — escena 4',   thumb: ww4 },
  { id: 'g24', category: 'woman-washing', src: ww5,         alt: 'Woman Washing — escena 5',   thumb: ww5 },

  // ESTA BOCA ES MÍA
  { id: 'g30', category: 'esta-boca',     src: boca1,       alt: 'Esta Boca es Mía — portada', thumb: boca1 },
  { id: 'g31', category: 'esta-boca',     src: boca2,       alt: 'Esta Boca es Mía — escena 2', thumb: boca2 },
  { id: 'g32', category: 'esta-boca',     src: boca3,       alt: 'Esta Boca es Mía — escena 3', thumb: boca3 },
  { id: 'g33', category: 'esta-boca',     src: boca4,       alt: 'Esta Boca es Mía — escena 4', thumb: boca4 },
  { id: 'g34', category: 'esta-boca',     src: bocaFlyer,   alt: 'Esta Boca es Mía — flyer',   thumb: bocaFlyer },

  // OTROS
  { id: 'g40', category: 'otros',         src: susiEscena,      alt: 'Susi Estrada en escena',     thumb: susiEscena },
  { id: 'g41', category: 'otros',         src: susiRetratoBN,   alt: 'Retrato — blanco y negro',   thumb: susiRetratoBN },
  { id: 'g42', category: 'otros',         src: susiRetratoColor, alt: 'Retrato — color',           thumb: susiRetratoColor },
]
