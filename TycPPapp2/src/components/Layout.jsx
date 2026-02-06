import { Form, Link, useLocation } from 'react-router-dom'
import '../css/EstilosGenerales.css'
import logo from '../../public/logo888Buyer.jpeg' 

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">

        <Link to="/" className="logo"><img src={logo} alt="888Buyer Logo" /></Link>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
          <Link to="/terminos-y-condiciones" className={location.pathname === '/terminos-y-condiciones' ? 'active' : ''}>Términos y Condiciones</Link>
          <Link to="/politica-privacidad" className={location.pathname === '/politica-privacidad' ? 'active' : ''}>Política de Privacidad</Link>
        </nav>
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} 888Buyer. Todos los derechos reservados.</p>
        <div className="footer-links">
          <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
          <span> · </span>
          <Link to="/politica-privacidad">Política de Privacidad</Link>
        </div>
      </footer>
    </div>
  )
}

export default Layout
