import React from 'react';
import { BuyPepe } from './BuyPepe';
import { MarqueeSection } from '../ui/Marquee';

const imageData = [
  { src: '/assets/bitcoin.svg', alt: 'Bitcoin' },
  { src: '/assets/coinmarketcap.svg', alt: 'CoinMarketCap' },
  { src: '/assets/techopedia.svg', alt: 'Techopedia' },
  { src: '/assets/binance.svg', alt: 'Binance' },
  { src: '/assets/readwrite.svg', alt: 'ReadWrite' },
  { src: '/assets/cryptopotato.svg', alt: 'CryptoPotato' },
];

export const AboutComponent = () => {
  return (
    <div className="h-full">
      <div className="hidden lg:block">
        <MarqueeSection />
      </div>

      <div className="  hidden lg:block  banner-bg mx-auto  px-[15px]    relative">
        <div className="mx-auto xl:container relative">
          <div className="py-[40px] md:px-[50px] content-wrapper relative    flex">
            {/* desktop  */}
            <div className="relative flex   items-stretch justify-center flex-col md:flex-row w-full  ">
              <div className="hidden lg:block">
                <BuyPepe />
              </div>
              <div className="content hidden lg:block     w-full">
                <div className="flex   flex-wrap lg:flex-nowrap w-full ">
                  <div className="about-content   pl-[30px] max-w-[600px] ">
                    <h2 className="text-black font-[900] 2xl:text-[48px] lg:text-[48px] text-[26px]  ">
                      About Pepe Unchained
                    </h2>
                    <div className="bg-customBlue1 max-w-[520px] border-[3.11px] relative border-black p-[20px] mb-[1rem] rounded-[25px] ">
                      <p className="text-[16px] text-white mb-[.5rem] ">
                        <span className="stroke-text3 me-2">Pepe Unchained</span>
                        The future of meme coins. A Layer 2 blockchain built for Speed, Security, Low Fees–and of
                        course–Memes.
                      </p>
                      <p className="text-[16px] text-white mb-[.5rem] ">
                        <span className="stroke-text3 me-2">$PEPU</span>
                        token powers the entire ecosystem. You’re early enough to witness a new golden age of Meme
                        Coins. With Pepe in his rightful place as King, and the{' '}
                        <strong> Pepe Unchained Layer 2 – </strong> his Kingdom.
                      </p>
                      <img
                        src="/assets/round-shape.svg"
                        alt=""
                        className="absolute hidden md:block right-[-33px] bottom-[11px] "
                      />
                    </div>
                    <div
                      className="bg-[#20e12a52] border-[3.11px] border-[#00000033] rounded-[25px] max-w-[450px] p-[15px] "
                      style={{ boxShadow: '0 0 49.73px #00ff0d33' }}
                    >
                      <h2 className="text-[24px] inline-block  font-[900] text-black mb-[10px] border-b-4   border-black capitalize ">
                        Earn Insane Rewards
                      </h2>
                      <p className="text-black text-[16px] ">
                        Staking your $PEPU tokens lets you fill your bag with
                        <strong className="ml-1">passive, massive rewards!</strong>
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block mb-[30px] max-w-[388px] w-full ">
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
                </div>

                <div className="2xl:mt-5 2xl:pt-5 2xl:ps-[25px] pt-2 lg:pt-4 mt-3 hidden lg:block ">
                  <section className="relative mt-[1.5rem]  ">
                    <h3 className="uppercase text-[1rem] text-black mb-[.5rem] ">Featured In</h3>
                    <div className="max-w-[500px] flex flex-wrap justify-start relative z-[2] items-end">
                      {imageData.map((image, index) => (
                        <div key={index} className="p-0 mb-2 me-2 ng-star-inserted">
                          <a href="">
                            <img src={image.src} className="w-full h-auto" alt={image.alt} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="bottom-info2 hidden  lg:flex  items-end justify-end ng-star-inserted ">
              <p>He devised a Giga Brain Plan…</p>
              <img src="/assets/brain-chair.gif" alt="" className="img-fluid chair-brain mt-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden pt-4 ">
        <div className="flex   flex-wrap lg:flex-nowrap w-full ">
          <div className="about-content  relative overflow-hidden   ">
            <h2 className="text-black font-[900]  px-[15px]  text-[32px] leading-[32px] mb-[20px]  ">
              About Pepe <br /> Unchained
            </h2>

            <p className="text-[16px] text-black  px-[15px] mb-[.5rem] ">
              <span className="stroke-text3 me-2">Pepe Unchained</span>
              The future of meme coins. A Layer 2 blockchain built for Speed, Security, Low Fees–and of course–Memes.
            </p>
            <p className="text-[16px] text-black  px-[15px] mb-[.5rem] ">
              <span className="stroke-text3 me-2">$PEPU</span>
              token powers the entire ecosystem. You’re early enough to witness a new golden age of Meme Coins. With
              Pepe in his rightful place as King, and the <strong> Pepe Unchained Layer 2 – </strong> his Kingdom.
            </p>
            <img
              src="/assets/round-shape.svg"
              alt=""
              className="absolute hidden md:block right-[-33px] bottom-[11px] "
            />

            <h2 className="text-[32px] px-[15px]  mb-[20px] mt-[3rem] leading-[32px] inline-block  font-[900] text-black   capitalize ">
              Earn Insane <br /> Rewards
            </h2>
            <p className="text-black text-[16px]  px-[15px] max-w-[250px]   ">
              Staking your $PEPU tokens lets you fill your bag with
              <strong className="ml-1">passive, massive rewards!</strong>
            </p>

            <div className="bottom-info2  flex  items-end justify-end ng-star-inserted ">
              <p>He devised a Giga Brain Plan…</p>
              <img src="/assets/brain-chair.gif" alt="" className="img-fluid chair-brain mt-4" />
            </div>
          </div>

          <div className="hidden lg:block mb-[30px] max-w-[388px] w-full ">
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
        </div>

        <div className="2xl:mt-5 2xl:pt-5 2xl:ps-[25px] pt-2 lg:pt-4 mt-3 hidden lg:block ">
          <section className="relative mt-[1.5rem]  ">
            <h3 className="uppercase text-[1rem] text-black mb-[.5rem] ">Featured In</h3>
            <div className="max-w-[500px] flex flex-wrap justify-start relative z-[2] items-end">
              {imageData.map((image, index) => (
                <div key={index} className="p-0 mb-2 me-2 ng-star-inserted">
                  <a href="">
                    <img src={image.src} className="w-full h-auto" alt={image.alt} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
