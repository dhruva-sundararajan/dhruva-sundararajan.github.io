import React from 'react';

const Navigation = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <section id="navigation">
      <div className="nav-container py-4 fixed-top">
        <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
          {/* Logo/Home */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="nav-link text-2xl md:text-3xl font-bold hover:text-accent-color transition-all duration-300"
            >
              Dhruva Sundararajan
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('recent-news')} 
              className="nav-link text-lg font-medium hover:text-accent-color transition-all duration-300"
            >
              Recent News
            </button>
            <button 
              onClick={() => scrollToSection('experiences')} 
              className="nav-link text-lg font-medium hover:text-accent-color transition-all duration-300"
            >
              Experiences
            </button>
            <button 
              onClick={() => scrollToSection('papers')} 
              className="nav-link text-lg font-medium hover:text-accent-color transition-all duration-300"
            >
              Publications
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              onClick={toggleMobileMenu}
              className="text-2xl hover:bg-white hover:bg-opacity-10 rounded-lg p-2 transition-all duration-300"
              aria-label="Toggle mobile menu"
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
            <div className="container mx-auto px-4 pb-4">
              <div id="mobile-menu" className="mt-2">
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => scrollToSection('recent-news')} 
                      className="nav-link w-full text-left py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                    >
                      📰 Recent News
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('experiences')} 
                      className="nav-link w-full text-left py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                    >
                      💼 Experiences
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('papers')} 
                      className="nav-link w-full text-left py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                    >
                      📚 Publications
                    </button>
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