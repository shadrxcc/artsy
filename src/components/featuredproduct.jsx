import React from "react";
import boolean from "../assets/boolean-egyptian.svg";
import button from "../assets/arrow-right.svg";
import buttondark from "../assets/arrow-button.svg";
import { Creators64 } from "./creators";
// https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json
const Featuredproduct = ({ image,  title, desc }) => {
  return (
    <div className="flex flex-col py-[60px] border-t-2 border-[#333333] gap-8 md:items-center md:flex-row">
      
      <div
        className="flex relative h-[305px] bg-cover md:w-[610px] bg-gray-700 bg-blend-overlay bg-center text-white text-center pt-10 text-4xl font-clash md:bg-transparent justify-center md:block"
        style={{ backgroundImage: `url(${image}) ` }}
      >
        <p className="md:hidden text-white pt-3 font-semibold text-3xl absolute top-0">
          {title}
        </p>
        <button className="md:hidden absolute pb-3 pr-10 right-0 bottom-0 ">
          <img className="max-[280px]:w-[2em]" src={button} alt="" />
        </button>
      </div>

      <div className="flex flex-col gap-y-5">
        <h3 className="stix text-3xl hidden md:block leading-[50px] font-bold">
          {title}
        </h3>
        <p className="md:text-[1.2em] lg:text-xl text-[15px] md:w-[479px] lg:w-[540px] leading-[23px] md:leading-8 text-[#616161]">
          {desc}
        </p>
        <span className="flex items-center">
          <Creators64 />
          <p className="font-medium pl-4 pr-8 text-[.94rem] leading-5 md:text-[1.2em] lg:text-xl md:leading-8 text-[#333333]">
            64 major creators
          </p>
          <button className="hidden md:block">
            <img className="" src={buttondark} alt="" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Featuredproduct;
