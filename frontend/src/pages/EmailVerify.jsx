
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";
import Header from "../components/Header";

const EmailVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, referrer, showVerify } = location.state;
  const [verificationError, setVerificationError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [waitlistInfo, setWaitlistInfo] = useState({});
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [loading, setLoading] = useState(false);

  const inputRefs = useRef([]);
  const pathParts = location.pathname.split('/');
  const niftWord = pathParts.includes('nift');

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
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [resendDisabled]);

  const handleResend = async () => {
    // setLoading(true);
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
    setLoading(false); // Hide loader
  };

  const handleSubmit = async () => {
    setLoading(true); // Show loader
    try {
      const otpCode = otp.join("");
      const response = await axios.post(
        "https://http://localhost:3001/verify-email",
        { otpCode, email, referrer },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const responseData = response.data;
        const { waitlistNumber, referralLink } = response.data;
        setWaitlistInfo({ waitlistNumber, referralLink });
        // setIsVerified(true);
        if(niftWord) {
          navigate(`/nift/verified?email=${encodeURIComponent(email)}`, {
            state: { waitlistInfo: responseData },
          });
        } else {
          navigate(`/verified?email=${encodeURIComponent(email)}`, {
            state: { waitlistInfo: responseData },
          });
        }
      }
    } catch (error) {
      console.error("Verification Error:", error);
      if (error.response && error.response.status === 400) {
        setVerificationError("Invalid OTP. Please try again.");
      } else {
        setVerificationError("Server error. Please try again later.");
      }
    }
    setLoading(false); // Hide loader
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

  return (
    <>
      <Header />
      <section className="bg-color !min-h-screen adjest-res">
        <div className="container mx-auto">
          <div className="pt-[130px] sm:pt-[100px]">
            <NextgenTitle />
            {showVerify ? (
              <div className="flex flex-col items-center justify-center mt-[50px] sm:mt-0">
                <div className="max-w-[600px] email-container mb-[6rem] sm:mb-0">
                  <div className="flex space-x-3 mt-3 px-6">
                    {otp.map((data, index) => {
                      return (
                        <input
                          className="f-PowerGrotesk max-w-[65px] h-[65px] text-[#FCFCD8] text-center text-lg border-[1px] border-[#FFFFFF17] bg-transparent rounded-full focus:outline-none  focus:border-[#FCFCD8]"
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
                  <div className="flex justify-center items-center">
                    <button
                      id="verify-email-button"
                      className="f-PowerGrotesk h-[55px] w-[290px] !cursor-pointer text-[17.5px] text-[#E1FF26] bg-[#0000006B] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out hover:bg-[#E1FF26] leading-[17.5px] mt-4 px-8 py-6 rounded-full opacity-100 items-center flex justify-center"
                      onClick={handleSubmit}
                      style={{ opacity: "0.5" }}
                      disabled={loading}
                    >
                      {loading ? (
                        <ClipLoader
                          color={"#E1FF26"}
                          loading={loading}
                          size={20}
                        />
                      ) : (
                        "Verify email"
                      )}
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleResend}
                      disabled={resendDisabled}
                      className={`f-HelveticaNeueLight text-[#5A5A5A] text-[12px] xxl:text-[18px] leading-[17.59px] font-light mt-4 lg:font-medium ${
                        resendDisabled ? "cursor-not-allowed opacity-50" : ""
                      }`}
                    >
                      <span
                        className={`f-HelveticaNeueRoman cursor-pointer text-[15px] text-center ${
                          resendDisabled ? "text-[#6A9298]" : "text-[#6A929857]"
                        } leading-[23.46px]`}
                      >
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
            <BottomPart />
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailVerify;
