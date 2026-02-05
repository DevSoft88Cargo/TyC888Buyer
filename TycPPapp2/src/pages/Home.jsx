import { Link } from 'react-router-dom'
import '../css/EstilosGenerales.css'

const Home = () => {
  return (
    <section className="landing">
      <h1 className="landing-titulo">888Buyer</h1>
      <p className="landing-subtitulo">
        Bienvenido. Aquí encontrarás la información que necesitas.
      </p>
      <div className="landing-acciones">
        <Link to="/terminos-y-condiciones" className="btn btn-secundario">
          Términos y Condiciones
        </Link>
        <Link to="/politica-privacidad" className="btn btn-primario">
          Política de Privacidad
        </Link>
      </div>
    </section>
  )
}

export default Home
