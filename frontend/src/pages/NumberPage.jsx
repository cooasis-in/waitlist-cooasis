import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailVerify from "./EmailVerify";
import { Button } from "../ui/moving-border";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";
// import { ButtonsCard } from "../ui/tailwindcss-buttons";

const NumberPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleShowVerifyNumber = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    setEmail(email);
  };

  const handleNavigate = () => {
    navigate("/numberverify");
  };

  return (
    <>
      <div className="set-alignment set-alignment-logo flex justify-between items-center">
        <div className="flex items-center sm:items-center set-width">
          <Link to="/">
            <img
              src="images/darkmode.svg"
              alt="Cooasis Logo"
              className="w-30"
            />
          </Link>
        </div>
      </div>
      <section className="bg-color !min-h-screen adjest-res">
        <div className="container mx-auto">
          <div className="pt-[130px] sm:pt-[100px] lg:pt-[130px] xxl:pt-[100px]">
            <NextgenTitle />

            <div>
              <form
                className="set-large-align flex flex-col items-center my-32 sm:my-0"
                onSubmit={handleShowVerifyNumber}
              >
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="+91  987-654-3210"
                    className="f-HelveticaNeueUltraLight bg-transparent text-[14px] xxl:text-[17px] text-[white] leading-[14.13px] w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border-[1px] border-[#FFFFFF17] rounded-full custom-inset custom-gradient"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute right-[18px] bottom-[20px] cursor-pointer">
                    <img src="/images/maillandingpage.svg" alt="Email Icon" />
                  </div>
                </div>

                <div>
                  {/* <Button
                      id="get-early-access-button"
                      borderRadius="2rem"
                      className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out border-1"
                    >
                      <div>Get Early Access</div>
                    </Button> */}
                  {/*  */}
                  <button className="relative inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-[55px] mt-4 w-[290px]" onClick={handleNavigate}>
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
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
