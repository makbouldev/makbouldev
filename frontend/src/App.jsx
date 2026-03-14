import { Route, Routes } from 'react-router-dom'
import { TelephoneFill, Whatsapp } from 'react-bootstrap-icons'
import SiteNavbar from './components/SiteNavbar'
import SiteFooter from './components/SiteFooter'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ExamplesPage from './pages/ExamplesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="site-shell">
      <SiteNavbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/exemples" element={<ExamplesPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <a href="#hero" className="floating-whatsapp" aria-label="WhatsApp">
        <Whatsapp />
      </a>
      <a href="tel:+212522491616" className="floating-call" aria-label="Appel">
        <TelephoneFill />
      </a>
      <SiteFooter />
    </div>
  )
}

export default App
