import { Container } from 'react-bootstrap'
import logo from '../assets/logo.png'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <img src={logo} alt="MakboulDev" className="footer-logo" />
          <p className="footer-copy">Interfaces modernes, sites performants, image professionnelle.</p>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <p className="footer-copy">contact@tsaweb.dev</p>
          <p className="footer-copy">+212 6 00 00 00 00</p>
        </div>
      </Container>
    </footer>
  )
}

export default SiteFooter
