import React from "react";
import Drop from "../components/drop";

const Drops = () => {
  return (
    <div className="flex flex-col gap-y-[75px]">
      <span className="flex flex-col gap-y-[30px] items-center">
        {" "}
        <p className="text-3xl lg:text-[48px] font-bold">Upcoming drops</p>
        <p className="text-lg lg:text-2xl text-center w-[291px] md:w-full text-[#616161]">
          Turn on notifications so that no drops will miss you.
        </p>
        <button className="max-[280px]:w-[215px] w-[262px] flex flex-1 justify-center lg:text-2xl rounded-md max-[280px]:h-[45px] h-[52px] lg:py-3 bg-transparent border-[1px] border-black text-xl font-medium">
          Notify me
        </button>
      </span>

      <Drop/>
    </div>
  );
};

export default Drops;
