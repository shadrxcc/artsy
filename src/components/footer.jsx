import React from "react";

const Footer = () => {
  return (
    <div className="py-[152px] pl-[20px] md:pl-0">
      <div className="flex flex-col gap-y-[24px] md:items-center">
        <p className="belle md:text-3xl text-2xl leading-[39px]">NewsLetter</p>
        <p className="md:text-[32px] text-[11px] md:text-center lg:text-start leading-[16px] md:leading-[43px]">
          SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
        </p>
        <span className="flex flex-col md:flex-row gap-[23px]">
          <input
            type="text"
            name="Subscribe"
            id="sub"
            className="md:w-[446px] max-[280px]:w-[245px] w-[340px] pl-[15px] uppercase md:pl-[58px] border h-[60px] border-black"
            placeholder="Enter your Email"
          />
          <button className="belle w-[181.63px] h-[61.5px] bg-black  text-white">
            Subscribe
          </button>
        </span>
      </div>
    </div>
  );
};

export default Footer;
