import React, { useEffect, useState } from 'react';
import { Modal } from '../ui/Modal';

export const BuyPepe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenModal2 = () => setIsModalOpen2(true);
  const handleCloseModal2 = () => setIsModalOpen2(false);

  const handleOpenModal3 = () => setIsModalOpen3(true);
  const handleCloseModal3 = () => setIsModalOpen3(false);

  const [convertBtn, setConvertBtn] = useState(false);
  const [buttons, setButtons] = useState([
    {
      name: 'ETH',
      img: '/assets/ETH.svg',
      active: true,
    },
    {
      name: 'USDT',
      img: '/assets/usdt.svg',
      active: false,
    },
    {
      name: 'CARD',
      img: '/assets/card.svg',
      active: false,
    },
  ]);

  useEffect(() => {
    setButtons((prevButtons) => [
      {
        name: convertBtn ? 'BNB' : 'ETH',
        img: convertBtn ? '/assets/BNB.svg' : '/assets/ETH.svg',
        active: true,
      },
      ...prevButtons.slice(1),
    ]);
  }, [convertBtn]);

  const handleButtonClick = (index) => {
    setButtons((prevButtons) =>
      prevButtons.map((btn, i) => ({
        ...btn,
        active: i === index,
      })),
    );
  };

  // Find the active button
  const activeButton = buttons.find((btn) => btn.active);

  // Determine label and image based on active button
  const label = activeButton.name === 'CARD' ? 'USD' : activeButton.name;
  const img = activeButton.name === 'CARD' ? '/assets/usd.svg' : activeButton.img;

  return (
    <div>
      <div className="relative block" id="heroo">
        <div className="blink-light"></div>
        <div className="walletBox">
          <div className="w-full flex flex-col items-center justify-center text-center">
            <p className="text-white text-bold mb-1 text-[18px] ">Buy $PEPU Presale</p>
            <div>
              <div
                className="flex gap-2 justify-center items-center w-full counter bg-[#fff3]  "
                style={{ borderRadius: '15px 15px 0 0' }}
              >
                <div className="min-w-[78px] px-[10px] py-[10px] flex flex-col justify-center items-center rounded-[.5rem] text-center ">
                  <p className="text-white text-[13px] md:text-[14px] font-semibold leading-[30px] ">Days</p>
                  <h1 className="text-white text-[28px] font-semibold leading-1 ">01</h1>
                </div>
                <div className="min-w-[78px] px-[10px] py-[10px] flex flex-col justify-center items-center rounded-[.5rem] text-center ">
                  <p className="text-white text-[13px] md:text-[14px] font-semibold leading-[30px] ">Hours</p>
                  <h1 className="text-white text-[28px] font-semibold leading-1 ">16</h1>
                </div>
                <div className="min-w-[78px] px-[10px] py-[10px] flex flex-col justify-center items-center rounded-[.5rem] text-center ">
                  <p className="text-white text-[13px] md:text-[14px] font-semibold leading-[30px] ">Minutes</p>
                  <h1 className="text-white text-[28px] font-semibold leading-1 ">01</h1>
                </div>
                <div className="min-w-[78px] px-[10px] py-[10px] flex flex-col justify-center items-center rounded-[.5rem] text-center ">
                  <p className="text-white text-[13px] md:text-[14px] font-semibold leading-[30px] ">Seconds</p>
                  <h1 className="text-white text-[28px] font-semibold leading-1 ">01</h1>
                </div>
              </div>
              <p
                className="text-white bg-[#2759a2] pt-[2px] text-[11px] text-center  "
                style={{ borderRadius: '0 0 15px 15px' }}
              >
                Until next Price increase
              </p>
            </div>
            <p className="text-center font-semibold leading-1 text-[14px] text-white mt-3 mb-1 ">
              $9,962,011.59 / $10,208,712
            </p>
            <div className="w-[90%] rounded-[18px] bg-[#fff3] mx-auto h-[12px] ">
              <div className="rounded-[20px] w-[97.6042%] bg-white h-full "></div>
            </div>

            <div className="text-[14px] mb-1 mt-3 flex justify-center items-center text-white ">
              <span className="uppercase me-1">Your purchased $PEPU</span>
              <span className="font-semibold"> = 0</span>
              <img src="/assets/info-icon.svg" alt="" className="ms-2 cursor-pointer" onClick={handleOpenModal2} />
            </div>
            <div className="text-[14px] mb-1 flex justify-center items-center text-white ">
              <span className="uppercase me-1">Your stakeable $PEPU</span>
              <span className="font-semibold"> = 0</span>
              <img src="/assets/info-icon.svg" alt="" className="ms-2 cursor-pointer" onClick={handleOpenModal3} />
            </div>
          </div>
          <div className="relative">
            <div className="text-center text-white mb-1 dashTitle">1 $PEPU = $0.0092364</div>
            <div className="flex gap-2 items-center justify-center">
              {buttons.map((btn, index) => (
                <button
                  key={btn.name}
                  onClick={() => handleButtonClick(index)}
                  className={`uppercase flex justify-center font-semibold leading-1 gap-1 items-center py-[9px] text-[15px] md:text-[23px] min-w-[100px] lg:min-w-[110px] min-h-[40px] rounded-[30px] text-black border-[2px] ${
                    btn.active ? 'border-black bg-white' : 'border-transparent bg-[#bad3c180]'
                  } transition-all hover:bg-white hover:border-black`}
                >
                  <img src={btn.img} className="md:w-[30px] md:h-[30px] w-[26px] h-[26px]" alt={btn.name} />
                  <span>{btn.name}</span>
                </button>
              ))}
            </div>
            <div className="mt-[1rem] mb-0 ">
              <div className="mt-[.5rem] ">
                {/* The input fields */}
                <div className="grid grid-cols-12 gap-[1rem] xl:my-[1.5rem]">
                  <div className="col-span-6">
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="" className="text-[13px] text-[#eaeaea]">
                        Pay with {label}{' '}
                      </label>
                      <div className="text-[13px] text-customGreen2">Max</div>
                    </div>
                    <div className="flex items-center relative">
                      <input
                        type="text"
                        className="min-h-[44px] w-full py-[2px] px-[15px] text-[1rem] font-normal rounded-[30px] bg-transparent outline-none border-[2px] border-white text-[#eaeaea]"
                        placeholder="0"
                      />
                      <div
                        className="absolute top-[9px] right-[.8rem] flex items-center"
                        style={{ translate: 'translateY(-50%)' }}
                      >
                        <img src={img} className="w-[28px] h-[28px]" alt={label} />
                      </div>
                    </div>
                  </div>

                  {/* Your second input field (unchanged) */}
                  <div className="col-span-6">
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="" className="text-[13px] text-[#eaeaea]">
                        $PEPU You receive
                      </label>
                    </div>
                    <div className="flex items-center relative">
                      <input
                        type="text"
                        className="min-h-[44px] w-full py-[2px] px-[15px] text-[1rem] font-normal rounded-[30px] bg-transparent outline-none border-[2px] border-white text-[#eaeaea]"
                        placeholder="0"
                      />
                      <div
                        className="absolute top-[9px] right-[.8rem] flex items-center"
                        style={{ translate: 'translateY(-50%)' }}
                      >
                        <img src="/assets/token.svg" className="w-[28px] h-[28px]" alt="Token" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[1rem] mb-[.5rem] mt-[1.5rem] justify-center ">
              <button className="rounded-[80px] bg-transparent border-[2px] border-white text-[17px] font-semibold min-w-[120px] min-h-[40px] capitalize hover:bg-white hover:border-black transition-all py-[4px] px-[15px] text-white hover:text-black  ">
                Connect Wallet
              </button>

              {convertBtn ? (
                <>
                  <button
                    className="rounded-[80px] bg-transparent border-[2px] flex items-center border-white text-[17px] font-semibold min-w-[120px] min-h-[40px] capitalize hover:bg-white hover:border-black transition-all py-[4px] px-[15px] text-white hover:text-black  "
                    onClick={() => {
                      setConvertBtn(false);
                    }}
                  >
                    <>
                      <img src="/assets/ETH.svg" className="w-[18px] h-auto me-2 " alt="" />
                      Buy with ETH
                    </>
                  </button>
                </>
              ) : (
                <button
                  onClick={handleOpenModal}
                  className="rounded-[80px] bg-transparent border-[2px] flex items-center border-white text-[17px] font-semibold min-w-[120px] min-h-[40px] capitalize hover:bg-white hover:border-black transition-all py-[4px] px-[15px] text-white hover:text-black  "
                >
                  <>
                    <img src="/assets/BNB.svg" className="w-[18px] h-auto me-2 " alt="" />
                    Buy with BNB
                  </>
                </button>
              )}
            </div>
            <div className="mt-1">
              <p className="mb-1 text-center"></p>
              <button className="bg-transparent underline border-none w-full text-white text-center flex justify-center items-center pt-[3px] font-semibold text-[17px] ">
                Don't have a wallet?
              </button>
              <p className="text-center text-white text-[14px]  ">
                <a href="#" className="flex items-center justify-center">
                  Powered by
                  <img src="/assets/W3P_White.svg" className="w-[120px] h-auto" alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      <Modal
        open={isModalOpen2}
        onClose={handleCloseModal2}
        desc={`   Your total purchased tokens are all tokens purchased using the connected wallet. This includes all staked and unstaked tokens.`}
      />
      <Modal
        open={isModalOpen3}
        onClose={handleCloseModal3}
        desc={`Unclaimed $PEPU that was bought using ETH or ERC-20 USDT can be staked now. Please note that all early staked tokens can be withdrawn 7 days after token claiming goes live, which will happen after the presale has concluded.`}
      />
      {isModalOpen && (
        <div
          className="fixed z-[20] inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#bad3c1] p-[1.5rem] rounded-[1rem] shadow-lg w-[25em] max-w-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
          >
            <div className="flex flex-col items-center">
              <img src="/assets/info.svg" className="h-[90px]" alt="" />
              <h2 className="pt-4 text-center font-semibold text-[2rem] ">Are you sure?</h2>
              <div className="my-3 text-[1.125rem] font-normal text-center  " style={{ padding: '1em 1.6em .3em' }}>
                If you purchase on BSC during the presale, you won't be eligible for the 183% annual returns from
                staking. We recommend buying on Ethereum if you want to stake.
              </div>
              <div className="flex gap-2">
                <button
                  className="mt-4 bg-[#215bb8] min-w-[5rem] min-h-[40px] text-white px-4 py-2 rounded-[30px] hover:bg-[#d11313e6] btnnn transition-all"
                  onClick={() => {
                    setConvertBtn(true);
                    handleCloseModal();
                  }}
                >
                  Buy with BSC
                </button>
                <button
                  className="mt-4 bg-[#EFDE6C] min-w-[5rem] min-h-[40px] text-black px-4 py-2 rounded-[30px] hover:bg-[#d11313e6]   transition-all"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
