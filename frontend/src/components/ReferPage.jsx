import React, { useEffect } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import "./pages.css";
import confetti from "canvas-confetti";

const ReferPage =() => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);
  return (
    <div className="relative z-10 flex justify-center items-center bg-colorRefer bg-[#131515] flex-col">
      {/* Main content wrapped in a centered container */}
      <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 sm:p-10 bg-[black] dark:bg-zinc-900">
        {/* Content inside the BackgroundGradient */}
        <h1 className="f-PowerGrotesk text-[40px] xxl:text-[50px] leading-[40px] text-[#FCFCD8] text-center">
          You are on the <br />
          <span className="bg-nexgen-gradient bg-clip-text nex-gen-text">
            waitlist!
          </span>
        </h1>
        <p className="text-[#FFF5D947] mt-7 f-HelveticaNeueLight text-[14px] leading-[21px] max-w-[310px] mx-auto text-center">
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
      </BackgroundGradient>

      {/* Social links and copyright section */}
      <div className="mt-4 flex flex-col items-center text-[#6A9298] space-y-4 max-w-[272px] z-20">
        <h1 className="f-PowerGrotesk text-[15.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A929857]">
          Stay tuned
        </h1>
        <div className="flex space-x-3 justify-start items-center">
          {/* Replace with your actual social links */}
          <a
            href="https://www.instagram.com/cooasis.in/"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="w-9 h-9"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/cooasis-in"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/linked.svg" alt="LinkedIn" className="w-9 h-9" />
          </a>
          <a
            href="https://www.behance.net/coasis"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/be.svg" alt="Behance" className="w-9 h-9" />
          </a>
          <a
            href="https://dribbble.com/Cooasis"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/net.svg" alt="Dribbble" className="w-9 h-9" />
          </a>
          <a
            href="https://www.facebook.com/cooasis.in"
            target="_blank"
            className="hover:text-white"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook.svg"
              alt="Facebook"
              className="w-9 h-9"
            />
          </a>
          <a
            href="https://www.producthunt.com/products/cooasis"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/hut.svg" alt="Your Icon" className="w-9 h-9" />
          </a>
        </div>

        <p className="text-[14px] f-HelveticaNeueLight text-[#6A929854] leading-[21px] mt-5 text-center">
          All Rights Reserved, Copyright 2024
          <br />
          Designed and developed by cooasis studio
        </p>
      </div>

      {/* Confetti background (if required) */}
      <div className="absolute inset-0 z-0">
        <div className="confetti"></div>
      </div>
    </div>
  );
}

export default ReferPage