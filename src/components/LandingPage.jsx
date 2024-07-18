import React, { useState } from "react";
import Typical from "react-typical";
import "./pages.css";
import Refer from "./Refer";
import { Button } from "../ui/moving-border";

const LandingPage = () => {
  const [showRefer, setShowRefer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRefer(true);
    console.log("Handling submit...");
  };

  if (showRefer) {
    return <Refer />;
  }
  return (
    <section className="bg-color">
      <div>
        <h1 className="text-[12px] text-center bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk">
          Join waitlist for
        </h1>
        <h2 className="text-[70px] leading-[70px] xxl:text-7xl f-PowerGrotesk text-[#FCFCD8] mb-4 text-center">
          {/* <span className="bg-nexgen-gradient bg-clip-text">Nex-gen </span> */}
          <Typical
            steps={["Nex-gen", 1000]}
            wrapper="span"
            className="bg-nexgen-gradient bg-clip-text"
          />
          <Typical
            steps={["design", 1000]}
            wrapper="span"
            className="text-[#FCFCD8]"
          />
          <br />
          <Typical
            steps={["ecosystem", 1000]}
            wrapper="span"
            className="text-[#FCFCD8]"
          />
        </h2>
        {/* Form */}
        <form className="flex flex-col items-center " onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Eg. Jeff@cooasis.in"
              className="f-HelveticaNeueUltraLight bg-transparent	text-[14px] xxl:text-[17px] text-[white] leading-[14.13px] w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border-[1px] border-[#FFFFFF17] rounded-full custom-inset custom-gradient"
            />
            <div className="absolute right-[18px] bottom-[20px] cursor-pointer">
              <img src="/images/maillandingpage.svg" alt="Email Icon" />
            </div>
          </div>
          {/* <button
            type="submit"
            className="f-PowerGrotesk bg-[#0000006B] w-[290px] h-[55px] text-[14px] xxl:text-[17px] text-[#E1FF26] leading-[14.13px] px-6 py-4 mt-4 rounded-full flex items-center dark:bg-[#1D2121] justify-center"
          >
            Get Early Access
          </button> */}
          <Button
            borderRadius="2rem"
            className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-[black] hover:font-bold transform transition-transform duration-200"
          >
            Get Early Access
          </Button>
        </form>
        <div className="mt-7 ">
          <img
            src="/images/avtars.svg"
            alt="People Join"
            className="h-10 mx-auto"
          />
          <span className="f-PowerGrotesk text-[14.5px] text-[#6A92985E] xxl:text-[17.5px] leading-[14.54px] flex justify-center items-center mt-2">
            +200 people joined
          </span>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center space-x-4">
          <span className="f-PowerGrotesk text-[14.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A9298] text-center mb-4">
            Backed by
          </span>
          <div className="flex items-center justify-center space-x-7 max-w-[642px] ml-0 mt-2">
            <img src="images/start.svg" alt="" />
            <img src="images/yourstory.svg" alt="" />
            <img src="images/aws.svg" alt="" />
            <img src="images/launch.svg" alt="" />
            <img src="images/google.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
