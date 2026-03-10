import { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { examples, services, stats } from '../data/content'

function HomePage() {
  const [content] = useState({
    services,
    examples,
    stats,
  })

  return (
    <>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <div className="eyebrow">Frontend developer portfolio</div>
              <h1 className="hero-title">
                Je transforme des interfaces classiques en experiences web plus creatives.
              </h1>
              <p className="hero-text">
                Design, composants et structure sont penses pour donner un vrai rendu de developer:
                plus de contraste, plus de rythme et une identite visuelle qui marque.
              </p>
              <div className="hero-tag-row">
                <span>React JS</span>
                <span>UI Design</span>
                <span>Responsive</span>
              </div>
              <div className="hero-actions">
                <Button as={Link} to="/exemples" className="hero-primary">
                  Decouvrir mes projects
                </Button>
                <Button as={Link} to="/contact" variant="link" className="hero-secondary">
                  Lancer un projet
                </Button>
              </div>
              <div className="hero-mini-note">
                React Bootstrap + CSS custom, sans templates fades.
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero-card hero-dev-card">
                <div className="hero-terminal-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hero-photo-frame">
                  <div className="photo-placeholder">
                    <span>Photo zone</span>
                    <strong>Ajoutez votre portrait ici</strong>
                    <small>Place ideale pour une photo developer, fond propre ou setup bureau.</small>
                  </div>
                </div>
                <div className="hero-side-card">
                  <p className="hero-card-label">Stack snapshot</p>
                  <div className="hero-badge">Creative UI with developer energy</div>
                  <div className="hero-preview compact-preview">
                    {content.stats.map((stat) => (
                      <div className="mini-metric" key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="section-heading">
            <span>Services</span>
            <h2>Des blocs visuels qui ressemblent a un vrai produit, pas a un template.</h2>
          </div>
          <Row className="g-4">
            {content.services.slice(0, 3).map((service) => (
              <Col md={6} lg={4} key={service.title}>
                <Card className="glass-card h-100">
                  <Card.Body>
                    <p className="card-index">{service.index}</p>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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
    </>
  )
}

export default HomePage
