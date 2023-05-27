import React from "react";
import artsylogo from "../assets/ARTSY..svg";
import mail from "../assets/Mail.svg";
import location from "../assets/Location.svg";

const Footer = () => {
  return (
    <div className="py-[152px] flex flex-col gap-y-[60px] pl-[20px] md:pl-0">
      <div className="flex flex-col gap-y-[24px] md:items-center">
        <p className="bask md:text-3xl text-2xl uppercase leading-[39px]">
          NewsLetter
        </p>
        <p className="md:text-[32px] text-[11px] md:text-center lg:text-start leading-[16px] md:leading-[43px]">
          SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
        </p>
        <span className="flex flex-col md:flex-row gap-[23px]">
          <input
            type="text"
            name="Subscribe"
            id="sub"
            className="md:w-[446px] max-[280px]:w-[245px] w-[340px] text-[10px] md:text-base pl-[15px] uppercase md:pl-[58px] border h-[60px] border-black"
            placeholder="Enter your Email"
          />
          <button className="belle w-[181.63px] bask h-[61.5px] bg-black  text-white">
            SUBSCRIBE
          </button>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-y-[54px] md:items-center justify-around">
        <div className="hidden md:flex">
          <img src={artsylogo} alt="" />
        </div>

        <div className="md:flex hidden gap-x-[135px]">
          <div>
            <ul className="text-[26px] flex flex-col gap-y-[33px] text-[#333333] leading-[35px]">
              <li>Home</li>
              <li>Marketplace</li>
              <li>Auctions</li>
              <li>Drops</li>
            </ul>
          </div>

          <div>
            <ul className="text-[26px] flex flex-col gap-y-[33px] text-[#333333] leading-[35px]">
              <li>Blog</li>
              <li>Wallets</li>
              <li>Rates</li>
              <li>High bids</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-[40px]">
          <p className="text-[11px] md:hidden leading-[17px] text-[#333333]">REACH US</p>
          <span className="flex gap-[13px] items-center">
            <img className="w-[24px] md:w-[81px]" src={mail} alt="" />{" "}
            <p className="text-[#333333] text-[11px] md:text-[36px] leading-[16px] md:leading-[35px]">
              artsystudios@gmail.com
            </p>
          </span>

          <span className="flex gap-[13px] items-center">
            <img className="w-[24px] md:w-[81px]" src={location} alt="" />{" "}
            <p className="text-[#333333] text-[11px] md:text-[36px] leading-[16px] md:leading-[35px]">
              Lagos, Nigeria.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
