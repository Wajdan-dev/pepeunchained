// Home.js
import React, { useState, useRef, useEffect } from 'react';
import { MainComponent } from './MainComponent';
import { AboutComponent } from './AboutComponent';
import { HowToBuy } from './HowToBuy';
import { Tokenomics } from './Tokenomics';
import { RoadMap } from './RoadMap';
import { Faq } from './Faq';
import { Header } from '../Layout/Header';
import { FwbComponent } from './FwbComponent';

const components = [
  { title: 'Main', component: <MainComponent id="main" /> },
  { title: 'About', component: <AboutComponent id="about" /> },
  { title: 'How To Buy', component: <HowToBuy id="how-to-buy" /> },
  { title: 'Tokenomics', component: <Tokenomics id="tokenomics" /> },
  { title: 'Roadmap', component: <RoadMap id="roadmap" /> },
  { title: 'FWB', component: <FwbComponent id="fwb" /> },
  { title: 'FAQs', component: <Faq id="faqs" /> },
];

const menuItems = [
  { title: 'Staking', href: '/dashboard', active: false },
  { title: 'About', href: '#about', active: false },
  { title: 'How To Buy', href: '#how-to-buy', active: false },
  { title: 'Tokenomics', href: '#tokenomics', active: false },
  { title: 'Roadmap', href: '#roadmap', active: false },
  { title: 'FWB', href: '#fwb', active: false },
  { title: 'FAQs', href: '#faqs', active: false },
  { title: 'White Paper', href: 'https://pepeunchained.com/whitepaper.pdf', target: '_blank' },
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState('Home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const index = components.findIndex((item) => item.title.toLowerCase().replace(/ /g, '-') === hash);
      if (index !== -1) {
        scrollToSection(index);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToSection2 = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (index) => {
    setCurrentIndex(index);
    containerRef.current.scrollTo({
      left: index * containerRef.current.clientWidth,
      behavior: 'smooth',
    });
    setActiveMenu(components[index].title);
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
    if (menuItem !== 'Staking') {
      window.location.hash = menuItems.find((item) => item.title === menuItem).href;
    }
  };

  return (
    <>
      <Header
        activeMenu={activeMenu}
        onMenuClick={handleMenuClick}
        menuItems={menuItems}
        scrollToSection={scrollToSection2}
      />

      <div className="relative pt-[100px] lg:pt-[70px]">
        {/* Container for large screens */}
        <div ref={containerRef} className="hidden lg:flex lg:overflow-hidden lg:snap-x lg:snap-mandatory lg:w-full">
          {components.map((item, index) => (
            <div key={index} className="flex-shrink-0 lg:w-full lg:snap-center">
              {item.component}
            </div>
          ))}
        </div>

        {/* Container for small screens */}
        <div className="block lg:hidden">
          {components.map((item, index) => (
            <div key={index} id={item.title.toLowerCase().replace(/ /g, '-')} className="w-full">
              {item.component}
            </div>
          ))}
        </div>

        <div
          className={`arrow-left absolute hidden lg:block z-[2] left-[1%] top-[50%] cursor-pointer ${
            currentIndex === 0 ? 'opacity-0' : ''
          }`}
          onClick={() => scrollToSection(currentIndex - 1)}
        >
          <img
            src="/assets/arrow-left.svg"
            alt="Previous"
            style={{ filter: 'drop-shadow(0px 0 20px rgba(0,0,0,.8))' }}
          />
        </div>
        <div
          className={`arrow-right absolute hidden lg:block right-[1%] top-[50%] cursor-pointer ${
            currentIndex === components.length - 1 ? 'opacity-0' : ''
          }`}
          onClick={() => scrollToSection(currentIndex + 1)}
        >
          <img src="/assets/arrow-right.svg" alt="Next" style={{ filter: 'drop-shadow(0px 0 20px rgba(0,0,0,.8))' }} />
        </div>
      </div>
    </>
  );
};
