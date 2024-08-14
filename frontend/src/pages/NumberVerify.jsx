import React, { useRef, useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";
// Assuming Button is a custom component
import { Button } from "../ui/moving-border";
import { auth } from "../../firebase.config";
import Header from "../components/Header";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";

const NumberVerify = ({
  confirmationResult,
  waitlistInfo,
  niftWord,
  number,
}) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [verificationError, setVerificationError] = useState("");
   const [resendDisabled, setResendDisabled] = useState(true);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [ConfirmationResult, setConfirmationResult] = useState(confirmationResult);
  const [Loading, SetLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  // const { confirmationResult } = location.state || {};

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

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const verifyOtp = async () => {
    const otpValue = otp.join("");
    setLoading(true);

    try {
      const result = await ConfirmationResult.confirm(otpValue);
      console.log("OTP Verified Successfully:", result);

      const userId = waitlistInfo?.user?._id;
      if (userId) {
        const response = await fetch(
          "https://backend.coasis.in/updatePhoneNumber",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId,
              phoneNumber: number,
            }),
          }
        );

        // Check if the API response is not OK
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Something went wrong, try again!"
          );
        }
      }

      const navigationState = { waitlistInfo };
      let targetUrl = "/refer";

      if (niftWord) {
        navigationState.niftWord = niftWord;
        targetUrl = "/nift/refer";
      }

      navigate(targetUrl, { state: navigationState });
    } catch (error) {
      console.log("OTP Verification Failed:", error);
      setVerificationError(error.message || "Wrong OTP");
    }
  };

  const setupRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, you can now trigger OTP request
          // console.log("reCAPTCHA resolved:", response);
        },
        "expired-callback": () => {
          // Handle the case when reCAPTCHA response expires
          console.log("reCAPTCHA expired");
        },
      }
    );

    recaptchaVerifier.render(); // Render the reCAPTCHA
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };


  const handleResend = async () => {
    SetLoading(true); // Show loader
    try {
      setResendDisabled(true); // Disable the resend button
      setTimerSeconds(60); // Reset the countdown timer

      // Set up the reCAPTCHA
      const result = await setupRecaptcha(number);
      console.log("OTP sent successfully", result);
      setConfirmationResult(result);

      setVerificationError("OTP has been resent to your phone.");
    } catch (error) {
      console.error("Error resending OTP:", error);
      setVerificationError("Failed to resend OTP. Please try again.");
    }
    SetLoading(false); // Hide loader
  };

  return (
    <>
      <Header />
      <section className="bg-color !min-h-screen adjest-res">
        <div className="container mx-auto">
          <div className="pt-[130px] sm:pt-[100px]">
            <NextgenTitle />
            <div className="flex flex-col items-center justify-center mt-[50px] sm:mt-0">
              <div className="max-w-[600px] email-container mb-[6rem] sm:mb-0">
                <div className="flex space-x-3 mt-3 px-6">
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="f-PowerGrotesk sm:max-w-[65px] sm:h-[65px] max-w-[50px] h-[50px]  text-[#FCFCD8] text-center text-lg border-[1px] border-[#FFFFFF17] bg-transparent rounded-full focus:outline-none  focus:border-[#FCFCD8]"
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
                    <Link to="/numberPage">
                      <button className="f-HelveticaNeueRoman cursor-pointer text-[15px] text-[#6A929857] leading-[23.46px] mt-4">
                        Change number
                      </button>
                    </Link>
                  )}
                </div>
                {/* <div className="flex justify-center">
                  <Link to="/numberPage">
                    <button className="f-HelveticaNeueRoman cursor-pointer text-[15px] text-[#6A929857] leading-[23.46px] mt-4">
                      Change number
                    </button>
                  </Link>
                </div> */}
                <div className="flex justify-center items-center">
                  <button
                    id="verify-email-button"
                    className="f-PowerGrotesk h-[55px] w-[290px] !cursor-pointer text-[17.5px] text-[#E1FF26] bg-[#0000006B] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out hover:bg-[#E1FF26] leading-[17.5px] mt-4 px-8 py-6 rounded-full opacity-100 items-center flex justify-center"
                    onClick={verifyOtp}
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
                      "Verify mobile"
                    )}
                  </button>
                </div>
                 <div className="flex justify-center">
                  <button
                    onClick={handleResend}
                    disabled={resendDisabled}
                    className={`f-HelveticaNeueLight text-[#5A5A5A] text-[12px] xxl:text-[18px] leading-[17.59px] font-light mt-4 lg:font-medium ${resendDisabled ? "cursor-not-allowed opacity-50" : ""}`}
                  >
                    <span
                      className={`f-HelveticaNeueRoman cursor-pointer text-[15px] text-center ${resendDisabled ? "text-[#6A9298]" : "text-[#6A929857]"} leading-[23.46px]`}
                    >
                      {resendDisabled ? `Resend Code in ${timerSeconds}s` : "Didn't get the code?"}
                    </span>
                    {resendDisabled ? null : "Click to resend"}
                  </button>
                </div>
              </div>
            </div>

            <div></div>
            <BottomPart />
          </div>
        </div>
      </section>
    </>
  );
};

export default NumberVerify;
