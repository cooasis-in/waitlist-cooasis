import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Refer from "./Refer";

const EmailVerify = ({ setverifyEmail, email, referrer }) => {
  const [verificationError, setVerificationError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [waitlistInfo, setWaitlistInfo] = useState({});
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [time, setTime] = useState(60);

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
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const handleResend = async () => {
    try {
      const response = await axios.post("http://localhost:3001/resend-otp", { email });
      if (response.status === 200) {
        setVerificationError("OTP has been resent to your email.");
        setTime(60);  // Reset the timer
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

  if (isVerified) {
    return <Refer waitlistInfo={waitlistInfo} />;
  }

  return (
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
          <button
            className="f-HelveticaNeueRoman cursor-pointer text-[15px] text-[#6A929857] leading-[23.46px] mt-4"
            onClick={handlesubmit}
          >
            Change email
          </button>
        </div>
        <button
          className="f-PowerGrotesk max-w-[421px] w-full !cursor-pointer text-[17.5px] text-[#E1FF26] leading-[17.5px] mt-4 px-8 py-6 bg-[#0000006B] rounded-full"
          onClick={handleSubmit}
        >
          Verify email
        </button>
        <div className="flex justify-center">
          <button
            className="mt-4 f-HelveticaNeueRoman cursor-pointer text-[15px] text-[#6A929857] leading-[23.46px] text-center"
            onClick={handleResend}
            disabled={time > 0}
          >
            Resend Code in{" "}
            <span className="text-[#6A9298] text-center">
              00:{time < 10 ? `0${time}` : time}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
