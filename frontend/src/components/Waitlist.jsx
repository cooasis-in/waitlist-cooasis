import React from 'react';

const Waitlist = () => {
  return (
    <section className="!min-h-screen bg-[#131515] waitlist-res-bg">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="p-[20px] max-w-[630px] w-full text-center">
            <div className="bg-grediant-waitlist h-[180px] sm:h-[250px] rounded-[35px] flex items-center justify-center sm:ml-1">
              <h1 className="f-PowerGrotesk text-[40px] sm:text-[80px] text-[#FFF5D9] leading-[40px] sm:leading-[80px]">You are on <br />
               the <span className="bg-nexgen-gradient bg-clip-text">waitlist</span></h1>
            </div>
            <div className="mt-5">
              <p className="f-HelveticaNeueRoman text-start text-[12px] sm:text-[15px] text-[#FFFFFF] leading-[14px] sm:leading-[18px] mb-6">
                🌈 We’re confirming your spot on the waitlist.
              </p>
              <p className="f-HelveticaNeueRoman text-start text-[12px] sm:text-[15px] text-[#FFFFFF] leading-[14px] sm:leading-[18px] mb-4 sm:mb-6">
                There is overwhelming demand for access to Coasis. The team is focused on letting in as many users as quickly as possible. Hang tight and we will let you know as soon as it is your turn.
              </p>
              <p className="f-HelveticaNeueRoman text-start text-[12px] sm:text-[15px] text-[#FFFFFF] leading-[14px] sm:leading-[18px] mb-6">
                In the meantime, make sure you join our Discord community and check out recent features we’ve launched. Have questions? Take a look at the FAQ section on our site.
              </p>
              <p className="f-HelveticaNeueRoman text-start text-[12px] sm:text-[15px] text-[#FFFFFF] leading-[14px] sm:leading-[18px] mb-6">
                Thanks for your interest. We’ll send you an email with information once you’re off the waitlist!
              </p>
              <p className="f-HelveticaNeueRoman text-start text-[12px] sm:text-[15px] text-[#FFFFFF] leading-[14px] sm:leading-[18px] mb-8">
                —Coasis Team
              </p>
            </div>
            <div className="border-b-[1px] border-b-[#FFFFFF33]"></div>
            <div className="my-9 sm:my-6">
              <p className="f-HelveticaNeueLight text-center text-[12px] sm:text-[15px] text-[#FFFFFF] leading-[14px] sm:leading-[18px]">We would love to see what you’re building with Coasis!
              </p>
              <p className="f-HelveticaNeueLight text-center text-[12px] sm:text-[15px] text-[#FFFFFF] leading-[14px] sm:leading-[18px]">Please tag us & follow us!</p>
              <div className="mt-5">
                <ul className="flex space-x-3 sm:space-x-3 justify-center items-center">
                  <li className="bg-[#000000] h-8 sm:h-9 w-8 sm:w-9 rounded-full">
                    <a href="https://www.instagram.com/cooasis.in/" target="_blank" className="hover:text-white flex justify-center">
                      <img
                        src="/images/waitlist-1.svg"
                        alt="Instagram"
                        className="w-[25px] sm:w-[30px] mt-[5px] sm:mt-[4px]"
                      />
                    </a>
                  </li>
                  <li className="bg-[#000000] h-8 sm:h-9 w-8 sm:w-9 rounded-full">
                    <a href="https://www.linkedin.com/company/cooasis-in" target="blank" className="hover:text-white flex justify-center">
                      <img
                        src="/images/waitlist-2.svg"
                        alt="LinkedIn"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[10px]"
                      />
                    </a>
                  </li>
                  <li className="bg-[#000000] h-8 sm:h-9 w-8 sm:w-9 rounded-full">
                    <a href="https://www.behance.net/coasis" target="blank" className="hover:text-white flex justify-center">
                      <img
                        src="/images/waitlist-3.svg"
                        alt="Behance"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[10px]"
                      />
                    </a>
                  </li>
                  <li className="bg-[#000000] h-8 sm:h-9 w-8 sm:w-9 rounded-full">
                    <a href="https://dribbble.com/Cooasis" target="blank" className="hover:text-white flex justify-center">
                      <img
                        src="/images/waitlist-4.svg"
                        alt="Dribbble"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[10px]"
                      />
                    </a>
                  </li>
                  <li className="bg-[#000000] h-8 sm:h-9 w-8 sm:w-9 rounded-full">
                    <a href="https://www.facebook.com/cooasis.in" target="_blank" className="hover:text-white flex justify-center">
                      <img
                        src="/images/waitlist-5.svg"
                        alt="Facebook"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[10px]"
                      />
                    </a>
                  </li>
                  <li className="bg-[#000000] h-8 sm:h-9 w-8 sm:w-9 rounded-full">
                    <a href="https://www.behance.net/coasis" target="_blank" className="hover:text-white flex justify-center">
                      <img
                        src="/images/waitlist-6.svg"
                        alt="Your Icon"
                        className="w-[14px] sm:w-[16px] mt-[9px] sm:mt-[10px]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-b-[1px] border-b-[#FFFFFF33]"></div>
            <div>
              {/* footer-part */}
              <footer>
                <div className="mt-4">
                  <p className="f-HelveticaNeueUltraLight text-[10px] sm:text-[12px] text-[#6A929857] leading-[10px] sm:leading-[13px] text-center">You are subscribed to our mailing list. We occasionally send emails with helpful tips and tricks in order for you you to get the most out of Coasis. If you decide that you no longer want to receive such emails from us, feel free to click the link below.</p>
                  <button className="f-HelveticaNeueUltraLight text-[10px] sm:text-[12px] text-[#6A929857] leading-[10px] sm:leading-[13px] text-center mt-4">Unsubscribe</button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
