import React, { useState, useEffect } from "react";
import axios from "axios";
import "./pages.css";
import Refer from "./Refer";
import ImageSlider from "./ImageSlider";
import EmailVerify from "./EmailVerify";
import { Button } from "../ui/moving-border";

const LandingPage = () => {
  const [showRefer, setShowRefer] = useState(false);
  const [waitlistInfo, setWaitlistInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [referrer, setReferrer] = useState(null);
  const [showVerify, setShowVerify] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setReferrer(queryParams.get("refer"));
  }, []);

  const handleShowVerifyEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    setEmail(email);
    try {
      const response = await axios.post("http://3.25.112.171:3001/users", {
        email,
        referrer,
      });
      const responseData = response.data;
      setWaitlistInfo(responseData);
      console.log(responseData);
      console.log(responseData.isVerified);

      if (responseData.isVerified) {
        setShowRefer(true);
      } else {
        setShowVerify(true);
      }
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


  if (showRefer) {
    return <Refer waitlistInfo={waitlistInfo} />;
  }

  if (showVerify) {
    return (
      <EmailVerify
        setverifyEmail={setShowVerify}
        email={email}
        referrer={referrer}
        showVerify={true}
      />
    );
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
      <section className="bg-color !min-h-screen adjest-res">
        <div className="container mx-auto">
          <div className="pt-[75px] sm:pt-[100px] lg:pt-[130px] xxl:pt-[100px]">
            <h1 className="upper-index relative text-[12px] sm:text-[18px] leading-[12px] sm:leading-[25px] text-center bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk sm:mb-2">
              Join waitlist for
            </h1>
            <div className="larg-pb text-center mt-4 sm:mt-0 mb-4">
              <div className="relative inline-block">
                <h2 className="upper-index relative text-[40px] sm:text-[70px] leading-[40px] sm:leading-[70px] xxl:text-7xl f-PowerGrotesk text-[#FCFCD8]">
                  <span className="bg-nexgen-gradient bg-clip-text fade-in">
                    Nex-gen
                  </span>
                  <br />
                  design ecosystem
                </h2>
                <div className="absolute bottom-[-12px] left-[82px] fade-in hidden lg:block">
                  <img
                    src="images/borderNexgen.svg"
                    alt="border-image"
                    className="max-w-[78%]"
                  />
                </div>
                <div className="absolute bottom-[90px] left-[45px] fade-in hidden lg:block">
                  <img
                    src="images/james.svg"
                    alt="James"
                    className="max-w-[4.5rem]"
                  />
                </div>
                <div className="absolute hidden lg:block bottom-[40px] left-[-25px] fade-in">
                  <img src="images/star.svg" alt="Star" />
                </div>
                  <div>
                  <img
                    src="/images/cursorImg.png"
                    alt="Cursor"
                    className="absolute right-[-10px] mt-3 w-14 hidden lg:block fade-in"
                  />
                </div>
              </div>
            </div>
            {showVerify ? (
              <EmailVerify
                setverifyEmail={setShowVerify}
                email={email}
                referrer={referrer}
              />
            ) : (
              <div>
                <form
                  className="set-large-align flex flex-col items-center my-16 sm:my-0"
                  onSubmit={handleShowVerifyEmail}
                >
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Eg. Jeff@cooasis.in"
                      className="f-HelveticaNeueUltraLight bg-transparent text-[14px] xxl:text-[17px] text-[white] leading-[14.13px] w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border-[1px] border-[#FFFFFF17] rounded-full custom-inset custom-gradient"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="absolute right-[18px] bottom-[20px] cursor-pointer">
                      <img src="/images/maillandingpage.svg" alt="Email Icon" />
                    </div>
                  </div>
                  {errorMessage && (
                    <p className="text-red-500 text-[12px] mt-1">
                      {errorMessage}
                    </p>
                  )}
                  <Button
                    id="get-early-access-button"
                    borderRadius="2rem"
                    className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out opacity-100"
                  >
                    Get Early Access
                  </Button>
                </form>
              </div>
            )}
            <div className="mt-8 sm:mt-6">
              <div className="flex justify-center items-center pl-2">
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
            <div className="set-image">
              <img
                src="images/moon-1.png"
                alt=""
                className="max-w-[800px] w-full m-auto mt-[-190px] hidden sm:block"
              />
              <img
                src="images/moon.png"
                alt=""
                className="max-w-[700px] w-full m-auto mt-[-130px] block sm:hidden"
              />
            </div>
            <div className="hidden sm:block">
              <div className="sm:mt-[-2rem] flex flex-col justify-center items-center space-x-4">
                <span className="f-PowerGrotesk text-[14.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A92985E] text-center mb-2">
                  Backed by
                </span>

                <div className="res-align flex  items-center justify-center space-x-4 sm:space-x-7 max-w-[642px] !ml-0 !pb-4 sm:pt-3">
                  <img src="images/start.svg" alt="" className="max-w-[75px]" />
                  <img
                    src="images/yourstory.svg"
                    alt=""
                    className="max-w-[75px]"
                  />
                  <img src="images/aws.svg" alt="" className="max-w-[75px]" />
                  <img
                    src="images/launch.svg"
                    alt=""
                    className="max-w-[75px]"
                  />
                  <img
                    src="images/google.svg"
                    alt=""
                    className="max-w-[75px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block text-center sm:hidden py-4 w-full res-margin-fix">
            <span className="f-PowerGrotesk text-[14.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A92985E] text-center">
              Backed by
            </span>
            <ImageSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
