import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-5 text-center position-relative" style={{ background: 'var(--bg-footer)', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center text-start">
          <div className="col-md-6 text-center text-md-start">
            <h4 className="navbar-brand text-gradient fw-bold fs-4 mb-2">MakboulDev</h4>
            <p className="text-muted small mb-0" style={{ maxWidth: '300px' }}>
              Création d'applications web, mobiles et de solutions sur-mesure pour propulser votre croissance digitale.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-4 mb-3">
              <Link to="/" className="text-muted text-decoration-none small hover-primary">Accueil</Link>
              <Link to="/services" className="text-muted text-decoration-none small hover-primary">Services</Link>
              <Link to="/b2b" className="text-muted text-decoration-none small hover-primary">Services B2B</Link>
              <Link to="/contact" className="text-muted text-decoration-none small hover-primary">Contact</Link>
            </div>
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()} MakboulDev. Tous droits réservés. Conçu avec passion à Casablanca.
            </p>
          </div>
        </div>
      </div>

      {/* Extra styles for hover state in footer */}
      <style>{`
        .hover-primary:hover {
          color: var(--primary-indigo) !important;
          transition: color 0.2s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
