import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendEmailInquiry } from '../utils/emailService';

const Contact = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const servicesList = [
    { value: 'Création de site web', label: 'Création de site web' },
    { value: 'Référencement Naturel (SEO)', label: 'Référencement Naturel (SEO)' },
    { value: 'Google Ads / Adwords', label: 'Google Ads / Adwords' },
    { value: 'Publicité Meta', label: 'Publicité Meta (Facebook & Instagram)' },
    { value: 'Application Mobile', label: 'Application Mobile' },
    { value: 'Autre Service', label: 'Autre Service Digital' }
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const serviceQuery = location.state?.service || searchParams.get('service');
    if (serviceQuery) {
      const lower = serviceQuery.toLowerCase();
      let found = 'Création de site web';
      if (lower.includes('seo') || lower.includes('référencement')) {
        found = 'Référencement Naturel (SEO)';
      } else if (lower.includes('ads') || lower.includes('google') || lower.includes('adwords')) {
        found = 'Google Ads / Adwords';
      } else if (lower.includes('meta') || lower.includes('facebook') || lower.includes('instagram')) {
        found = 'Publicité Meta';
      } else if (lower.includes('mobile') || lower.includes('app')) {
        found = 'Application Mobile';
      } else if (lower.includes('site') || lower.includes('web')) {
        found = 'Création de site web';
      } else {
        found = 'Autre Service';
      }
      setFormData(prev => ({ ...prev, service: found }));
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom complet est requis.';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse e-mail est requise.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse e-mail valide.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Le numéro de téléphone est requis.';
    if (!formData.service) newErrors.service = 'Veuillez sélectionner un service.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    await sendEmailInquiry({
      source: 'Page Contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 8000);
  };

  return (
    <section id="contact" className="section-padding position-relative">
      <div className="glow-spot spot-indigo" style={{ bottom: '10%', right: '5%' }}></div>
      <div className="glow-spot spot-cyan" style={{ top: '10%', left: '5%' }}></div>

      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">Let's Collaborate</h2>
          <p className="section-subtitle">
            Have an application concept or want to audit your organic search visibility? Reach out below and let's scope your project.
          </p>
        </div>

        <div className="row g-5 text-start justify-content-center">
          {/* Left Column: Info Card */}
          <div className="col-lg-4 reveal">
            <div className="glass-card h-100 border-start border-info border-3">
              <h3 className="h4 mb-4">Contact Info</h3>
              <p className="text-muted mb-5">
                Reach out directly or schedule a virtual discovery call. We typically respond to new project inquiries within 24 business hours.
              </p>

              {/* Info Elements */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="fs-4 text-info"><i className="bi bi-envelope-at"></i></div>
                <div>
                  <div className="text-muted small">Direct Email</div>
                  <a href="mailto:contact@makbouldev.ma" className="text-light text-decoration-none fw-semibold">
                    contact@makbouldev.ma
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="fs-4 text-primary"><i className="bi bi-whatsapp"></i></div>
                <div>
                  <div className="text-muted small">WhatsApp / Phone</div>
                  <div className="d-flex flex-column gap-1">
                    <a href="https://wa.me/212783180806" target="_blank" rel="noreferrer" className="text-light text-decoration-none fw-semibold">
                      +212 7 83 18 08 06
                    </a>
                    <a href="https://wa.me/212725572550" target="_blank" rel="noreferrer" className="text-light text-decoration-none fw-semibold">
                      +212 7 25 57 25 50
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-5">
                <div className="fs-4 text-info"><i className="bi bi-geo-alt"></i></div>
                <div>
                  <div className="text-muted small">Location</div>
                  <span className="text-light fw-semibold">Casablanca, Morocco (Serving Worldwide)</span>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <h4 className="h6 text-muted uppercase mb-3" style={{ letterSpacing: '1px' }}>DIGITAL NETWORKS</h4>
                <div className="d-flex gap-3">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-premium-outline-round p-0 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderRadius: '50%' }}>
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-premium-outline-round p-0 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderRadius: '50%' }}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn-premium-outline-round p-0 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderRadius: '50%' }}>
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-premium-outline-round p-0 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderRadius: '50%' }}>
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="col-lg-6 reveal">
            <div className="glass-card">
              <form onSubmit={handleSubmit} noValidate>
                
                {/* Full Name */}
                <div className="form-floating-custom">
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="name">Nom complet *</label>
                  {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                </div>

                {/* Email Address */}
                <div className="form-floating-custom">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">Adresse E-mail *</label>
                  {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                </div>

                {/* Phone / WhatsApp */}
                <div className="form-floating-custom">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="phone">Numéro de Téléphone / WhatsApp *</label>
                  {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
                </div>

                {/* Service Dropdown */}
                <div className="form-floating-custom">
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden></option>
                    {servicesList.map((service, idx) => (
                      <option key={idx} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                  <label htmlFor="service">Type de Projet / Service Souhaité *</label>
                  {errors.service && <div className="text-danger small mt-1">{errors.service}</div>}
                </div>

                {/* Message Textarea */}
                <div className="form-floating-custom">
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ height: 'auto', minHeight: '120px' }}
                  ></textarea>
                  <label htmlFor="message">Message ou détails du projet (optionnel)</label>
                  {errors.message && <div className="text-danger small mt-1">{errors.message}</div>}
                </div>

                {/* Submit Action */}
                <div className="text-end">
                  <button 
                    type="submit" 
                    className="btn-premium w-100 d-flex justify-content-center align-items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Dispatching Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Proposal</span>
                        <i className="bi bi-send"></i>
                      </>
                    )}
                  </button>
                </div>

                {/* Success Notification Alert */}
                {submitSuccess && (
                  <div className="alert-custom-success d-flex align-items-start gap-3">
                    <i className="bi bi-patch-check-fill fs-4 text-success"></i>
                    <div>
                      <h5 className="h6 text-success fw-bold mb-1">Proposal Transmitted Successfully!</h5>
                      <p className="mb-0 small" style={{ color: '#a7f3d0' }}>
                        Thank you for reaching out. We have logged your request and will follow up with scheduling links to your email within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
