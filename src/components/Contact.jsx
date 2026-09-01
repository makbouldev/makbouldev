import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const servicesList = [
    { value: 'web', label: 'Web Application Development' },
    { value: 'mobile', label: 'Mobile Application (iOS & Android)' },
    { value: 'desktop', label: 'Desktop Application' },
    { value: 'seo', label: 'Search Engine Optimization (SEO)' },
    { value: 'gmb', label: 'Google Business Profile Optimization' },
    { value: 'ads', label: 'Paid Ads & Social Media Marketing' },
    { value: 'hybrid', label: 'Custom Digital Solutions Suite' }
  ];

  const budgetsList = [
    { value: 'small', label: 'Under $1,000' },
    { value: 'medium', label: '$1,000 - $3,000' },
    { value: 'large', label: '$3,000 - $10,000' },
    { value: 'enterprise', label: '$10,000+' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Proactively clear error on typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.message.trim()) newErrors.message = 'Please describe your project.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: ''
      });
      
      // Auto-hide success notification after 8 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 8000);
    }, 15000 / 10); // 1.5 seconds mock latency
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
                  <label htmlFor="name">Your Full Name</label>
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
                  <label htmlFor="email">Your Email Address</label>
                  {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
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
                  <label htmlFor="service">Select Required Service</label>
                  {errors.service && <div className="text-danger small mt-1">{errors.service}</div>}
                </div>

                {/* Budget Dropdown */}
                <div className="form-floating-custom">
                  <select 
                    id="budget" 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled hidden></option>
                    {budgetsList.map((budget, idx) => (
                      <option key={idx} value={budget.value}>{budget.label}</option>
                    ))}
                  </select>
                  <label htmlFor="budget">Estimated Budget (Optional)</label>
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
                  <label htmlFor="message">Describe Your Project / Objectives</label>
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
