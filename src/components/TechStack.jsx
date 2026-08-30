import React, { useState } from 'react';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('web');

  const categories = [
    { id: 'web', name: 'Web Stacks', icon: 'bi-window-fullscreen' },
    { id: 'mobile', name: 'Mobile & Desktop', icon: 'bi-phone' },
    { id: 'growth', name: 'SEO & Growth Stacks', icon: 'bi-graph-up-arrow' },
    { id: 'backend', name: 'Backend & Databases', icon: 'bi-database' }
  ];

  const stackDetails = {
    web: {
      title: "Frontend Web Engineering",
      desc: "Our web interfaces are built utilizing lightweight modular libraries and clean CSS architecture. We focus on semantic markup structure and fast initial paint times.",
      reasons: [
        "Next.js server-side rendering guarantees lightning-fast loading speeds and immediate SEO indexing.",
        "React component structures encourage modular, reusable, and easily maintainable codebases.",
        "Bootstrap 5 and Vanilla CSS combine to yield pixel-perfect responsive layouts on any device viewport."
      ],
      tools: [
        { name: "React.js", desc: "Interactive frontend state management.", icon: "bi-laptop" },
        { name: "Next.js", desc: "Server-side rendering & static file generation.", icon: "bi-lightning" },
        { name: "HTML5 / Semantic Markup", desc: "Solid layout structure optimized for screen readers.", icon: "bi-code" },
        { name: "Vanilla CSS & Bootstrap 5", desc: "Responsive styling grids and custom layouts.", icon: "bi-code-slash" }
      ]
    },
    mobile: {
      title: "Cross-Platform Native Apps",
      desc: "We build native iOS, Android, and desktop utility software from single codebases, speeding up release timelines while maintaining high native performance.",
      reasons: [
        "Flutter compiles directly to ARM machine code, yielding silky-smooth 60fps animations.",
        "Electron deep OS integrations enable system tray alerts, file managers, and local system operations.",
        "Robust offline caching keeps mobile and desktop software fully operational in zero-connectivity scenarios."
      ],
      tools: [
        { name: "Flutter", desc: "Highly customizable native mobile SDK.", icon: "bi-phone" },
        { name: "Dart", desc: "Typed, garbage-collected compiled language.", icon: "bi-braces" },
        { name: "Electron", desc: "Native desktop applications for Windows, macOS, & Linux.", icon: "bi-display" },
        { name: "SQLite", desc: "Lightweight local database for offline storage.", icon: "bi-database-fill" }
      ]
    },
    growth: {
      title: "Organic Scaling & Ads Stack",
      desc: "We monitor traffic indexes and configure targeted paid advertising campaigns using industry-standard analytical suites.",
      reasons: [
        "SEMrush audits find high-intent target keywords to pull organic inquiries.",
        "Custom Google Tag Manager triggers record exact conversion paths and pixels behavior.",
        "A/B campaign splits optimize Meta and Google Ad spend to lower cost per registration."
      ],
      tools: [
        { name: "Technical SEO & Schema", desc: "Structured data data injection for rich search result cards.", icon: "bi-search" },
        { name: "Google My Business", desc: "Map pack visibility audit and local directory syncing.", icon: "bi-geo-alt" },
        { name: "Google & Meta Ads", desc: "High-ROI paid customer acquisition campaigns.", icon: "bi-google" },
        { name: "Google Analytics 4 & GTM", desc: "Event logs tracking and checkout conversion audits.", icon: "bi-bar-chart-line" }
      ]
    },
    backend: {
      title: "Backend Services & Databases",
      desc: "We engineer secure API microservices and configure robust database relations to handle concurrent transaction pipelines.",
      reasons: [
        "Node.js asynchronous event cycles process multiple client requests concurrently without lags.",
        "PostgreSQL database constraints secure relational business and transaction logs.",
        "MongoDB document models scale unstructured application data configurations easily."
      ],
      tools: [
        { name: "Node.js & Express", desc: "Asynchronous REST API architectures.", icon: "bi-filetype-js" },
        { name: "PostgreSQL", desc: "Strict relational database constraints.", icon: "bi-database" },
        { name: "MongoDB", desc: "NoSQL document store for fast unstructured read/writes.", icon: "bi-file-earmark-code" },
        { name: "REST APIs & WebSockets", desc: "Real-time communication channels and secure integrations.", icon: "bi-arrow-left-right" }
      ]
    }
  };

  const currentStack = stackDetails[activeTab];

  return (
    <section id="tech" className="section-padding position-relative">
      <div className="glow-spot spot-indigo" style={{ top: '25%', left: '10%' }}></div>
      <div className="glow-spot spot-cyan" style={{ bottom: '25%', right: '10%' }}></div>

      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">Our Tech Ecosystem</h2>
          <p className="section-subtitle">
            We utilize high-performance frameworks for custom engineering and advanced tracking tools for digital campaigns optimization.
          </p>
        </div>

        {/* Categories Tab Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5 reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <i className={`bi ${cat.icon}`}></i>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div className="row g-5 align-items-center reveal">
          {/* Left Column: Details Write-up */}
          <div className="col-lg-6 text-start">
            <h3 className="h4 fw-bold text-gradient mb-3">{currentStack.title}</h3>
            <p className="text-muted mb-4">{currentStack.desc}</p>
            
            <h4 className="h6 fw-bold text-light mb-3">Key Design Decisions:</h4>
            <ul className="list-unstyled mb-0">
              {currentStack.reasons.map((reason, idx) => (
                <li key={idx} className="d-flex align-items-start gap-2 text-muted small mb-3">
                  <i className="bi bi-patch-check-fill text-success fs-5"></i>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Interactive Badges Grid */}
          <div className="col-lg-6">
            <div className="row g-3">
              {currentStack.tools.map((tool, idx) => (
                <div key={idx} className="col-md-6 text-start">
                  <div className="glass-card h-100 p-4" style={{ transition: 'all 0.3s ease' }}>
                    <div className="service-icon service-icon-dev mb-3" style={{ width: '45px', height: '45px', borderRadius: '8px', fontSize: '1.2rem' }}>
                      <i className={`bi ${tool.icon}`}></i>
                    </div>
                    <h4 className="h6 fw-bold mb-1">{tool.name}</h4>
                    <p className="text-muted small mb-0" style={{ fontSize: '0.8rem' }}>{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;

