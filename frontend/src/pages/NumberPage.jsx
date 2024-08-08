import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";

const NumberPage = () => {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const niftWord = pathParts.includes("nift");

  const handleShowVerifyNumber = (e) => {
    e.preventDefault();

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
                onSubmit={handleShowVerifyNumber}
              >
                <div className="relative">
                  <input
                    type="text"
                    name="number"
                    placeholder="+91  987-654-3210"
                    className="f-HelveticaNeueUltraLight bg-transparent text-[14px] xxl:text-[17px] text-[white] leading-[14.13px] w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border-[1px] border-[#FFFFFF17] rounded-full custom-inset custom-gradient"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <div className="absolute right-[22px] bottom-[20px] cursor-pointer">
                    <img src="/images/mobile.svg" alt="mobile Icon" />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-[55px] mt-4 w-[290px]"
                  >
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
