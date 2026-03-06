import { HelmetProvider, Helmet } from 'react-helmet-async'
import Carousel from '../../components/Carousel/Carousel'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Susi Estrada — Actriz, Bailarina y Productora</title>
        <meta name="description" content="Portafolio oficial de Susi Estrada: actriz, bailarina y productora cultural independiente con más de 15 años de trayectoria escénica." />
      </Helmet>
      <Carousel />
    </>
  )
}
