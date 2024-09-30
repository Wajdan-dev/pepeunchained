import React, { useState } from 'react';

const Accordion = ({ accordionData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion h-full">
      {accordionData.map((faq, index) => (
        <div
          key={index}
          className="border-[4px] border-black rounded-[16px] mb-[20px] px-[20px] py-[24px] bg-[#4e7dc6] max-w-[400px] w-full"
          style={{ boxShadow: '4px 4px #000' }}
        >
          <div className="cursor-pointer text-[20px] font-bold text-black" onClick={() => handleClick(index)}>
            {faq.title}
          </div>
          {/* Content */}
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden overflow-y-auto ${
              openIndex === index ? 'max-h-[200px]' : 'max-h-0'
            }`}
          >
            <div className="mt-3">
              <span className="text-[17px] inline-block text-white mb-2">{faq.description}</span>
              {faq.items.length > 0 && (
                <ul className="text-white list-disc pl-5">
                  {faq.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[17px] lg:text-[17px]">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
