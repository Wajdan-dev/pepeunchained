import React from 'react';
import Slider from 'react-slick';

const StepSlider = () => {
  const settings = {
    dots: true, // Enable dots
    arrows: false, // Disable arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings} className="space-x-4">
        {/* Card 1 */}
        <div className="box w-[373px] h-[232px] border-[4px] border-black rounded-[32px] px-[20px] py-[24px] bg-customBlue2 mx-2 flex flex-col justify-between">
          <h4 className="font-bold text-[24px] text-white">Step 1 - Make Pepe Great Again</h4>
          <ul className="list-disc text-white pl-3">
            <li className="text-[14px] leading-[22.09px]">
              The time has come for Pepe to take a giant leap into his ultra-based future. By inseminating the world
              with L2 technology, Pepe Unchained becomes an absolute Giga Brain. He’s now ready to release his rewards.
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="box w-[373px] h-[232px] border-[4px] border-black rounded-[32px] px-[20px] py-[24px] bg-customBlue2 mx-2 flex flex-col justify-between">
          <h4 className="font-bold text-[18px] 2xl:text-[24px] text-white">Step 2 - Coin Eruption</h4>
          <ul className="list-disc text-white pl-3">
            <li className="text-[16px] leading-[22.09px]">
              With a burning desire in his loins, Pepe Unchained erupts during presale, offering DOUBLE the staking
              rewards. This is an explosion of Pepe juice all over the blockchain.
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="box w-[373px] h-[232px] border-[4px] border-black rounded-[32px] px-[20px] py-[24px] bg-customBlue2 mx-2 flex flex-col justify-between">
          <h4 className="font-bold text-[18px] 2xl:text-[24px] text-white">Step 3 - Pepe Layer 2 Launch</h4>
          <ul className="list-disc text-white pl-3">
            <li className="text-[16px] leading-[22.09px]">
              Pepe Unchained's L2 blockchain launches at the end of presale, creating a shockwave through the meme coin
              world.
            </li>
          </ul>
        </div>
      </Slider>
    </div>
  );
};

export default StepSlider;
