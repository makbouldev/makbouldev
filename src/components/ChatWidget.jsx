import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="custom-chat-widget">
      {/* Chat Popup Window */}
      <div className={`chat-popup-window ${isOpen ? 'chat-popup-open' : ''}`}>
        {/* Header */}
        <div className="chat-popup-header">
          <div className="chat-header-profile">
            <div className="chat-header-avatar-wrapper">
              <img src={`${import.meta.env.BASE_URL}noureddine_avatar.png`} alt="Noureddine Makboul" className="chat-header-avatar" />
              <span className="chat-online-dot"></span>
            </div>
            <div className="chat-header-info">
              <h4 className="chat-header-name">Noureddine Makboul</h4>
              <span className="chat-header-status">Lead Architect</span>
            </div>
          </div>
          <button className="chat-close-btn" onClick={() => setIsOpen(false)} aria-label="Close chat">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Body */}
        <div className="chat-popup-body">
          <div className="chat-message-bubble">
            <p className="chat-message-text">
              Salam! 👋 I'm Noureddine. How can I help you with your development or digital marketing project today?
            </p>
            <span className="chat-message-time">Just now</span>
          </div>
        </div>

        {/* Footer with WhatsApp button */}
        <div className="chat-popup-footer">
          <a 
            href="https://wa.me/212783180806?text=Salam%20Noureddine,%20I%20have%20a%20project%20in%20mind!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="chat-whatsapp-btn"
          >
            <i className="bi bi-whatsapp"></i> Start WhatsApp Chat
          </a>
        </div>
      </div>

      {/* Floating Trigger Button with User Photo */}
      <button 
        onClick={toggleChat}
        className={`chat-trigger-btn ${isOpen ? 'active' : ''}`}
        aria-label="Toggle contact widget"
      >
        <div className="chat-trigger-avatar-wrapper">
          <img src={`${import.meta.env.BASE_URL}noureddine_avatar.png`} alt="Contact Noureddine" className="chat-trigger-avatar" />
          <span className="chat-trigger-status-dot"></span>
        </div>
        {/* Chat icon overlay that shifts in when hover or toggle */}
        <div className="chat-trigger-icon-overlay">
          <i className="bi bi-chat-left-text-fill"></i>
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;
