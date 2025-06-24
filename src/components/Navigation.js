import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentPath }) => {
  const location = useLocation();

  return (
    <section id="navigation">
      <div className="nav-container fixed-top">
        <nav>
          {/* Logo/Home */}
          <div className="nav-logo">
            <Link 
              to="/" 
              className="nav-link homepage-title"
            >
              Homepage
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            <Link 
              to="/news"
              className={`nav-link${location.pathname === '/news' ? ' nav-active' : ''}`}
            >
              Recent News
            </Link>
            <Link 
              to="/experiences"
              className={`nav-link${location.pathname === '/experiences' ? ' nav-active' : ''}`}
            >
              Experiences
            </Link>
            <Link 
              to="/publications"
              className={`nav-link${location.pathname === '/publications' ? ' nav-active' : ''}`}
            >
              Publications
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="nav-mobile-btn">
            <button 
              id="mobile-menu-button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className="nav-mobile-menu" style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
          <ul>
            <li>
              <Link 
                to="/news"
                onClick={closeMobileMenu}
                className={`nav-link${location.pathname === '/news' ? ' nav-active' : ''}`}
              >
                📰 Recent News
              </Link>
            </li>
            <li>
              <Link 
                to="/experiences"
                onClick={closeMobileMenu}
                className={`nav-link${location.pathname === '/experiences' ? ' nav-active' : ''}`}
              >
                💼 Experiences
              </Link>
            </li>
            <li>
              <Link 
                to="/publications"
                onClick={closeMobileMenu}
                className={`nav-link${location.pathname === '/publications' ? ' nav-active' : ''}`}
              >
                📚 Publications
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navigation; 