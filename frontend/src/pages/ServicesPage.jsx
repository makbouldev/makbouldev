import { Container, Row, Col, Card } from 'react-bootstrap'
import { services } from '../data/content'

function ServicesPage() {
  return (
    <section className="inner-page">
      <Container>
        <div className="section-heading narrow">
          <span>Services</span>
          <h1>Des interfaces pensees comme un produit developpe avec soin.</h1>
        </div>
        <Row className="g-4">
          {services.map((service) => (
            <Col md={6} key={service.title}>
              <Card className="service-card h-100">
                <Card.Body>
                  <div className="service-topline">
                    <strong>{service.index}</strong>
                    <span>{service.tag}</span>
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <p className="service-note">{service.note}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ServicesPage
