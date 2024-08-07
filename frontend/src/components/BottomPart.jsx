import React from 'react';
import ImageSlider from "./ImageSlider";

export default function BottomPart() {
  return (
    <>
      <div className="mt-8 sm:mt-12 relative z-20">
        <div className="flex justify-center items-center pl-2">
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
        <span className="f-PowerGrotesk text-[12px] sm:text-[14.5px] text-[#6A92985E] xxl:text-[17.5px] leading-[14.54px] flex justify-center items-center mt-1">
          +200 people joined
        </span>
      </div>
      <div className="relative">
        <div className="flex justify-center items-center mt-11 sm:mt-16">
          <img src="images/moon-1.svg" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="images/moon-2.svg"
            alt=""
            className="absolute max-w-[70px] top-[-20px]"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="sm:mt-[-1rem] flex flex-col justify-center items-center space-x-4">
          <span className="f-PowerGrotesk text-[14.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A92985E] text-center">
            Backed by
          </span>
          <div className="res-align flex  items-center justify-center space-x-4 sm:space-x-7 max-w-[642px] !ml-0 !pb-4 sm:pt-3">
            <img
              src="images/Artboard-1.svg"
              alt=""
              className="max-w-[110px]"
            />
            <img
              src="images/Artboard-2.svg"
              alt=""
              className="max-w-[110px]"
            />
            <img
              src="images/Artboard-3.svg"
              alt=""
              className="max-w-[110px]"
            />
            <img
              src="images/Artboard-4.svg"
              alt=""
              className="max-w-[110px]"
            />
            <img
              src="images/Artboard-5.svg"
              alt=""
              className="max-w-[110px]"
            />
            <img
              src="images/Artboard-6.svg"
              alt=""
              className="max-w-[80px] !ml-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="!mt-[-1rem] block text-center md:hidden py-4 w-full res-margin-fix">
        <span className="f-PowerGrotesk text-[14.5px] xxl:text-[17.5px] leading-[14.54px] text-[#6A92985E] text-center">
          Backed by
        </span>
        <ImageSlider />
      </div>
    </>
  )
}
