import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../data/projects';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const gridTestimonials = [
    ...testimonialsData,
    {
      name: "Khalid Bensaoud",
      role: "Operations Manager, LogiTrans Morocco",
      text: "Their team set up our localized search presence and SEO parameters. In less than 3 months, we climbed to the top search spots, doubling organic phone inquiries. Invaluable agency partner.",
      avatar: "KB"
    },
    {
      name: "Fatima Zahra",
      role: "E-Commerce Founder, Artisanat Chic",
      text: "Excellent Shopify custom integrations and Meta Ads campaigns execution. The dashboards they built help us track daily ROI without messy spreadsheets. True scaling professionals.",
      avatar: "FZ"
    },
    {
      name: "Rachid Idrissi",
      role: "CEO, Idrissi Real Estate",
      text: "MakboulDev created a custom CRM portal linking our property listings with client leads. It operates natively, it's fast, and the UX is highly intuitive. Exceptional delivery.",
      avatar: "RI"
    }
  ];

  return (
    <section id="testimonials" className="section-padding position-relative">
      <div className="glow-spot spot-cyan" style={{ top: '30%', right: '10%' }}></div>
      <div className="glow-spot spot-indigo" style={{ bottom: '15%', left: '5%' }}></div>
      
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">Client Appraisals</h2>
          <p className="section-subtitle">
            See how custom software solutions and high-performing digital search index campaigns have accelerated business results for our clients.
          </p>
        </div>

        {/* Overview Rating Stats Dashboard */}
        <div className="row justify-content-center mb-5 reveal">
          <div className="col-md-8 col-lg-6">
            <div className="glass-card text-center py-4" style={{ borderLeft: '3px solid var(--primary-indigo)', borderRight: '3px solid var(--accent-cyan)' }}>
              <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                <span className="h1 fw-bold text-gradient mb-0">5.0</span>
                <div className="text-start">
                  <div className="text-warning fs-5">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <span className="small text-muted text-uppercase fw-semibold" style={{ letterSpacing: '0.5px' }}>Verified client score</span>
                </div>
              </div>
              <p className="text-muted small mb-0">Based on 48 verified customer submissions across software development and search marketing campaigns.</p>
            </div>
          </div>
        </div>

        {/* Carousel Highlight Slider */}
        <div className="row justify-content-center mb-5 pb-4 reveal">
          <div className="col-lg-8">
            <div className="glass-card py-5 px-4 px-md-5 position-relative">
              {/* Quote Mark Icon */}
              <div className="position-absolute" style={{ top: '20px', left: '30px', opacity: 0.05, fontSize: '6rem', pointerEvents: 'none' }}>
                <i className="bi bi-quote"></i>
              </div>

              {/* Slider Content Wrapper */}
              <div style={{ minHeight: '180px' }}>
                {testimonialsData.map((testimonial, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: index === activeIndex ? 'block' : 'none',
                      animation: index === activeIndex ? 'fadeIn 0.6s ease' : 'none'
                    }}
                  >
                    <p className="fs-5 text-light italic mb-4" style={{ fontStyle: 'italic', fontWeight: '400', lineHeight: '1.7' }}>
                      "{testimonial.text}"
                    </p>
                    
                    <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                      {/* Avatar Circle */}
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                        style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: 'var(--gradient-tech)',
                          color: 'white',
                          fontSize: '1.1rem'
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      
                      <div className="text-start">
                        <h4 className="h6 fw-bold text-light mb-0">{testimonial.name}</h4>
                        <span className="small text-muted">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Arrow Controls */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button 
                  onClick={handlePrev}
                  className="btn-premium-outline-round p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  aria-label="Previous testimonial"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button 
                  onClick={handleNext}
                  className="btn-premium-outline-round p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  aria-label="Next testimonial"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Grid View of Reviews */}
        <div className="pt-5 reveal">
          <div className="text-center mb-5">
            <h3 className="h4 fw-bold">Recent Success Appraisals</h3>
            <p className="text-muted small">Read verified summaries of client implementations.</p>
          </div>
          
          <div className="row g-4">
            {gridTestimonials.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 text-start">
                <div className="glass-card h-100 p-4 d-flex flex-column justify-content-between">
                  <p className="text-muted small mb-4" style={{ lineHeight: '1.7', fontStyle: 'italic' }}>
                    "{item.text}"
                  </p>
                  <div className="d-flex align-items-center gap-3 border-top border-secondary border-opacity-10 pt-3">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        background: 'var(--gradient-tech)',
                        fontSize: '0.9rem'
                      }}
                    >
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-0" style={{ fontSize: '0.9rem' }}>{item.name}</h4>
                      <span className="small text-muted" style={{ fontSize: '0.75rem' }}>{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animation definition injected directly */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

