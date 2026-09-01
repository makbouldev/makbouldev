import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className={`agency-header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* 1. TOP BAR (Socials & Utility Links) - Desktop Only */}
      <div className="top-bar d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-bar-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          </div>
          <div className="top-bar-links">
            <Link to="/about" className="top-link">Careers</Link>
            <span className="separator">|</span>
            <Link to="/services" className="top-link">Services</Link>
            <span className="separator">|</span>
            <Link to="/contact" className="top-link">Support Hub</Link>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE HEADER (Logo & Contact Info Blocks) */}
      <div className="middle-header">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand-agency" to="/" onClick={closeMenu}>
            Makboul<span>Dev</span>
          </Link>

          {/* Contact & CTA Area (Desktop) */}
          <div className="header-contact-area d-none d-lg-flex align-items-center gap-4">
            <div className="contact-info-block d-flex align-items-center gap-2">
              <div className="info-icon-wrapper">
                <i className="bi bi-envelope-open-fill"></i>
              </div>
              <div className="info-text">
                <span className="info-label">Drop us a line</span>
                <a href="mailto:contact@makbouldev.ma" className="info-value">contact@makbouldev.ma</a>
              </div>
            </div>

            <div className="contact-info-block d-flex align-items-center gap-2">
              <div className="info-icon-wrapper">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="info-text">
                <span className="info-label">Make a call</span>
                <a href="tel:+212783180806" className="info-value">+212 7 83 18 08 06</a>
                <a href="tel:+212725572550" className="info-value">+212 7 25 57 25 50</a>
              </div>
            </div>

            <Link to="/contact" className="btn-agency-cta d-flex align-items-center gap-2">
              <i className="bi bi-file-earmark-text"></i> GET A QUOTE
            </Link>
          </div>

          {/* Hamburger Mobile Toggler */}
          <button 
            className="navbar-toggler-agency d-lg-none" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* 3. MAIN MENU NAVIGATION BAR */}
      <nav className={`main-navigation-bar d-none d-lg-block ${scrolled ? 'nav-fixed' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <ul className="nav-links-list d-flex align-items-center m-0 p-0">
            <li className="nav-link-item">
              <NavLink className="nav-menu-link" to="/" end>ACCUEIL</NavLink>
            </li>
            <li className="nav-link-item">
              <NavLink className="nav-menu-link" to="/services">SERVICES</NavLink>
            </li>
            <li className="nav-link-item">
              <NavLink className="nav-menu-link" to="/b2b">SERVICES B2B</NavLink>
            </li>


            <li className="nav-link-item">
              <NavLink className="nav-menu-link" to="/contact">CONTACT</NavLink>
            </li>
          </ul>

          {/* Search bar & Grid button */}
          <div className="nav-action-area d-flex align-items-center gap-3">
            <form onSubmit={handleSearchSubmit} className={`search-form-header ${searchOpen ? 'search-active' : ''}`}>
              <input 
                type="text" 
                placeholder="Rechercher..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-header"
              />
              <button 
                type="button" 
                className="search-btn-trigger"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
            <button className="grid-btn-trigger">
              <i className="bi bi-grid-3x3-gap-fill"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation (Menu shown when toggled) */}
      <div className={`mobile-nav-drawer d-lg-none ${isOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-backdrop" onClick={closeMenu}></div>
        <div className="drawer-content">
          <div className="drawer-header d-flex justify-content-between align-items-center">
            <Link className="navbar-brand-agency" to="/" onClick={closeMenu}>
              Makboul<span>Dev</span>
            </Link>
            <button className="btn-close-drawer" onClick={closeMenu}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          
          <div className="drawer-body">
            {/* Nav Links */}
            <ul className="mobile-nav-links m-0 p-0 mb-4">
              <li><NavLink className="mobile-link" to="/" onClick={closeMenu} end>ACCUEIL</NavLink></li>
              <li><NavLink className="mobile-link" to="/services" onClick={closeMenu}>SERVICES</NavLink></li>
              <li><NavLink className="mobile-link" to="/b2b" onClick={closeMenu}>SERVICES B2B</NavLink></li>


              <li><NavLink className="mobile-link" to="/contact" onClick={closeMenu}>CONTACT</NavLink></li>
            </ul>

            <hr className="drawer-divider" />

            {/* Contact Details in Drawer */}
            <div className="drawer-contact mb-4">
              <div className="drawer-contact-item d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-envelope-open-fill text-primary-agency"></i>
                <a href="mailto:contact@makbouldev.ma">contact@makbouldev.ma</a>
              </div>
              <div className="drawer-contact-item d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-telephone-fill text-primary-agency"></i>
                <a href="tel:+212783180806">+212 7 83 18 08 06</a>
              </div>
              <div className="drawer-contact-item d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-telephone-fill text-primary-agency"></i>
                <a href="tel:+212725572550">+212 7 25 57 25 50</a>
              </div>
              <Link to="/contact" className="btn-agency-cta w-100 text-center py-2" onClick={closeMenu}>
                <i className="bi bi-file-earmark-text"></i> GET A QUOTE
              </Link>
            </div>

            {/* Socials in Drawer */}
            <div className="drawer-socials d-flex gap-3 justify-content-center">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
