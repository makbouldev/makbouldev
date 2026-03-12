import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  BarChartLine,
  CalendarCheck,
  Gem,
  LayoutWtf,
  LightningCharge,
  People,
} from 'react-bootstrap-icons'
import { examples, services, stats } from '../data/content'
import programmingHero from '../assets/HERO.png'
import professionalPhoto from '../assets/photo-professional.png'

const serviceIcons = [LayoutWtf, CalendarCheck, BarChartLine]

function HomePage() {
  const [content] = useState({
    services,
    examples,
    stats,
  })

  return (
    <>
      <div className="home-flow-surface">
        <section className="hero-section">
          <Container>
            <Row className="align-items-center hero-row g-5">
              <Col lg={6}>
                <div className="eyebrow">Web developer</div>
                <h1 className="hero-title">
                  Creation de
                  <span> sites web </span>
                  professionnels qui developpent votre business.
                </h1>
                <p className="hero-text">
                  Transformez votre projet en un site web elegant, performant et optimise pour offrir
                  la meilleure experience a vos clients.
                </p>
                <div className="hero-line" />
                <div className="hero-actions">
                  <Button as={Link} to="/exemples" className="hero-primary">
                    Decouvrir mes projets
                  </Button>
                  <Button as={Link} to="/contact" variant="link" className="hero-secondary">
                    Demarrer maintenant
                  </Button>
                </div>
                <div className="hero-mini-note">
                  Developpement d&apos;un systeme de reservation en ligne, creation de sites web
                  vitrines, accompagnement digital
                </div>
              </Col>
              <Col lg={6}>
                <div className="hero-visual-wrap">
                  <img
                    src={programmingHero}
                    alt="Illustration programmation creative"
                    className="hero-illustration"
                  />
                  <div className="hero-bubble hero-bubble-one">
                    <strong>Qualite</strong>
                    <span>Un rendu propre et professionnel</span>
                  </div>
                  <div className="hero-bubble hero-bubble-two">
                    <strong>Creativite</strong>
                    <span>Une identite visuelle qui fait la difference</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-space services-showcase">
          <Container>
            <div className="services-simple-shell">
              <div className="services-simple-head">
                <div className="services-simple-copy">
                  <span>Services</span>
                  <h2>Des services simples, modernes et utiles pour faire avancer votre projet.</h2>
                  <p>
                    Une presentation claire, une meilleure experience et un rendu plus professionnel
                    pour votre activite.
                  </p>
                  <div className="services-head-actions">
                    <Button as={Link} to="/services" className="section-link-btn services-btn-desktop">
                      Voir la page services
                    </Button>
                    <Button as={Link} to="/exemples" className="section-link-btn services-projects-btn">
                      Voir mes projects
                    </Button>
                  </div>
                </div>

                <div className="services-profile-card">
                  <div className="services-profile-photo">
                    <img
                      src={professionalPhoto}
                      alt="Portrait professionnel de Noureddine Makboul"
                      className="services-profile-avatar"
                    />
                  </div>
                  <strong>Noureddine Makboul</strong>
                  <span>Developpeur web</span>
                  <small>Auto Entrepreneur</small>
                </div>
              </div>

              <div className="services-simple-grid">
                {content.services.slice(0, 3).map((service, index) => {
                  const Icon = serviceIcons[index] ?? LayoutWtf

                  return (
                    <article className="service-simple-card" key={service.title}>
                      <div className="service-simple-top">
                        <div className="service-icon-wrap">
                          <Icon />
                        </div>
                        <span className="service-chip">{service.tag}</span>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </article>
                  )
                })}
              </div>

              <div className="services-trust-row">
                <article className="services-trust-item">
                  <div className="services-trust-icon">
                    <People />
                  </div>
                  <strong>Equipe fiable</strong>
                  <span>Un accompagnement serieux et une communication claire.</span>
                </article>
                <article className="services-trust-item">
                  <div className="services-trust-icon">
                    <LightningCharge />
                  </div>
                  <strong>Execution rapide</strong>
                  <span>Un travail fluide pour lancer votre projet sans perdre de temps.</span>
                </article>
                <article className="services-trust-item">
                  <div className="services-trust-icon">
                    <Gem />
                  </div>
                  <strong>Prix raisonnables</strong>
                  <span>Un rendu propre et professionnel avec un budget maitrise.</span>
                </article>
              </div>

              <div className="services-mobile-action">
                <div className="services-mobile-buttons">
                  <Button as={Link} to="/services" className="section-link-btn services-btn-mobile">
                    Voir la page services
                  </Button>
                  <Button as={Link} to="/exemples" className="section-link-btn services-btn-mobile">
                    Voir mes projects
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-space examples-band">
          <Container>
            <div className="section-heading">
              <span>Projets</span>
              <h2>Quelques directions pour donner une identite plus technique et plus forte.</h2>
            </div>
            <Row className="g-4">
              {content.examples.slice(0, 2).map((example) => (
                <Col lg={6} key={example.name}>
                  <div className="example-panel">
                    <div className="example-visual" style={{ background: example.gradient }} />
                    <div className="example-copy">
                      <p>{example.category}</p>
                      <h3>{example.name}</h3>
                      <span>{example.summary}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default HomePage
