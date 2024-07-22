import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import "./pages.css";
import { Button } from "../ui/moving-border";
import Refer from "./Refer";

const LandingPage = () => {
  const [showRefer, setShowRefer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRefer(true);
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
        <div className="relative">
          <h2 className="text-[70px] leading-[70px] xxl:text-7xl f-PowerGrotesk text-[#FCFCD8] mb-4 text-center">
            <Typical
              steps={["Nex-gen", 1000]}
              wrapper="span"
              className="bg-nexgen-gradient bg-clip-text"
            />
            {/* <Typical
              steps={["", 1000]}
              wrapper="span"
              className="text-[#FCFCD8]"
            /> */}
            <br />
            <Typical
              steps={["design ecosystem", 1000]}
              wrapper="span"
              classN
              ame="text-[#FCFCD8]"
            />
            <div className="absolute bottom-10 left-[360px] fade-in ">
              <img src="images/star.svg" alt="" />
            </div>
          </h2>
          <div className="absolute top-0 left-[450px] fade-in ">
            <img src="images/james.svg" alt="" />
          </div>
        </div>
        {/* Form */}
        <form className="flex flex-col items-center " onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Eg. Jeff@cooasis.in"
              className="f-HelveticaNeueUltraLight bg-transparent text-[14px] xxl:text-[17px] text-[white] leading-[14.13px] w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border-[1px] border-[#FFFFFF17] rounded-full custom-inset custom-gradient"
            />
            <div className="absolute right-[18px] bottom-[20px] cursor-pointer">
              <img src="/images/maillandingpage.svg" alt="Email Icon" />
            </div>
          </div>
          <Button
            borderRadius="2rem"
            className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out"
          >
            Get Early Access
          </Button>
        </form>
        <div className="mt-7">
          <div className="flex justify-center items-center">
            <img
              src="/images/avtar-1.svg"
              alt="People Join"
              className="overflow-hidden"
            />
            <img
              src="/images/avtar-2.svg"
              alt="People Join"
              className="ml-[-7px] overflow-hidden"
            />
            <img
              src="/images/avtar-3.svg"
              alt="People Join"
              className="ml-[-7px] overflow-hidden"
            />
          </div>
          <span className="f-PowerGrotesk text-[14.5px] text-[#6A92985E] xxl:text-[17.5px] leading-[14.54px] flex justify-center items-center mt-1">
            +200 people joined
          </span>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center mt-11">
            <img src="images/moon-1.svg" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="images/moon-2.svg"
              alt=""
              className="absolute top-[-35px]"
            />
          </div>
        </div>
        <div className="mt-[-2rem] flex flex-col justify-center items-center space-x-4">
          <span className="f-PowerGrotesk text-[14.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A9298] text-center mb-4">
            Backed by
          </span>
          <div className="flex items-center justify-center space-x-7 max-w-[642px] ml-0">
            <img src="images/start.svg" alt="" className="w-[75px]" />
            <img src="images/yourstory.svg" alt="" className="w-[75px]" />
            <img src="images/aws.svg" alt="" className="w-[75px]" />
            <img src="images/launch.svg" alt="" className="w-[75px]" />
            <img src="images/google.svg" alt="" className="w-[75px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
