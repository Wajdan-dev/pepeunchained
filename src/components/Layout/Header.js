import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../ui/Drawer';
import { header } from './Content';
import { BuyPepeModal } from '../ui/BuyPepeModal';

export const Header = ({ activeMenu, onMenuClick, menuItems, scrollToSection }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: 'English',
    image: '/assets/en.svg',
    value: 'en',
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleMenuClick = (title) => {
    onMenuClick(title);
    if (title !== 'Staking') {
      window.location.hash = header.menuItems.find((item) => item.title === title).href;
    }
  };

  return (
    <div
      className="fixed w-full z-[5] py-[12px] top-[46px] lg:top-0 bg-[#bad3c1]"
      style={{ boxShadow: '0 4px 8px #0000,0 6px 20px #0000001f' }}
    >
      <div className="xl:container mx-auto px-[15px]">
        <div className="flex justify-between items-center">
          <div className="logo lg:max-w-[243px] h-auto max-w-full">
            <a href="/">
              <img src="/assets/logo-pepe.svg" className="w-full h-auto" alt="" />
            </a>
          </div>
          <div className="hidden xl:flex items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                target={item.target}
                className={`px-[4px] ${
                  activeMenu === item.title ? 'text-customBlue2' : 'text-black'
                } font-[900] text-[14px] 2xl:text-[19px] mx-[7px] capitalize transition-all hover:text-customBlue2`}
                onClick={() => handleMenuClick(item.title)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-end">
            <span className="ms-3 flex">
              <a href="#" className="px-[4px]">
                <img src="/assets/twitter.svg" className="w-[33px] h-[33px]" alt="" />
              </a>
              <a href="#" className="px-[4px]">
                <img src="/assets/telegram.svg" className="w-[33px] h-[33px]" alt="" />
              </a>
            </span>
            <button className="rounded-[80px] font-semibold min-h-[40px] min-w-[140px] mx-2 border-[2px] border-transparent text-[16px] bg-customBlue2 text-white hover:bg-[#215bb8e6] transition-all hover:border-[#1a4993]">
              Buy $PEPU
            </button>
            {/* Language dropdown */}
            <div className="relative">
              <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                <img src={selectedLanguage.image} alt="" className="flag w-[17px] h-[17px] mx-1 rounded-[50%]" />
                <h1 className="country font-semibold uppercase text-black pt-1 text-[20px]">
                  {selectedLanguage.value}
                </h1>
                <img src="/assets/arrow-down.svg" className="ms-2 pt-1 w-[14px] h-auto" alt="" />
              </div>
              {isOpen && (
                <ul className="w-[220px] bg-[#bad3c1] max-h-[270px] overflow-hidden overflow-y-auto border-[2px] border-[#8080801c] left-auto right-0 absolute z-[1000] rounded-[.3rem] flex flex-col p-0 m-0">
                  {header.languages.map((lang) => (
                    <li
                      key={lang.value}
                      className="p-2 flex items-center cursor-pointer"
                      onClick={() => selectLanguage(lang)}
                    >
                      <img
                        src={lang.image}
                        alt=""
                        className="w-[25px] h-[25px] rounded-[50%] border-[2px] border-white mr-[10px] object-cover"
                      />
                      <span className="text-black">{lang.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="xl:hidden">
            <img src="/assets/hamburger.svg" className="cursor-pointer" alt="" onClick={openDrawer} />
          </div>
          <Drawer
            isOpens={isDrawerOpen}
            onCloses={closeDrawer}
            menuItems={menuItems}
            scrollToSection={scrollToSection}
            handleOpenModal={handleOpenModal}
          />
          <BuyPepeModal open={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>
    </div>
  );
};
