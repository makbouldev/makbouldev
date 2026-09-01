import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CounterValue = ({ target, duration = 1500, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let startTimestamp = null;
          const targetValue = parseInt(target, 10);
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * targetValue));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetValue);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) observer.unobserve(elementRef);
    };
  }, [elementRef, target, duration]);

  return (
    <span ref={setElementRef}>
      {count}
      {suffix}
    </span>
  );
};

const partnersList = [
  { name: "Synapse Tech", icon: "bi-cpu", color: "#38bdf8" },
  { name: "LogiMaroc", icon: "bi-globe-europe-africa", color: "#34d399" },
  { name: "Chic Artisanat", icon: "bi-brush", color: "#fb7185" },
  { name: "ImmoInvest", icon: "bi-building-fill", color: "#fbbf24" },
  { name: "Souss Agri", icon: "bi-flower1", color: "#22c55e" },
  { name: "Atlas Ventures", icon: "bi-graph-up-arrow", color: "#818cf8" },
  { name: "Maroc Digital", icon: "bi-grid-3x3-gap-fill", color: "#f472b6" },
  { name: "CMPF", img: `${import.meta.env.BASE_URL}cmpf_logo.png`, color: "#1A569B" }
];

const servicesList = [
  {
    title: "Création de site web",
    icon: "bi-laptop",
    desc: "Site Vitrine, Catalogue, E-commerce, Portail. Nous sommes prêts à relever le défi !",
    color: "var(--primary-indigo)"
  },
  {
    title: "Référencement naturel",
    icon: "bi-graph-up-arrow",
    desc: "Augmenter d'une façon durable le trafic de votre site, et améliorer votre visibilité sur le net...",
    color: "var(--accent-cyan)"
  },
  {
    title: "Google Adwords",
    icon: "bi-google",
    desc: "Confiez nous la gestion de vos campagnes ADWORDS dans le but de maximiser votre rentabilité...",
    color: "#ea4335"
  },
  {
    title: "Facebook",
    icon: "bi-facebook",
    desc: "Laissez nous vous accompagner de la création de la page au recrutement de vos premiers fans...",
    color: "#1877f2"
  },
  {
    title: "Emailing",
    icon: "bi-send",
    desc: "Nous vous assistons pour réaliser vos campagnes d'emailing et améliorer vos performances...",
    color: "#d97706"
  },
  {
    title: "Mobile",
    icon: "bi-phone",
    desc: "Nos experts mobiles créent pour vous des applications ergonomiques et intuitives en s'adaptant aux évolutions de la mobilité.",
    color: "#ec4899"
  }
];

const pricingList = [
  {
    title: "Création de site web",
    prefix: "À partir de",
    price: "900 DH",
    period: "Projet",
    badge: "Populaire",
    desc: "Sites vitrines, e-commerce & solutions sur-mesure de haute qualité.",
    features: ["Design unique & responsive", "Optimisation SEO de base", "Hébergement & Domaine offerts 1 an", "Support technique 30 jours"],
    cta: "Créer mon site",
    color: "var(--primary-indigo)",
    icon: "bi-laptop"
  },
  {
    title: "Référencement Naturel (SEO)",
    prefix: "À partir de",
    price: "200 DH",
    period: "Page",
    desc: "Boostez votre classement sur Google pour attirer des clients en continu.",
    features: ["Audit technique initial", "Optimisation On-page & Contenu", "Recherche de mots-clés stratégiques", "Rapport de performance mensuel"],
    cta: "Boostez mon SEO",
    color: "var(--accent-cyan)",
    icon: "bi-graph-up-arrow"
  },
  {
    title: "Google Adwords",
    prefix: "À partir de",
    price: "600 DH",
    period: "Campagne",
    desc: "Campagnes publicitaires ciblées pour un retour sur investissement immédiat.",
    features: ["Configuration complète de compte", "Recherche de mots-clés payants", "Optimisation quotidienne du budget", "Rapports de conversion"],
    cta: "Lancer mes campagnes",
    color: "#4285f4",
    icon: "bi-google"
  },
  {
    title: "Publicité Facebook & Meta",
    prefix: "À partir de",
    price: "500 DH",
    period: "Campagne",
    desc: "Ciblez votre audience idéale sur Facebook et Instagram pour générer des leads.",
    features: ["Création des visuels publicitaires", "Ciblage démographique & intérêts", "A/B Testing des campagnes", "Pixel Meta & tracking de conversion"],
    cta: "Faire de la pub",
    color: "#1877f2",
    icon: "bi-facebook"
  },
  {
    title: "Campagnes Emailing",
    prefix: "À partir de",
    price: "900 DH",
    period: "Projet",
    desc: "Fidélisez vos clients et stimulez vos ventes avec des newsletters pro.",
    features: ["Création de templates sur-mesure", "Automatisation des emails (flows)", "Segmentation de base de données", "Analyse des taux d'ouverture & clics"],
    cta: "Lancer mon emailing",
    color: "#d97706",
    icon: "bi-send"
  },
  {
    title: "Applications Mobiles",
    prefix: "À partir de",
    price: "1 500 DH",
    period: "Projet",
    desc: "Applications natives iOS & Android ergonomiques et performantes.",
    features: ["Développement Flutter (iOS & Android)", "Interface utilisateur moderne (UI/UX)", "Intégration d'API & Base de données", "Publication sur App Store & Play Store"],
    cta: "Développer mon application",
    color: "#ec4899",
    icon: "bi-phone"
  }
];


const testimonialsList = [
  {
    name: "Sarah Alami",
    role: "Fondatrice, Chic Artisanat",
    text: "L'équipe a conçu notre plateforme e-commerce sur-mesure avec Next.js et Stripe. Non seulement le design est magnifique, mais la vitesse de chargement a doublé notre taux de conversion. Un travail extrêmement professionnel !",
    avatar: `${import.meta.env.BASE_URL}avatar_client_1.png`,
    rating: 5
  },
  {
    name: "Mehdi Tazi",
    role: "Directeur Opérations, LogiMaroc",
    text: "Une expertise technique incroyable. Ils ont développé notre portail de logistique interne et géré notre référencement SEO. Nos demandes de devis organiques ont augmenté de 150% en quelques mois.",
    avatar: `${import.meta.env.BASE_URL}avatar_client_2.png`,
    rating: 5
  },
  {
    name: "Yasmina Mansouri",
    role: "Responsable Marketing, ImmoInvest",
    text: "Leur accompagnement sur nos campagnes Google Ads et Meta a transformé notre acquisition. Le tableau de bord en temps réel qu'ils nous ont créé nous permet de piloter notre ROI au quotidien de façon très claire.",
    avatar: `${import.meta.env.BASE_URL}avatar_client_3.png`,
    rating: 5
  }
];

const Hero = () => {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const specialties = [
    "Applications Web",
    "Applications Mobiles",
    "Solutions Desktop",
    "Optimisation SEO",
    "Fiches Google Business",
    "Campagnes Publicitaires"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialtyIndex((prevIndex) => (prevIndex + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse coordinates for dynamic backlights
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section id="home" className="hero-agency-wrapper d-flex align-items-center">
        {/* Background Image Container */}
        <div className="hero-agency-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero_agency_bg.png)` }}></div>
        {/* Left Side Overlay */}
        <div className="hero-agency-overlay"></div>

        <div className="container position-relative" style={{ zIndex: '3' }}>
          {/* Vertical Socials on Left of Container */}
          <div className="hero-social-sidebar d-none d-lg-flex flex-column align-items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-sidebar-icon">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-sidebar-icon">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-sidebar-icon">
              <i className="bi bi-linkedin"></i>
            </a>
            <span className="social-sidebar-line"></span>
            <span className="social-sidebar-text">SUIVEZ-NOUS</span>
          </div>

          <div className="row">
            {/* Left Content Column */}
            <div className="col-lg-7 text-start reveal active ps-lg-5">
              <div className="hero-agency-subtitle d-flex align-items-center gap-2 mb-3">
                <span className="subtitle-text">SOLUTIONS & STRATÉGIES DIGITALES</span>
                <span className="subtitle-line"></span>
              </div>
              
              <h1 className="hero-agency-title display-3 fw-extrabold mb-4">
                CRÉATION DE SITES WEB PROFESSIONNELS & CRÉATIFS — DEVIS GRATUIT
              </h1>
              
              <p className="hero-agency-desc lead mb-5">
                Nous concevons des sites vitrines et e-commerce ultra-rapides, et nous propulsons votre croissance avec des services digitaux complets : référencement SEO, Google Ads, Meta et applications mobiles.
              </p>

              <div className="hero-agency-buttons d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn-hero-solid d-flex align-items-center gap-2">
                  <i className="bi bi-file-earmark-text"></i> DEMANDER UN DEVIS
                </Link>
                <a href="tel:+212783180806" className="btn-hero-outline d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill"></i> APPELER LE +212 7 83 18 08 06
                </a>
                <a href="tel:+212725572550" className="btn-hero-outline d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill"></i> APPELER LE +212 7 25 57 25 50
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics counters bar section */}
      <section className="stats-bar-section py-4" style={{ background: 'var(--bg-dark)', borderBottom: '1px solid var(--border-glass)', borderTop: '1px solid var(--border-glass)', overflow: 'hidden' }}>
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            
            {/* Stat Item 1 */}
            <div className="col-6 col-md-3 text-center reveal active">
              <div className="stat-card d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
                <div className="stat-icon-box">
                  <i className="bi bi-award-fill"></i>
                </div>
                <div className="text-md-start">
                  <h3 className="stat-number mb-0">
                    <CounterValue target={7} suffix="+" />
                  </h3>
                  <span className="stat-label text-muted">Années d'Expérience</span>
                </div>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="col-6 col-md-3 text-center reveal active">
              <div className="stat-card d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
                <div className="stat-icon-box">
                  <i className="bi bi-patch-check-fill"></i>
                </div>
                <div className="text-md-start">
                  <h3 className="stat-number mb-0">
                    <CounterValue target={180} suffix="+" />
                  </h3>
                  <span className="stat-label text-muted">Projets Réussis</span>
                </div>
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="col-6 col-md-3 text-center reveal active">
              <div className="stat-card d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
                <div className="stat-icon-box">
                  <i className="bi bi-heart-pulse-fill"></i>
                </div>
                <div className="text-md-start">
                  <h3 className="stat-number mb-0">
                    <CounterValue target={99} suffix="%" />
                  </h3>
                  <span className="stat-label text-muted">Clients Satisfaits</span>
                </div>
              </div>
            </div>

            {/* Stat Item 4 */}
            <div className="col-6 col-md-3 text-center reveal active">
              <div className="stat-card d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
                <div className="stat-icon-box">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="text-md-start">
                  <h3 className="stat-number mb-0">
                    <CounterValue target={24} suffix="/7" />
                  </h3>
                  <span className="stat-label text-muted">Suivi & Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding position-relative" style={{ background: 'var(--bg-dark-gray)' }}>
        <div className="glow-spot spot-cyan" style={{ top: '20%', right: '10%' }}></div>
        <div className="glow-spot spot-indigo" style={{ bottom: '20%', left: '10%' }}></div>
        
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="section-title">Nos Domaines d'Expertise</h2>
            <p className="section-subtitle">
              Des solutions digitales innovantes et sur-mesure conçues pour propulser votre entreprise et maximiser votre visibilité.
            </p>
          </div>
          
          <div className="row g-4 reveal">
            {servicesList.map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="creative-service-card">
                  <div className="creative-service-icon-wrapper" style={{ color: service.color }}>
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3 className="creative-service-title">
                    {service.title}
                    <div className="creative-service-divider" style={{ background: service.color }}></div>
                  </h3>
                  <p className="creative-service-desc">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="section-padding position-relative">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="section-title">Pourquoi Collaborer Avec Nous ?</h2>
            <p className="section-subtitle">
              Grâce à notre solide expertise technique, nous résolvons tous vos défis digitaux et concevons des solutions performantes adaptées à vos ambitions.
            </p>
          </div>
          <div className="row g-4 reveal">
            <div className="col-md-4">
              <div className="glass-card text-start h-100">
                <div className="service-icon service-icon-dev"><i className="bi bi-tools"></i></div>
                <h3 className="h5 mb-3">Résolution Sans Limite</h3>
                <p className="text-muted small mb-0">
                  Bugs complexes, serveurs en panne ou intégrations délicates : nous diagnostiquons et résolvons rapidement tous vos dysfonctionnements digitaux pour assurer la continuité de votre activité.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="glass-card text-start h-100">
                <div className="service-icon service-icon-growth"><i className="bi bi-lightning-charge"></i></div>
                <h3 className="h5 mb-3">Vitesse & Performance</h3>
                <p className="text-muted small mb-0">
                  Nous développons des plateformes ultra-rapides et fluides. Des temps de chargement réduits au minimum et une expérience utilisateur soignée pour maximiser vos taux de conversion.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="glass-card text-start h-100">
                <div className="service-icon service-icon-dev" style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--primary-indigo))' }}><i className="bi bi-shield-check"></i></div>
                <h3 className="h5 mb-3">Architecture Durable</h3>
                <p className="text-muted small mb-0">
                  Sécurité renforcée, code structuré et bases de données robustes. Nous concevons des infrastructures évolutives prêtes à soutenir sans failles la croissance de votre trafic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Cloud / Collaborations Section */}
      <section className="partners-logo-cloud py-4">
        <div className="container">
          <p className="text-center text-uppercase text-muted small fw-bold mb-3" style={{ letterSpacing: '2px', fontSize: '0.7rem' }}>
            Ils nous font confiance — Nos Collaborations
          </p>
          <div className="logo-slider-container">
            <div className="logo-slider-track">
              {[...partnersList, ...partnersList].map((partner, index) => (
                <div key={index} className="partner-logo-item d-flex align-items-center gap-2">
                  <div className="partner-logo-icon" style={{ color: partner.color }}>
                    {partner.img ? (
                      <img src={partner.img} alt={partner.name} className="partner-logo-img-tag" />
                    ) : (
                      <i className={`bi ${partner.icon}`}></i>
                    )}
                  </div>
                  <span className="partner-logo-name">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Tarifs & Formules Section */}
      <section className="section-padding position-relative" style={{ background: 'var(--bg-dark)' }}>
        <div className="glow-spot spot-indigo" style={{ top: '25%', left: '5%' }}></div>
        <div className="glow-spot spot-cyan" style={{ bottom: '25%', right: '5%' }}></div>
        
        <div className="container">
          <div className="text-center mb-5 reveal">
            <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Tarifs Transparents</span>
            <h2 className="section-title">Nos Formules & Tarifs</h2>
            <p className="section-subtitle">
              Des prix de départ clairs pour chaque service, sans frais cachés. Idéal pour budgétiser vos projets digitaux de manière professionnelle.
            </p>
          </div>
          
          <div className="row g-4 reveal">
            {pricingList.map((plan, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className={`pricing-card ${plan.badge ? 'popular' : ''}`}>
                  {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
                  
                  <div className="text-start">
                    <div className="pricing-icon-box" style={{ color: plan.color }}>
                      <i className={`bi ${plan.icon}`}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-2 text-light">{plan.title}</h3>
                    <p className="text-muted small mb-0" style={{ minHeight: '40px' }}>{plan.desc}</p>
                    
                    <div className="price-container">
                      {plan.prefix && (
                        <span className="price-prefix text-muted me-1" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                          {plan.prefix}
                        </span>
                      )}
                      <span className="price-amount">{plan.price}</span>
                      <span className="price-period">/ {plan.period}</span>
                    </div>
                    
                    <ul className="pricing-features-list">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx}>
                          <i className="bi bi-check-circle-fill"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact" className={`btn-pricing-cta ${plan.badge ? 'btn-pricing-cta-primary' : 'btn-pricing-cta-secondary'}`}>
                    {plan.cta} <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights Teaser */}
      <section className="section-padding position-relative" style={{ background: 'var(--bg-dark-gray)' }}>
        <div className="container">
          <div className="row align-items-center g-5 reveal">
            <div className="col-lg-6 text-start">
              <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Portfolio & Réalisations</span>
              <h2 className="display-6 fw-bold mb-4">Nos Projets & Études de Cas</h2>
              <p className="text-muted mb-4">
                Nous transformons les idées de nos clients en succès numériques. De la création de plateformes e-commerce fluides aux applications web et mobiles sur-mesure, explorez nos projets conçus avec passion et excellence technique.
              </p>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div>
                  <h4 className="h2 fw-bold text-gradient mb-0">+180</h4>
                  <span className="small text-muted">Projets Livrés</span>
                </div>
                <div className="border-start ps-3 border-secondary border-opacity-25">
                  <h4 className="h2 fw-bold text-gradient mb-0">100%</h4>
                  <span className="small text-muted">Satisfaction Client</span>
                </div>
              </div>
              <Link to="/services" className="btn-premium-outline-round">Découvrir nos services</Link>
            </div>
            <div className="col-lg-6">
              <div className="glass-card p-3 code-editor-card floating-element">
                <img src={`${import.meta.env.BASE_URL}software_dev_showcase.png`} alt="SaaS Dashboard Showcase" className="img-fluid rounded" style={{ border: '1px solid rgba(255, 255, 255, 0.05)', maxHeight: '350px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding position-relative" style={{ background: 'var(--bg-dark)' }}>
        <div className="glow-spot spot-indigo" style={{ top: '30%', left: '5%' }}></div>
        <div className="glow-spot spot-cyan" style={{ bottom: '15%', right: '5%' }}></div>
        
        <div className="container">
          <div className="text-center mb-5 reveal">
            <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Témoignages Clients</span>
            <h2 className="section-title">Ce Que Disent Nos Clients</h2>
            <p className="section-subtitle">
              Découvrez les retours d'expérience de nos clients sur la qualité de nos développements logiciels et l'impact de nos stratégies marketing.
            </p>
          </div>
          
          {/* Rating Hub */}
          <div className="row justify-content-center mb-5 reveal">
            <div className="col-md-8 col-lg-5">
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
                    <span className="small text-muted text-uppercase fw-semibold" style={{ letterSpacing: '0.5px' }}>Score Client Vérifié</span>
                  </div>
                </div>
                <p className="text-muted small mb-0">Basé sur 48 retours de clients satisfaits.</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 reveal">
            {testimonialsList.map((t, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="creative-testimonial-card">
                  <div className="testimonial-quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  
                  <div className="stars-rating">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  
                  <p className="testimonial-text">
                    "{t.text}"
                  </p>
                  
                  <div className="d-flex align-items-center gap-3 pt-3 border-top border-secondary border-opacity-10">
                    <div className="testimonial-avatar-wrapper">
                      <img src={t.avatar} alt={t.name} className="testimonial-avatar-img" />
                    </div>
                    <div className="client-info-meta text-start">
                      <h4 className="mb-0">{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Bottom CTA */}
      <section className="section-padding position-relative">
        <div className="container">
          <div className="glass-card text-center py-5 px-4 reveal" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.04), rgba(8, 145, 178, 0.04))', border: '1px solid rgba(99, 102, 241, 0.15)' }}>
            <h2 className="display-6 fw-bold mb-3">Prêt à Lancer Votre Projet Digital ?</h2>
            <p className="text-muted mx-auto mb-5" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
              Que vous ayez besoin d'une application mobile complète, d'une optimisation SEO technique ou d'un coup de boost pour votre activité locale, nous concevons des solutions logicielles sur-mesure pour votre croissance.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/contact" className="btn-premium">Discutons de Votre Projet <i className="bi bi-arrow-right ms-2"></i></Link>
              <Link to="/services" className="btn-premium-outline-round">Explorer Nos Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
