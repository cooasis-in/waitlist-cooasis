import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailVerify from "./EmailVerify";
import { Button } from "../ui/moving-border";
import { useNavigate } from "react-router-dom";
import NextgenTitle from "../components/NextgenTitle";
import BottomPart from "../components/BottomPart";
import Header from "../components/Header";
import { useLocation, Link } from "react-router-dom";
// import { ButtonsCard } from "../ui/tailwindcss-buttons";

const EmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showRefer, setShowRefer] = useState(false);
  const [waitlistInfo, setWaitlistInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [referrer, setReferrer] = useState(null);
  const [showVerify, setShowVerify] = useState(false);
  const [email, setEmail] = useState("");

  const pathParts = location.pathname.split("/");
  const niftWord = pathParts.includes("nift");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setReferrer(queryParams.get("refer"));
  }, []);

  const handleShowVerifyEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    setEmail(email);
    // if (email.endsWith("@nift.ac.in")) {
    //   navigate(`/nift?email=${encodeURIComponent(email)}`);
    //   return;
    // }
    const isNiftEmail = email.endsWith("@nift.ac.in");

    if (!niftWord && isNiftEmail) {
      navigate("/nift", { state: { email } });
      return;
    }

    if (niftWord && !isNiftEmail) {
      setErrorMessage(
        "Please enter a valid NIFT email address ending with @nift.ac.in"
      );
      return;
    }
    try {
      const response = await axios.post("https://backend.coasis.in/users", {
        email,
        referrer,
      });
      const responseData = response.data;
      console.log(responseData);
      setWaitlistInfo(responseData);
      if (responseData.isVerified) {
        const userEmail = responseData.user.email;
        console.log(userEmail);
        // setShowRefer(true);
        if (niftWord) {
          navigate(`/nift/refer?email=${encodeURIComponent(userEmail)}`, {
            state: { waitlistInfo: responseData },
          });
        } else {
          navigate(`/refer?email=${encodeURIComponent(userEmail)}`, {
            state: { waitlistInfo: responseData },
          });
        }
      } else {
        const userId = responseData.userId;
        // setShowVerify(true);
        if (niftWord) {
          navigate(`/nift/verifyemail?userId=${encodeURIComponent(userId)}`, {
            state: { email: email, referrer, showVerify: true },
          });
        } else {
          navigate(`/verifyemail?userId=${encodeURIComponent(userId)}`, {
            state: { email: email, referrer, showVerify: true },
          });
        }
      }
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("This email is already on the waitlist.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      console.error("Error creating user", error);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-color !min-h-screen adjest-res">
        <div className="container mx-auto">
          <div className="pt-[130px] sm:pt-[100px] lg:pt-[130px] xxl:pt-[100px]">
            <NextgenTitle />
            {showVerify ? (
              <EmailVerify
                setverifyEmail={setShowVerify}
                email={email}
                referrer={referrer}
              />
            ) : (
              <div>
                <form
                  className="set-large-align flex flex-col items-center my-32 sm:my-0"
                  onSubmit={handleShowVerifyEmail}
                >
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Eg. Jeff@cooasis.in"
                      className="f-HelveticaNeueUltraLight bg-transparent text-[14px] xxl:text-[17px] text-[white] leading-[14.13px] w-[290px] h-[55px] px-6 py-4 mt-0 lg:mt-3 border-[1px] border-[#FFFFFF17] rounded-full custom-inset custom-gradient"
                      onChange={(e) => setEmail(e.target.value)}
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
                  <div>
                    {/* <Button
                      id="get-early-access-button"
                      borderRadius="2rem"
                      className="bg-[#131515] f-PowerGrotesk text-[#E1FF26] rounded-full hover:shadow-lg hover:bg-[#E1FF26] hover:text-black hover:font-bold transform transition-all duration-300 ease-in-out border-1"
                    >
                      <div>Get Early Access</div>
                    </Button> */}
                    {/*  */}
                    <button className="relative inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-[55px] mt-4 w-[290px] ">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Get Early Access
                      </span>
                    </button>
                  </div>
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

export default EmailPage;
