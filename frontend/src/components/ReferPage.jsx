import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "./pages.css";

const ReferPage = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="bg-colorRefer bg-[#131515] min-h-screen flex flex-col items-center relative overflow-hidden">
      <ConfettiBackground />
      <div className="gradient-box border-[1px] border-[#FFFFFF21] max-w-[380px] mt-4 rounded-[30px] p-10 pb-5 text-center shadow-lg relative z-10">
        <h1 className="f-PowerGrotesk text-[40px] xxl:text-[50px] leading-[40px] text-[#FCFCD8]">
          You are on the <br />
          <span className="bg-nexgen-gradient bg-clip-text nex-gen-text">
            waitlist!
          </span>
        </h1>
        <p className="text-[#FFF5D947] mt-7 f-HelveticaNeueLight text-[14px] leading-[21px] max-w-[310px]">
          We’ve added you to our waitlist. We will notify you once we are ready
          to launch our beta version. In the meantime, you can share it and get
          a chance to earn 500 for early access to the platform.
        </p>
        <button
          type="submit"

          className="f-PowerGrotesk bg-[#131515] text-base btn-color text-[#FFF5D9] leading-tight font-normal px-6 py-4 w-full h-[55px] mt-8 rounded-full flex items-center dark:bg-[#000000] justify-center"

        >
          Refer a friend
        </button>
      </div>
      <div className="mt-6 flex flex-col items-center text-[#6A9298] space-y-4 max-w-[272px]">
        <h1 className="f-PowerGrotesk text-[15.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A929857]">Stay tuned</h1>
        <div>
          <ul className="flex space-x-3 justify-start items-center">
            <li>
              <a href="#" className="hover:text-white">
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className="w-9 h-9" /></a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <img src="/images/linked.svg" alt="LinkedIn" className="w-9 h-9" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <img src="/images/be.svg" alt="Behance" className="w-9 h-9" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <img src="/images/net.svg" alt="Dribbble" className="w-9 h-9" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <img
                  src="/images/facebook.svg"
                  alt="Facebook"
                  className="w-9 h-9"
                />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <img src="/images/hut.svg" alt="Your Icon" className="w-9 h-9" />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-[14px] f-HelveticaNeueLight text-[#6A929854] leading-[21px] !mt-5 text-center">
          All Rights Reserved, Copyright 2024
          <br />
          Designed and developed by cooasis studio
        </p>
      </div>
    </div>
  );
};

const ConfettiBackground = () => (
  <div className="inset-0 z-0">
    <div className="confetti"></div>
  </div>
);

export default ReferPage;