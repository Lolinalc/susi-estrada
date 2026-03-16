// =============================================
// DATA: GALERÍA / GALLERY
// =============================================

// S.A.B.R.O.S.A.
import sabrosa1 from '../assets/SABROSA.webp'
import sabrosa2 from '../assets/SABROSA_1.webp'
import sabrosa3 from '../assets/SABROSA_3.webp'
import sabrosa4 from '../assets/SABROSA_4.webp'

// EL TREN MATRACA
import tren0  from '../assets/eltrenmatracaportada.jpg'
import tren1  from '../assets/ElTrenMatraca.jpg'
import tren2  from '../assets/ElTrenMatraca1.webp'
import tren3  from '../assets/ElTrenMatraca2.webp'
import tren4  from '../assets/ElTrenMatraca3.webp'
import tren5  from '../assets/ElTrenMatraca4.webp'
import tren6  from '../assets/ElTrenMatraca5.webp'
import tren7  from '../assets/ElTrenMatraca6.webp'
import tren8  from '../assets/ElTrenMatraca7.webp'
import tren9  from '../assets/ElTrenMatraca8.webp'
import tren10 from '../assets/ElTrenMatraca9.webp'
import tren11 from '../assets/ElTrenMatraca10.webp'
import tren12 from '../assets/ElTrenMatraca11.webp'
import trenElenco1 from '../assets/ElTrenMatracaElenco.webp'
import trenElenco2 from '../assets/ElTrenMatracaElenco2.webp'

// LA PROFESORA
import profesora1       from '../assets/LaProfesora1.jpeg'
import profesora2       from '../assets/LaProfesora2.jpeg'
import profesora3       from '../assets/LaProfesora3.jpeg'
import profesora4       from '../assets/LaProfesora4.jpeg'
import profesoraCartel  from '../assets/LaProfesoraCartel.jpeg'

// WOMAN WASHING
import ww1  from '../assets/WomanWashing.jpg'
import ww2  from '../assets/WomanWashing2.jpg'
import ww3  from '../assets/WomanWashing3.jpg'
import ww4  from '../assets/WomanWashing4.jpg'
import ww5  from '../assets/WomanWashing5.jpg'
import ww6  from '../assets/womanw_foroshkpr008_54715033855_o.webp'
import ww7  from '../assets/womanw_foroshkpr023_54713861142_o.webp'
import ww8  from '../assets/womanw_foroshkpr024_54714696646_o.webp'
import ww9  from '../assets/womanw_foroshkpr031_54714903133_o.webp'
import ww10 from '../assets/womanw_foroshkpr039_54714902878_o.webp'
import ww11 from '../assets/womanw_foroshkpr077_54713858882_o.webp'
import ww12 from '../assets/womanw_foroshkpr093_54714693996_o.webp'
import ww13 from '../assets/womanw_foroshkpr099_54715030005_o.webp'
import ww14 from '../assets/womanw_foroshkpr108_54714900153_o.webp'
import ww15 from '../assets/womanw_foroshkpr109_54714900093_o.webp'
import ww16 from '../assets/womanw_foroshkpr110_54713857472_o.webp'
import ww17 from '../assets/womanw_foroshkpr112_54713857332_o.webp'
import ww18 from '../assets/womanw_foroshkpr113_54714899908_o.webp'
import ww19 from '../assets/womanw_foroshkpr114_54714693131_o.webp'
import ww20 from '../assets/womanw_foroshkpr115_54713857157_o.webp'
import ww21 from '../assets/womanw_foroshkpr116_54714692916_o.webp'
import ww22 from '../assets/womanw_foroshkpr117_54714899768_o.webp'
import ww23 from '../assets/womanw_foroshkpr118_54714692971_o.webp'

// ESTA BOCA ES MÍA
import boca0    from '../assets/EstaBocaEsMiaPortada.jpg'
import boca1    from '../assets/EstaBocaEsMia1.webp'
import boca2    from '../assets/EstaBocaEsMia2.webp'
import boca3    from '../assets/EstaBocaEsMia3.webp'
import boca4    from '../assets/EstaBocaEsMia4.webp'
import boca5    from '../assets/EstaBocaEsMia5.webp'
import boca6    from '../assets/EstaBocaEsMia6.webp'
import bocaFlyer from '../assets/EstaBocaEsMiaFlyer.jpg'

// OTROS / RETRATOS
import susiEscena      from '../assets/SusiEnEscena.jpg'
import susiRetratoBN   from '../assets/SusiRetratoBN.jpg'
import susiRetratoColor from '../assets/SusiRetratoColor.jpg'
import susiPerfil1     from '../assets/SusiPerfil1.webp'
import susiPerfil2     from '../assets/SusiPerfil2.webp'
import susiPerfil3     from '../assets/SusiPerfil3.webp'
import susiPerfil4     from '../assets/SusiPerfil4.jpeg'
import inbaTwitter     from '../assets/InbaTwitterPrensa.jpeg'

export const galleryCategories = [
  { id: 'all',            label: 'Todo',             labelEn: 'All' },
  { id: 'el-tren',       label: 'El Tren Matraca',  labelEn: 'El Tren Matraca' },
  { id: 'la-profesora',  label: 'La Profesora',      labelEn: 'La Profesora' },
  { id: 'sabrosa',       label: 'S.A.B.R.O.S.A.',   labelEn: 'S.A.B.R.O.S.A.' },
  { id: 'woman-washing', label: 'Woman Washing',      labelEn: 'Woman Washing' },
  { id: 'esta-boca',     label: 'Esta Boca es Mía',  labelEn: 'Esta Boca es Mía' },
  { id: 'otros',         label: 'Otros',              labelEn: 'Other' },
]

export const galleryImages = [
  // EL TREN MATRACA
  { id: 'g01', category: 'el-tren', src: tren0,       alt: 'El Tren Matraca — portada',    thumb: tren0 },
  { id: 'g02', category: 'el-tren', src: tren1,       alt: 'El Tren Matraca — escena',     thumb: tren1 },
  { id: 'g03', category: 'el-tren', src: tren2,       alt: 'El Tren Matraca — escena 1',   thumb: tren2 },
  { id: 'g04', category: 'el-tren', src: tren3,       alt: 'El Tren Matraca — escena 2',   thumb: tren3 },
  { id: 'g05', category: 'el-tren', src: tren4,       alt: 'El Tren Matraca — escena 3',   thumb: tren4 },
  { id: 'g06', category: 'el-tren', src: tren5,       alt: 'El Tren Matraca — escena 4',   thumb: tren5 },
  { id: 'g07', category: 'el-tren', src: tren6,       alt: 'El Tren Matraca — escena 5',   thumb: tren6 },
  { id: 'g08', category: 'el-tren', src: tren7,       alt: 'El Tren Matraca — escena 6',   thumb: tren7 },
  { id: 'g09', category: 'el-tren', src: tren8,       alt: 'El Tren Matraca — escena 7',   thumb: tren8 },
  { id: 'g10', category: 'el-tren', src: tren9,       alt: 'El Tren Matraca — escena 8',   thumb: tren9 },
  { id: 'g11', category: 'el-tren', src: tren10,      alt: 'El Tren Matraca — escena 9',   thumb: tren10 },
  { id: 'g12', category: 'el-tren', src: tren11,      alt: 'El Tren Matraca — escena 10',  thumb: tren11 },
  { id: 'g13', category: 'el-tren', src: tren12,      alt: 'El Tren Matraca — escena 11',  thumb: tren12 },
  { id: 'g14', category: 'el-tren', src: trenElenco1, alt: 'El Tren Matraca — elenco',     thumb: trenElenco1 },
  { id: 'g15', category: 'el-tren', src: trenElenco2, alt: 'El Tren Matraca — elenco 2',   thumb: trenElenco2 },

  // LA PROFESORA
  { id: 'g20', category: 'la-profesora', src: profesora1,      alt: 'La Profesora — escena 1', thumb: profesora1 },
  { id: 'g21', category: 'la-profesora', src: profesora2,      alt: 'La Profesora — escena 2', thumb: profesora2 },
  { id: 'g22', category: 'la-profesora', src: profesora3,      alt: 'La Profesora — escena 3', thumb: profesora3 },
  { id: 'g23', category: 'la-profesora', src: profesora4,      alt: 'La Profesora — escena 4', thumb: profesora4 },
  { id: 'g24', category: 'la-profesora', src: profesoraCartel, alt: 'La Profesora — cartel',   thumb: profesoraCartel },

  // S.A.B.R.O.S.A.
  { id: 'g30', category: 'sabrosa', src: sabrosa1, alt: 'S.A.B.R.O.S.A. — escena 1', thumb: sabrosa1 },
  { id: 'g31', category: 'sabrosa', src: sabrosa2, alt: 'S.A.B.R.O.S.A. — escena 2', thumb: sabrosa2 },
  { id: 'g32', category: 'sabrosa', src: sabrosa3, alt: 'S.A.B.R.O.S.A. — escena 3', thumb: sabrosa3 },
  { id: 'g33', category: 'sabrosa', src: sabrosa4, alt: 'S.A.B.R.O.S.A. — escena 4', thumb: sabrosa4 },

  // WOMAN WASHING
  { id: 'g40', category: 'woman-washing', src: ww1,  alt: 'Woman Washing — escena 1',  thumb: ww1 },
  { id: 'g41', category: 'woman-washing', src: ww2,  alt: 'Woman Washing — escena 2',  thumb: ww2 },
  { id: 'g42', category: 'woman-washing', src: ww3,  alt: 'Woman Washing — escena 3',  thumb: ww3 },
  { id: 'g43', category: 'woman-washing', src: ww4,  alt: 'Woman Washing — escena 4',  thumb: ww4 },
  { id: 'g44', category: 'woman-washing', src: ww5,  alt: 'Woman Washing — escena 5',  thumb: ww5 },
  { id: 'g45', category: 'woman-washing', src: ww6,  alt: 'Woman Washing — foto 6',    thumb: ww6 },
  { id: 'g46', category: 'woman-washing', src: ww7,  alt: 'Woman Washing — foto 7',    thumb: ww7 },
  { id: 'g47', category: 'woman-washing', src: ww8,  alt: 'Woman Washing — foto 8',    thumb: ww8 },
  { id: 'g48', category: 'woman-washing', src: ww9,  alt: 'Woman Washing — foto 9',    thumb: ww9 },
  { id: 'g49', category: 'woman-washing', src: ww10, alt: 'Woman Washing — foto 10',   thumb: ww10 },
  { id: 'g50', category: 'woman-washing', src: ww11, alt: 'Woman Washing — foto 11',   thumb: ww11 },
  { id: 'g51', category: 'woman-washing', src: ww12, alt: 'Woman Washing — foto 12',   thumb: ww12 },
  { id: 'g52', category: 'woman-washing', src: ww13, alt: 'Woman Washing — foto 13',   thumb: ww13 },
  { id: 'g53', category: 'woman-washing', src: ww14, alt: 'Woman Washing — foto 14',   thumb: ww14 },
  { id: 'g54', category: 'woman-washing', src: ww15, alt: 'Woman Washing — foto 15',   thumb: ww15 },
  { id: 'g55', category: 'woman-washing', src: ww16, alt: 'Woman Washing — foto 16',   thumb: ww16 },
  { id: 'g56', category: 'woman-washing', src: ww17, alt: 'Woman Washing — foto 17',   thumb: ww17 },
  { id: 'g57', category: 'woman-washing', src: ww18, alt: 'Woman Washing — foto 18',   thumb: ww18 },
  { id: 'g58', category: 'woman-washing', src: ww19, alt: 'Woman Washing — foto 19',   thumb: ww19 },
  { id: 'g59', category: 'woman-washing', src: ww20, alt: 'Woman Washing — foto 20',   thumb: ww20 },
  { id: 'g60', category: 'woman-washing', src: ww21, alt: 'Woman Washing — foto 21',   thumb: ww21 },
  { id: 'g61', category: 'woman-washing', src: ww22, alt: 'Woman Washing — foto 22',   thumb: ww22 },
  { id: 'g62', category: 'woman-washing', src: ww23, alt: 'Woman Washing — foto 23',   thumb: ww23 },

  // ESTA BOCA ES MÍA
  { id: 'g70', category: 'esta-boca', src: boca0,    alt: 'Esta Boca es Mía — portada', thumb: boca0 },
  { id: 'g71', category: 'esta-boca', src: boca1,    alt: 'Esta Boca es Mía — escena 1', thumb: boca1 },
  { id: 'g72', category: 'esta-boca', src: boca2,    alt: 'Esta Boca es Mía — escena 2', thumb: boca2 },
  { id: 'g73', category: 'esta-boca', src: boca3,    alt: 'Esta Boca es Mía — escena 3', thumb: boca3 },
  { id: 'g74', category: 'esta-boca', src: boca4,    alt: 'Esta Boca es Mía — escena 4', thumb: boca4 },
  { id: 'g75', category: 'esta-boca', src: boca5,    alt: 'Esta Boca es Mía — escena 5', thumb: boca5 },
  { id: 'g76', category: 'esta-boca', src: boca6,    alt: 'Esta Boca es Mía — escena 6', thumb: boca6 },
  { id: 'g77', category: 'esta-boca', src: bocaFlyer, alt: 'Esta Boca es Mía — flyer',   thumb: bocaFlyer },

  // OTROS
  { id: 'g80', category: 'otros', src: susiEscena,       alt: 'Susi Estrada en escena',    thumb: susiEscena },
  { id: 'g81', category: 'otros', src: susiRetratoBN,    alt: 'Retrato — blanco y negro',  thumb: susiRetratoBN },
  { id: 'g82', category: 'otros', src: susiRetratoColor, alt: 'Retrato — color',           thumb: susiRetratoColor },
  { id: 'g83', category: 'otros', src: susiPerfil1,      alt: 'Susi Estrada — perfil 1',   thumb: susiPerfil1 },
  { id: 'g84', category: 'otros', src: susiPerfil2,      alt: 'Susi Estrada — perfil 2',   thumb: susiPerfil2 },
  { id: 'g85', category: 'otros', src: susiPerfil3,      alt: 'Susi Estrada — perfil 3',   thumb: susiPerfil3 },
  { id: 'g86', category: 'otros', src: susiPerfil4,      alt: 'Susi Estrada — perfil 4',   thumb: susiPerfil4 },
  { id: 'g87', category: 'otros', src: inbaTwitter,      alt: 'INBA — redes sociales',     thumb: inbaTwitter },
]
