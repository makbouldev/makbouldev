import React, { useState } from 'react';
import { projectsData } from '../data/projects';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const openDetails = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Lock body scroll when modal open
  };

  const closeDetails = () => {
    setActiveProject(null);
    document.body.style.overflow = ''; // Unlock body scroll
  };

  return (
    <section id="portfolio" className="section-padding position-relative">
      <div className="glow-spot spot-indigo" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="container">
        {/* Creative Profile & Title Header */}
        <div className="portfolio-header-block mb-5 reveal active">
          <div className="row align-items-center g-4">
            <div className="col-md-3 col-lg-2 text-center text-md-start">
              <div className="portfolio-avatar-container">
                <img 
                  src={`${import.meta.env.BASE_URL}noureddine_avatar.png`} 
                  alt="Noureddine Makboul" 
                  className="portfolio-avatar-img shadow"
                />
                <span className="online-badge"></span>
              </div>
            </div>
            <div className="col-md-9 col-lg-10 text-center text-md-start">
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mb-2">
                <span className="badge text-uppercase px-2 py-1.5" style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.15)' }}>
                  <i className="bi bi-patch-check-fill me-1"></i> Lead Architect
                </span>
                <span className="badge text-uppercase px-2 py-1.5" style={{ fontSize: '0.72rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.15)' }}>
                  Casablanca, Morocco
                </span>
              </div>
              <h2 className="display-6 fw-extrabold text-light mb-2">Curated Project Specs</h2>
              <p className="lead text-muted mb-0" style={{ fontSize: '1.02rem', maxWidth: '820px' }}>
                Hi! I'm <strong>Noureddine Makboul</strong>, Lead Architect at MakboulDev. Here is a hand-picked catalog of our web/mobile software engineering architectures and high-performing digital marketing systems built to solve complex problems and boost business revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="d-flex justify-content-center flex-wrap mb-5 reveal">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'development' ? 'active' : ''}`}
            onClick={() => setFilter('development')}
          >
            Software Engineering
          </button>
          <button 
            className={`filter-btn ${filter === 'growth' ? 'active' : ''}`}
            onClick={() => setFilter('growth')}
          >
            SEO & Marketing
          </button>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 reveal">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div 
                className="glass-card portfolio-card h-100 p-3 text-start"
                onClick={() => openDetails(project)}
              >
                <div className="portfolio-img-container mb-3">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <span className="btn-premium">View Project Specs</span>
                  </div>
                </div>
                
                <div className="px-2">
                  <span className="badge mb-2 text-uppercase" style={{ 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.5px',
                    color: project.category === 'development' ? 'var(--primary-indigo)' : 'var(--accent-cyan)',
                    background: project.category === 'development' ? 'rgba(99, 102, 241, 0.12)' : 'rgba(6, 182, 212, 0.12)',
                    border: `1px solid ${project.category === 'development' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(6, 182, 212, 0.2)'}`
                  }}>
                    {project.subcategory}
                  </span>
                  <h3 className="h5 fw-bold text-light mb-2">{project.title}</h3>
                  <p className="text-muted small mb-0 line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Detail Modal */}
      {activeProject && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ background: 'rgba(5, 7, 16, 0.85)', backdropFilter: 'blur(8px)', zIndex: '1050' }}
          onClick={closeDetails}
        >
          <div 
            className="modal-dialog modal-lg modal-dialog-centered modal-custom"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="modal-content border-secondary shadow-lg">
              {/* Modal Header */}
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge text-uppercase mb-1" style={{ 
                    fontSize: '0.7rem', 
                    color: activeProject.category === 'development' ? 'var(--primary-indigo)' : 'var(--accent-cyan)',
                    background: activeProject.category === 'development' ? 'rgba(99, 102, 241, 0.12)' : 'rgba(6, 182, 212, 0.12)'
                  }}>
                    {activeProject.subcategory}
                  </span>
                  <h4 className="modal-title fw-bold text-light" id="projectModalLabel">{activeProject.title}</h4>
                </div>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeDetails}></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body p-4 text-start">
                <div className="row g-4">
                  {/* Left Column: Media & Tech Stack */}
                  <div className="col-md-5">
                    <img 
                      src={activeProject.image} 
                      alt={activeProject.title} 
                      className="img-fluid rounded mb-4 w-100" 
                      style={{ border: '1px solid var(--border-glass)', maxHeight: '200px', objectFit: 'cover' }}
                    />
                    
                    <h5 className="h6 fw-bold text-light mb-3">Tools & Systems Used</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="badge bg-secondary text-light px-2 py-1.5" 
                          style={{ 
                            fontSize: '0.8rem', 
                            background: 'rgba(255, 255, 255, 0.05)', 
                            border: '1px solid var(--border-glass)' 
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Case Details */}
                  <div className="col-md-7">
                    <h5 className="h6 fw-bold text-gradient mb-2">Scope of Solution</h5>
                    <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>
                      {activeProject.longDescription}
                    </p>

                    <h5 className="h6 fw-bold text-gradient mb-3">Key Results & Achievements</h5>
                    <ul className="list-unstyled">
                      {activeProject.results.map((result, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2 text-light mb-2" style={{ fontSize: '0.9rem' }}>
                          <i className="bi bi-patch-check-fill text-success fs-5"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <button type="button" className="btn-premium-outline-round" onClick={closeDetails}>Close Details</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
