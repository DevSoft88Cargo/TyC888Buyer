import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TyC from './pages/TyC'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terminos-y-condiciones" element={<TyC />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </Layout>
  )
}

export default App
