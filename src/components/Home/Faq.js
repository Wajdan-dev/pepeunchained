import React from 'react';
import { BuyPepe } from './BuyPepe';
import { MarqueeSection } from '../ui/Marquee';
import StepSlider from '../ui/Slider';
import Accordion from '../ui/Accordion';

const accordionData = [
  {
    title: 'What is Pepe Unchained?',
    description:
      'Pepe Unchained or $PEPU is a better version of the Original Pepe. It is not only a token, but a Meme Coin ecosystem built for:',
    items: [
      'Instant and low fee bridging between ETH and Pepe Chain',
      'Lowest transaction fees',
      'Instant transactions',
      'Higher Volume Capacity — 100x faster than ETH',
      'Dedicated Block explorer to see all transactions on Pepe Unchained Layer 2',
    ],
  },
  {
    title: 'When Can I Claim My Tokens?',
    description:
      '$PEPU tokens will be claimable once the presale has finished and the token is launched. At this stage, you will reconnect the wallet you used to buy, or buy and stake, and click claim.',
    items: [],
  },
  {
    title: 'What is layer 2? Why is it better?',
    description:
      "Layer 2 is a layer built on top of the Ethereum Network that allows for faster, and cheaper transactions. This makes Pepe Unchained the World's first Pepe token on its own chain!",
    items: [
      'Faster Speed: Transactions on Layer 2 are processed much quicker than on Layer 1. This means you can stake, trade, and interact with PEPE Unchained at lightning speed.',
      'Lower Fees: With fewer transactions clogging up the main Ethereum network, gas fees are substantially lower on Layer 2. This means more of your investment goes towards earning gains rather than paying for transaction costs.',
    ],
  },
  {
    title: 'When will Pepe Unchained L2 Be Released?',
    description: 'The Pepe Unchained L2 blockchain and ecosystem will be released once the presale has ended!',
    items: ['That’s when the REAL fun begins, ser!'],
  },
];

export const Faq = () => {
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
                  <h2 className="text-black font-[900] text-[26px] lg:text-[48px] 2xl:text-[48px] mb-[0.5rem]">
                    Pepe Unchained FAQs
                  </h2>
                  <div className="mb-3 flex  lg:flex-nowrap flex-wrap">
                    <Accordion accordionData={accordionData} />
                    <div className="faqq">
                      <img src="/assets/fork.gif" className="img-fluid pepe-faq" alt="" />
                      <p className="pree-text">The end.. . . ?</p>
                      <div className="max-w-[400px] ml-auto">
                        <p className=" text-[14px] text-black mb-[.5rem] mt-[1.5rem] ">
                          © 2024 Pepe Unchained. All rights reserved.
                        </p>
                        <p className=" uppercase text-[14px] text-black font-bold ">Disclaimer</p>
                        <p className=" uppercase text-[14px] text-black  ">
                          Always do your own research. Nothing here is financial advice. This is a meme coin. This is
                          for the lolz.
                        </p>
                      </div>
                    </div>
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
            Pepe Unchained FAQs
          </h2>
          <div className="mb-3 flex items-center lg:flex-nowrap flex-wrap">
            <div className="px-[15px]">
              <Accordion accordionData={accordionData} />
            </div>
            <div className="faqq">
              <img src="/assets/fork.gif" className="img-fluid pepe-faq" alt="" />
              <p className="pree-text">The end.. . . ?</p>
              <div className="max-w-[400px]  text-center px-[15px]">
                <p className=" text-[14px] text-black mb-[.5rem] mt-[1.5rem] ">
                  © 2024 Pepe Unchained. All rights reserved.
                </p>
                <p className=" uppercase text-[14px] text-black font-bold ">Disclaimer</p>
                <p className=" uppercase text-[14px] text-black  ">
                  Always do your own research. Nothing here is financial advice. This is a meme coin. This is for the
                  lolz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
