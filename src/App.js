import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Header } from './components/Layout/Header';
import { MarqueeSection } from './components/ui/Marquee';
import { Dashboard } from './components/Dashboard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  // State to track the active menu item
  const [activeMenu, setActiveMenu] = useState('Home');

  // Function to handle menu item click and update the active state
  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <Router>
      <div className="lg:hidden">
        <MarqueeSection />
      </div>
      {/* <Header activeMenu={activeMenu} onMenuClick={handleMenuClick} /> */}
      <Routes>
        <Route path="/" element={<Home setActiveMenu={setActiveMenu} />} />
        <Route path="/home" element={<Home setActiveMenu={setActiveMenu} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
