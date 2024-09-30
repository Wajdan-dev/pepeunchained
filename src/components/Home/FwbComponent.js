import React from 'react';
import { BuyPepe } from './BuyPepe';
import { MarqueeSection } from '../ui/Marquee';
import StepSlider from '../ui/Slider';

export const FwbComponent = () => {
  return (
    <div className="h-full">
      {/* Marquee section for large screens */}
      <div className="hidden lg:block">
        <MarqueeSection />
      </div>

      {/* Tokenomics content */}
      <div className="  hidden lg:block bennifit  mx-auto overflow-hidden lg:px-[15px] relative">
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
                    <div className="max-w-[665px] w-full">
                      <h2 className="text-black font-bold text-[26px] lg:text-[48px] 2xl:text-[48px] mb-[0.5rem]">
                        Pepe Frens With Benefits
                      </h2>
                      <div className="relative">
                        <div className="box box-1 mb-3 border-[4px] text-white border-black rounded-[32px] px-[20px] py-[24px] bg-customBlue2 ">
                          <h4 className="font-bold text-[18px] 2xl:text-[27px] text-white ">
                            Are you a blockchain builder, fren?
                          </h4>
                          <p className=" mb-[1rem]">
                            Do you love Pepe? Do you want to receive grants ($$$) for building on{' '}
                            <span className="font-semibold">Pepe’s new L2 blockchain?</span>
                          </p>
                          <p className="  ">
                            Lucky you! We’re proud to announce the launch of the{' '}
                            <span className="font-semibold">Pepe Frens With Benefits Collective.</span>
                            Here, blockchain developers can build upon the groundbreaking Pepe Unchained L2, and be
                            rewarded for their work. Everyone wins
                          </p>
                        </div>
                        <div className=" uppercase text-[12px] sm:text-[24px] text-black inserted-card ">
                          {' '}
                          “Can Devs Do Something?!”{' '}
                        </div>
                      </div>
                      <div className="relative">
                        <div className="boox-one mt-3">
                          <h4 className="font-bold text-[18px] 2xl:text-[27px] text-white mb-3">
                            Here’s how it works:
                          </h4>
                          <div className="flex justify-center lg:justify-start items-center">
                            <p className="p-2 lg:px-3 text-[12px] sm:text-[14px] m-0 bg-[#2eb335] text-white rounded-[11px] ">
                              Build
                            </p>
                            <img src="/assets/arrows.png" className="px-2 w-[72px] h-auto " alt="" />
                            <p className="p-2 lg:px-3 text-[12px] sm:text-[14px] m-0 bg-[#2eb335] text-white rounded-[11px] ">
                              Submit Your Grant Application
                            </p>
                          </div>
                          <div className="flex justify-center lg:justify-start items-center pt-2 pb-4">
                            <p className="p-2 lg:px-3 relative top-[30px] left-[10px] text-[12px] sm:text-[14px] m-0 bg-[#2eb335] text-white rounded-[11px] ">
                              $$$$$
                            </p>
                            <img src="/assets/arrow1.png" className="px-2 w-[72px] h-auto " alt="" />
                            <p className="p-2 lg:px-3 text-[12px] sm:text-[14px] m-0 bg-[#2eb335] text-white rounded-[11px] ">
                              Pepe Council Votes
                            </p>
                            <img src="/assets/arrow2.png" className="px-2 w-[72px] h-auto " alt="" />
                          </div>
                        </div>
                        <div className="pinkBox text-[18px] sm:text-[22px] ">applications open Q4 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[20px] right-0">
          <p className="beni-text">AND REWARDED ALL OF THE BUILDER FROGS FOR BUILDING THE FUTURE</p>
        </div>
        <img src="/assets/builder.png" alt="" className="architect" />
      </div>

      {/* mobile  */}

      {/* Tokenomics details */}
      <div className=" relative h-full overflow-hidden min-h-[50px]  py-[30px]  lg:hidden">
        <div className="about-content px-[15px]  ">
          <h2 className="text-black px-[15px] font-[900] leading-[42px] text-[32px]     mb-[0.5rem]">
            Pepe Frens With Benefits
          </h2>
          <div className=" uppercase m-8 text-[18px] sm:text-[24px] text-black inserted-card ">
            {' '}
            “Can Devs Do Something?!”{' '}
          </div>
          <div className="relative mt-[50px]">
            <div className="box box-1 mb-3 border-[4px] text-white border-black rounded-[32px] px-[20px] py-[24px] bg-customBlue2 ">
              <h4 className="font-bold text-[18px] 2xl:text-[27px] text-white ">Are you a blockchain builder, fren?</h4>
              <p className=" mb-[1rem]">
                Do you love Pepe? Do you want to receive grants ($$$) for building on{' '}
                <span className="font-semibold">Pepe’s new L2 blockchain?</span>
              </p>
              <p className="  ">
                Lucky you! We’re proud to announce the launch of the{' '}
                <span className="font-semibold">Pepe Frens With Benefits Collective.</span>
                Here, blockchain developers can build upon the groundbreaking Pepe Unchained L2, and be rewarded for
                their work. Everyone wins
              </p>
            </div>
          </div>
          <div className="relative  ">
            <div className="boox-one mt-3">
              <h4 className="font-bold text-[18px] 2xl:text-[27px] text-white mb-3">Here’s how it works:</h4>
              <div className="flex justify-center lg:justify-start items-center">
                <p className="p-2 lg:px-3 text-[12px] sm:text-[14px] m-0 bg-[#2eb335] text-white rounded-[11px] ">
                  Build
                </p>
                <img src="/assets/arrows.png" className="px-2 w-[72px] h-auto " alt="" />
                <p className="p-2 lg:px-3 text-[12px] sm:text-[14px] m-0 bg-[#2eb335] text-white rounded-[11px] ">
                  Submit Your Grant Application
                </p>
              </div>
              <div className="flex justify-center lg:justify-start items-center pt-2 pb-4">
                <p className="p-2 lg:px-3 relative top-[30px] left-[10px] text-[12px] sm:text-[14px] m-0 bg-[#2eb335] text-white rounded-[11px] ">
                  $$$$$
                </p>
                <img src="/assets/arrow1.png" className="px-2 w-[72px] h-auto " alt="" />
                <p className="p-2 lg:px-3 text-[12px] sm:text-[14px] m-0 bg-[#2eb335] text-white rounded-[11px] ">
                  Pepe Council Votes
                </p>
                <img src="/assets/arrow2.png" className="px-2 w-[72px] h-auto " alt="" />
              </div>
            </div>
            <div className="pinkBox text-[18px] sm:text-[22px] ">applications open Q4 2024</div>
          </div>
        </div>
        <div className="mt-[60px] relative bottom-bg">
          <p className="reward-text">AND REWARDED ALL OF THE BUILDER FROGS FOR BUILDING THE FUTURE</p>
          <img
            src="/assets/architect.gif"
            className=" architect-2 w-[155px] ml-auto "
            style={{ transform: 'scaleX(-1)' }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
