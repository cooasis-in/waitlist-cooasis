import React, { useEffect, useState } from "react";
import Typical from "react-typical";
import "../components/pages.css";
import Refer from "./Refer";

const LandingPage = () => {
  const [showTyping, setShowTyping] = useState(false);
  const [showRefer, setShowRefer] = useState(false); // New state to manage refer component visibility

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTyping(true);
    }, 4000); // Adjust timing to match your arrowBorderAnimation duration

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRefer(true); // Show the refer component on button click
    console.log("Handling submit...");
  };

  // Conditionally render either the landing page or the refer component
  if (showRefer) {
    return <Refer />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-[10px] bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk">
        Join waitlist for
      </h1>
      <h2 className="text-7xl f-PowerGrotesk text-[#FCFCD8] mb-8 relative">
        <div className="relative inline-block nex-gen-container">
          <span className="bg-nexgen-gradient bg-clip-text nex-gen-text">
            Nex-gen
          </span>
          <div className="arrow-container">
            <img src="/images/arrow.svg" alt="Arrow" className="arrow-image" />
            <div className="border-animation"></div>
          </div>
        </div>
        <div className="typical-wrapper">
          {showTyping && (
            <Typical
              steps={["design ecosystem", 1000]}
              wrapper="span"
              className="text-[#FCFCD8]"
            />
          )}
        </div>
      </h2>
      {/* Form */}
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Eg. Jeff@cooasis.in"
            className="f-HelveticaNeueUltraLight text-sm text-[white] leading-tight w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border border-[#014F5917] rounded-full custom-inset custom-gradient bg-transparent placeholder-black"
          />
          <div className="absolute right-[18px] bottom-[20px] cursor-pointer">
            <img src="/images/email-2.svg" alt="Email Icon" />
          </div>
        </div>
        <button
          type="submit"
          className="f-PowerGrotesk text-base btn-color text-[#E1FF26] leading-tight font-normal px-6 py-4 w-full h-[55px] mt-4 rounded-full flex items-center dark:bg-[#1D2121] justify-center"
        >
          Get Early Access
        </button>
      </form>
      <div className="mt-8">
        <img src="/images/Join.svg" alt="People Join" className="h-10" />
      </div>
      <div className="mt-6 flex flex-col space-x-4">
        <span className="text-center f-PowerGrotesk font-bold mb-4 text-[#313F42]">
          Backed by
        </span>
        <img src="/images/PoweredBy.svg" alt="AWS" className="w-[500px]" />
      </div>
    </div>
  );
};

export default LandingPage;
