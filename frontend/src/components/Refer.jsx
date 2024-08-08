import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { useState } from "react";
import ShareLink from "../components/ShareLinks";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Refer = () => {
  const location = useLocation();
  const { waitlistInfo } = location.state || {};
  console.log(waitlistInfo);
  const [showShareLink, setShowShareLink] = useState(false);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isDotVisible, setIsDotVisible] = useState(true);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const pathParts = location.pathname.split('/');
  const niftWord = pathParts.includes('nift');

  // confetti
  const navigate = useNavigate();

  useEffect(() => {
    if (!waitlistInfo) {
      navigate("/");
    }
  }, [waitlistInfo, navigate]);

  useEffect(() => {
    if (waitlistInfo) {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
      });
    }
  }, [waitlistInfo]);

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

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
    setIsDotVisible(false);
    setIsButtonActive(!isButtonActive); // Toggle button active state
  };

  return (
    <>
      <header className="set-alignment set-alignment-logo flex justify-between items-start">
      <div className="flex items-center sm:items-end set-width">
          <Link to="/">
          <img src="/images/darkmode.svg" alt="Cooasis Logo" className="w-30 mb-0 sm:mb-1" />
          </Link>
          {niftWord && (
          <>
            <div className="border-[1px] border-[#FFFFFF29] h-[42px] sm:h-[56px] w-[0] mx-6 sm:mx-8"></div>
            <div>
              <Link to="/nift">
                <img
                  src="/images/niff.svg"
                  alt=""
                  className="absolute bottom-[27px] sm:bottom-[20px] w-[32px] sm:w-[56px]"
                />
              </Link>
            </div>
          </>
        )}
        </div>
        <div className="relative bg-rgb rounded-full border-[0.5px] border-[#99999982]">
          <button
            className={`flex justify-center items-center py-2 px-4 sm:py-3 sm:px-7 max-w-[91px] sm:max-w-[147px] f-PowerGrotesk text-[12px] sm:text-[17.5px] leading-[12px] sm:leading-[17.5px] duration-300 ${
              isButtonActive
                ? "text-white bg-[#0000006B]"
                : "text-[#6A929857] hover:bg-[#0000006B]"
            }`}
            onClick={toggleBoxVisibility}
          >
            <span className="mr-[7px]">
              <img
                src={
                  isButtonActive
                    ? "/images/bellIconw.svg"
                    : "/images/bellicon.svg"
                }
                alt=""
                className="max-w-[8.91px] sm:max-w-[100%]"
              />
            </span>
            <span className="mb-[4px] sm:mb-[7px]">updates</span>
          </button>
          {isDotVisible && (
            <div>
              <img
                src="/images/dot-y.svg"
                alt=""
                className="absolute top-[8px] left-[20px] sm:left-[37px] w-[6px] h-[6px] sm:w-[10px] sm:h-[10px]"
              />
            </div>
          )}
        </div>
        {isBoxVisible && (
          <div className="absolute top-[70px] sm:top-[100px] right-[20px] sm:right-[50px]">
            <div className="change-bg-samll py-[20px] px-[10px] bg-[#1515158C] rounded-[20px] border-[0.5px] border-[#99999982] h-[367px] w-[287px] flex items-center justify-center">
              <div className="h-full w-full">
                <div className="flex items-center px-[10px]">
                  <img src="/images/bellicon-y.svg" alt="" />
                  <h4 className="f-PowerGrotesk text-[18px] text-[#FFFBD9] leading-[20px] ml-3">
                    Stay updated !
                  </h4>
                </div>

                <div className="p-[10px] bg-[#1515158C] rounded-[10px] border-[0.5px] border-[#99999982] mt-[1.5rem]">
                  <div className="flex">
                    <div className="max-w-[75px] h-[78px] bg-[#00000063] flex justify-center items-center rounded-[5px] px-[15px]">
                      <img src="/images/ubt-gift.svg" alt="" />
                    </div>
                    <div className="ml-4 max-w-[130px] flex items-center">
                      <p className="f-HelveticaNeueLight text-[11px] text-[#FFF5D969] leading-[16.25px]">
                        stay updated about all the important notices and
                        information about the launch and early access.
                      </p>
                    </div>
                  </div>
                  <div className="max-w-[273px] mt-[1.2rem]">
                    <a
                      href="https://chat.whatsapp.com/EgPgI3ahn4GJkFcGFzdkkd"
                      target="_blank"
                    >
                      <button className="f-PowerGrotesk bg-[#0000006B] flex items-center text-[12px] text-[#E1FF26] leading-[12px] rounded-full py-[14px] px-4">
                        <span className="mr-[10px]">
                          <img src="/images/community.svg" alt="" />
                        </span>
                        join our WhatsApp community
                      </button>
                      {/*  */}
                      {/* <button className="inline-flex h-12 animate-shimmer max-w-[273px] items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      join our WhatsApp community
                      </button> */}
                    </a>
                  </div>
                </div>
                <p className="mx-auto pt-[43px] max-w-[146px] f-PowerGrotesk text-[12px] text-[#6A929857] leading-[12px] text-center">
                  <span className="flex justify-center mb-1">
                    <img src="/images/bellicon.svg" alt="" />
                  </span>
                  That’s All ! <br />
                  You’re all caught up.
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
      <section className=" adjest !min-h-screen bg-color-res">
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
                    src="/images/borderNexgen.svg"
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
                    src="/images/borderNexgen.svg"
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
                <div className="card card-h-res gradient-box border-[1px] border-[#FFFFFF21] sm:mx-auto flex items-center justify-center h-[415px] lg:h-[400px] sm:h-auto sm:max-w-[360px] mt-9 rounded-[43px] sm:rounded-[46px] p-4 text-center shadow-lg relative z-10 sm:mt-0">
                  <div className="grow mt-6 lg:mt-0">
                    <h1 className="text-[#FFF5D9] f-PowerGrotesk text-[50px]">
                      <CountUp
                        start={1}
                        end={waitlistInfo.waitlistNumber}
                        duration={3} // Animation duration in seconds
                        separator=","
                      />
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
                        src="/images/copy.svg"
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
