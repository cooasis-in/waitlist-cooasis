<<<<<<< Updated upstream
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailVerify from "./EmailVerify";
import { Button } from "../ui/moving-border";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";
>>>>>>> Stashed changes
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";

const NumberPage = () => {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

<<<<<<< Updated upstream
  const pathParts = location.pathname.split("/");
  const niftWord = pathParts.includes("nift");
=======

  const pathParts = location.pathname?.split('/');
  const niftWord = pathParts?.includes('nift');
>>>>>>> Stashed changes

  useEffect(() => {
    console.log("Firebase Auth Instance:", auth);
    console.log("Current User:", auth.currentUser); // To see if a user is currently authenticated
    console.log("App Name:", auth.app.name); // Name of the Firebase app
  }, []);



  const getOtp = async (e) => {
    e.preventDefault();
<<<<<<< Updated upstream

    if (number) {
      if (niftWord) {
        navigate("/nift/numberverify");
      } else {
        navigate("/numberverify");
      }
    } else {
      console.log("Number is required");
    }
  };
=======
    console.log("Entered Mobile Number:", number);
    // Add navigation logic here if needed, or remove if handled elsewhere
    try {
      const response = await setupRecaptcha(number);
      console.log(response);
    }
    catch (e) {
      console.log(e);
    }
    if (niftWord) {
      navigate("/nift/numberverify");
    } else {
      navigate("/numberverify");
    }
  };

  const setupRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    recaptchaVerifier.render();

    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }
>>>>>>> Stashed changes

  // useEffect(() => {
  //   setupRecaptcha();
  // }, []);

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
<<<<<<< Updated upstream
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
=======
>>>>>>> Stashed changes
                  />
                  <div className="absolute right-[22px] bottom-[20px] cursor-pointer">
                    <img src="/images/mobile.svg" alt="mobile Icon" />
                  </div>
                </div>
                {/* Render reCAPTCHA container here */}
                <div id="recaptcha-container" className="mt-4"></div>
                <div>
<<<<<<< Updated upstream
                  <button
                    type="submit"
                    className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-[55px] mt-4 w-[290px]"
                  >
=======
                  {/* <Button
                      id="get-early-access-button"
                      borderRadius="2rem"
                      className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out border-1"
                    >
                      <div>Get Early Access</div>
                    </Button> */}
                  {/*  */}
                  <button className="relative inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-[55px] mt-4 w-[290px]">
>>>>>>> Stashed changes
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
