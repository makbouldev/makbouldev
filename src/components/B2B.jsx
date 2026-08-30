import React from 'react';
import { Link } from 'react-router-dom';

const B2B = () => {
  const b2bOfferings = [
    {
      title: "Régie & Équipe Dédiée",
      icon: "bi-people-fill",
      color: "var(--primary-indigo)",
      desc: "Renforcez votre équipe technique interne avec des développeurs seniors qualifiés. Nous proposons des contrats de régie flexibles adaptés à votre rythme de développement.",
      details: ["Développeurs Full-Stack dédiés", "Intégration rapide à vos méthodologies (Scrum)", "Suivi quotidien et transparence totale", "Compétences clés : React, Next.js, Node.js, Flutter"]
    },
    {
      title: "Solutions SaaS & Logiciels B2B",
      icon: "bi-cpu-fill",
      color: "var(--accent-cyan)",
      desc: "Nous concevons et développons des applications métiers complexes (CRM, ERP sur-mesure, SaaS) pour automatiser vos processus internes et optimiser vos workflows.",
      details: ["Architecture cloud hautement disponible", "Intégration d'API tierces (Stripe, HubSpot, etc.)", "Tableaux de bord analytiques en temps réel", "Interfaces intuitives pour vos collaborateurs"]
    },
    {
      title: "Audit Technique & Refactoring",
      icon: "bi-shield-check-fill",
      color: "#ec4899",
      desc: "Votre application existante est lente ou difficile à maintenir ? Nos experts analysent votre code, optimisent vos bases de données et sécurisent vos infrastructures.",
      details: ["Audit de performance et temps de chargement", "Sécurisation et correction des failles", "Refactoring complet du code (Legacy Code)", "Migration vers des technologies modernes"]
    },
    {
      title: "Acquisition B2B & SEO Stratégique",
      icon: "bi-graph-up-arrow",
      color: "#d97706",
      desc: "Générez des leads qualifiés de manière continue. Nous mettons en place des stratégies de référencement naturel adaptées aux entreprises (B2B SEO) et des campagnes d'acquisition ciblées.",
      details: ["Stratégie de mots-clés haute intention", "Optimisation SEO technique et structurelle", "Campagnes publicitaires Google Ads & LinkedIn", "Configuration avancée du tracking (Pixels, GA4)"]
    }
  ];

  const benefits = [
    { title: "Savoir-faire technique", desc: "Plus de 180 projets livrés avec un code propre, documenté et testé." },
    { title: "Flexibilité contractuelle", desc: "Pas d'engagement rigide. Nous nous adaptons à vos besoins en fonction de la taille de votre projet." },
    { title: "Accompagnement continu", desc: "Du cadrage de votre projet de développement au support technique après-vente." }
  ];

  return (
    <section className="section-padding position-relative" style={{ minHeight: '80vh', background: 'var(--bg-dark)' }}>
      <div className="glow-spot spot-indigo" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-spot spot-cyan" style={{ bottom: '20%', right: '5%' }}></div>
      
      <div className="container py-5">
        {/* Hero Header */}
        <div className="text-center mb-5 reveal active">
          <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Solutions Entreprises</span>
          <h1 className="display-4 fw-extrabold text-light mb-3">Services B2B & Partenariat Technologique</h1>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '700px' }}>
            Nous accompagnons les startups, PME et grandes entreprises dans leur transformation digitale avec des solutions d'ingénierie logicielle avancées et des stratégies de croissance éprouvées.
          </p>
        </div>

        {/* B2B Services Grid */}
        <div className="row g-4 mb-5 pb-4 reveal active">
          {b2bOfferings.map((service, idx) => (
            <div key={idx} className="col-md-6">
              <div className="glass-card p-4 h-100 text-start d-flex flex-column" style={{ borderLeft: `4px solid ${service.color}` }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="fs-3" style={{ color: service.color }}>
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3 className="h4 fw-bold text-light mb-0">{service.title}</h3>
                </div>
                <p className="text-muted small mb-4">{service.desc}</p>
                <ul className="list-unstyled mt-auto mb-0">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="d-flex align-items-start gap-2 mb-2 text-muted small">
                      <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '0.85rem', marginTop: '2px' }}></i>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits banner */}
        <div className="glass-card p-5 text-center mb-5 reveal active" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(6, 182, 212, 0.03))', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <h2 className="h3 fw-bold text-light mb-4">Pourquoi faire de MakboulDev votre partenaire tech ?</h2>
          <div className="row g-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="col-md-4 text-start text-md-center">
                <h3 className="h6 fw-bold text-gradient mb-2">{benefit.title}</h3>
                <p className="text-muted small mb-0">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-5 reveal active">
          <h2 className="h4 fw-bold text-light mb-3">Un projet d'envergure à l'esprit ?</h2>
          <p className="text-muted small mb-4 mx-auto" style={{ maxWidth: '500px' }}>
            Rencontrez nos experts techniques pour cadrer vos besoins, évaluer la faisabilité de votre projet et obtenir une proposition commerciale détaillée.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn-premium">Planifier un Appel</Link>
            <Link to="/services" className="btn-premium-outline-round">Consulter Nos Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2B;
