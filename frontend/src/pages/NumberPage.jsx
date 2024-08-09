
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailVerify from "./EmailVerify";
import { Button } from "../ui/moving-border";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";
import Header from "../components/Header";
import { useLocation } from 'react-router-dom';
// import { ButtonsCard } from "../ui/tailwindcss-buttons";
import NumberVerify from "./NumberVerify";

const NumberPage = ({ waitlistInfo }) => {
  const [number, setNumber] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const pathParts = location.pathname?.split('/');
  const niftWord = pathParts?.includes('nift');

  useEffect(() => {
    console.log("Waitlist Info:", waitlistInfo);
  }, [waitlistInfo]);

  // const getOtp = async (e) => {
  //   e.preventDefault();
  //   console.log("Entered Mobile Number:", number);

  //   try {
  //     const response = await setupRecaptcha(number);
  //     console.log("OTP sent successfully", response);

  //     // Pass only the serializable data (verificationId)
  //     const verificationId = response.verificationId;

  //     if (niftWord) {
  //       navigate("/nift/numberverify", { state: { verificationId } });
  //     } else {
  //       navigate("/numberverify", { state: { verificationId } });
  //     }
  //   } catch (e) {
  //     console.log("Error sending OTP", e);
  //   }
  // };

  const setupRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, you can now trigger OTP request
        console.log("reCAPTCHA resolved:", response);
      },
      'expired-callback': () => {
        // Handle the case when reCAPTCHA response expires
        console.log("reCAPTCHA expired");
      }
    });

    recaptchaVerifier.render();  // Render the reCAPTCHA
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };


  const getOtp = async (e) => {
    e.preventDefault();
    console.log("Entered Mobile Number:", number);

    try {
      const result = await setupRecaptcha(number);
      console.log("OTP sent successfully", result);
      setConfirmationResult(result); // Store confirmationResult in state
      setIsVerifying(true); // Update state to render NumberVerify
    } catch (e) {
      console.log("Error sending OTP", e);
    }
  };

  if (isVerifying && confirmationResult) {
    // Render NumberVerify component with the confirmationResult prop
    return <NumberVerify confirmationResult={confirmationResult} waitlistInfo={waitlistInfo} />;
  }

  return (
    <>
      <Header />
      <section className="bg-color !min-h-screen adjest-res">
        <div className="container mx-auto">
          <div className="pt-[130px] sm:pt-[100px] lg:pt-[130px] xxl:pt-[100px]">
            <NextgenTitle />

            <div>
              <form
                className="set-large-align flex flex-col items-center my-32 sm:my-0"
                onSubmit={getOtp}
              >
                <div className="relative">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={number}
                    onChange={setNumber}
                    defaultCountry="IN"
                    className="f-HelveticaNeueUltraLight bg-transparent text-[14px] xxl:text-[17px] text-[white] leading-[14.13px] w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border-[1px] border-[#FFFFFF17] rounded-full custom-inset custom-gradient"
                  />
                  <div className="absolute right-[22px] bottom-[20px] cursor-pointer">
                    <img src="/images/mobile.svg" alt="mobile Icon" />
                  </div>
                </div>
                {/* Render reCAPTCHA container here */}
                <div id="recaptcha-container" style={{ display: "none" }}></div>
                <div>
                  {/* <Button
                      id="get-early-access-button"
                      borderRadius="2rem"
                      className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out border-1"
                    >
                      <div>Get Early Access</div>
                    </Button> */}
                  {/*  */}
                  <button className="relative inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-[55px] mt-4 w-[290px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Verify Mobile
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <BottomPart />
          </div>
        </div>
      </section>
    </>
  );
};

export default NumberPage;
