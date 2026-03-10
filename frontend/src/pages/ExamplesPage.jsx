import { Container, Row, Col } from 'react-bootstrap'
import { examples } from '../data/content'

function ExamplesPage() {
  return (
    <section className="inner-page">
      <Container>
        <div className="section-heading narrow">
          <span>Projects</span>
          <h1>Des concepts avec un vrai langage visuel de developer moderne.</h1>
        </div>
        <Row className="g-4">
          {examples.map((example) => (
            <Col lg={4} md={6} key={example.name}>
              <article className="portfolio-card">
                <div className="portfolio-thumb" style={{ background: example.gradient }}>
                  <span>{example.category}</span>
                </div>
                <div className="portfolio-content">
                  <h3>{example.name}</h3>
                  <p>{example.summary}</p>
                  <small>{example.stack}</small>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ExamplesPage
