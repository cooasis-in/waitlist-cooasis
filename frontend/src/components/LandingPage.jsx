import React, { useState } from "react";
import Typical from "react-typical";
import "./pages.css";
import { Button } from "../ui/moving-border";
import ReferPage from "./ReferPage";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const LandingPage = () => {
  const [showRefer, setShowRefer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRefer(true);
    console.log("Handling submit...");
  };

  if (showRefer) {
    return <ReferPage />;
  }

  const people = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section className="bg-color">
      <div>
        <h1 className="text-[12px] text-center bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk">
          Join waitlist for
        </h1>
        <div className="reletive">
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
          <div className="absolute top-0 left-[343px]">
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
            className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out"
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

        {/* <div className="flex flex-row items-center justify-center mb-2 mt-6 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <span className="f-PowerGrotesk text-[14.5px] text-[#6A92985E] xxl:text-[17.5px] leading-[14.54px] flex justify-center items-center">
          +200 people joined
        </span> */}

        {/*  */}
        <div className="relative">
          <div className="flex justify-center items-center mt-11">
            <img src="images/moon-1.svg" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="images/moon-2.svg"
              alt=""
              className=" absolute top-[-35px]"
            />
          </div>
        </div>
        <div className="mt-[-2rem] flex flex-col justify-center items-center space-x-4">
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
