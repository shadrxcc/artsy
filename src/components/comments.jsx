import React from "react";
import avatar1 from "../assets/Ellipse45.svg";

const Comment = ({ message }) => {
  return (
    <div className="flex gap-x-[6px] md:gap-x-4">
      <img className="w-[40px] md:w-12" src={avatar1} alt="" />
      <div className="flex flex-col md:gap-y-2 items-start">
        <h1 className="font-bold text-sm md:text-lg text-white md:text-[#333333] leading-9">Anon</h1>
        <p className="text-sm md:text-lg text-white md:text-[#333333] leading-9">{message}</p>
      </div>
    </div>
  );
};

export default Comment;
