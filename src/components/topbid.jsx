import React from "react";
import { auctionsdata } from "./auctiondata";
import like from "../assets/red-heart.svg";

const Topbid = () => {
  return (
    <div className="py-[50px]">
    <div className="flex p-4 justify-center">
      <div className="flex flex-col gap-y-[28px] md:gap-y-[70px]">
        <p className="text-xl lg:text-[36px] font-medium">
          Top bids from popular creators
        </p>
        <div className="flex flex-col gap-y-[40px] md:flex-row gap-x-[95px]">
          {auctionsdata.bids.map((bid) => {
            return (
              <div className="flex flex-col gap-y-[30px] md:gap-y-[45px]" key={bid.id}>
                <div className="bg-white rounded-[15px] shadow-md">
                  <div className="p-[12px] flex justify-end">
                    <img className="w-12" src={like} alt="" />
                  </div>
                  <img className="w-[23em] px-4 md:px-0 lg:w-[26em]" src={bid.url} alt="" />
                  <p className="text-lg md:text-2xl p-[30px] font-bold">{bid.name}</p>
                </div>

                <div className="flex flex-col gap-y-[30px]">
                  <p className="md:text-xl text-base font-medium text-[#616161]">
                    Creator:{" "}
                    <span className=" text-[#333333] font-bold">
                      {bid.creator}
                    </span>
                  </p>
                  <p className="md:text-xl font-medium text-[#616161]">
                    Highest bid:{" "}
                    <span className="md:text-xl text-[#333333] font-bold">
                      {bid.bid.highest.eth}
                    </span>
                  </p>

                  <div className="flex bg-[#F7F4F4] p-[15px] items-center md:p-[20px] rounded-[10px] justify-between">
                    <span className="flex flex-col gap-y-[10px]">
                      <p className="md:text-xl text-[#616161] font-bold">
                        Current bid
                      </p>
                      <p className="md:text-xl font-bold">
                        {bid.bid.current.eth}
                      </p>
                    </span>

                    <button className="bg-[#3341C1] rounded-[3px] text-white text-base md:text-xl max-[280px]:w-[115px] w-[157px] h-[46px] lg:w-[247px] lg:h-[73px]">
                      Place bid
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div></div>
  );
};

export default Topbid;
