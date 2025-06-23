import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentPath }) => {
  const location = useLocation();

  return (
    <section id="navigation">
      <div className="nav-container py-2 fixed-top" style={{ minHeight: '48px' }}>
        <nav className="container mx-auto flex justify-between items-center px-2 md:px-6 lg:px-10" style={{ minHeight: '48px' }}>
          {/* Logo/Home */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="nav-link text-xl md:text-2xl font-bold hover:text-accent-color transition-all duration-300 homepage-title"
              style={{ padding: 0, margin: 0 }}
            >
              Homepage
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/news"
              className={`nav-link text-base font-medium hover:text-accent-color transition-all duration-300 ${
                location.pathname === '/news' ? 'nav-active' : ''
              }`}
            >
              Recent News
            </Link>
            <Link 
              to="/experiences"
              className={`nav-link text-base font-medium hover:text-accent-color transition-all duration-300 ${
                location.pathname === '/experiences' ? 'nav-active' : ''
              }`}
            >
              Experiences
            </Link>
            <Link 
              to="/publications"
              className={`nav-link text-base font-medium hover:text-accent-color transition-all duration-300 ${
                location.pathname === '/publications' ? 'nav-active' : ''
              }`}
            >
              Publications
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              onClick={toggleMobileMenu}
              className="text-xl hover:bg-white hover:bg-opacity-10 rounded-lg p-1 transition-all duration-300"
              aria-label="Toggle mobile menu"
              style={{ minHeight: '36px', minWidth: '36px' }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div 
            className={`transition-all duration-300 ease-in-out ${
              mobileMenuOpen 
                ? 'max-h-64 opacity-100 visible' 
                : 'max-h-0 opacity-0 invisible'
            } overflow-hidden`}
          >
            <div className="container mx-auto px-2 pb-2">
              <div id="mobile-menu" className="mt-1">
                <ul className="space-y-1">
                  <li>
                    <Link 
                      to="/news"
                      onClick={closeMobileMenu}
                      className={`nav-link w-full text-left py-2 px-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 block ${
                        location.pathname === '/news' ? 'nav-active' : ''
                      }`}
                    >
                      Recent News
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/experiences"
                      onClick={closeMobileMenu}
                      className={`nav-link w-full text-left py-2 px-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 block ${
                        location.pathname === '/experiences' ? 'nav-active' : ''
                      }`}
                    >
                      Experiences
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/publications"
                      onClick={closeMobileMenu}
                      className={`nav-link w-full text-left py-2 px-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 block ${
                        location.pathname === '/publications' ? 'nav-active' : ''
                      }`}
                    >
                      Publications
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation; 