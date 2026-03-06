// =============================================
// DATA: PRENSA / PRESS
// Edita este archivo para actualizar notas de prensa
// image: importa desde src/assets/ o usa URL externa
// Para YouTube: https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
// =============================================

import imgElCanto from '../assets/ElCantoDeLosGrillosPrensa.jpeg'
import imgLaProfesora from '../assets/LaProfesoraPrensa.jpg'
import imgLaTiaMariela from '../assets/LaTiaMarielaPrensa.jpg'
import imgInbaTwitter from '../assets/InbaTwitterPrensa.jpeg'

export const pressItems = [
  {
    id: 1,
    title: 'Presentan reedición de El canto de los grillos de Juan García Ponce',
    outlet: 'INBA — Instituto Nacional de Bellas Artes',
    date: '2023-08-13',
    summary: 'El Instituto Nacional de Bellas Artes destaca la participación de Susi Estrada en la reedición de este clásico de la dramaturgia mexicana.',
    url: 'https://inba.gob.mx/prensa/18109/presentan-reedicion-de-el-canto-de-los-grillos-de-juan-garcia-ponce',
    type: 'article',
    image: imgElCanto,
  },
  {
    id: 2,
    title: 'La Profesora: nuevas lecciones para dos personajes opuestos',
    outlet: 'Cartelera de Teatro',
    date: '2023-06-10',
    summary: 'Reseña de la obra La Profesora, protagonizada por Susi Estrada, donde dos personajes opuestos comparten un mismo espacio escénico con resultados reveladores.',
    url: 'https://carteleradeteatro.mx/contenidos/la-profesora-nuevas-lecciones-para-dos-personajes-opuestos/',
    type: 'review',
    image: imgLaProfesora,
  },
  {
    id: 3,
    title: 'Yucatecas triunfan con obra de teatro en Chicago',
    outlet: 'Por Qué? — Noticias de Yucatán',
    date: '2023-07-22',
    summary: 'Susi Estrada y su compañía llevan el teatro yucateco al escenario internacional del Chicago International Latino Theatre Festival.',
    url: 'https://por-que.com.mx/yucatecas-triunfan-con-obra-de-teatro-en-chicago/',
    type: 'article',
    image: null,
  },
  {
    id: 4,
    title: 'Familial Feminism in La Tía Mariela',
    outlet: 'Chicago Reader',
    date: '2023-07-15',
    summary: 'The Chicago Reader reviews the performance, highlighting the powerful blend of family dynamics and feminist themes in Susi Estrada\'s work.',
    url: 'https://chicagoreader.com/arts-culture/familial-feminism-in-la-tia-mariela/',
    type: 'review',
    lang: 'en',
    image: imgLaTiaMariela,
  },
  {
    id: 5,
    title: 'Entrevista y performance — Literatura INBA',
    outlet: 'Literatura INBA (Twitter/X)',
    date: '2023-08-13',
    summary: 'Literatura INBA comparte fragmentos del trabajo de Susi Estrada en el marco de actividades culturales del INBA.',
    url: 'https://twitter.com/literaturainba/status/1690789785135181825',
    type: 'social',
    image: imgInbaTwitter,
  },
  {
    id: 6,
    title: 'Entrevista en video — Susi Estrada',
    outlet: 'YouTube',
    date: '2023-01-01',
    summary: 'Entrevista en video donde Susi Estrada habla sobre su proceso creativo y su trayectoria escénica.',
    url: 'https://www.youtube.com/watch?v=jPj9yGZuLxM',
    type: 'video',
    image: 'https://img.youtube.com/vi/jPj9yGZuLxM/hqdefault.jpg',
  },
]
