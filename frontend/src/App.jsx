import { Route, Routes } from 'react-router-dom'
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
      <SiteFooter />
    </div>
  )
}

export default App
