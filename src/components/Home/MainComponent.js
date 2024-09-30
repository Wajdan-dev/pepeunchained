import React from 'react';
import { BuyPepe } from './BuyPepe';
import { MarqueeSection } from '../ui/Marquee';

const unchain = [
  {
    message: 'Instant bridging between ETH and Pepe Chain',
  },
  {
    message: 'Lowest transaction fees',
  },
  {
    message: 'Higher Volume Capacity — 100x faster than ETH',
  },
  {
    message: 'Dedicated Block Explorer',
  },
];

export const MainComponent = () => {
  return (
    <div className="">
      <div className="hidden lg:block">
        <MarqueeSection />
      </div>

      <div className="  banner-bg     px-[15px]  ">
        <div className="mx-auto xl:container relative">
          <img
            src="/assets/cctv.svg"
            className="absolute top-[12%] left-[-8%] z-[2] w-[200px] h-auto hidden lg:block"
            alt=""
          />
          <div className="py-[40px] md:px-[50px] content-wrapper  overflow-hidden  flex">
            <div className="relative flex   items-stretch justify-center flex-col md:flex-row w-full  ">
              <BuyPepe />
              <div className="content hidden lg:block   lg:pl-[3rem] w-full">
                <div className="flex items-start">
                  <div className="w-full order-2 lg:order-1 ">
                    <h2 className="text-black font-[900] 2xl:text-[45px] lg:text-[40px] text-[26px]  ">
                      PEPE NOW HAS HIS
                    </h2>
                    <h1 className="stroke-text text-[60px]">OWN BLOCKCHAIN!</h1>
                    <p className="text-black text-[16px] max-w-[450px] mb-[1rem] mt-[.5rem] block ">
                      Congrats! You're early to the party! Buy and Stake now during Presale to max out your rewards
                      before the price skyrockets!
                    </p>
                    <h1 className="stroke-text text-[27px]">Pepe Unchained</h1>
                    <p className=" text-black text-[16px] font-bold xl:mb-[1rem] ">
                      Better speed. Better gains. Same delicious Pepe flavor.
                    </p>
                    {unchain.map((items, index) => (
                      <div key={index} className="flex mb-[.5rem] items-center ms-1 ">
                        <img src="/assets/point.svg" alt="" />
                        <p
                          className="border-[2px] border-[#3068b9] bg-[#58a0e2] rounded-[100px] ms-1 text-white font-bold "
                          style={{ padding: '7px 15px 3px' }}
                        >
                          {items.message}
                        </p>
                      </div>
                    ))}
                    <a href="#about">
                      <div className="max-w-[370px] mt-[1.5rem] hidden lg:block  relative  cursor-pointer">
                        <p className="mb-0 wtf">WTF is $PEPU?</p>
                        <img src="/assets/learn-more.svg" className="max-w-full h-auto cursor-pointer" alt="" />
                        <p className="mb-0 learn-more cursor-pointer">Learn More</p>
                      </div>
                    </a>
                  </div>

                  <div className="reward-content text-center order-1 lg:order-2 mt-0 lg:mt-4">
                    <h1 className="stroke-text2 text-[33px] text-white">Rewards p/a</h1>
                    <h1 className="stroke-text text-[47px] ">200%</h1>
                  </div>
                </div>
                <img src="/assets/hero.gif" className="anime-img" alt="" />
              </div>
              <p className="hidded lg:block bottom-info">
                Pepe was a prisoner, chained to his old, clunky Layer ONE server room. Until…
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content px-[15px] lg:hidden  relative overflow-hidden   lg:pl-[3rem] w-full">
        <div className="flex items-start">
          <div className="w-full order-2 lg:order-1 ">
            <div className="  lg:hidden mb-[30px] max-w-[388px] w-full ">
              <a
                href="#"
                className="px-[15px]   text-[24px] relative max-w-[216px] mx-auto flex   mt-[65px] rounded-[80px] min-w-[216px] border-[4px] items-center justify-center border-black min-h-[60px] bg-customGreen2 font-semibold  hover:bg-[#4dbe53] hover:border-[#4dbe53] transition-all    "
              >
                Token Audits
                <img src="/assets/right-arrow.svg" className="ms-2 ps-1 " alt="" />
              </a>
              <div
                className="border-[4px] border-black bg-customBlue1 max-w-[216px] h-[90px] items-end pb-3 px-2 rounded-[24px] flex gap-[10px] border-t-0  "
                style={{ margin: '-43px auto 0' }}
              >
                <a href="#">
                  <img src="/assets/coinsult.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/assets/solidproof.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="    text-center  flex flex-col items-center    mt-4">
              <h1 className="stroke-text2 text-[33px] block text-white">Rewards p/a</h1>
              <h1 className="stroke-text text-[47px] ">200%</h1>
            </div>
            <h2 className="text-black font-[900] 2xl:text-[45px] lg:text-[40px] text-[26px]  ">PEPE NOW HAS HIS</h2>
            <h1 className="stroke-text text-[35px] md:text-[60px]">OWN BLOCKCHAIN!</h1>
            <p className="text-black text-[16px] max-w-[450px] mb-[1rem] mt-[.5rem] block ">
              Congrats! You're early to the party! Buy and Stake now during Presale to max out your rewards before the
              price skyrockets!
            </p>
            <h1 className="stroke-text text-[27px]">Pepe Unchained</h1>
            <p className=" text-black text-[16px] font-bold xl:mb-[1rem] ">
              Better speed. Better gains. Same delicious Pepe flavor.
            </p>
            {unchain.map((items, index) => (
              <div key={index} className="flex mb-[.5rem] items-center ms-1 ">
                <img src="/assets/point.svg" alt="" />
                <p
                  className="border-[2px] border-[#3068b9] bg-[#58a0e2] rounded-[100px] text-[10px]  ms-1 text-white font-bold "
                  style={{ padding: '7px 15px 3px' }}
                >
                  {items.message}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img src="/assets/hero.gif" className="anime-img" alt="" />
      </div>
    </div>
  );
};
