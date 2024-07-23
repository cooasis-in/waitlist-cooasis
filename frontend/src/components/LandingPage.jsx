import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./pages.css";
import { Button } from "../ui/moving-border";
import Refer from "./Refer";
import cursorImage from "../../public/images/cursorImg.png";

const LandingPage = () => {
  const [showRefer, setShowRefer] = useState(false);
  const [waitlistInfo, setWaitlistInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const cursorRef = useRef(null);
  const typicalRef1 = useRef(null);
  const [referrer, setReferrer] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setReferrer(queryParams.get("refer"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const response = await axios.post("http://3.25.112.171:3001/users", {
        email,
        referrer,
      });
      setWaitlistInfo(response.data);
      console.log(response.data);
      setShowRefer(true);
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("This email is already on the waitlist.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      console.error("Error creating user", error);
    }
  };

  useEffect(() => {
    const updateCursorPosition = () => {
      if (typicalRef1.current && cursorRef.current) {
        const rect1 = typicalRef1.current.getBoundingClientRect();
        cursorRef.current.style.top = `${rect1.top + window.scrollY}px`;
        cursorRef.current.style.left = `${rect1.right + window.scrollX}px`;
      }
    };

    const interval = setInterval(updateCursorPosition, 50);

    return () => clearInterval(interval);
  }, []);

  if (showRefer) {
    return <Refer waitlistInfo={waitlistInfo} />;
  }

  return (
    <>
     <div className="set-alignment set-alignment-logo flex justify-between items-center">
          <div className="flex set-width">
            <img
              src="images/darkmode.svg"
              alt="Cooasis Logo"
              className="h-10 w-30"
            />
          </div>
        </div>
        <section className="bg-color !min-h-screen adjest-res pt-[100px]">
      <div className="container mx-auto">
        <div className="mt-6 sm:mt-0">
          <h1 className="text-[12px] leading-[12px] text-center bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk">
            Join waitlist for
          </h1>
          <div className="larg-pb relative text-center mt-4 sm:mt-0 mb-4">
            <h2 className="text-[30px] sm:text-[70px] leading-[30px] sm:leading-[70px] xxl:text-7xl f-PowerGrotesk text-[#FCFCD8]">
              <span className="bg-nexgen-gradient bg-clip-text fade-in">
                Nex-gen
              </span>
            </h2>
            <h2
              className="text-[30px] sm:text-[70px] leading-[30px] sm:leading-[70px] xxl:text-7xl f-PowerGrotesk text-[#FCFCD8] typing-text"
              ref={typicalRef1}
            >
              design ecosystem
            </h2>

            <div className="absolute hidden lg:block bottom-16 left-[340px] fade-in">
              <img src="images/star.svg" alt="Star" />
            </div>

            <img
              src={cursorImage}
              alt="Cursor"
              ref={cursorRef}
              className="absolute w-10 hidden lg:block"
              style={{ pointerEvents: "none" }}
            />

            <div className="absolute bottom-[40px] left-20 md:left-[200px] lg:bottom-[120px] lg:left-[400px] fade-in">
              <img
                src="images/james.svg"
                alt="James"
                className="w-10 lg:w-20"
              />
            </div>
          </div>

          {/* Form */}
          <form
            className="set-large-align flex flex-col items-center my-16 sm:my-0"
            onSubmit={handleSubmit}
          >
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
            {errorMessage && (
              <p className="text-red-500 text-[12px] mt-1">{errorMessage}</p>
            )}
            <Button
              borderRadius="2rem"
              className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out"
            >
              Get Early Access
            </Button>
          </form>
          <div className="mt-8 sm:mt-6">
            <div className="flex justify-center items-center ml-2">
              <img
                src="/images/avtar-1.svg"
                alt="People Join"
                className="overflow-hidden image-hover-effect"
              />
              <img
                src="/images/avtar-2.svg"
                alt="People Join"
                className="ml-[-7px] overflow-hidden image-hover-effect"
              />
              <img
                src="/images/avtar-3.svg"
                alt="People Join"
                className="ml-[-7px] overflow-hidden image-hover-effect"
              />
            </div>
            <span className="f-PowerGrotesk text-[12px] sm:text-[14.5px] text-[#6A92985E] xxl:text-[17.5px] leading-[14.54px] flex justify-center items-center mt-1">
              +200 people joined
            </span>
          </div>
          <div>
            <img src="images/moon.png" alt="" className="max-w-[900px] w-full m-auto mt-[-130px]" />
          </div>
          {/* <div className="relative">
            <div className="flex justify-center items-center mt-11">
              <img src="images/moon-1.svg" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="images/moon-2.svg"
                alt=""
                className="absolute top-[-18px] max-w-[60px]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img src="images/globelight.png" alt="" className="absolute bottom-[10px]" />
            </div>
          </div> */}
          <div className="sm:mt-[-2rem] flex flex-col justify-center items-center space-x-4">
            <span className="f-PowerGrotesk text-[14.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A92985E] text-center mb-4">
              Backed by
            </span>

            <div className="res-align flex items-center justify-center space-x-4 sm:space-x-7 max-w-[642px] !ml-0 !pb-4">
              <img src="images/start.svg" alt="" className="max-w-[75px]" />
              <img src="images/yourstory.svg" alt="" className="max-w-[75px]" />
              <img src="images/aws.svg" alt="" className="max-w-[75px]" />
              <img src="images/launch.svg" alt="" className="max-w-[75px]" />
              <img src="images/google.svg" alt="" className="max-w-[75px]" />
            </div>
            {/*  <div className="block sm:hidden">
         <ImageSlider /> 
        </div>*/}
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
};

export default LandingPage;