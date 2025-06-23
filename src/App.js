import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import RecentNews from './components/RecentNews';
import Experiences from './components/Experiences';
import Papers from './components/Papers';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
      <Home />
      <RecentNews />
      <Experiences />
      <Papers />
    </div>
  );
}

export default App; 