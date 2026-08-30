import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const servicesData = [
    {
      slug: "site-web",
      title: "Création de Sites Web",
      icon: "bi-laptop",
      color: "linear-gradient(135deg, var(--primary-indigo), #818cf8)",
      desc: "Sites vitrines, e-commerce et portails interactifs performants. Nous concevons des interfaces modernes, ultra-rapides et optimisées pour le SEO."
    },
    {
      slug: "seo",
      title: "Référencement Naturel (SEO)",
      icon: "bi-search",
      color: "linear-gradient(135deg, var(--accent-cyan), #22d3ee)",
      desc: "Boostez votre trafic organique sur Google. Optimisation technique, stratégie de mots-clés et netlinking pour attirer des clients en continu."
    },
    {
      slug: "google-maps",
      title: "Google Maps & SEO Local",
      icon: "bi-geo-alt-fill",
      color: "linear-gradient(135deg, #ec4899, #f472b6)",
      desc: "Dominez les recherches locales dans votre région. Optimisation de votre fiche Google Business et de votre positionnement sur Google Maps."
    },
    {
      slug: "ads",
      title: "Création & Gestion de Publicités",
      icon: "bi-megaphone-fill",
      color: "linear-gradient(135deg, #d97706, #fbbf24)",
      desc: "Campagnes publicitaires ciblées sur Google Ads, Facebook Ads et Instagram pour un retour sur investissement immédiat et mesurable."
    },
    {
      slug: "mobile",
      title: "Applications Mobiles",
      icon: "bi-phone",
      color: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
      desc: "Développement d'applications mobiles natives et cross-platform (iOS et Android) fluides et performantes avec le framework Flutter."
    },
    {
      slug: "desktop",
      title: "Applications Desktop",
      icon: "bi-display",
      color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
      desc: "Logiciels de bureau sur-mesure pour Windows et macOS conçus pour simplifier vos opérations internes et la gestion de vos données."
    },
    {
      slug: "solutions-digitales",
      title: "Solutions Digitales Sur-Mesure",
      icon: "bi-cpu",
      color: "linear-gradient(135deg, #10b981, #34d399)",
      desc: "Étude technique et développement d'outils métiers spécifiques, portails SaaS, extranets et architectures d'APIs adaptées à votre entreprise."
    },
    {
      slug: "whatsapp-bot",
      title: "Bots WhatsApp Automatiques",
      icon: "bi-whatsapp",
      color: "linear-gradient(135deg, #25d366, #128c7e)",
      desc: "Développement de bots WhatsApp intelligents et automatisés pour répondre instantanément à vos clients, qualifier vos leads et assurer un support client 24h/24 et 7j/7."
    }
  ];

  const faqs = [
    { 
      q: "Combien de temps prend un projet web ou mobile typique ?", 
      a: "La plupart des projets d'applications sur-mesure prennent entre 4 et 8 semaines, de la stratégie initiale au lancement en production. Les sites vitrines simples peuvent être livrés en 2 à 3 semaines." 
    },
    { 
      q: "Sommes-nous propriétaires exclusifs du code source ?", 
      a: "Absolument. Dès la livraison finale et le règlement du projet, nous vous cédons 100% de la propriété du dépôt de code (GitHub), ainsi que les accès administratifs aux serveurs et bases de données." 
    },
    { 
      q: "Quel est votre processus pour le SEO local et Google Maps ?", 
      a: "Nous analysons les mots-clés de votre secteur, optimisons la structure technique de votre site, configurons les fiches Google Business et mettons en place des systèmes d'avis clients automatisés." 
    },
    { 
      q: "Proposez-vous un support technique après le lancement ?", 
      a: "Oui, nous proposons des forfaits de maintenance mensuels couvrant les mises à jour de sécurité, la sauvegarde des données, le suivi du serveur et des heures d'assistance technique pour les modifications mineures." 
    }
  ];

  return (
    <section id="services" className="section-padding position-relative" style={{ background: 'var(--bg-dark)', minHeight: '80vh' }}>
      <div className="glow-spot spot-cyan" style={{ top: '15%', left: '5%' }}></div>
      <div className="glow-spot spot-indigo" style={{ bottom: '15%', right: '5%' }}></div>

      <div className="container py-5">
        {/* Title */}
        <div className="text-center mb-5 reveal active">
          <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Nos Services</span>
          <h2 className="section-title">Votre Agence de Marketing Digital & Solutions Tech</h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '700px' }}>
            En tant qu'agence de marketing digital et d'ingénierie logicielle, nous déployons des stratégies sur-mesure pour propulser votre visibilité sur le web, générer des prospects qualifiés et accélérer votre croissance.
          </p>
        </div>

        {/* Services 8-card grid */}
        <div className="row g-4 mb-5 pb-5 reveal active">
          {servicesData.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div 
                className="glass-card p-4 h-100 text-start d-flex flex-column transition-hover" 
                style={{ 
                  borderTop: `4px solid transparent`, 
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-indigo)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  const iconBox = e.currentTarget.querySelector('.service-card-icon-box');
                  if (iconBox) iconBox.style.transform = 'scale(1.1) rotate(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  const iconBox = e.currentTarget.querySelector('.service-card-icon-box');
                  if (iconBox) iconBox.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <div 
                  className="service-card-icon-box mb-3 d-flex align-items-center justify-content-center" 
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: service.color, 
                    color: 'white', 
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3 className="h5 fw-bold text-light mb-2">{service.title}</h3>
                <p className="text-muted small mb-4" style={{ flexGrow: 1, minHeight: '90px', lineHeight: '1.6' }}>{service.desc}</p>
                {(service.slug === 'site-web' || service.slug === 'seo') && (
                  <Link to={`/service/${service.slug}`} className="btn-service-details d-inline-flex align-items-center gap-2 mt-auto">
                    En savoir plus <i className="bi bi-arrow-right transition-arrow"></i>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="pt-5 reveal active" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="text-center mb-5">
            <h2 className="section-title">Questions Fréquentes</h2>
            <p className="section-subtitle">
              Vous avez des questions sur nos modalités d'intervention ? Voici les réponses à nos demandes les plus courantes.
            </p>
          </div>

          <div className="faq-accordion text-start">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="glass-card mb-3 p-4 faq-item" style={{ cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => toggleFaq(idx)}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="h6 fw-bold mb-0 text-light" style={{ transition: 'color 0.3s ease' }}>{faq.q}</h4>
                    <i className={`bi ${isOpen ? 'bi-chevron-up text-primary' : 'bi-chevron-down'} fs-5`}></i>
                  </div>
                  <div 
                    style={{ 
                      maxHeight: isOpen ? '200px' : '0', 
                      overflow: 'hidden', 
                      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <p className="text-muted small mt-3 mb-0" style={{ lineHeight: '1.7' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Styled JSX for scoped interactions */}
      <style>{`
        .btn-service-details {
          background: transparent;
          color: var(--primary-indigo);
          border: none;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
        }
        .btn-service-details:hover {
          color: var(--accent-cyan) !important;
        }
        .btn-service-details:hover .transition-arrow {
          transform: translateX(5px);
        }
        .transition-arrow {
          transition: transform 0.2s ease;
        }
        .faq-item:hover {
          border-color: rgba(99, 102, 241, 0.25) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
