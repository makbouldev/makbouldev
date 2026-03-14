import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'
import logo from '../assets/logo.png'

function SiteNavbar() {
  return (
    <header className="site-navbar-wrap">
      <div className="topbar-surface">
        <Container className="navbar-topbar">
          <div className="topbar-brand-slot" />

          <div className="navbar-contact-strip" aria-label="Phone numbers">
            <span className="phone-chip">+212 522 49 16 16</span>
            <span className="phone-chip">+212 522 20 71 11</span>
          </div>

          <div className="navbar-socials">
            <a href="#hero" aria-label="Facebook" className="social-facebook">
              <Facebook />
            </a>
            <a href="#hero" aria-label="Instagram" className="social-instagram">
              <Instagram />
            </a>
            <a href="#hero" aria-label="LinkedIn" className="social-linkedin">
              <Linkedin />
            </a>
          </div>
        </Container>
      </div>

      <Navbar expand="lg" className="site-navbar" sticky="top">
        <Container className="navbar-stack">
          <div className="navbar-bottombar">
            <Navbar.Brand as={Link} to="/" className="brand-mark nav-brand-mark">
              <img src={logo} alt="MakboulDev" className="brand-logo" />
              <div className="brand-copy">
                <strong>MakboulDev</strong>
                <span>Code - Create - Innovate</span>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" className="navbar-toggle" />
            <Navbar.Collapse id="main-navbar">
              <div className="navbar-bottom-layout">
                <Nav className="navbar-menu align-items-lg-center">
                  <Nav.Link as={NavLink} to="/" end>
                    Accueil
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/a-propos">
                    A propos
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/services">
                    Services
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/exemples">
                    Projects
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <Button as={Link} to="/contact" className="nav-cta">
                  Demarrer
                </Button>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default SiteNavbar
