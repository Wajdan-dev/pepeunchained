import React, { useState } from 'react';
import BarChartComponent from '../ui/BarChart';
import { Modal } from '../ui/Modal';
import { Header } from '../Layout/Header';

const cardData = [
  {
    title1: 'Staked Balance',
    value1: '0',
    unit1: '$PEPU',
    title2: 'Your stakeable',
    value2: '0',
    unit2: '$PEPU',
    buttonText: 'Buy And Stake',
    buttonColor: '#BAD3C1',
    buttonHoverColor: '#c4daca',
    buttonBorderColor: 'transparent',
  },
  {
    title1: '% of Pool',
    value1: '0%',
    title2: 'Total Staked',
    value2: '849,702,617',
    unit2: '$PEPU',
    infoIcon: '/assets/info-icon.svg',
  },
  {
    title1: 'Estimated Rewards',
    value1: '188%',
    unit1: 'p/a',
    listItems: ['Rewards rate is dynamic', 'Monthly = Rewards % / 12', 'Daily = Rewards % / 365'],
  },
  {
    title1: 'Current Rewards',
    value1: '608.82',
    unit1: 'Per ETH Block',
  },
  {
    title1: 'Total Rewards',
    value1: '0',
    unit1: '$PEPU',
    buttonText: 'Claim Rewards',
    buttonColor: '#BAD3C1',
    buttonHoverColor: '#c4daca',
    buttonBorderColor: 'transparent',
  },
];

const menuItems = [
  { title: 'Staking', href: '/dashboard', active: false },
  { title: 'About', href: '/home#about', active: false },
  { title: 'How To Buy', href: '/home#how-to-buy', active: false },
  { title: 'Tokenomics', href: '/home#tokenomics', active: false },
  { title: 'Roadmap', href: '/home#roadmap', active: false },
  { title: 'FAQs', href: '/home#faqs', active: false },
  { title: 'White Paper', href: 'whitepaper.pdf', target: '_blank' },
];

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenWithdrawModal = () => setIsWithdrawModalOpen(true);
  const handleCloseWithdrawModal = () => setIsWithdrawModalOpen(false);

  const handleOpenRewardModal = () => setIsRewardModalOpen(true);
  const handleCloseRewardModal = () => setIsRewardModalOpen(false);

  // Function to handle menu item click and update the active state
  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const scrollToSection2 = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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

      <div className="pt-[120px] pb-[100px]">
        <div className="xl:container px-[15px] mx-auto">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-[1.5rem]">
            <div className="">
              <h3 className="text-black text-[45px] font-bold pb-[1rem] pe-[.5rem]">Welcome to $PEPU Staking</h3>
              <p className="text-[18px] text-black">
                The distribution of $PEPU token rewards will occur at a rate of 608.82 $PEPU tokens per ETH block. These
                rewards will be disbursed over 2 years and will be claimable once claim goes live.
              </p>
            </div>
            <div className="flex lg:w-[357px] ml-auto">
              <button
                onClick={handleOpenWithdrawModal}
                className="min-w-[140px] w-full bg-customBlue2 transition-all hover:bg-[#215bb8e6]  text-white rounded-[80px] border-[2px] border-transparent hover:border-[#1a4993] py-[4px] px-[15px] min-h-[40px] ml-auto capitalize text-[16px] font-semibold "
              >
                Withdraw Staked Tokens
              </button>
            </div>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[20px]">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="p-[20px] rounded-[20px] bg-customBlue2 w-full flex flex-col items-start border-[4px] border-black"
                  style={{ boxShadow: '0 16px 40px #0c5d9e1a,0 10px 32px #2722241a' }}
                >
                  <div className={`w-full ${card.buttonText && 'h-full'}`}>
                    <div className="flex justify-between w-full">
                      <span className="text-white uppercase mb-1">{card.title1}</span>
                      {card.infoIcon && (
                        <img src={card.infoIcon} className="cursor-pointer" alt="Info Icon" onClick={handleOpenModal} />
                      )}
                    </div>
                    <h2 className="mb-3 mt-1 text-[22px] flex items-start text-[#2eb335] font-bold">
                      {card.value1} <span className="text-[16px] inline-block ms-2 text-[#2eb335]">{card.unit1}</span>
                    </h2>
                  </div>
                  {card.title2 && (
                    <div className="">
                      <span className="text-white uppercase mb-1 inline-block">{card.title2}</span>
                      <h2 className="mb-3 mt-1 text-[22px] flex items-start text-[#2eb335] font-bold">
                        {card.value2} <span className="text-[16px] inline-block ms-2 text-[#2eb335]">{card.unit2}</span>
                      </h2>
                    </div>
                  )}
                  {card.listItems && (
                    <ul className="p-0 mt-3 mb-0">
                      {card.listItems.map((item, i) => (
                        <li key={i} className="flex text-[10px] font-normal mb-[3px] text-[#bad3c1]">
                          <img src="/assets/arrow-icon-right.svg" className="me-1" alt="" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {card.buttonText && (
                    <button
                      onClick={() => {
                        if (card.buttonText === 'Claim Rewards') {
                          handleOpenRewardModal();
                        }
                      }}
                      className="border-[2px]   flex justify-center items-center border-black rounded-[80px] font-semibold w-full min-w-[120px] min-h-[40px] uppercase text-[1rem] mt-3 bg-[#BAD3C1] hover:bg-[#c4daca] hover:border-transparent transition-all "
                    >
                      {card.buttonText}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[1.5rem] items-center mt-5">
            <div className="col-span-12 lg:col-span-9">
              <div
                className="chart-wraper rounded-[20px] border-[4px] border-black bg-customBlue2 min-h-[431px] "
                style={{ boxShadow: '0 6px 5px #00000008' }}
              >
                <div className="flex justify-center px-3">
                  <h4 className="text-white font-normal mb-3 mt-4 text-[14px] ">Total Supply</h4>
                </div>
                <div className="w-full">
                  <BarChartComponent />
                </div>
              </div>
              <div className="mt-2">
                <p className="text-[14px] text-black flex items-center gap-1">
                  Staking powered by
                  <a href="#" className="">
                    <img src="/assets/W3P_Black.svg" className="max-w-[136px] h-auto" alt="" />
                  </a>
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 hidden lg:block">
              <img src="/assets/ai-chip.svg" className="max-w-full  h-auto mx-auto" alt="" />
            </div>
          </div>
        </div>
        {/* Modal */}

        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          desc={`   $PEPU staking rewards are distributed at a rate of 608.82 $PEPU per ETH block. Your percentage of the
                pool will determine what percentage of the 608.82 $PEPU tokens you receive.`}
        />
        <Modal open={isRewardModalOpen} onClose={handleCloseRewardModal} desc={'Claim is not live yet'} />

        {isWithdrawModalOpen && (
          <div
            className="fixed z-[999] inset-0 bg-[#74C37B] bg-opacity-70 flex justify-center items-center"
            onClick={handleCloseWithdrawModal}
          >
            <div
              className="bg-[#215bb8]   rounded-[10px] transition-all   min-w-[25em] max-w-lg"
              style={{ boxShadow: '0 10px 10px 1px #0000004d' }}
              onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
            >
              <div className="flex flex-col  items-center w-full">
                <div
                  className="py-[12px] px-[15px] w-full bg-[#0c2b5e]  flex items-center justify-center relative "
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                >
                  <h4 className="text-[1rem] text-white font-medium text-center ">Withdraw Staked Tokens</h4>
                  <img
                    src="/assets/close-white.svg"
                    className="absolute right-[20px] w-[12px] h-auto cursor-pointer"
                    onClick={handleCloseWithdrawModal}
                    alt=""
                  />
                </div>
                <div className="py-[12px] px-[15px]">
                  <div className="text-center mb-4">
                    <p className="text-white uppercase mb-[.25rem]  ">Staked Balance</p>
                    <h2 className="text-[25px] text-white font-bold mt-[.5rem] flex justify-center items-start">
                      0 <span className="inline-block text-white ms-2 text-[12px] font-bold">$PEPU</span>
                    </h2>
                  </div>
                  <div className="flex gap-[1rem]">
                    <button
                      className="border-[2px]   flex justify-center items-center border-black rounded-[80px] font-semibold w-full min-w-[180px] min-h-[40px] uppercase text-[1rem] mt-3 bg-[#BAD3C1] hover:bg-[#c4daca] hover:border-transparent transition-all "
                      onClick={handleCloseWithdrawModal}
                    >
                      Cancel
                    </button>

                    <button
                      className="    flex justify-center items-center   rounded-[80px] font-semibold w-full min-w-[180px] min-h-[40px] uppercase text-[1rem] mt-3 bg-[#2eb335]  hover:border-transparent transition-all "
                      disabled
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
