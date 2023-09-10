import React, { useContext, useState } from "react";
import artsylogo from "../assets/ARTSY..svg";
import { icons, navlink } from "./data";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/x.svg";
import chat from "../assets/chat.svg";
import { Link, useLocation } from "react-router-dom";
import searchmenu from "../assets/search-icon.svg";
import cart from "../assets/cart.svg";
import { CartContext } from "../context/cartcontext";

const Header = () => {
  const [openmenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const cartctx = useContext(CartContext);

  const numberofitems = cartctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

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
          <Link to={"/"}>
            <img className="w-[5em] md:w-[6em]" src={artsylogo} alt="logo" />
          </Link>
        </div>

        <div>
          <ul className="md:flex hidden gap-[47px]">
            {navlink.map((link) => {
              return (
                <>
                  <Link to={link.nav} key={link.id}>
                    <li
                      key={link.id}
                      id={`${
                        location.pathname === link.nav ? "active-link" : ""
                      }`}
                      className={`text-[#292929] text-base leading-[32px] font-[500]`}
                    >
                      {link.link}
                    </li>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-x-[11px]">
          <img className={`w-[2em]`} src={searchmenu} alt="" />
          <Link to={`/checkout/cart`}>
            <div className="flex">
              <img className={`w-[1.4em]`} src={cart} alt="" />
              <p className="text-[10px] text-white px-1.5 h-fit rounded-full bg-red-600">
                {numberofitems}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div
        id="menu"
        className={`${
          openmenu ? "#menu active" : "#menu"
        } md:hidden active-menu bg-white py-[24px] z-10 px-[30px] top-0 left-[-60em] flex flex-col gap-y-[50px] absolute h-5/6 w-full`}
      >
        <div className="flex justify-between">
          <Link to={"/"}>
            <img className="w-[5em]" src={artsylogo} alt="logo" />
          </Link>
          <img onClick={closeToggle} src={close} alt="" />
        </div>

        <div>
          <ul className="flex flex-col gap-[18px]">
            {navlink.map((link) => {
              return (
                <>
                  <Link onClick={closeToggle} to={link.nav} key={link.id}>
                    <li className="leading-52px text-[24px] font-[500]">
                      {link.link}
                    </li>
                  </Link>
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
