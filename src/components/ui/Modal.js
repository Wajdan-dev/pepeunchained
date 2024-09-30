import React from 'react';

export const Modal = ({ open, onClose, desc }) => {
  return (
    <div>
      {open && (
        <div
          className="fixed z-[9999] inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={onClose}
        >
          <div
            className="bg-[#bad3c1] p-[1.5rem] rounded-[1rem] shadow-lg w-[25em] max-w-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
          >
            <div className="flex flex-col items-center">
              <img src="/assets/info.svg" className="h-[90px]" alt="" />
              <div className="my-3 text-[1.125rem] font-normal text-center  " style={{ padding: '1em 1.6em .3em' }}>
                {desc}
              </div>
              <button
                className="mt-4 bg-[#215bb8] min-w-[5rem] min-h-[40px] text-white px-4 py-2 rounded-[30px] hover:bg-[#d11313e6] btnnn transition-all"
                onClick={onClose}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
