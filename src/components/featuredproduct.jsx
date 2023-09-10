import React from "react";
import boolean from "../assets/boolean-egyptian.svg";
import button from "../assets/arrow-right.svg";
import buttondark from "../assets/arrow-button.svg";
import { Creators64 } from "./creators";
import { useNavigate } from "react-router";
// https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json
const Featuredproduct = ({id, image, title, reverse, desc }) => {
  const isReversed = reverse === true;
  const navigate = useNavigate()
  return (
    <div key={id}
      className={`${
        isReversed ? "md:flex-row" : "md:flex-row-reverse"
      } flex flex-col py-[60px] border-t-2 border-[#333333] gap-8 md:items-center`}
    >
      <div
        id="featured"
        className="flex relative h-[305px] bg-cover md:w-[610px] bg-gray-700 bg-blend-overlay bg-center text-white text-center pt-10 text-4xl font-clash md:bg-transparent md:hover:bg-blend-overlay justify-center md:block"
        style={{ backgroundImage: `url(${image}) ` }}
      >
        <p className="md:hidden clash text-white pt-3 font-semibold text-3xl absolute top-0">
          {title}
        </p>
        <button onClick={() => navigate(`/product-details/${id}`)} className="md:hidden absolute pb-3 pr-10 right-0 bottom-0 ">
          <img className="max-[280px]:w-[2em]" src={button} alt="" />
        </button>
        <div
          className="absolute flex gap-x-[30px] hidden md:hidden justify-center items-center w-full h-fill top-0"
          id="featured-backdrop"
        >
          <p className=" clash text-white text-3xl">{title}</p>
          <button onClick={() => navigate(`/product-details/${id}`)} className="">
            <img className="w-[60px]" src={button} alt="" />
          </button>
        </div>
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
          <button onClick={() => navigate(`/product-details/${id}`)} className="hidden md:block">
            <img className="" src={buttondark} alt="" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Featuredproduct;
