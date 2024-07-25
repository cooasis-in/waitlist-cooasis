import React, { useState, useEffect } from 'react';

const EmailVerify = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [time, setTime] = useState(60); // Set timer for 60 seconds

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleResend = () => {
    setOtp([...otp.map(v => "")]); // Clear the OTP input
    setTime(60); // Reset the timer
    // Call the resend OTP API here
  };

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const handleSubmit = () => {
    const otpCode = otp.join("");
    // Send the OTP code to the backend for verification
    console.log(otpCode);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[600px]">
        <div className="flex space-x-3 mt-3 px-6">
          {otp.map((data, index) => {
            return (
              <input
                className="f-PowerGrotesk max-w-[65px] h-[65px] text-[#FCFCD8] text-center text-lg border-[1px] border-[#FFFFFF17] bg-transparent rounded-full focus:outline-none focus:border-[#FFFFFF17]"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            );
          })}
        </div>
        <h3 className="f-HelveticaNeueRoman cursor-pointer text-center text-[15px] text-[#6A929857] leading-[23.46px] mt-4">Change email</h3>
        <button
          className="f-PowerGrotesk max-w-[421px] w-full text-[17.5px] text-[#E1FF26] leading-[17.5px] mt-4 px-8 py-6 bg-[#0000006B] rounded-full"
          onClick={handleSubmit}
        >
          Verify email
        </button>
        <p className="mt-4 f-HelveticaNeueRoman text-[15px] text-[#6A929857] leading-[23.46px] text-center">Resend Code in <span className="text-[#6A9298]">00:{time < 10 ? `0${time}` : time}</span></p>
        <div className="flex justify-center">
          {time === 0 && (
            <button
              className="f-PowerGrotesk max-w-[200px] w-full text-[15px] text-[#E1FF26] leading-[17.5px] mt-4 px-6 py-5 bg-[#0000006B] rounded-full"
              onClick={handleResend}
            >
              Resend Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
