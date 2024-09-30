import React, { useState } from 'react';
import { BuyPepe } from './BuyPepe';
import { MarqueeSection } from '../ui/Marquee';
const accordionItems = [
  {
    id: 1,
    title: 'Create Your MetaMask Wallet',
    content:
      'If you already have a compatible wallet–go to step 2. If not, we suggest Metamask. On PC, it’s a browser extension. On Mobile, it’s an app. Simply go to Download MetaMask: The Premier Blockchain Wallet App and Browser Extension.',
  },
  {
    id: 2,
    title: 'Load Wallet With Crypto',
    content:
      'Paying by card? Go to step 3. If paying by crypto, load your fave crypto onto your wallet. ETH, USDT, and BNB are accepted.',
  },
  {
    id: 3,
    title: 'Buy and Stake $PEPU',
    content:
      'Want MOAR GAINZZZZ? Connect your wallet to the website. Choose a payment method. Choose the amount of $PEPU you want to buy–then Buy or Buy and Stake for max gainz.',
  },
];
export const HowToBuy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Toggle the accordion item
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="h-full">
      <div className="hidden lg:block">
        <MarqueeSection />
      </div>

      <div className=" hidden lg:block banner-bg mx-auto  lg:px-[15px]  relative">
        <div className="mx-auto xl:container relative">
          <div className="md:py-[40px] pt-[40px] md:px-[50px] content-wrapper relative      ">
            {/* desktop  */}
            <div className="relative   content hidden lg:flex   items-stretch justify-center flex-col md:flex-row w-full  ">
              <div className="hidden lg:block">
                <BuyPepe />
              </div>
              <div className="content hidden lg:block     w-full">
                <div className="flex   flex-wrap lg:flex-nowrap w-full ">
                  <div className="about-content   pl-[3rem]  ">
                    <h2 className="text-black font-[900] 2xl:text-[48px] lg:text-[48px] text-[26px] mb-[.5rem] ">
                      How To Buy $PEPU?
                    </h2>
                    <div className="w-[593px] relative ">
                      <img src="/assets/monitor.svg" className="w-full h-auto" alt="" />
                      <div className="screen">
                        {accordionItems.map((item, index) => (
                          <div className="mb-[20px]" key={item.id}>
                            <div className="flex cursor-pointer" onClick={() => toggleAccordion(index)}>
                              <div className="icon">{item.id}</div>
                              <div className="text-[14px] xl:text-[18px] font-bold ps-[1rem] text-white">
                                {item.title}
                              </div>
                            </div>
                            <div
                              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                                activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                              }`}
                            >
                              <div className="pt-[10px] pr-[20px] pb-[2px]">
                                <p className="text-white text-[14px] xl:text-[17px]">{item.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content  lg:hidden px-[15px]    w-full">
              <div className="flex   flex-wrap lg:flex-nowrap w-full ">
                <div className="about-content     ">
                  <h2 className="text-black font-[900] 2xl:text-[48px] lg:text-[48px] text-[26px] mb-[.5rem] ">
                    How To Buy $PEPU?
                  </h2>
                  <div className="w-full relative ">
                    <img src="/assets/monitor.svg" className="w-full h-auto" alt="" />
                    <div className="screen">
                      {accordionItems.map((item, index) => (
                        <div className="mb-[20px]" key={item.id}>
                          <div className="flex cursor-pointer" onClick={() => toggleAccordion(index)}>
                            <div className="icon">{item.id}</div>
                            <div className="text-[14px] xl:text-[18px] font-bold ps-[1rem] text-white">
                              {item.title}
                            </div>
                          </div>
                          <div
                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                              activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                            }`}
                          >
                            <div className="pt-[10px] pr-[20px] pb-[2px]">
                              <p className="text-white text-[14px] xl:text-[17px]">{item.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img src="/assets/breaking-chains.gif" className="breaking_chain ng-star-inserted" alt="" />
            <div className="callout">First, he broke his chains…</div>
          </div>
        </div>
      </div>

      <div className="    lg:hidden relative">
        <div className="mx-auto xl:container relative">
          <div className="md:py-[40px] pt-[40px] md:px-[50px] content-wrapper relative  overflow-hidden     ">
            {/* desktop  */}
            <div className="relative   content hidden lg:flex   items-stretch justify-center flex-col md:flex-row w-full  ">
              <div className="hidden lg:block">
                <BuyPepe />
              </div>
              <div className="content hidden lg:block     w-full">
                <div className="flex   flex-wrap lg:flex-nowrap w-full ">
                  <div className="about-content   pl-[3rem]  ">
                    <h2 className="text-black font-[900] 2xl:text-[48px] lg:text-[48px] text-[26px] mb-[.5rem] ">
                      How To Buy $PEPU?
                    </h2>
                    <div className="w-[593px] relative ">
                      <img src="/assets/monitor.svg" className="w-full h-auto" alt="" />
                      <div className="screen">
                        {accordionItems.map((item, index) => (
                          <div className="mb-[20px]" key={item.id}>
                            <div className="flex cursor-pointer" onClick={() => toggleAccordion(index)}>
                              <div className="icon">{item.id}</div>
                              <div className="text-[14px] xl:text-[18px] font-bold ps-[1rem] text-white">
                                {item.title}
                              </div>
                            </div>
                            <div
                              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                                activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                              }`}
                            >
                              <div className="pt-[10px] pr-[20px] pb-[2px]">
                                <p className="text-white text-[14px] xl:text-[17px]">{item.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content  lg:hidden px-[15px]    w-full">
              <div className="flex   flex-wrap lg:flex-nowrap w-full ">
                <div className="about-content     ">
                  <h2 className="text-black font-[900] 2xl:text-[48px] lg:text-[48px] text-[26px] mb-[.5rem] ">
                    How To Buy $PEPU?
                  </h2>
                  <div className="w-full relative ">
                    <img src="/assets/monitor.svg" className="w-full h-auto" alt="" />
                    <div className="screen">
                      {accordionItems.map((item, index) => (
                        <div className="mb-[20px]" key={item.id}>
                          <div className="flex cursor-pointer" onClick={() => toggleAccordion(index)}>
                            <div className="icon">{item.id}</div>
                            <div className="text-[14px] xl:text-[18px] font-bold ps-[1rem] text-white">
                              {item.title}
                            </div>
                          </div>
                          <div
                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                              activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                            }`}
                          >
                            <div className="pt-[10px] pr-[20px] pb-[2px]">
                              <p className="text-white text-[14px] xl:text-[17px]">{item.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img src="/assets/breaking-chains.gif" className="breaking_chain ng-star-inserted" alt="" />
            <div className="callout">First, he broke his chains…</div>
          </div>
        </div>
      </div>
    </div>
  );
};
