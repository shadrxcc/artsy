import React, { useState } from "react";
import artsylogo from "../assets/ARTSY..svg";
import { icons, navlink } from "./data";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/x.svg";
import chat from "../assets/chat.svg";

const Header = () => {
  const [openmenu, setOpenMenu] = useState(false);

  const openToggle = () => {
    setOpenMenu(!openmenu);
  };

  const closeToggle = () => {
    setOpenMenu(!openmenu);
  };

  return (
    <>
      <div className="flex items-center px-3 md:px-0 py-[22px] md:py-[45px] bg-white sticky w-full justify-around">
        <div className="md:hidden">
          <img onClick={openToggle} src={hamburger} alt="" />
        </div>
        <div className="m-auto md:m-0">
          <img className="w-[5em] md:w-[6em]" src={artsylogo} alt="logo" />
        </div>

        <div>
          <ul className="md:flex hidden gap-[47px]">
            {navlink.map((link) => {
              return (
                <>
                  <li
                    key={link.id}
                    className="text-[#292929] text-base leading-[32px] font-[500] hover:underline"
                  >
                    {link.link}
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-x-[11px]">
          {icons.map((icon) => {
            return <img className="w-[2em]" src={icon.icon} alt="" />;
          })}
        </div>
      </div>

      <div
        id="menu"
        className={`${
          openmenu ? "#menu active" : "#menu"
        } md:hidden active-menu bg-white py-[24px] z-10 px-[30px] top-0 left-[-35em] flex flex-col gap-y-[50px] absolute h-5/6 w-full`}
      >
        <div className="flex justify-between">
          <img className="w-[5em]" src={artsylogo} alt="logo" />
          <img onClick={closeToggle} src={close} alt="" />
        </div>

        <div>
          <ul className="flex flex-col gap-[18px]">
            {navlink.map((link) => {
              return (
                <>
                  <li className="leading-52px text-[24px] font-[500]">
                    {link.link}
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="h-3/6 flex justify-end items-end">
          <img src={chat} className="float-right" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
