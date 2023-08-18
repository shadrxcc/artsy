import React from "react";
import { auctionsdata } from "./auctiondata";

const Overview = () => {
  return (
    <div>
     <div className="pt-3 px-3 lg:px-[8.75rem]">
      {" "}
      <div className="flex flex-col gap-y-[35px] lg:gap-y-[60px]">
        <p className="text-xl lg:text-2xl font-medium">
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
                  <div key={auction.id} className="inline-block rounded-2xl transition-all ease-in-out duration-300 hover:scale-110 relative max-[280px]:mr-0 mr-4 lg:mr-10">
                    <div>
                      <img className="w-[20em] lg:w-[25em]" src={auction.url} alt="" />
                      <div className="absolute w-[202px] lg:w-[340px] rounded-lg flex justify-center items-center mb-[2em] m-auto h-[43px] lg:h-[85px] bg-timestamp left-0 right-0 bottom-0">
                        <p className="stix text-xl lg:text-2xl text-white text-center">
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
    </div>
    
  );
};

export default Overview;
