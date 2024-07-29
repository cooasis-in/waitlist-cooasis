import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Refer from "./Refer";
import ImageSlider from "./ImageSlider";

const EmailVerify = ({ setverifyEmail, email, referrer, showVerify }) => {
  const [verificationError, setVerificationError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [waitlistInfo, setWaitlistInfo] = useState({});
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timerSeconds, setTimerSeconds] = useState(60);

  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    let interval;
    if (resendDisabled) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000); // Ensuring the interval is set to 1000 milliseconds (1 second)
    }

    return () => clearInterval(interval);
  }, [resendDisabled]);

  const handleResend = async () => {
    try {
      setResendDisabled(true); // Disable the button
      setTimerSeconds(60); // Reset timer duration to 60 seconds
      const response = await axios.post("http://localhost:3001/resend-otp", {
        email,
      });
      
      if (response.status === 200) {
        setVerificationError(""); // Clear any previous errors
        setTimerSeconds(60); // Reset the timer
        setVerificationError("OTP has been resent to your email.");
      } else {
        setVerificationError("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      setVerificationError("Failed to resend OTP. Please try again.");
    }
  };
  

  const handleSubmit = async () => {
    try {
      const otpCode = otp.join("");
      const response = await axios.post(
        "http://localhost:3001/verify-email",
        { otpCode, email, referrer },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const { waitlistNumber, referralLink } = response.data;
        setWaitlistInfo({ waitlistNumber, referralLink });
        setIsVerified(true);
      }
    } catch (error) {
      console.error("Verification Error:", error);
      if (error.response && error.response.status === 400) {
        setVerificationError("Invalid OTP. Please try again.");
      } else {
        setVerificationError("Server error. Please try again later.");
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlesubmit = () => {
    setverifyEmail(false);
  };

  useEffect(() => {
    const verifyButton = document.getElementById("verify-email-button");
    const isOtpComplete = otp.every((digit) => digit !== "");
    if (isOtpComplete) {
      verifyButton.style.opacity = "1";
    } else {
      verifyButton.style.opacity = "0.5";
    }
  }, [otp]);

  if (isVerified) {
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
      <section className="bg-color !min-h-screen adjest-res">
        <div className="container mx-auto">
          <div className="pt-[75px] sm:pt-[100px]">
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
              <div className="flex flex-col items-center justify-center">
                <div className="max-w-[600px] email-container">
                  <div className="flex space-x-3 mt-3 px-6">
                    {otp.map((data, index) => {
                      return (
                        <input
                          className="f-PowerGrotesk max-w-[65px] h-[65px] text-[#FCFCD8] text-center text-lg border-[1px] border-[#FFFFFF17] bg-transparent rounded-full focus:outline-none focus:border-[#FFFFFF17]"
                          type="text"
                          name="otp"
                          maxLength="1"
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                          ref={(el) => (inputRefs.current[index] = el)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-center">
                    {verificationError ? (
                      <p className="text-red-500 text-[12px] text-center mt-4 f-HelveticaNeueRoman cursor-pointer  leading-[23.46px]">
                        {verificationError}
                      </p>
                    ) : (
                      <button
                        className="f-HelveticaNeueRoman cursor-pointer text-[15px] text-[#6A929857] leading-[23.46px] mt-4"
                        onClick={handlesubmit}
                      >
                        Change email
                      </button>
                    )}
                  </div>
                  <button
                    id="verify-email-button"
                    className="f-PowerGrotesk max-w-[421px] w-full !cursor-pointer text-[17.5px] text-[#E1FF26] bg-[#0000006B] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out hover:bg-[#E1FF26] leading-[17.5px] mt-4 px-8 py-6 rounded-full opacity-100"
                    onClick={handleSubmit}
                  >
                    Verify email
                  </button>
                  {/* {verificationError && (
                    <p className="text-red-500 text-[12px] text-center mt-2">
                      {verificationError}
                    </p>
                  )} */}
                  <div className="flex justify-center">
                    <button
                      onClick={handleResend}
                      disabled={resendDisabled}
                      className={`f-HelveticaNeueLight text-[#5A5A5A] text-[12px] xxl:text-[18px] leading-[17.59px] font-light mt-4 lg:font-medium ${
                        resendDisabled ? "cursor-not-allowed opacity-50" : ""
                      }`}
                    >
                      <span className="text-[#C8C8C8] dark:text-[#FCFCD8]">
                        {resendDisabled
                          ? `Resend Code in ${timerSeconds}s`
                          : "Didn't get the code?"}
                      </span>{" "}
                      {resendDisabled ? null : "Click to resend"}
                    </button>
                    {/* {resendDisabled && (
                      <p className="text-gray-500 text-center mt-2">
                        Resend OTP in {timerSeconds}s
                      </p>
                    )} */}
                  </div>
                </div>
              </div>
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
                    borderRadius="2rem"
                    className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out"
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

export default EmailVerify;
