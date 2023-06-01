import React from "react";
import { dropsdata } from "./dropdata";
import { Statusbtn } from "./button";

const Drop = () => {
  return (
    <div>
      <div className="p-6 flex flex-col gap-y-12 lg:gap-y-32">
        {dropsdata.map((drop) => {
          const hour = Math.floor(Math.random() * 24);
          const mins = Math.floor(Math.random() * 60);
          const sec = Math.floor(Math.random() * 60);
          return (
            <div
              className="flex flex-col md:flex-row justify-center items-center gap-y-[30px] md:gap-x-4 lg:gap-x-10"
              key={drop.id}
            >
              <div className="relative">
                <img className="md:w-[30em]" src={drop.url} alt="" />
                <button
                  className={`w-[103px] md:hidden top-0 right-0 m-3 absolute text-[12px] font-medium text-white rounded-[10px] h-[35px] bg-[${drop.btncolor}]`}
                >
                  {drop.status}
                </button>
                <div className="absolute max-[280px]:w-[220px] p-4 md:p-0 max-[280px]:h-[50px] w-[305px] gap-y-[7px] md:w-[325px] lg:w-[340px] rounded-lg flex flex-col justify-center md:items-center mb-4 md:mb-[2em] m-auto h-[85px] bg-timestamp left-0 right-0 bottom-0">
                  <p className="text-base lg:text-[28px]">Time remaining</p>
                  <p className="stix text-xl lg:text-4xl text-white">
                    {hour}hr : {mins}mins: {sec}s
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <button
                  className={`w-[189px] hidden md:block text-lg font-medium text-white rounded-[10px] h-[43px] bg-[${drop.btncolor}]`}
                >
                  {drop.status}
                </button>

                <p className="text-base">{drop.date}</p>
                <p className="text-[24px] font-medium">{drop.title}</p>
                <p className="text-[15px] md:text-lg text-[#616161] leading-[31px] md:w-[350px] lg:w-[433px]">
                  {drop.desc}
                </p>
                <p className="text-xl font-medium">
                  Creator:{" "}
                  <span className="text-[#006CA2]">{drop.creator}</span>
                </p>
                <a href="#" className="text-[#006CA2] underline">
                  {drop.action}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Drop;
