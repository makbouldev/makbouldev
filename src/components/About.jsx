import React from 'react';

const About = () => {
  const roadmapSteps = [
    {
      phase: "Phase 01",
      title: "Discovery & Strategy",
      description: "We audit your existing organic visibility, map out custom user journeys, and specify the optimal technical stack before writing a single line of code."
    },
    {
      phase: "Phase 02",
      title: "Architecture & Design",
      description: "We design high-fidelity, interactive mockups and design secure backend schemas to align visual assets with responsive performance."
    },
    {
      phase: "Phase 03",
      title: "Agile Development",
      description: "We construct your web, mobile, or desktop app in structured, sprint-based cycles. You see progress on staging servers in real-time."
    },
    {
      phase: "Phase 04",
      title: "Quality Assurance",
      description: "We execute deep automated build checks, responsive breakpoints testing, and performance audits to certify a zero-bug environment."
    },
    {
      phase: "Phase 05",
      title: "Deployment & Optimization",
      description: "We launch on production servers (Vercel, AWS) and configure analytics, meta tags, index mapping, and local SEO ranking funnels."
    }
  ];

  const values = [
    { icon: "bi-shield-check", title: "Uncompromising Integrity", text: "We deliver full source code transparency, clean developer handoffs, and honest scoping metrics." },
    { icon: "bi-lightning-charge", title: "High Velocity", text: "We respect project milestones and maintain swift, clear execution cycles from start to finish." },
    { icon: "bi-rocket-takeoff", title: "Growth Obsessed", text: "We build digital solutions to scale your business, increase conversion actions, and drive ROI." },
    { icon: "bi-cpu", title: "Cutting Edge", text: "We leverage lightweight modern frameworks (Next.js, Flutter, Tailwind) rather than bulky legacy software." }
  ];

  return (
    <section id="about" className="section-padding position-relative">
      <div className="glow-spot spot-indigo" style={{ top: '15%', left: '5%' }}></div>
      <div className="glow-spot spot-cyan" style={{ bottom: '15%', right: '5%' }}></div>

      <div className="container">
        {/* Intro Section with Illustration */}
        <div className="row align-items-center g-5 mb-5 reveal">
          <div className="col-lg-6">
            <div className="glass-card p-3">
              <img src={`${import.meta.env.BASE_URL}about_workspace_mockup.png`} alt="Workspace Mockup" className="img-fluid rounded shadow-lg" style={{ border: '1px solid var(--border-glass)', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-lg-6 text-start">
            <h2 className="section-title text-start mb-4">
              We Craft Software That <span className="text-gradient">Propels Business</span>
            </h2>
            <p className="lead text-light mb-4" style={{ fontSize: '1.1rem' }}>
              Hi! I'm Noureddine, founder of **MakboulDev**. We are a dedicated team of expert software engineers and digital growth specialists based in Casablanca.
            </p>
            <p className="text-muted mb-4">
              We design and develop tailored digital solutions—ranging from complex full-stack web applications and cross-platform native mobile apps (iOS & Android) to lightweight, robust desktop utilities. In parallel, we run high-ROI digital marketing channels utilizing technical SEO schemas, Google My Business map packs optimization, and continuous paid ad funnels.
            </p>
            <p className="text-muted mb-0">
              Our core objective is straightforward: to engineer premium codebases that work flawlessly, and pair them with data-backed search engine visibility to drive sustainable business growth.
            </p>
          </div>
        </div>

        {/* Our Process - Step by Step Timeline */}
        <div className="py-5 my-5 reveal">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Operation Roadmap</h2>
            <p className="section-subtitle">
              A structured, transparent engineering process designed to keep your project aligned, on schedule, and bug-free.
            </p>
          </div>

          <div className="roadmap-timeline position-relative py-4">
            <div className="roadmap-line position-absolute d-none d-md-block" style={{ left: '50%', transform: 'translateX(-50%)', top: '0', bottom: '0', width: '2px', background: 'var(--border-glass)' }}></div>
            
            {roadmapSteps.map((step, idx) => (
              <div key={idx} className={`row g-4 mb-5 align-items-center roadmap-item ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="col-md-6 text-start text-md-end pr-md-5">
                  <div className={`timeline-content glass-card ${idx % 2 === 0 ? 'text-start' : 'text-start text-md-end'}`}>
                    <span className="text-gradient fw-bold d-block mb-1">{step.phase}</span>
                    <h4 className="fw-bold mb-2">{step.title}</h4>
                    <p className="text-muted small mb-0">{step.description}</p>
                  </div>
                </div>
                <div className="col-md-6 text-start pl-md-5">
                  {/* Empty spacer for alignment on desktop */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="pt-5 reveal">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The operational philosophies that dictate how we write code, structure client relationships, and run marketing campaigns.
            </p>
          </div>
          <div className="row g-4">
            {values.map((val, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="glass-card text-start h-100">
                  <div className="service-icon service-icon-dev mb-3" style={{ width: '50px', height: '50px', borderRadius: '10px', fontSize: '1.4rem' }}>
                    <i className={`bi ${val.icon}`}></i>
                  </div>
                  <h4 className="h6 fw-bold mb-2">{val.title}</h4>
                  <p className="text-muted small mb-0">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

