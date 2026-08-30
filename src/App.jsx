import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Services from './components/Services';
import B2B from './components/B2B';
import ServiceDetail from './components/ServiceDetail';



import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

// Subcomponent to handle path changes and re-initialize scroll reveal observers
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
      el.classList.remove('active'); // Reset state before animating
      observer.observe(el);
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [location.pathname]);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/services" element={<Services />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/b2b" element={<B2B />} />



          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Interactive Chat Widget with User Photo */}
      <ChatWidget />

      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/212783180806" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float-btn shadow-lg"
        aria-label="Contact us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
        <span className="tooltip-text">Chat with us!</span>
      </a>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;

