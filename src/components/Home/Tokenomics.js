import React from 'react';
import { BuyPepe } from './BuyPepe';
import { MarqueeSection } from '../ui/Marquee';

const contentArray = [
  {
    heading: 'Presale 20%',
    text: '20% is for the frens that get in early, and help Pepe break free of his chains.',
  },
  {
    heading: 'Staking 30%',
    text: 'Since rewards are DOUBLED on Layer 2, a fat stack is for staking rewards.',
  },
  {
    heading: 'Marketing 20%',
    text: 'Ser, Pepe needs no marketing. But he’s gonna do it anyway. BIGTIME.',
  },
  {
    heading: 'Liquidity 10%',
    text: 'Fat liquidity pools for decentralized exchanges. Ape in freely.',
  },
  {
    heading: 'Project Finance 10%',
    text: 'Takes an army to create and run a chain. This makes sure it runs smoothly.',
  },
  {
    heading: 'Chain Inventory 10%',
    text: 'An allocation for the $PEPU Layer 2 chain.',
  },
];

export const Tokenomics = () => {
  return (
    <div className="h-full">
      {/* Marquee section for large screens */}
      <div className="hidden lg:block">
        <MarqueeSection />
      </div>

      {/* Tokenomics content */}
      <div className="  hidden lg:block banner-bg mx-auto overflow-hidden lg:px-[15px] relative">
        <div className="content-wrapper mx-auto xl:container py-[40px] md:px-[50px] relative">
          <div className="content hidden lg:flex w-full relative">
            {/* BuyPepe section for large screens */}
            <div className="">
              <BuyPepe />
            </div>

            {/* Tokenomics details */}
            <div className="hidden lg:block" style={{ width: 'calc(100% - 460px)' }}>
              <div className="about-content pl-[3rem]">
                <h2 className="text-black font-bold text-[26px] lg:text-[48px] 2xl:text-[48px] mb-[0.5rem]">
                  Pepe Unchained Tokenomics
                </h2>
                <div className="border-[4px] border-black rounded-[32px] py-[40px] px-[30px] bg-customBlue2">
                  <h3 className="text-white text-[24px] mb-4 font-medium">
                    The engine that makes the $PEPU machine run.
                  </h3>
                  <div className="grid grid-cols-12 gap-[1.5rem]">
                    {contentArray.map((content, index) => (
                      <div key={index} className="col-span-4">
                        <div className="h-full bg-[#fff3] rounded-[16px] p-[15px]">
                          <h4 className="text-white text-[15px] lg:text-[20px] mb-[0.5rem] font-bold">
                            {content.heading}
                          </h4>
                          <p className="text-white text-[12px] md:text-[16px]">{content.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-white font-bold text-[18px] mt-3 lg:text-end mb-0">
                    Total Token Amount: 8,000,000,000
                  </p>
                  <a href="#" className="text-white font-bold relative text-[18px] underline">
                    Read $PEPU Whitepaper
                  </a>
                </div>
              </div>
            </div>

            {/* Brain image */}
            <img src="/assets/brain-img.svg" className="brain-img" alt="Brain" />
            <div className="bottom-info3 flex items-center justify-end flex-wrap lg:flex-nowrap">
              <p>
                Then built his own: Pepe Unchained. A state-of-the-art Layer 2 solution that rewarded him with freedom…
              </p>
              <img src="/assets/big-brain.gif" className="pepe-tokenomics" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* mobile  */}

      {/* Tokenomics details */}
      <div className=" relative h-full overflow-hidden min-h-[50px]  lg:hidden">
        <div className="about-content  ">
          <h2 className="text-black px-[15px] font-bold text-[26px] lg:text-[48px] 2xl:text-[48px] mb-[0.5rem]">
            Pepe Unchained Tokenomics
          </h2>
          <div className="px-[15px]">
            <div className="border-[4px]  border-black rounded-[32px] pl-[20px] py-[20px] bg-customBlue2">
              <h3 className="text-white text-[24px] mb-4 font-medium">The engine that makes the $PEPU machine run.</h3>
              <div className="flex  overflow-hidden overflow-x-auto hidden-scrol">
                {contentArray.map((content, index) => (
                  <div key={index} className=" ">
                    <div className="h-full w-[258px] mx-[5px] bg-[#fff3] rounded-[16px] p-[15px]">
                      <h4 className="text-white text-[15px] lg:text-[20px] mb-[0.5rem] font-bold">{content.heading}</h4>
                      <p className="text-white text-[12px] md:text-[16px]">{content.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white font-bold text-[18px] mt-3 lg:text-end mb-0">
                Total Token Amount: 8,000,000,000
              </p>
            </div>
            <div
              href="#"
              className="text-customBlue2 font-bold ml-[15px] pt-[30px] relative text-[18px] w-[50%] underline"
            >
              Read $PEPU Whitepaper
            </div>
          </div>
        </div>
        {/* Brain image */}
        <div className="bottom-info3 flex items-center justify-end flex-wrap lg:flex-nowrap">
          <p>Then built his own: Pepe Unchained. A state-of-the-art Layer 2 solution that rewarded him with freedom…</p>
          <img src="/assets/big-brain.gif" className="pepe-tokenomics" alt="" />
        </div>
      </div>
    </div>
  );
};
