import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";
import { useLanguage } from '../context/LanguageContext';
import { T } from './Translation';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
};

// Function to scroll to specific sections
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
  // Use the language context
  const { language, changeLanguage } = useLanguage();
  
  // Map language codes to display names
  const languageNames = {
    en: 'English',
    es: 'Español',
    zh: '中文'
  };

  // Add scroll event listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle clicks outside the language dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownOpen && !event.target.closest('.language-switcher')) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [languageDropdownOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLanguageDropdown = (e) => {
    e.stopPropagation();
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  // Modified to use language codes and changeLanguage
  const selectLanguage = (langCode) => {
    changeLanguage(langCode);
    setLanguageDropdownOpen(false);
  };

  // Close mobile menu when clicking on a link
  const handleNavLinkClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      scrollToTop();
    }
  };

  return (
    <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="logo">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavLinkClick('hero'); }}>
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=222,fit=crop,q=95/Aq2W0EP68Qc2ZLxz/company-logo-AE0PyEExapfNNOWP.png" alt="CreatefyAI Logo" className="logo-image" />
          </a>
        </div>

        <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavLinkClick('hero'); }}>
                <T keyPath="nav.home" />
              </a>
            </li>
            <li>
              <a href="#strategy-grid" onClick={(e) => { e.preventDefault(); handleNavLinkClick('strategy-grid-section'); }}>
                <T keyPath="nav.solutions" />
              </a>
            </li>
            <li>
              <a href="#team-info" onClick={(e) => { e.preventDefault(); handleNavLinkClick('team-info-section'); }}>
                <T keyPath="nav.about" />
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}>
                <T keyPath="nav.contact" />
              </a>
            </li>
            <li className="language-switcher">
              <div className="selected-language" onClick={toggleLanguageDropdown}>
                {languageNames[language]} <span className="dropdown-arrow">▼</span>
              </div>
              {languageDropdownOpen && (
                <div className="language-dropdown">
                  <div className="language-option" onClick={() => selectLanguage('en')}>
                    English
                  </div>
                  <div className="language-option" onClick={() => selectLanguage('es')}>
                    Español
                  </div>
                  <div className="language-option" onClick={() => selectLanguage('zh')}>
                    中文
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;