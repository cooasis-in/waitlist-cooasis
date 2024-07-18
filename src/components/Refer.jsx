import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Refer = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="bg-colorRefer min-h-screen flex flex-col items-center relative overflow-hidden">
      <ConfettiBackground />
      <div className="bg-[#141918] w-[310px] mt-10 rounded-[30px] p-10 text-center shadow-lg relative z-10">
        <h1 className="f-PowerGrotesk text-3xl text-[#FCFCD8]">
          You are on the <br />
          <span className="bg-nexgen-gradient bg-clip-text nex-gen-text">
            waitlist!
          </span>
        </h1>
        <p className="text-[#FFF5D9] mt-7 f-HelveticaNeueLight text-[8px]">
          We’ve added you to our waitlist. We will notify you once we are ready
          to launch our beta version. In the meantime, you can share it and get
          a chance to earn 500 for early access to the platform.
        </p>
        <button
          type="submit"
          className="f-PowerGrotesk text-base btn-color text-[#FFF5D9] leading-tight font-normal px-6 py-4 w-full h-[55px] mt-8 rounded-full flex items-center bg-[#000000] justify-center"
        >
          Refer a friend
        </button>
      </div>
      <div className="absolute bottom-6 flex flex-col items-center text-[#6A9298] space-y-4">
        <h1 className="f-PowerGrotesk">Stay tuned</h1>
        <div className="flex space-x-2">
          <a href="#" className="hover:text-white">
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <a href="#" className="hover:text-white">
            <img src="/images/linked.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-white">
            <img src="/images/be.svg" alt="Behance" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-white">
            <img src="/images/net.svg" alt="Dribbble" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-white">
            <img
              src="/images/facebook.svg"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a href="#" className="hover:text-white">
            <img src="/images/hut.svg" alt="Your Icon" className="w-8 h-8" />
          </a>
        </div>
        <p className="text-[10px] f-HelveticaNeueLight text-[#6A9298] font-light text-center">
          All Rights Reserved, Copyright 2024
          <br />
          Designed and developed by cooasis studio
        </p>
      </div>
    </div>
  );
};

const ConfettiBackground = () => (
  <div className="absolute inset-0 z-0">
    <div className="confetti"></div>
  </div>
);

export default Refer;
