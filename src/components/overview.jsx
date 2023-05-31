import React from "react";
import { auctionsdata } from "./auctiondata";

const Overview = () => {
  return (
    <div className="p-3">
      {" "}
      <div className="flex flex-col gap-y-[35px] lg:gap-y-[80px]">
        <p className="text-xl lg:text-[28px] font-medium">
          Here's an overview of products actively on auction, explore!
        </p>

        <div>
          <div className="overflow-x-scroll whitespace-nowrap hide-scrollbar">
            <div>
              {auctionsdata.products.map((auction) => {
                const hour = Math.floor(Math.random() * 24);
                const mins = Math.floor(Math.random() * 60);
                const sec = Math.floor(Math.random() * 60);

                return (
                  <div key={auction.id} className="inline-block relative mr-10">
                    <div>
                      <img className="w-[20em] lg:w-[27em]" src={auction.url} alt="" />
                      <div className="absolute w-[202px] lg:w-[340px] rounded-lg flex justify-center items-center mb-[2em] m-auto h-[43px] lg:h-[85px] bg-timestamp left-0 right-0 bottom-0">
                        <p className="stix text-xl lg:text-4xl text-white text-center">
                          {hour}hr : {mins}mins: {sec}s
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
