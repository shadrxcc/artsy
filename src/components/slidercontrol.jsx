import React from "react";
import left from "../assets/left-arrow.svg";
import right from "../assets/right-arrow.svg";

const Slidercontrol = ({ prev, next }) => {
  return (
    <div className="flex space-x-5 justify-center md:justify-end w-auto">
      <img
        src={left}
        size={25}
        className="h-12 w-12 p-3 bg-white bg-opacity-30 rounded-full shadow-xl text-white cursor-pointer"
        onClick={prev}
      />
      <img
        src={right}
        size={25}
        className=" h-12 w-12 p-3  bg-white bg-opacity-30 text-white rounded-full shadow-xl cursor-pointer"
        onClick={next}
      />
    </div>
  );
};

export default Slidercontrol;
