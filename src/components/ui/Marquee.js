import React from 'react';
import Marquee from 'react-fast-marquee';

const message = [
  { name: 'PEPE L2 LAUNCHES AT THE END OF PRESALE!' },
  { name: "PEPE RELEASES WORLD'S FIRST MEME COIN LAYER 2" },
  { name: 'PEPE UNCHAINED TAKES THE BLOCKCHAIN BY STORM' },
  { name: '$PEPU PRESALE PRICE RISING AGAIN SOON!' },
  { name: 'EXPERTS SAY PEPE UNCHAINED DOUBLE STAKING REWARDS = 100X THE LOLZ' },
  { name: '$PEPU IS MORE THAN A MEME COIN. BUT A MEME ECOSYSTEM.' },
  { name: '$PEPU IS MORE THAN A MEME COIN. BUT A MEME ECOSYSTEM.' },
  { name: 'PEPE L2 LAUNCHES AT THE END OF PRESALE!' },
  { name: "PEPE RELEASES WORLD'S FIRST MEME COIN LAYER 2" },
];

export const MarqueeSection = () => {
  return (
    <div className="fixed lg:sticky z-10 lg:z-[1]  w-full">
      <div
        className="min-h-[34px] flex text-white relative top-[3px] border-[3px] border-black z-[3] left-0 right-0 bg-[#ed323d] overflow-hidden"
        style={{ padding: '7px 0 5px 31px' }}
      >
        <div className="min-w-[100px]">
          <h3 className="uppercase md:text-[20px] text-[18px] text-white">BREAKING:</h3>
        </div>
        <div className="relative flex-1">
          {/* Gradient effect using pseudo-element */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/5 lg:bg-gradient-to-r from-[#ed323d] via-[#ed323d00] to-[#ed323d00] z-10"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#ed323d] via-[#ed323d00] to-[#ed323d00] z-10"></div>
          </div>
          <Marquee>
            <div className="flex items-center">
              {message.map((message, index) => (
                <h4 key={index} className="text-[20px] text-white inline-block px-4">
                  {index > 0 && '|'}
                  <span className="px-4">{message.name}</span>
                </h4>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
