import React, { useRef, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";
// Assuming Button is a custom component
import { Button } from "../ui/moving-border";
import Header from "../components/Header";

const NumberVerify = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { verificationId } = location.state || {};

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 3) {
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
    try {
      const code = otp.join("");
      const auth = getAuth();
      const credential = auth.PhoneAuthProvider.credential(verificationId, code);
      const result = await signInWithCredential(auth, credential);
      console.log("OTP verified successfully:", result);
      navigate("/refer");  // Navigate to the next page
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
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
                  <Link to="/numberPage">
                    <button className="f-HelveticaNeueRoman cursor-pointer text-[15px] text-[#6A929857] leading-[23.46px] mt-4">
                      Change number
                    </button>
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    id="verify-email-button"
                    className="f-PowerGrotesk h-[55px] w-[290px] !cursor-pointer text-[17.5px] text-[#E1FF26] bg-[#0000006B] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out hover:bg-[#E1FF26] leading-[17.5px] mt-4 px-8 py-6 rounded-full opacity-100 items-center flex justify-center"
                    onClick={verifyOtp}
                  >
                    Verify Mobile
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
