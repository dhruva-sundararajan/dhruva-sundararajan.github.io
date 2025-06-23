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
      <div className="nav-container py-3 fixed-top">
        <nav className="container mx-auto flex justify-between px-8 md:px-16">
          <div className="w-1/3 flex flex-col items-center justify-center md:mr-12">
            <ul>
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="nav-link text-3xl"
                >
                  Homepage
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col items-end justify-end md:flex-row">
            <button 
              id="mobile-menu-button" 
              className="text-2xl md:hidden"
              onClick={toggleMobileMenu}
            >
              ☰
            </button>
            <ul 
              id="mobile-menu" 
              className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-3 md:space-x-8 md:ml-6`}
            >
              <li>
                <button 
                  onClick={() => scrollToSection('recent-news')} 
                  className="nav-link text-xl md:pr-4"
                >
                  Recent News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experiences')} 
                  className="nav-link text-xl md:pl-4 md:pr-4"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('papers')} 
                  className="nav-link text-xl md:pl-4"
                >
                  Papers
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navigation; 