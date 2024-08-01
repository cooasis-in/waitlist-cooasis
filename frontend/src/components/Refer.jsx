import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "./pages.css";
import { useState } from "react";
import ShareLink from "../components/ShareLinks";

const Refer = ({ waitlistInfo }) => {
  const [showShareLink, setShowShareLink] = useState(false);

  // confetti
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  const handleShareClick = () => {
    setShowShareLink(true);
  };

  // Refer Code Logic
  const handlePaste = () => {
    if (waitlistInfo?.referralLink) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(waitlistInfo.referralLink)
          .then(() => {
            console.log("Referral link copied to clipboard!");
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
      } else {
        // Fallback method for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = waitlistInfo.referralLink;
        textArea.style.position = "fixed"; // Avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          console.log("Referral link copied to clipboard!");
        } catch (err) {
          console.error("Fallback: Oops, unable to copy", err);
        }
        document.body.removeChild(textArea);
      }
    } else {
      alert("Referral link is not available.");
    }
  };

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <>
      <header className="set-alignment set-alignment-logo flex justify-between items-start">
        <div className="set-width">
          <img src="images/darkmode.svg" alt="Cooasis Logo" className="w-30" />
        </div>
        <div className="bg-rgb rounded-full border-[0.5px] border-[#99999982]">
          <button
            className="flex justify-center !items-center py-2 px-4 sm:py-3 sm:px-7 max-w-[91px] sm:max-w-[147px] f-PowerGrotesk text-[12px] sm:text-[17.5px] text-[#6A929857] leading-[12px] sm:leading-[17.5px]"
            onClick={toggleBoxVisibility}
          >
            <span className="mr-[7px]">
              <img
                src="images/bellicon.svg"
                alt=""
                className="max-w-[8.91px] sm:max-w-[100%]"
              />
            </span>
            <span className="mb-[4px] sm:mb-[7px]">updates</span>
          </button>
        </div>
        {isBoxVisible && (
          <div className="absolute top-[70px] sm:top-[100px] right-[20px] sm:right-[50px]">
            <div className="change-bg-samll bg-[#1515158C] rounded-[20px] border-[0.5px] border-[#99999982] h-[300px] w-[267px] flex items-center justify-center">
              <div className="flex items-center justify-center h-full w-full">
                <p className="mx-auto max-w-[146px] f-PowerGrotesk text-[12px] text-[#6A929857] leading-[12px] text-center">
                  <span className="flex justify-center mb-1">
                    <img src="images/bellicon.svg" alt="" />
                  </span>
                  No updates yet Check back later!
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
      <section className="bg-colorRefer adjest !min-h-screen bg-color-res">
        <div className="container mx-auto relative px-[20px]">
          <div className="flex flex-col items-center relative overflow-hidden">
            <ConfettiBackground />
            <div className="heading hidden sm:block pt-[100px] larg-pb">
              <h1 className="text-[12px] text-center bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk">
                Welcome to the
              </h1>
              <div className="relative inline-block mb-0">
                <h1 className="relative z-20 text-[#FFF5D9] f-PowerGrotesk text-[60px] leading-[0px] pt-[35px] pb-[55px]">
                  <span className="bg-nexgen-gradient bg-clip-text mr-3">
                    exclusive
                  </span>
                  waitlist
                </h1>
                <div className="absolute top-[-49px] left-[-59px] fade-in hidden sm:block">
                  <img
                    src="images/borderNexgen.svg"
                    alt="border-image"
                    className="max-w-[67%]"
                  />
                </div>
              </div>
            </div>
            <div className="heading-res block sm:hidden">
              <div className="relative inline-block px-[20px]">
                <h1 className="relative z-20 pt-[70px] text-[50px] !text-[#FFF5D9] leading-[50px] text-center f-PowerGrotesk">
                  Welcome to <br /> the&nbsp;
                  <span className="bg-nexgen-gradient bg-clip-text mr-3">
                    exclusive
                  </span>{" "}
                  <br />
                  waitlist
                </h1>
                <div className="absolute top-[66px] left-[55px] fade-in block sm:hidden">
                  <img
                    src="images/borderNexgen.svg"
                    alt="border-image"
                    className="w-[290px] h-[155px]"
                  />
                </div>
              </div>
            </div>
            {/* Conditional Rendering for Card */}
            {showShareLink ? (
              <ShareLink
                setShowShareLink={setShowShareLink}
                sharelink={waitlistInfo.referralLink}
              />
            ) : (
              <div className="set-large-align w-[100%] px-[12px] sm:px-0">
                <div className="card gradient-box border-[1px] border-[#FFFFFF21] sm:mx-auto flex items-center justify-center h-[430px] lg:h-[400px] sm:h-auto sm:max-w-[360px] mt-9 rounded-[40px] p-4 text-center shadow-lg relative z-10 sm:mt-0">
                  <div className="mt-6 lg:mt-0">
                    <h1 className="text-[#FFF5D9] f-PowerGrotesk text-[50px]">
                      {waitlistInfo.waitlistNumber}
                    </h1>
                    <p className="f-PowerGrotesk text-[20px] md:text-[14px] mt-4 leading-[1] text-[#FFF5D9]">
                      You are on the waitlist <br /> Get ahead of the crowd!
                    </p>
                    <p className="text-[#FFF5D947] max-w-[268px] sm:max-w-[] mx-auto mt-5 text-[12px] md:text-[12px] leading-[15px] md:leading-[16px]">
                      We’ve added you to our waitlist. We will notify you once
                      we are ready to launch our beta version. In the meantime,
                      you can share it and get a chance to earn 500 for early
                      access to the platform.
                    </p>
                    {/* Button 2 */}
                    <button
                      type="submit"
                      className="f-PowerGrotesk bg-[#131515] opacity-[75%] text-[10px] sm:text-[11px] gap-2 btn-color text-[#505050] leading-tight font-normal px-5 py-6 sm:px-6 sm:py-8 w-full h-[55px] mt-7 md:mt-6 rounded-full flex items-center dark:bg-[#000000] justify-between hover:opacity-[100%] duration-300 !hover:border-[solid] !hover:border-[#FFF5D9]"
                      onClick={handlePaste}
                    >
                      {waitlistInfo.referralLink}
                      <img
                        src="images/copy.svg"
                        alt="Email Icon"
                        className="f-PowerGrotesk h-7 ml-[4px] sm:ml-auto max-w-[12px] sm:max-w-[16px]"
                      />
                    </button>
                    {/* Refer Friend */}
                    <button
                      type="submit"
                      className="f-PowerGrotesk text-[12px] sm:text-[14px] bg-[#131515] btn-color text-[#E1FF26] leading-tight font-normal px-5 py-4 sm:px-6 sm:py-8 w-full h-[55px] mt-2 rounded-full flex items-center dark:bg-[#000000] justify-center custom-button"
                      onClick={handleShareClick}
                    >
                      Refer a friend
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* Footer Secttion */}
            <div className="mt-7 sm:mt-4 flex flex-col items-center text-[#6A9298] space-y-4 max-w-[272px]">
              <h1 className="f-PowerGrotesk text-[15.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A929857]">
                Stay tuned
              </h1>
              <div>
                <ul className="flex space-x-3 sm:space-x-3 justify-start items-center">
                  <li className="bg-rgb h-8 sm:h-8 w-8 sm:w-8 rounded-full">
                    <a
                      href="https://www.instagram.com/cooasis.in/"
                      target="_blank"
                      className="hover:text-white flex justify-center"
                    >
                      <img
                        src="/images/ins.svg"
                        alt="Instagram"
                        className="w-[25px] sm:w-[32px] mt-1 sm:mt-0"
                      />
                    </a>
                  </li>
                  <li className="bg-rgb h-8 sm:h-8 w-8 sm:w-8 rounded-full">
                    <a
                      href="https://www.linkedin.com/company/cooasis-in"
                      target="blank"
                      className="hover:text-white flex justify-center"
                    >
                      <img
                        src="/images/logo-1.svg"
                        alt="LinkedIn"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[8px]"
                      />
                    </a>
                  </li>
                  <li className="bg-rgb h-8 sm:h-8 w-8 sm:w-8 rounded-full">
                    <a
                      href="https://www.behance.net/coasis"
                      target="blank"
                      className="hover:text-white flex justify-center"
                    >
                      <img
                        src="/images/logo-2.svg"
                        alt="Behance"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[8px]"
                      />
                    </a>
                  </li>
                  <li className="bg-rgb h-8 sm:h-8 w-8 sm:w-8 rounded-full">
                    <a
                      href="https://dribbble.com/Cooasis"
                      target="blank"
                      className="hover:text-white flex justify-center"
                    >
                      <img
                        src="/images/logo-3.svg"
                        alt="Dribbble"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[8px]"
                      />
                    </a>
                  </li>
                  <li className="bg-rgb h-8 sm:h-8 w-8 sm:w-8 rounded-full">
                    <a
                      href="https://www.facebook.com/cooasis.in"
                      target="_blank"
                      className="hover:text-white flex justify-center"
                    >
                      <img
                        src="/images/logo-4.svg"
                        alt="Facebook"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[8px]"
                      />
                    </a>
                  </li>
                  <li className="bg-rgb h-8 sm:h-8 w-8 sm:w-8 rounded-full">
                    <a
                      href="https://www.behance.net/coasis"
                      target="_blank"
                      className="hover:text-white flex justify-center"
                    >
                      <img
                        src="/images/logo-5.svg"
                        alt="Your Icon"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[8px]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <p className="text-[12px] !mb-2 sm:!mb-3 f-HelveticaNeueLight text-[#6A929854] leading-[17px] !mt-3 text-center">
                All Rights Reserved, Copyright 2024
                <br />
                Designed and developed by cooasis studio
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ConfettiBackground = () => (
  <div className="inset-0 z-0">
    <div className="confetti"></div>
  </div>
);

export default Refer;
