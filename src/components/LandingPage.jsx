import React from "react";
import Typical from "react-typical";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-[10px] bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk ">
        Join waitlist for
      </h1>
      <h2 className="text-7xl f-PowerGrotesk text-[#FCFCD8] mb-8">
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
          steps={["ecosystem!", 1000]}
          wrapper="span"
          className="text-[#FCFCD8]"
        />
      </h2>
      {/* Form */}
      <form className="flex flex-col items-center">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Eg. Jeff@cooasis.in"
            className="f-HelveticaNeueUltraLight text-sm text-[#000000] leading-tight w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border border-[#014F5917] rounded-full custom-inset custom-gradient"
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
        <span className="text-center mb-4">Backed by</span>
        <img src="/images/PoweredBy.svg" alt="AWS" className="w-[500px]" />
      </div>
    </div>
  );
};

export default LandingPage;
