import React from 'react'

export default function NextgenTitle() {
  return (
    <>
      <h1 className="upper-index relative text-[16px] sm:text-[18px] leading-[20px] sm:leading-[25px] text-center bg-waitlist-gradient bg-clip-text text-transparent f-PowerGrotesk sm:mb-2">
        Join waitlist for
      </h1>
      <div className="larg-pb text-center mt-4 sm:mt-0 mb-4">
        <div className="relative inline-block">
          <h2 className="hidden sm:block upper-index relative text-[40px] sm:text-[70px] leading-[40px] sm:leading-[70px] xxl:text-7xl f-PowerGrotesk text-[#FFF5D9]">
            <span className="bg-nexgen-gradient bg-clip-text fade-in">
              Nex-gen
            </span>
            <br />
            design ecosystem
          </h2>
          <h2 className="block sm:hidden upper-index relative text-[60px] leading-[60px] f-PowerGrotesk text-[#FFF5D9]">
            <span className="bg-nexgen-gradient bg-clip-text fade-in">
              Nex-gen
            </span>
            <br />
            design
            <br />
            ecosystem
          </h2>
          <div className="absolute bottom-[-12px] left-[82px] fade-in hidden sm:block">
            <img
              src="/images/borderNexgen.svg"
              alt="border-image"
              className="max-w-[78%]"
            />
          </div>
          <div className="absolute bottom-[90px] left-[45px] fade-in hidden sm:block">
            <img
              src="/images/james.svg"
              alt="James"
              className="max-w-[4.5rem]"
            />
          </div>
          <div className="absolute hidden sm:block bottom-[40px] left-[-25px] fade-in">
            <img src="/images/star.svg" alt="Star" />
          </div>
          <div>
            <img
              src="/images/cursorImg.png"
              alt="Cursor"
              className="absolute right-[-10px] mt-3 w-14 hidden sm:block fade-in"
            />
          </div>
          {/* mobile screen img align */}
          <div className="absolute bottom-[57px] left-[-22px] fade-in block sm:hidden">
            <img
              src="/images/borderNexgen.svg"
              alt="border-image"
              className="max-w-[325px]"
            />
          </div>
          <div className="absolute bottom-[37px] left-[-14px] fade-in block sm:hidden">
            <img
              src="/images/star.svg"
              alt="Star"
              className="max-w-[60%]"
            />
          </div>
        </div>
      </div>
    </>
  )
}
