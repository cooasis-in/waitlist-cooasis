import React from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TwitterShareButton,
} from "react-share";

const ShareLinks = ({ setShowShareLink }) => {
  const shareUrl = "https://yourwebsite.com"; // Replace with your actual URL
  const title = "Check this out!"; // Customize your message

  return (
    <div className="card gradient-box mt-6 sm:mt-2 border-[1px] border-[#FFFFFF21] max-w-[340px] md:max-w-[400px] lg:max-w-[340px] rounded-[40px] p-4 text-center shadow-lg relative z-10">
      {/* 200 People Joined */}
      <div className="mt-2 mb-4">
        <div className="flex justify-center items-center">
          <img
            src="/images/avtar-1.svg"
            alt="People Join"
            className="overflow-hidden image-hover-effect"
          />
          <img
            src="/images/avtar-2.svg"
            alt="People Join"
            className="ml-[-7px] overflow-hidden image-hover-effect"
          />
          <img
            src="/images/avtar-3.svg"
            alt="People Join"
            className="ml-[-7px] overflow-hidden image-hover-effect"
          />
        </div>
        <span className="f-PowerGrotesk text-[14.5px] text-[#FCFCD8] xxl:text-[17.5px] leading-[14.54px] flex justify-center items-center mt-1">
          +200 people joined
        </span>
      </div>

     <div className="mt-6">
       {/* Close Button button */}
       <button
        type="button"
        className="absolute top-[18px] right-[18px] w-8 h-8 bg-black rounded-full flex items-center justify-center"
        onClick={() => setShowShareLink(false)} 
      >
        <span className="text-white text-[25px] mb-1">×</span>
      </button>

      {/* Instagram */}
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          alert("Link copied! Open Instagram and paste the link.");
        }}
        className="f-PowerGrotesk flex items-center bg-[#131515] mb-2 text-base md:text-[15.5px] xxl:text-[17.5px] btn-color text-[#E1FF26] leading-tight font-normal px-6 py-4 w-full h-[55px] rounded-full dark:bg-[#000000] justify-center"
      >
        <img src="images/instagram-2.svg" alt="" className="mr-[10px] max-w-[30px] xxl:max-w-[100%]" />
        Share on Instagram
      </button>

      {/* Facebook */}
      <FacebookShareButton url={shareUrl} quote={title} className="w-full mb-2">
        <button
          type="button"
          className="f-PowerGrotesk bg-[#131515] text-base md:text-[15.5px] xxl:text-[17.5px] btn-color text-[#E1FF26] leading-tight font-normal px-6 py-4 w-full h-[55px] rounded-full flex items-center dark:bg-[#000000] justify-center"
        >
          <img src="images/face-book.svg" alt="" className="mr-[10px] !max-w-[20px] xxl:max-w-[100%]" />
          Share on Facebook
        </button>
      </FacebookShareButton>

      {/* Whatsapp */}
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        className="w-full mb-2"
      >
        <button
          type="button"
          className="f-PowerGrotesk bg-[#131515] text-base md:text-[15.5px] xxl:text-[17.5px] btn-color text-[#E1FF26] leading-tight font-normal px-6 py-4 w-full h-[55px] rounded-full flex items-center dark:bg-[#000000] justify-center"
        >
          <img src="images/whats-app.svg" alt="" className="mr-[10px] !max-w-[20px] xxl:max-w-[100%]" />
          Share on Whatsapp
        </button>
      </WhatsappShareButton>
     </div>

      {/* Email */}
      {/* <EmailShareButton
          url={shareUrl}
          subject={title}
          body="Check this out:"
          className="w-full mb-2"
        >
          <button
            type="button"
            className="f-PowerGrotesk bg-[#131515] text-base md:text-lg btn-color text-[#E1FF26] leading-tight font-normal px-6 py-4 w-full h-[55px] rounded-full flex items-center dark:bg-[#000000] justify-center"
          >
            Share on Email
          </button>
        </EmailShareButton> */}

      {/* Twitter */}
      <TwitterShareButton url={shareUrl} title={title} className="w-full">
        <button
          type="button"
          className="f-PowerGrotesk bg-[#131515] text-base md:text-[15.5px] xxl:text-[17.5px] btn-color text-[#E1FF26] leading-tight font-normal px-6 py-4 w-full h-[55px] rounded-full flex items-center dark:bg-[#000000] justify-center"
        >
          <img src="images/insta-gram.svg" alt="" className="mr-[10px] !max-w-[20px] xxl:max-w-[100%]" />
          Share on email
        </button>
      </TwitterShareButton>
    </div>
  );
};

export default ShareLinks;
