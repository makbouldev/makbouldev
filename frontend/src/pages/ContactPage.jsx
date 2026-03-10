import { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'

const initialForm = {
  name: '',
  email: '',
  projectType: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus({
      type: 'success',
      message: `Merci ${form.name}, votre demande est prete. Vous pouvez maintenant brancher un email service si besoin.`,
    })
    setForm(initialForm)
  }

  return (
    <section className="inner-page">
      <Container>
        <Row className="g-4 align-items-start">
          <Col lg={5}>
            <div className="section-heading narrow left">
              <span>Contact</span>
              <h1>Parlons d un site qui ressemble vraiment a votre niveau de developpeur.</h1>
              <p>
                Portfolio personnel, landing page, site produit ou refonte complete avec une
                direction frontend plus premium.
              </p>
            </div>
          </Col>
          <Col lg={7}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              {status.message ? <Alert variant={status.type}>{status.message}</Alert> : null}
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control name="name" value={form.name} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Type de projet</Form.Label>
                    <Form.Select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choisir</option>
                      <option value="landing-page">Landing page</option>
                      <option value="site-vitrine">Site vitrine</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="refonte">Refonte</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" className="hero-primary mt-4">
                Envoyer la demande
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactPage
