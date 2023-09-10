import React, { useContext, useEffect } from "react";
import spiral from "../../src/assets/spiral.svg";
import success from "../../src/assets/success.svg";
import cheers from "../../src/assets/cheers.svg";
import blur from "../../src/assets/colorblur.svg";
import { CartContext } from "../context/cartcontext";

const Success = () => {
  const getname = localStorage.getItem("Name");

  const cartctx = useContext(CartContext);

  useEffect((items) => {
    cartctx.clearItem(items);
  }, []);

  return (
    <div>
      <img className="absolute hidden md:block w-[15em] top-0" src={spiral} alt="" />
      <div className="flex flex-col items-center">
      <div className="relative">
         
        <img className="absolute md:hidden left-0 bottom-0 top-0 z-10" src={blur} alt="" /><img className="w-[275px" src={success} alt="" />
      </div>
            
       
        <p className="md:text-2xl lg:text-4xl text-center text-lg font-medium">
          Hey {getname}, thank you for your purchase.{" "}
        </p>
        <div className="flex items-center">
          <p className="lg:text-3xl md:text-xl text-center text-base">
            You are amazing. Cheers to being{" "}
            <span className="text-[#006CA2]">ARTSY!</span>
          </p>{" "}
          <img className="hidden md:block w-[1em]" src={cheers} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Success;
