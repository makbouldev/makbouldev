import { Container, Row, Col } from 'react-bootstrap'

function AboutPage() {
  return (
    <section className="inner-page">
      <Container>
        <div className="section-heading narrow">
          <span>A propos</span>
          <h1>Une approche entre design system, precision frontend et identite visuelle forte.</h1>
        </div>
        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <div className="story-panel h-100">
              <p>
                MakboulDev construit des interfaces qui ont une vraie presence technique: layouts
                nets, rythme visuel clair, contraste maitrise et sections qui donnent tout de suite
                une impression de niveau.
              </p>
              <p>
                L objectif est simple: un portfolio ou une landing page qui sente le code propre,
                la maitrise frontend et une execution visuelle plus ambitieuse.
              </p>
            </div>
          </Col>
          <Col lg={5}>
            <div className="story-stack h-100">
              <div>
                <strong>Frontend</strong>
                <span>React JS, React Bootstrap, CSS sur mesure.</span>
              </div>
              <div>
                <strong>Design</strong>
                <span>Backgrounds techniques, contrastes propres et compositions plus fortes.</span>
              </div>
              <div>
                <strong>Approche</strong>
                <span>Design audacieux, lisibilite forte, structure orientee conversion.</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutPage
