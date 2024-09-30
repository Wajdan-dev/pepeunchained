import React from 'react';
import { BuyPepe } from './BuyPepe';
import { MarqueeSection } from '../ui/Marquee';
import StepSlider from '../ui/Slider';

export const RoadMap = () => {
  return (
    <div className="h-full">
      {/* Marquee section for large screens */}
      <div className="hidden lg:block">
        <MarqueeSection />
      </div>

      {/* Tokenomics content */}
      <div className="  hidden lg:block banner-bg mx-auto overflow-hidden lg:px-[15px] relative">
        <div className="mx-auto xl:container relative">
          <div className="content-wrapper py-[40px] md:px-[50px] relative">
            <div className="content hidden lg:flex w-full relative">
              {/* BuyPepe section for large screens */}
              <div className="">
                <BuyPepe />
              </div>

              {/* Tokenomics details */}
              <div className="hidden lg:block" style={{ width: 'calc(100% - 460px)' }}>
                <div className="about-content pl-[3rem]">
                  <div className="mb-3 flex items-center">
                    <div className="">
                      <h2 className="text-black font-bold text-[26px] lg:text-[48px] 2xl:text-[48px] mb-[0.5rem]">
                        Pepe Unchained Roadmap
                      </h2>
                      <div className="box box-1 border-[4px] border-black rounded-[32px] px-[20px] py-[24px] bg-customBlue2 ">
                        <h4 className="font-bold text-[18px] 2xl:text-[24px] text-white ">
                          Step 1 - Make Pepe Great Again
                        </h4>
                        <ul className="mb-0 list-disc text-white pl-3">
                          <li className="text-[16px] leading-[22.09px] ">
                            The time has come for Pepe to take a giant leap into his ultra-based future. By inseminating
                            the world with L2 technology, Pepe Unchained becomes an absolute Giga Brain. He’s now ready
                            to release his rewards.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <img src="/assets/laptop.svg" className="max-w-[225px] ml-[-30px] h-auto " alt="" />
                  </div>
                  <div className="flex gap-3 w-full">
                    <div className="box box-2 max-w-[390px] border-[4px] border-black rounded-[32px] px-[20px] py-[24px] bg-customBlue2 ">
                      <h4 className="font-bold text-[18px] 2xl:text-[24px] text-white ">Step 2 - Coin Eruption</h4>
                      <ul className="mb-0 list-disc text-white pl-3">
                        <li className="text-[16px] leading-[22.09px] ">
                          With a burning desire in his loins, Pepe Unchained erupts during presale, offering DOUBLE the
                          staking rewards. This is an explosion of Pepe juice all over the blockchain.
                        </li>
                      </ul>
                    </div>
                    <img src="/assets/ai-chip.svg" className="w-[210px] h-auto " alt="" />
                  </div>
                  <div className="flex gap-3 w-full">
                    <div className="box box-3 max-w-[380px] mt-4 border-[4px] border-black rounded-[32px] px-[20px] py-[24px] bg-customBlue2 ">
                      <h4 className="font-bold text-[18px] 2xl:text-[24px] text-white ">
                        Step 3 - Pepe Layer 2 Launch
                      </h4>
                      <ul className="mb-0 list-disc text-white pl-3">
                        <li className="text-[16px] leading-[22.09px] ">
                          Pepe Unchained's L2 blockchain launches at the end of presale, creating a shockwave through
                          the meme coin world.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bottom-info4 flex items-end">
                    <img src="/assets/chians.gif" className="img-fluid pepe-roadmap mb-3" alt="" />
                    <p>And rewarded his legions of fans with endless, marvelous gainz…</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile  */}

      {/* Tokenomics details */}
      <div className=" relative h-full overflow-hidden min-h-[50px]  lg:hidden">
        <div className="about-content  ">
          <h2 className="text-black px-[15px] font-[900] leading-[42px] text-[35px]     mb-[0.5rem]">
            Pepe Unchained Roadmap
          </h2>
          <div className="">
            <StepSlider />
          </div>

          <div className="bottom-info4 flex items-end">
            <img src="/assets/chians.gif" className="img-fluid pepe-roadmap mb-3" alt="" />
            <p>And rewarded his legions of fans with endless, marvelous gainz…</p>
          </div>
        </div>
      </div>
    </div>
  );
};
