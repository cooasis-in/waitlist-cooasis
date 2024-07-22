import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "./pages.css";

const Refer = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  const handlePaste = () => {
    const referralLink = "https://waitlist.coasis.app/refer?1eg%@v";
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        alert("Referral link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="bg-colorRefer bg-[#131515] min-h-screen flex flex-col items-center relative overflow-hidden">
      <ConfettiBackground />
      <div className="heading">
        <h1 className="text-[12px] text-center bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk">
          Welcome to the
        </h1>
        <div className="mb-6">
        <h1 className="text-[#FFF5D9] f-PowerGrotesk text-[60px]">
          <span className="bg-nexgen-gradient bg-clip-text mr-3">
            exclusive
          </span>
          waitlist
        </h1>
        </div>
      </div>
      <div className="card gradient-box border-[1px] border-[#FFFFFF21] max-w-[340px] mt-2 rounded-[40px] p-4 text-center shadow-lg relative z-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className=" ">
          <h1 className="text-[#FCFCD8] font-bold text-[30px]">1,150</h1>
          <p className="f-PowerGrotesk text-[12px] leading-[1]   text-[#FCFCD8]">
            You are on the waitlist <br /> Get ahead of the crowd!
            {/* <span className="bg-nexgen-gradient bg-clip-text nex-gen-text">
              waitlist!
            </span> */}
          </p>
          <p className="text-[#FFF5D947] mt-6 f-HelveticaNeueLight text-[12px] leading-[12px]">
            We’ve added you to our waitlist. We will notify you once we <br />{" "}
            are ready to launch our beta version. In the meantime, <br /> you
            can share it and get a br chance to earn 500 for early access to the
            platform.
          </p>
        </div>
        {/* Button 2 */}
        <button
          type="submit"
          className="f-PowerGrotesk bg-[#131515] text-[11px] gap-2 btn-color text-[#FFF5D9] leading-tight font-normal px-6 py-8 w-full h-[55px] mt-6 rounded-full flex items-center dark:bg-[#000000] justify-between"
          onClick={handlePaste}
        >
          https://waitlist.coasis.app/refer?1eg%@v
          <img
            src="images/paste.svg"
            alt="Email Icon"
            className="f-PowerGrotesk h-7 ml-auto"
          />
        </button>

        <button
          type="submit"
          className="f-PowerGrotesk bg-[#131515] text-base btn-color text-[#E1FF26] leading-tight font-normal px-6 py-8 w-full h-[55px] mt-2 rounded-full flex items-center dark:bg-[#000000] justify-center"
        >
          Refer a friend
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center text-[#6A9298] space-y-4 max-w-[272px]">
        <h1 className="f-PowerGrotesk text-[15.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A929857]">
          Stay tuned
        </h1>
        <div>
          <ul className="flex space-x-3 justify-start items-center">
            <li>
              <a href="#" className="hover:text-white">
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className="w-9 h-9"
                />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <img
                  src="/images/linked.svg"
                  alt="LinkedIn"
                  className="w-9 h-9"
                />
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
                <img
                  src="/images/hut.svg"
                  alt="Your Icon"
                  className="w-9 h-9"
                />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-[14px] f-HelveticaNeueLight text-[#6A929854] leading-[21px] !mt-3 text-center">
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

export default Refer;
