import React from "react";
import Herocarousel from "./herocarousel";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-y-[10px] md:gap-y-[50px]">
        <p className="clash text-[#292929] px-[1.5em] md:px-[6px] leading-[48px] text-2xl md:text-[3.5rem] md:leading-[65px] font-medium lg:text-[80px] lg:w-[1068px] lg:font-semibold lg:leading-[125px] m-auto text-center">
          {" "}
          Photography is poetry & beautiful untold stories
        </p>
        <p className="text-[#292929] px-[1.2em] md:px-12 lg:px-0 text-base lg:text-[28px] leading-[25px] lg:leading-[44px] font-medium text-center m-auto lg:w-[926px]">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <Herocarousel />
    </div>
  );
};

export default Hero;
