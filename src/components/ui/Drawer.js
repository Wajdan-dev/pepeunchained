// Drawer.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { header } from '../Layout/Content';
import { BuyPepeModal } from './BuyPepeModal';

const Drawer = ({ isOpens, onCloses, menuItems, scrollToSection, handleOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath, 'currentPath');

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: 'English',
    image: '/assets/en.svg',
    value: 'en',
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <div
        className={`fixed top-[40px] right-0 h-full w-full bg-[#bad3c1] z-[9999] transform ${
          isOpens ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Icon */}
        <div className="flex relative justify-between items-center p-[15px]">
          <a href="/home">
            <img src="/assets/logo-pepe.svg" className="w-full h-auto" alt="" />
          </a>
          <button onClick={onCloses}>
            <img src="/assets/close.svg" className="cursor-pointer" alt="" />
          </button>
        </div>

        <div className="p-[20px]">
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <>
                {item.title == 'Staking' ? (
                  <a
                    href="/dashboard"
                    className={`px-[4px] text-center text-black font-[500] text-[18px] mx-[7px] capitalize transition-all hover:bg-[#2eb335] w-full p-[5px] mb-[20px]`}
                  >
                    Staking
                  </a>
                ) : currentPath == '/dashboard' ? (
                  <a
                    href={item.href}
                    className={`px-[4px] text-center text-black font-[500] text-[18px] mx-[7px] capitalize transition-all hover:bg-[#2eb335] w-full p-[5px] mb-[20px]`}
                  >
                    {item.title}
                  </a>
                ) : item.title == 'White Paper' ? (
                  <a
                    href="https://pepeunchained.com/whitepaper.pdf"
                    target="_blank"
                    className={`px-[4px] text-center text-black font-[500] text-[18px] mx-[7px] capitalize transition-all hover:bg-[#2eb335] w-full p-[5px] mb-[20px]`}
                  >
                    White Paper
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      scrollToSection(item.href.substring(1)); // Pass section ID
                      onCloses(); // Close drawer after selection
                    }}
                    className={`px-[4px] text-black font-[500] text-[18px] mx-[7px] capitalize transition-all hover:bg-[#2eb335] w-full p-[5px] mb-[20px]`}
                  >
                    {item.title}
                  </button>
                )}
              </>
            ))}
          </div>

          <span className="ms-3 flex">
            <a href="#" className="px-[4px]">
              <img src="/assets/twitter.svg" className="w-[33px] h-[33px]" alt="" />
            </a>
            <a href="#" className="px-[4px]">
              <img src="/assets/telegram.svg" className="w-[33px] h-[33px]" alt="" />
            </a>
          </span>

          <div className="relative my-3">
            <button
              className="rounded-[80px] flex justify-between px-[14px] py-[10px] items-center font-semibold w-full mt-3 mx-2 border-[1px] border-customBlue2 text-[16px] bg-transparent text-black transition-all"
              onClick={toggleDropdown} // Toggle dropdown on click
            >
              <span className="flex items-center">
                <img src={selectedLanguage.image} alt="" className="flag w-[17px] h-[17px] mx-1 rounded-[50%]" />
                <h1 className="country font-semibold uppercase text-black pt-1 text-[20px]">
                  {selectedLanguage.value}
                </h1>
              </span>
              <img src="/assets/arrow-down.svg" className="ms-2 pt-1 w-[14px] h-auto" alt="" />
            </button>

            {isOpen && (
              <ul className="w-full bg-[#bad3c1] max-h-[270px] overflow-hidden overflow-y-auto border-[2px] border-[#8080801c] left-auto right-0 absolute z-[1000] rounded-[.3rem] flex flex-col p-0 m-0">
                {header.languages.map((lang) => (
                  <li
                    key={lang.value}
                    className="p-2 flex items-center cursor-pointer"
                    onClick={() => selectLanguage(lang)} // Select language on click
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

          <button
            className="rounded-[80px] font-semibold min-h-[30px] w-full mt-3 mx-2 border-[2px] border-black text-[16px] bg-customGreen2 text-black transition-all"
            onClick={() => {
              handleOpenModal();
            }}
          >
            Buy $PEPU
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onCloses}></div>}
    </>
  );
};

export default Drawer;
