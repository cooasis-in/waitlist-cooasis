import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";
import NumberPage from "./NumberPage";
import Header from "../components/Header";

const Varefied = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewComponent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    if (email) {
      localStorage.setItem("userEmail", email);
    }
  }, []);

  if (showNewComponent) {
    return <NumberPage/>;
  }
  return (
    <>
      <Header />
      <section className="bg-color !min-h-screen adjest-res">
        <div className="container mx-auto">
          <div className="pt-[130px] sm:pt-[100px]">
            <NextgenTitle />
            <div className="flex flex-col items-center justify-center mt-[50px] sm:mt-0">
              <div className="max-w-[600px] email-container mb-[6rem] sm:mb-0">
                <div className="my-4">
                  <img src="/images/verrifyed.svg" alt="" className="mx-auto" />
                  <h5 className="f-PowerGrotesk text-[25px] text-[#FFFBD9] leading-[20.77px] text-center mt-1">email verified</h5>
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

export default Varefied;
