import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";
import NumberPage from "./NumberPage";

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
      <div className="set-alignment set-alignment-logo flex justify-between items-center">
        <div className="flex set-width">
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
          <div className="pt-[130px] sm:pt-[100px]">
            <NextgenTitle />
            <div className="flex flex-col items-center justify-center mt-[50px] sm:mt-0">
              <div className="max-w-[600px] email-container mb-[6rem] sm:mb-0">
                <div className="flex justify-center"></div>
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
