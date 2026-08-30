import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const ServiceDetail = () => {
  const { slug } = useParams();
  const [activeProject, setActiveProject] = useState(null);

  const servicesMap = {
    "site-web": {
      title: "Création de Sites Web",
      subtitle: "Des sites vitrines et e-commerce sur-mesure d'une rapidité exceptionnelle.",
      icon: "bi-laptop",
      color: "linear-gradient(135deg, var(--primary-indigo), #818cf8)",
      desc: "Nous concevons des sites web professionnels, créatifs et ultra-performants. Que vous ayez besoin d'un simple site vitrine pour présenter votre activité ou d'une boutique e-commerce complexe pour vendre en ligne, nous développons une solution sur-mesure adaptée à vos objectifs.",
      image: "software_dev_showcase.png",
      features: [
        { title: "Design Unique & Responsive", desc: "Entièrement adapté pour un affichage optimal sur smartphones, tablettes et ordinateurs." },
        { title: "Optimisation SEO Technique", desc: "Un code source propre et un balisage sémantique structuré pour plaire aux moteurs de recherche." },
        { title: "Vitesse de Chargement Optimale", desc: "Des performances maximales grâce à l'utilisation de technologies modernes (Next.js, React)." },
        { title: "Administration Simple", desc: "Prenez le contrôle de vos textes et images facilement grâce à un espace administrateur intuitif." }
      ],
      process: ["Cadrage & Design", "Développement Web", "Tests & Recette", "Mise en Ligne"]
    },
    "seo": {
      title: "Référencement Naturel (SEO)",
      subtitle: "Dominez les résultats de recherche Google et attirez des clients organiques.",
      icon: "bi-search",
      color: "linear-gradient(135deg, var(--accent-cyan), #22d3ee)",
      desc: "Le SEO est le canal d'acquisition le plus rentable à long terme. Nous optimisons votre site web de fond en comble (technique, contenu et notoriété) pour vous positionner en tête des résultats Google sur les mots-clés stratégiques de votre activité.",
      image: "digital_marketing_graph.png",
      features: [
        { title: "Audit SEO Technique", desc: "Analyse complète de la structure de votre site et correction des facteurs bloquant son indexation." },
        { title: "Recherche de Mots-Clés", desc: "Identification des requêtes à fort potentiel de trafic et à forte intention d'achat pour votre business." },
        { title: "Optimisation de Contenu", desc: "Optimisation sémantique de vos textes existants et rédaction de nouveaux contenus engageants." },
        { title: "Netlinking & Autorité", desc: "Création de backlinks de qualité pour booster l'autorité de votre domaine aux yeux de Google." }
      ],
      process: ["Audit Initial", "Optimisation Code/Texte", "Création d'Autorité", "Suivi & Rapports"]
    },
    "google-maps": {
      title: "Google Maps & SEO Local",
      subtitle: "Devenez le premier choix des clients de votre région géographique.",
      icon: "bi-geo-alt-fill",
      color: "linear-gradient(135deg, #ec4899, #f472b6)",
      desc: "Plus de 80% des recherches de services locaux se font sur smartphone. Nous optimisons votre fiche Google Business et votre présence locale pour vous positionner dans le 'Local Pack' (les 3 premiers résultats sur Google Maps) afin d'attirer des appels et visites directes.",
      image: "digital_marketing_graph.png",
      features: [
        { title: "Optimisation Google Business", desc: "Remplissage stratégique, catégories adéquates et mots-clés locaux intégrés." },
        { title: "Stratégie d'Avis Clients", desc: "Mise en place de funnels et d'outils automatisés pour recueillir de nombreux avis 5 étoiles." },
        { title: "Citations Locales", desc: "Inscription rigoureuse de votre entreprise dans les annuaires locaux de référence." },
        { title: "Tracking & Analytics", desc: "Suivi mensuel des appels générés, des clics vers votre site et des demandes d'itinéraires." }
      ],
      process: ["Audit Local", "Optimisation Fiche", "Netlinking Local", "Suivi des Avis"]
    },
    "ads": {
      title: "Publicités Google Ads & Meta",
      subtitle: "Campagnes payantes à fort retour sur investissement sur Google, Facebook et Instagram.",
      icon: "bi-megaphone-fill",
      color: "linear-gradient(135deg, #d97706, #fbbf24)",
      desc: "Besoin de clients immédiatement ? Nous créons, configurons et optimisons vos campagnes publicitaires payantes pour générer des leads qualifiés ou des ventes en ligne dès le premier jour de diffusion.",
      image: "digital_marketing_graph.png",
      features: [
        { title: "Google Ads (Search & Display)", desc: "Ciblez les clients au moment exact où ils recherchent activement vos services sur Google." },
        { title: "Facebook & Instagram Ads", desc: "Ciblez votre audience idéale selon son profil démographique, son comportement et ses intérêts." },
        { title: "Création Visuelle & Copywriting", desc: "Rédaction de textes publicitaires percutants et création de visuels optimisés pour le clic." },
        { title: "Tracking Avancé des Conversions", desc: "Configuration de Google Analytics 4 et des Pixels de conversion pour piloter précisément votre ROI." }
      ],
      process: ["Cadrage & Target", "Configuration & Lancement", "A/B Testing & Optimisation", "Analyse & ROI"]
    },
    "mobile": {
      title: "Applications Mobiles",
      subtitle: "Des applications natives iOS et Android fluides et ergonomiques.",
      icon: "bi-phone",
      color: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
      desc: "Nous développons des applications mobiles sur-mesure en utilisant le framework Flutter de Google. Cette technologie de pointe nous permet de concevoir une application performante et compatible avec iOS et Android à partir d'un seul code, divisant ainsi vos coûts de développement par deux.",
      image: "about_workspace_mockup.png",
      features: [
        { title: "Multiplateforme iOS/Android", desc: "Une seule base de code performante pour une publication simultanée sur les deux Stores." },
        { title: "Design UI/UX sur-mesure", desc: "Interfaces utilisateur élégantes, modernes et adaptées aux standards de chaque plateforme." },
        { title: "Intégration d'APIs & Cloud", desc: "Synchronisation en temps réel de vos données et connexion aux bases de données Firebase ou PostgreSQL." },
        { title: "Publication sur les Stores", desc: "Prise en charge intégrale de la soumission de vos applications sur l'App Store et Google Play." }
      ],
      process: ["UX Wireframes & Design", "Développement Flutter", "Tests & Recette", "Publication Stores"]
    },
    "desktop": {
      title: "Applications Desktop",
      subtitle: "Des logiciels de bureau robustes pour structurer votre activité.",
      icon: "bi-display",
      color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
      desc: "Nous concevons des logiciels de bureau installables sur Windows et macOS. Parfaitement adaptés pour des besoins de gestion de stocks internes, de facturation hors ligne ou d'interfaçage avec des machines ou périphériques locaux.",
      image: "about_workspace_mockup.png",
      features: [
        { title: "Compatibilité Windows & Mac", desc: "Des applications de bureau robustes fonctionnant de manière fluide sur vos parcs informatiques." },
        { title: "Base de Données Locale", desc: "Fonctionnement hors ligne optimal pour garantir la sécurité et la continuité de votre travail." },
        { title: "Intégration Matérielle", desc: "Interfaçage avec vos imprimantes de caisse, lecteurs code-barres ou autres périphériques." },
        { title: "Performance Native", desc: "Exécution rapide et réactivité totale grâce à une architecture logicielle optimisée." }
      ],
      process: ["Spécifications Techniques", "Développement Logiciel", "Tests Périphériques", "Déploiement local"]
    },
    "solutions-digitales": {
      title: "Solutions Digitales Sur-Mesure",
      subtitle: "Conception d'outils métiers complexes et d'APIs pour vos besoins spécifiques.",
      icon: "bi-cpu",
      color: "linear-gradient(135deg, #10b981, #34d399)",
      desc: "Chaque entreprise a des processus uniques. Lorsque les logiciels classiques du marché ne suffisent plus, nous développons votre propre outil métier en ligne (Extranet, Intranet, CRM sur-mesure, portail SaaS) pour répondre à vos exigences opérationnelles exactes.",
      image: "software_dev_showcase.png",
      features: [
        { title: "Plateformes SaaS sur-mesure", desc: "Création d'outils web multi-utilisateurs performants et prêts pour la facturation d'abonnements." },
        { title: "Développement d'APIs", desc: "Développement de passerelles REST sécurisées pour faire communiquer vos différents systèmes." },
        { title: "Sécurité & Robustesse", desc: "Authentification à double facteur, cryptage des données sensibles et audits de vulnérabilité." },
        { title: "Infrastructure Évolutive", desc: "Une architecture cloud taillée pour accompagner la croissance de vos volumes d'activité." }
      ],
      process: ["Cadrage Fonctionnel", "Conception d'Architecture", "Développement Agile", "Déploiement Cloud"]
    },
    "whatsapp-bot": {
      title: "Bots WhatsApp Automatiques",
      subtitle: "Assurez un support client et une capture de prospects automatisés 24h/24.",
      icon: "bi-whatsapp",
      color: "linear-gradient(135deg, #25d366, #128c7e)",
      desc: "WhatsApp est l'application de messagerie préférée de vos clients au Maroc. En intégrant un bot automatique intelligent, vous qualifiez vos leads, répondez instantanément aux questions fréquentes et réduisez la charge de travail de votre support, le tout automatiquement et 24h/24.",
      image: "software_dev_showcase.png",
      features: [
        { title: "Réponse Instantanée 24/7", desc: "Éliminez les temps d'attente pour vos prospects afin de maximiser instantanément vos conversions." },
        { title: "Qualification des Leads", desc: "Le bot pose les questions préliminaires importantes avant de transférer le contact à un humain." },
        { title: "Funnels de Vente WhatsApp", desc: "Envoyez des catalogues interactifs, recueillez des informations et planifiez des rendez-vous." },
        { title: "Connexion API & CRM", desc: "Synchronisez toutes les données collectées directement avec vos bases de données ou votre CRM existant." }
      ],
      process: ["Arborescence & Scénarios", "Développement API WhatsApp", "Tests Opérationnels", "Mise en Service"]
    }
  };

  const allProjects = [
    {
      id: "universal-pf",
      title: "Universal PF (Pompes Funèbres)",
      category: "site-web",
      desc: "Site vitrine professionnel pour le leader du rapatriement de corps et services funéraires au Maroc.",
      longDesc: "Universal PF est la plus grande entreprise de pompes funèbres au Maroc, spécialisée dans le rapatriement de corps national et international. Nous avons conçu et développé leur site web officiel de présentation, mettant l'accent sur l'assistance d'urgence 24h/24 et 7j/7, la clarté des services logistiques et des boutons d'appels et WhatsApp immédiats.",
      techs: ["React.js", "Tailwind CSS", "WhatsApp API", "SEO Local"],
      results: ["Intégration d'un système d'assistance d'urgence 24h/24 et 7j/7", "Interface optimisée et respectueuse pour guider les familles", "Positionnement SEO optimal sur les requêtes funéraires au Maroc"],
      image: `${import.meta.env.BASE_URL}universal_pf_showcase.png`,
      url: "https://pompesfunebresmaroc.com/"
    },
    {
      id: "redmed-ecommerce",
      title: "REDMED E-commerce",
      category: "site-web",
      desc: "Boutique en ligne moderne de prêt-à-porter avec outil de personnalisation d'impressions textile et Cash on Delivery.",
      longDesc: "REDMED est une marque marocaine de vêtements streetwear et de personnalisation. Nous avons conçu et développé leur boutique e-commerce complète, incluant des fonctionnalités de commande sur-mesure pour l'impression et la broderie, un système de panier optimisé, et un tunnel d'achat adapté au Cash on Delivery.",
      techs: ["React.js", "Tailwind CSS", "Vercel", "Cash on Delivery", "WhatsApp API"],
      results: ["Tunnel de commande fluide et performant", "Module d'impression de textile sur-mesure", "Interface e-commerce moderne et responsive"],
      image: `${import.meta.env.BASE_URL}redmed_showcase.png`,
      url: "https://redmed.vercel.app/"
    },
    {
      id: "cmpf-ambulance",
      title: "CMPF Ambulance",
      category: "site-web",
      desc: "Portail d'assistance médicale d'urgence et transport sanitaire couvrant plus de 12 villes au Maroc.",
      longDesc: "CMPF Ambulance est le plus grand réseau d'assistance médicale et d'ambulances privées au Maroc. Nous avons conçu et développé leur site web officiel, optimisé pour les situations d'urgence avec un chargement ultra-rapide, une détection automatique de la localisation pour suggérer l'agence la plus proche (Casablanca, Marrakech, etc.), et des boutons d'appels téléphoniques et WhatsApp immédiats.",
      techs: ["React.js", "Tailwind CSS", "Vercel", "Localisation API", "WhatsApp API"],
      results: ["Prise de contact en moins de 15 minutes en situation d'urgence", "Présence et numéros d'urgence cartographiés pour plus de 12 villes", "Architecture optimisée pour mobile avec accès direct en un clic"],
      image: `${import.meta.env.BASE_URL}cmpf_ambulance_showcase.png`,
      url: "https://cmpf-ambulance.vercel.app/"
    },
    {
      id: "vogal-jewellery",
      title: "Vogal Jewellery",
      category: "site-web",
      desc: "Boutique e-commerce Shopify de luxe spécialisée dans la joaillerie et les bijoux de création.",
      longDesc: "Vogal Jewellery est un modèle de boutique e-commerce Shopify raffiné conçu pour l'industrie de la joaillerie de luxe. Il met en avant les collections de bijoux avec des visuels grand format ('Timeless Style'), un zoom interactif haute fidélité sur les pièces, un processus d'achat simplifié et des intégrations de partage social.",
      techs: ["Shopify", "Liquid", "Javascript", "CSS3", "Responsive Design"],
      results: ["Présentation visuelle élégante valorisant les bijoux de luxe", "Tunnel d'achat fluide avec options de personnalisation de gravure", "Temps de chargement rapide de moins de 1.2 seconde"],
      image: `${import.meta.env.BASE_URL}vogal_jewellery_showcase.png`,
      url: "https://vogal-demos.myshopify.com/"
    },
    {
      id: "tripway-travel",
      title: "TRIPWAY",
      category: "site-web",
      desc: "Portail de réservation de voyages organisés et de circuits touristiques à travers le Maroc.",
      longDesc: "TRIPWAY est l'une des plus grandes agences de voyages organisés au Maroc. Nous avons conçu et développé leur site internet complet en React et Tailwind CSS, intégrant un système d'exploration de circuits d'aventures, une passerelle de réservation en ligne sécurisée, un support client WhatsApp 24/7 et des optimisations de performances garantissant un taux de conversion élevé.",
      techs: ["React.js", "Tailwind CSS", "Vercel", "Booking Engine", "WhatsApp API"],
      results: ["Système de réservation fluide et sécurisé", "Présentation immersive des excursions et circuits", "Augmentation notable du taux d'engagement des voyageurs"],
      image: `${import.meta.env.BASE_URL}tripway_showcase.png`,
      url: "https://trip-way.vercel.app/"
    },
    {
      id: "vogal-fashion",
      title: "Vogal Store",
      category: "site-web",
      desc: "Boutique en ligne Shopify premium de prêt-à-porter masculin et féminin.",
      longDesc: "Vogal est un modèle de boutique e-commerce de mode et prêt-à-porter haut de gamme. Développé sous Shopify, le site intègre des animations fluides, des galeries de collections interactives, un système dynamique de notifications d'achats récents pour stimuler la preuve sociale, ainsi qu'un processus de checkout optimisé.",
      techs: ["Shopify", "Liquid", "Javascript", "CSS3", "Social Proof Engine"],
      results: ["Notifications d'achat interactives en temps réel", "Optimisation complète du taux de conversion sur mobile", "Design premium minimaliste axé sur le visuel de marque"],
      image: `${import.meta.env.BASE_URL}vogal_showcase.png`,
      url: "https://vogal-demo.myshopify.com/"
    },
    {
      id: "meowy-shopify",
      title: "Meowy Pet Shop",
      category: "site-web",
      desc: "Boutique e-commerce internationale Shopify de produits et d'accessoires de soins pour animaux de compagnie.",
      longDesc: "Meowy est une boutique en ligne haut de gamme dédiée aux animaux de compagnie. Développée sous Shopify avec des optimisations d'interface utilisateur (UI/UX) soignées, elle propose un catalogue complet d'accessoires de soin pour chiens et chats, des fiches produits détaillées, des fonctionnalités de comparaison d'articles, ainsi qu'un tunnel d'achat de panier optimisé.",
      techs: ["Shopify", "Liquid", "HTML5 & CSS3", "E-commerce Optimization"],
      results: ["Boutique Shopify internationale optimisée pour la conversion", "Temps de chargement rapide et intégration des paniers dynamiques", "Fiches produits immersives avec outils de comparaison intégrés"],
      image: `${import.meta.env.BASE_URL}meowy_showcase.png`,
      url: "https://qx-meowy.myshopify.com/"
    }
  ];

  const service = servicesMap[slug];



  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <section className="section-padding position-relative" style={{ background: 'var(--bg-dark)', minHeight: '90vh' }}>
      <div className="glow-spot spot-indigo" style={{ top: '15%', left: '5%' }}></div>
      <div className="glow-spot spot-cyan" style={{ bottom: '15%', right: '5%' }}></div>

      <div className="container py-5">
        {/* Back Button */}
        <div className="text-start mb-4">
          <Link to="/services" className="d-inline-flex align-items-center gap-2 text-decoration-none text-muted hover-primary small" style={{ fontWeight: '500' }}>
            <i className="bi bi-arrow-left"></i> Retourner aux services
          </Link>
        </div>

        {/* Hero split layout */}
        <div className="row g-5 align-items-center mb-5 pb-4">
          <div className="col-lg-6 text-start">
            <div className="d-flex align-items-center gap-3 flex-wrap mb-3">
              <span className="badge text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Service Premium</span>
              
              {/* Creative Small Founder Badge next to Badge */}
              <div className="d-flex align-items-center gap-2 border-start ps-3" style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}>
                <div className="position-relative">
                  <img 
                    src={`${import.meta.env.BASE_URL}noureddine_avatar.png`} 
                    alt="Noureddine" 
                    className="rounded-circle" 
                    style={{ width: '32px', height: '32px', objectFit: 'cover', border: '2px solid var(--primary-indigo)' }} 
                  />
                  <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle pulse-green" style={{ width: '8px', height: '8px', border: '1px solid var(--bg-dark-gray) !important' }}></span>
                </div>
                <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: '500' }}>Par Noureddine</span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', borderRadius: '12px', background: service.color, color: 'white', fontSize: '1.5rem' }}>
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h1 className="display-5 fw-extrabold text-light mb-0">{service.title}</h1>
            </div>
            <p className="lead text-gradient mb-4 fw-bold">{service.subtitle}</p>
            <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>{service.desc}</p>
            
            <div className="d-flex flex-wrap gap-3">
              <a 
                href={`https://wa.me/212783180806?text=Salam%20Noureddine,%20je%20souhaite%20discuter%20de%20mon%20projet%20de%20${encodeURIComponent(service.title)}%20!`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-whatsapp"></i> {(slug === 'seo' || slug === 'google-maps') ? 'Contactez MakboulDev pour le service' : 'WhatsApp'}
              </a>
              {(slug !== 'seo' && slug !== 'google-maps') && (
                <a href="#projects-grid" className="btn-premium-outline-round d-inline-flex align-items-center gap-2 text-decoration-none">
                  <i className="bi bi-grid-fill"></i> Voir les projets
                </a>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="glass-card p-3 code-editor-card floating-element">
              <img src={`${import.meta.env.BASE_URL}${service.image}`} alt={service.title} className="img-fluid rounded" style={{ border: '1px solid rgba(255, 255, 255, 0.05)', maxHeight: '380px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {slug === 'seo' ? (
          <>
            {/* Custom SEO Section 1: Qu'est-ce que le SEO ? */}
            <div className="py-5 mb-5 reveal active">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <div className="glass-card p-4 text-start position-relative overflow-hidden" style={{ border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    {/* Google Search Mockup */}
                    <div className="bg-dark rounded-3 p-3 mb-0" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div className="d-flex align-items-center gap-2 mb-3 text-muted">
                        <i className="bi bi-google fs-5"></i>
                        <div className="bg-secondary rounded-pill w-100 py-2 px-3 text-light small d-flex align-items-center justify-content-between" style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05) !important' }}>
                          <span>Meilleure agence de marketing digital au Maroc</span>
                          <i className="bi bi-search text-muted"></i>
                        </div>
                      </div>
                      <div className="border-top pt-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-success small d-flex align-items-center gap-1" style={{ fontSize: '0.7rem' }}>
                            <i className="bi bi-patch-check-fill"></i> Position #1
                          </span>
                          <span className="text-muted" style={{ fontSize: '0.65rem' }}>10 500 clics/mois</span>
                        </div>
                        <h4 className="h6 text-primary mb-1 fw-bold">MakboulDev - Agence de Marketing Digital & Web</h4>
                        <p className="text-muted small mb-0" style={{ fontSize: '0.7rem', lineHeight: '1.4' }}>Nous concevons des sites vitrines et e-commerce sur-mesure d'une rapidité exceptionnelle avec un SEO optimisé au Maroc...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-start">
                  <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Comprendre</span>
                  <h2 className="h3 fw-bold text-light mb-3">Le SEO : Le Moteur Invisible de Votre Croissance</h2>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.98rem' }}>
                    Le SEO (Search Engine Optimization), ou Référencement Naturel, est l'art d'optimiser votre site web afin de le positionner dans les tout premiers résultats des moteurs de recherche comme Google. 
                  </p>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.98rem' }}>
                    Contrairement au référencement payant (publicité) qui s'arrête dès que vous coupez le budget, le SEO est un investissement durable. Il travaille pour vous 24h/24 et 7j/7, en drainant un trafic qualifié et ciblé de personnes qui recherchent activement ce que vous proposez.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="https://wa.me/212783180806?text=Salam%20Noureddine,%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20service%20SEO%20!" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-whatsapp d-inline-flex align-items-center gap-2"
                    >
                      <i className="bi bi-whatsapp"></i> Contactez MakboulDev pour le service
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom SEO Section 2: Pourquoi le SEO est indispensable ? */}
            <div className="py-5 mb-5 reveal active">
              <div className="text-center mb-5">
                <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>Les Avantages</span>
                <h2 className="h3 fw-bold text-light mb-3">Pourquoi le SEO est indispensable pour votre entreprise ?</h2>
                <p className="text-muted small mx-auto" style={{ maxWidth: '600px' }}>
                  Ignorer le référencement naturel, c'est laisser toute la visibilité en ligne à vos concurrents directs.
                </p>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="glass-card p-4 h-100 text-start animate-border">
                    <div className="d-flex align-items-center justify-content-center bg-success-transparent rounded mb-3" style={{ width: '45px', height: '45px', background: 'rgba(37, 211, 102, 0.1)', color: '#25d366' }}>
                      <i className="bi bi-graph-up-arrow fs-5"></i>
                    </div>
                    <h3 className="h6 fw-bold text-light mb-2">Trafic Qualifié Continu</h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Attirez des visiteurs ciblés au moment précis où ils recherchent activement vos services ou produits sur internet.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="glass-card p-4 h-100 text-start animate-border">
                    <div className="d-flex align-items-center justify-content-center bg-indigo-transparent rounded mb-3" style={{ width: '45px', height: '45px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary-indigo)' }}>
                      <i className="bi bi-shield-check fs-5"></i>
                    </div>
                    <h3 className="h6 fw-bold text-light mb-2">Crédibilité & Confiance</h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Les internautes font confiance aux premiers résultats de Google. Apparaître en haut renforce l'autorité et l'image de votre marque.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="glass-card p-4 h-100 text-start animate-border">
                    <div className="d-flex align-items-center justify-content-center bg-purple-transparent rounded mb-3" style={{ width: '45px', height: '45px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                      <i className="bi bi-piggy-bank fs-5"></i>
                    </div>
                    <h3 className="h6 fw-bold text-light mb-2">Excellent ROI à Long Terme</h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Contrairement au SEA (Google Ads), le trafic SEO ne vous coûte rien par clic. C'est le levier d'acquisition digital le plus rentable du marché.</p>
                  </div>
                </div>
              </div>

            </div>

          </>
        ) : slug === 'google-maps' ? (
          <>
            {/* Custom Google Maps Section 1: Qu'est-ce que l'animation de fiche ? */}
            <div className="py-5 mb-5 reveal active">
              <div className="row g-5 align-items-center">
                {/* Left side: Search engine mockup */}
                <div className="col-lg-6">
                  <div className="glass-card p-4 text-start position-relative overflow-hidden" style={{ border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    {/* Google Maps Card Mockup */}
                    <div className="bg-dark rounded-3 p-3 mb-0" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div className="d-flex align-items-center gap-2 mb-3 text-muted">
                        <i className="bi bi-geo-alt-fill text-danger fs-5"></i>
                        <span className="fw-bold text-light" style={{ fontSize: '0.85rem' }}>Votre Établissement sur Google Maps</span>
                      </div>
                      
                      {/* Mockup post card inside Maps */}
                      <div className="rounded p-3" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="badge bg-danger" style={{ fontSize: '0.65rem' }}>OFFRE DU MOMENT</span>
                          <span className="text-muted" style={{ fontSize: '0.65rem' }}>Publié il y a 2 heures</span>
                        </div>
                        <h4 className="h6 text-light mb-2 fw-bold">-20% sur la création de votre site vitrine !</h4>
                        <p className="text-muted small mb-3" style={{ fontSize: '0.7rem', lineHeight: '1.4' }}>Profitez d'une réduction exclusive cette semaine pour lancer votre présence en ligne au Maroc avec un design sur-mesure premium...</p>
                        <div className="d-flex gap-2">
                          <a href="tel:+212783180806" className="btn btn-sm btn-primary py-1 px-3" style={{ fontSize: '0.7rem' }}>Appeler</a>
                          <span className="btn btn-sm btn-outline-secondary py-1 px-3" style={{ fontSize: '0.7rem', color: '#fff', borderColor: 'rgba(255,255,255,0.1)' }}>En savoir plus</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side: text details */}
                <div className="col-lg-6 text-start">
                  <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Comprendre</span>
                  <h2 className="h3 fw-bold text-light mb-3">Animez Votre Fiche Google Maps Pour Capter les Clients</h2>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.98rem' }}>
                    Les posts Google Maps (ou Google Business Profile Updates) sont des publications qui apparaissent directement sur votre fiche d'établissement dans les résultats de recherche Google et sur Google Maps. 
                  </p>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.98rem' }}>
                    C'est l'équivalent d'un réseau social professionnel directement intégré au moteur de recherche le plus utilisé au Maroc. Publier régulièrement permet de tenir vos clients informés de vos offres, nouveautés, et réalisations directement au moment où ils vous découvrent.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="https://wa.me/212783180806?text=Salam%20Noureddine,%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20service%20de%20Posts%20Google%20Maps%20!" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-whatsapp d-inline-flex align-items-center gap-2"
                    >
                      <i className="bi bi-whatsapp"></i> Contactez MakboulDev pour le service
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Google Maps Section 2: Pourquoi publier régulièrement ? */}
            <div className="py-5 mb-5 reveal active">
              <div className="text-center mb-5">
                <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>Les Avantages</span>
                <h2 className="h3 fw-bold text-light mb-3">Pourquoi est-ce indispensable pour votre activité ?</h2>
                <p className="text-muted small mx-auto" style={{ maxWidth: '600px' }}>
                  Une fiche animée régulièrement convertit 2x plus de prospects en clients par rapport à une fiche inactive.
                </p>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="glass-card p-4 h-100 text-start animate-border">
                    <div className="d-flex align-items-center justify-content-center bg-danger-transparent rounded mb-3" style={{ width: '45px', height: '45px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                      <i className="bi bi-geo-alt-fill fs-5"></i>
                    </div>
                    <h3 className="h6 fw-bold text-light mb-2">Visibilité Locale Accrue</h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Google favorise et classe mieux dans le "Local Pack" les fiches d'établissement actives qui publient régulièrement.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="glass-card p-4 h-100 text-start animate-border">
                    <div className="d-flex align-items-center justify-content-center bg-indigo-transparent rounded mb-3" style={{ width: '45px', height: '45px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary-indigo)' }}>
                      <i className="bi bi-telephone-fill fs-5"></i>
                    </div>
                    <h3 className="h6 fw-bold text-light mb-2">Conversion Immédiate</h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Chaque post intègre un bouton d'action permettant à l'utilisateur de vous appeler ou de vous envoyer un message WhatsApp en un clic.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="glass-card p-4 h-100 text-start animate-border">
                    <div className="d-flex align-items-center justify-content-center bg-success-transparent rounded mb-3" style={{ width: '45px', height: '45px', background: 'rgba(37, 211, 102, 0.1)', color: '#25d366' }}>
                      <i className="bi bi-star-fill fs-5"></i>
                    </div>
                    <h3 className="h6 fw-bold text-light mb-2">Confiance & Dynamisme</h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Montrez à vos clients que votre agence est active et à l'écoute en publiant vos réalisations et promotions de la semaine.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Google Maps Section 3: Notre service clé en main */}
            <div className="py-5 mb-5 reveal active">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-start">
                  <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Notre Expertise</span>
                  <h2 className="h3 fw-bold text-light mb-3">Ce que nous prenons en charge pour vous</h2>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.98rem' }}>
                    Nous prenons en main la gestion et l'animation complète de vos posts Google Business Profile pour générer un flux d'appels et de visites régulier.
                  </p>
                  
                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center bg-indigo-transparent rounded-circle" style={{ width: '32px', height: '32px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary-indigo)', minWidth: '32px' }}>
                        1
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-light mb-1">Création Graphique des Posts</h4>
                        <p className="text-muted small mb-0">Design de visuels professionnels, modernes et percutants adaptés aux dimensions recommandées par Google.</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center bg-cyan-transparent rounded-circle" style={{ width: '32px', height: '32px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', minWidth: '32px' }}>
                        2
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-light mb-1">Rédaction Optimisée pour le Référencement Local</h4>
                        <p className="text-muted small mb-0">Textes accrocheurs intégrant intelligemment vos mots-clés stratégiques pour plaire à l'algorithme Google Maps.</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center bg-purple-transparent rounded-circle" style={{ width: '32px', height: '32px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', minWidth: '32px' }}>
                        3
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-light mb-1">Planification Régulière & Suivi</h4>
                        <p className="text-muted small mb-0">Planification mensuelle des publications et analyse de l'impact sur le nombre d'appels et de visites générés.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a 
                      href="https://wa.me/212783180806?text=Salam%20Noureddine,%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20service%20de%20Posts%20Google%20Maps%20!" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-whatsapp d-inline-flex align-items-center gap-2"
                    >
                      <i className="bi bi-whatsapp"></i> Contactez MakboulDev pour le service
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="glass-card p-3 code-editor-card floating-element">
                    <img src={`${import.meta.env.BASE_URL}digital_marketing_graph.png`} alt="Gestion de Posts Google Maps" className="img-fluid rounded" style={{ border: '1px solid rgba(255, 255, 255, 0.05)', maxHeight: '380px', width: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Features / Details section */}
            <div className="py-5 mb-5 reveal active">
              <div className="text-center mb-5">
                <h2 className="h3 fw-bold text-light mb-3">Ce que comprend notre prestation</h2>
                <p className="text-muted small mx-auto" style={{ maxWidth: '600px' }}>
                  Chaque détail est pensé pour assurer le succès de votre transition digitale ou de votre campagne marketing.
                </p>
              </div>
              <div className="row g-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="glass-card p-4 h-100 text-start animate-border">
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <i className="bi bi-patch-check-fill text-success fs-5"></i>
                        <h3 className="h6 fw-bold text-light mb-0">{feature.title}</h3>
                      </div>
                      <p className="text-muted small mb-0" style={{ paddingLeft: '28px', lineHeight: '1.6' }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TEAM EXPERTISE & TYPES OF WEBSITES SECTION */}
            <div className="py-5 mb-5 reveal active">
              <div className="row g-5 align-items-center">
                {/* Left Column: Image with floating creative stats */}
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="position-relative d-inline-block w-100">
                    <div className="glass-card p-3 code-editor-card floating-element position-relative overflow-hidden" style={{ border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <img 
                        src={`${import.meta.env.BASE_URL}software_dev_showcase.png`} 
                        alt="Notre Expertise Technique" 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} 
                      />
                      
                      {/* Floating creative stat badge 1 */}
                      <div className="glass-card p-3 position-absolute d-flex align-items-center gap-3 shadow-lg" style={{ top: '20px', left: '20px', background: 'rgba(10, 10, 12, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '12px' }}>
                        <div className="d-flex align-items-center justify-content-center text-success bg-success-transparent rounded-circle" style={{ width: '40px', height: '40px', background: 'rgba(37, 211, 102, 0.1)' }}>
                          <i className="bi bi-lightning-charge-fill"></i>
                        </div>
                        <div className="text-start">
                          <h5 className="small fw-bold text-light mb-0">Performance</h5>
                          <span className="text-muted" style={{ fontSize: '0.7rem' }}>Score 100/100 Mobile</span>
                        </div>
                      </div>

                      {/* Floating creative stat badge 2 */}
                      <div className="glass-card p-3 position-absolute d-flex align-items-center gap-3 shadow-lg" style={{ bottom: '30px', right: '20px', background: 'rgba(10, 10, 12, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '12px' }}>
                        <div className="d-flex align-items-center justify-content-center text-info bg-info-transparent rounded-circle" style={{ width: '40px', height: '40px', background: 'rgba(6, 182, 212, 0.1)' }}>
                          <i className="bi bi-palette-fill"></i>
                        </div>
                        <div className="text-start">
                          <h5 className="small fw-bold text-light mb-0">Design Sur-Mesure</h5>
                          <span className="text-muted" style={{ fontSize: '0.7rem' }}>UX/UI Premium</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Right Column: Text content */}
                <div className="col-lg-6 text-start order-1 order-lg-2">
                  <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>Expertise & Solutions</span>
                  <h2 className="h3 fw-bold text-light mb-3">Conception Sur-Mesure & Expertise Technique</h2>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                    Notre équipe d'ingénieurs et de designers qualifiés met son savoir-faire à votre service pour créer des plateformes digitales d'exception. Nous n'utilisons pas de modèles génériques : chaque site bénéficie d'un design unique adapté à vos objectifs de marque et de conversion.
                  </p>

                  {/* Types of sites list */}
                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center bg-indigo-transparent rounded" style={{ width: '36px', height: '36px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary-indigo)', minWidth: '36px' }}>
                        <i className="bi bi-aspect-ratio"></i>
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-light mb-1">Sites Vitrines & Identités Visuelles</h4>
                        <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>Des sites vitrines modernes conçus pour présenter votre activité, asseoir votre notoriété locale et capturer des prospects qualifiés.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center bg-cyan-transparent rounded" style={{ width: '36px', height: '36px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', minWidth: '36px' }}>
                        <i className="bi bi-cart3"></i>
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-light mb-1">Boutiques E-commerce & Tunnels COD</h4>
                        <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>Boutiques en ligne Shopify ou React rapides et optimisées avec paniers dynamiques et tunnels d'achat adaptés au paiement à la livraison (Cash on Delivery).</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <div className="d-flex align-items-center justify-content-center bg-purple-transparent rounded" style={{ width: '36px', height: '36px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', minWidth: '36px' }}>
                        <i className="bi bi-cpu"></i>
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-light mb-1">Solutions Web & Plateformes Métiers</h4>
                        <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>Portails d'administration, synchronisations d'inventaires logistiques et tableaux de bord complexes sur-mesure.</p>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="d-flex flex-wrap gap-3">
                    <a 
                      href={`https://wa.me/212783180806?text=Salam%20Noureddine,%20je%20souhaite%20lancer%20un%20nouveau%20projet%20avec%20votre%20équipe%20!`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-whatsapp d-inline-flex align-items-center gap-2"
                    >
                      <i className="bi bi-whatsapp"></i> Démarrer Mon Projet
                    </a>
                    <a href="#projects-grid" className="btn-premium-outline-round d-inline-flex align-items-center gap-2 text-decoration-none">
                      <i className="bi bi-grid-fill"></i> Découvrir nos réalisations
                    </a>
                  </div>

                </div>
              </div>
            </div>

            {/* CREATIVE 10-PROJECTS GRID SECTION */}
            <div id="projects-grid" className="py-5 mb-5 reveal active">
              <div className="text-center mb-5">
                <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>Portfolio Exclusif</span>
                <h2 className="h3 fw-bold text-light mb-2">Nos Projets & Réalisations</h2>
                <p className="text-muted small mx-auto mb-4" style={{ maxWidth: '600px' }}>
                  Découvrez nos réalisations majeures conçues avec excellence technique et sens de l'innovation.
                </p>
              </div>

              <div className="row g-4">
                {allProjects.map((project, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4">
                    <div className="project-card-creative text-start">
                      {/* Image container */}
                      <div className="mb-3 position-relative overflow-hidden rounded-3" style={{ height: '190px' }}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="zoom-image-hover" 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, transparent, rgba(10, 10, 12, 0.8))' }}></div>
                        {/* Tiny category badge */}
                        <span 
                          className="position-absolute top-3 start-3 badge" 
                          style={{ 
                            fontSize: '0.65rem', 
                            background: 'rgba(99, 102, 241, 0.15)', 
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                            backdropFilter: 'blur(5px)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            color: '#fff',
                            top: '12px',
                            left: '12px'
                          }}
                        >
                          {project.category === 'site-web' ? 'E-commerce / Vitrine' : project.category.toUpperCase()}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="h6 fw-bold text-light mb-2 transition-title">{project.title}</h3>
                      <p className="text-muted small mb-3" style={{ flexGrow: 1, lineHeight: '1.6', fontSize: '0.8rem', minHeight: '60px' }}>
                        {project.desc}
                      </p>

                      {/* Tech stack badge list */}
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.techs.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-tag-premium">{tech}</span>
                        ))}
                      </div>

                      {/* Button */}
                      <button 
                        className="btn-card-project w-100 text-uppercase d-flex align-items-center justify-content-center gap-2 mt-auto"
                        onClick={() => setActiveProject(project)}
                      >
                        <span>Voir le projet</span>
                        <i className="bi bi-arrow-right-short fs-5 transition-arrow" style={{ transition: 'transform 0.3s ease' }}></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}


        {/* Final banner CTA */}
        <div className="glass-card p-5 mt-5 reveal active text-center" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.04), rgba(6, 182, 212, 0.04))', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-3 text-center">
              <div className="position-relative d-inline-block">
                <img 
                  src={`${import.meta.env.BASE_URL}noureddine_avatar.png`} 
                  alt="Noureddine" 
                  className="rounded-circle shadow-lg" 
                  style={{ width: '120px', height: '120px', objectFit: 'cover', border: '3px solid var(--primary-indigo)' }} 
                />
                <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle" style={{ width: '18px', height: '18px', border: '2px solid var(--bg-dark-gray) !important' }}></span>
              </div>
            </div>
            <div className="col-lg-9 text-lg-start text-center">
              <span className="badge mb-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--primary-indigo)', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Parlons en direct</span>
              <h2 className="h3 fw-bold text-light mb-3">Discutez Directement Avec Noureddine</h2>
              <p className="text-muted mb-4" style={{ maxWidth: '650px', lineHeight: '1.7' }}>
                Vous avez un projet digital en tête ou des questions sur nos services ? Contactez-moi directement sur WhatsApp pour obtenir un conseil technique rapide, un devis personnalisé ou pour étudier la faisabilité de votre idée.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <a 
                  href="https://wa.me/212783180806?text=Salam%20Noureddine,%20je%20souhaite%20discuter%20d'un%20projet%20!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-whatsapp"></i> Discuter sur WhatsApp
                </a>
                <a href="#projects-grid" className="btn-premium-outline-round d-inline-flex align-items-center gap-2 text-decoration-none">
                  <i className="bi bi-grid-fill"></i> Voir les projets
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* PROJECT DETAILS MODAL */}
      {activeProject && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(10, 10, 12, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content glass-card p-4 text-start border-0 position-relative" style={{ background: 'var(--bg-dark-gray)' }}>
              
              {/* Close Button */}
              <button 
                type="button" 
                className="btn-close-drawer position-absolute" 
                style={{ top: '20px', right: '20px', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.8rem' }}
                onClick={() => setActiveProject(null)}
                aria-label="Fermer"
              >
                <i className="bi bi-x-lg"></i>
              </button>

              <div className="modal-header border-0 pb-0">
                <div>
                  <span className="badge mb-2" style={{ background: 'rgba(99, 102, 241, 0.12)', color: 'var(--primary-indigo)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>Étude de cas</span>
                  <h4 className="modal-title fw-bold text-light">{activeProject.title}</h4>
                </div>
              </div>

              <div className="modal-body py-4">
                <div className="row g-4">
                  {/* Left Column: Media & Tech Stack */}
                  <div className="col-lg-5">
                    <div className="rounded overflow-hidden mb-4 shadow" style={{ maxHeight: '250px' }}>
                      <img src={activeProject.image} alt={activeProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <h5 className="h6 fw-bold text-light mb-3">Technologies utilisées</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {activeProject.techs.map((tech, idx) => (
                        <span key={idx} className="tech-pill-badge">
                          <i className="bi bi-cpu-fill text-primary-agency me-1"></i>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Case study overview & Results */}
                  <div className="col-lg-7">
                    <h5 className="h6 fw-bold text-gradient mb-2">Présentation du projet</h5>
                    <p className="text-muted small mb-4" style={{ lineHeight: '1.7' }}>
                      {activeProject.longDesc}
                    </p>

                    <h5 className="h6 fw-bold text-gradient mb-3">Résultats clés & Impact</h5>
                    <ul className="list-unstyled mb-0">
                      {activeProject.results.map((result, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2 mb-3 text-muted small">
                          <i className="bi bi-patch-check-fill text-success fs-5" style={{ marginTop: '-2px' }}></i>
                          <span style={{ lineHeight: '1.5' }}>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer border-0 pt-3 d-flex justify-content-between align-items-center">
                <button 
                  type="button" 
                  className="btn-premium-outline-round"
                  onClick={() => setActiveProject(null)}
                >
                  Fermer
                </button>
                {activeProject.url && (
                  <a 
                    href={activeProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-premium text-decoration-none"
                    onClick={() => setActiveProject(null)}
                  >
                    Voir le projet <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hover-primary:hover {
          color: var(--primary-indigo) !important;
          transition: color 0.2s ease;
        }
        .tech-pill-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 6px 12px;
          border-radius: 50px;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .snap-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .carousel-control-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }
        .carousel-control-btn:hover {
          background: var(--primary-indigo);
          border-color: transparent;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
        }
        .btn-left {
          left: -10px;
        }
        .btn-right {
          right: -10px;
        }
        .active-filter {
          background: var(--primary-indigo) !important;
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);
        }
        .inactive-filter {
          background: transparent !important;
        }
        .transition-hover-glow {
          transition: all 0.3s ease-in-out;
        }
        .transition-hover-glow:hover {
          transform: translateY(-5px);
          border-top-color: var(--accent-cyan) !important;
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.1) !important;
        }
        .transition-hover-glow:hover .zoom-image-hover {
          transform: scale(1.08);
        }
        .animate-border {
          transition: border-color 0.3s ease;
        }
        .animate-border:hover {
          border-color: rgba(99, 102, 241, 0.25) !important;
        }
        .btn-whatsapp {
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.25);
          transition: all 0.3s ease;
          border: none;
        }
        .btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
          color: white !important;
        }
        @keyframes pulse-green {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        .pulse-green {
          animation: pulse-green 2s infinite;
        }
        .project-card-creative {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 16px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .project-card-creative:hover {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.1), 0 0 0 1px rgba(99, 102, 241, 0.2);
        }
        .project-card-creative::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.08), transparent);
          transform: skewX(-25deg);
          transition: 0.75s;
        }
        .project-card-creative:hover::after {
          left: 150%;
        }
        .project-card-creative:hover .zoom-image-hover {
          transform: scale(1.06);
        }
        .tech-tag-premium {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.25);
          color: var(--primary-indigo);
          transition: all 0.3s ease;
        }
        .project-card-creative:hover .tech-tag-premium {
          border-color: var(--primary-indigo);
          color: #fff;
          background: var(--primary-indigo);
        }
        .btn-card-project {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 30px;
          padding: 10px 20px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .project-card-creative:hover .btn-card-project {
          background: var(--primary-indigo);
          border-color: var(--primary-indigo);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        .project-card-creative:hover .btn-card-project .transition-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};

export default ServiceDetail;
