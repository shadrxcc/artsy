import React, { useState } from "react";
import rose from "../assets/rosemary.svg";
import close from "../assets/close.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";

const ShoppingcartDesktop = () => {
  const [itemNo, setItemNo] = useState(0);

  const decreaseNo = () => {
    if (itemNo > 0) {
      setItemNo(itemNo - 1);
    }
  };

  const increaseNo = () => {
    setItemNo(itemNo + 1);
  };
  return (
    <div className="px-8 lg:px-[100px] hidden md:flex flex-col gap-y-8">
      <div className="flex border-y-[1px] py-14 justify-between">
        <div className="flex gap-x-10">
          <div
            className="w-[210px] rounded-md h-[196px] bg-no-repeat"
            style={{ backgroundImage: `url(${rose})` }}
          ></div>
          <div className="flex flex-col gap-y-[22px] text-xl">
            <p>Philomena ‘22</p>
            <p>Clearamane</p>
            <p className="text-[#888] text-lg">
              Size: <span>100ft</span>
            </p>
            <div className="flex gap-x-5">
              <img
                className="w-[14px]"
                onClick={decreaseNo}
                src={decrease}
                alt=""
              />
              <p className="text-3xl font-medium">{itemNo}</p>
              <img
                className="w-[14px]"
                onClick={increaseNo}
                src={increase}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img className="w-10" src={close} alt="" />
          <p className="text-2xl">$35.50</p>
        </div>
      </div>

      <div className="flex gap-x-32 justify-between">
        <div className="flex gap-y-10 w-fit flex-col">
          <button className="text-xl py-8 px-[50px] lg:px-[117px] font-medium bg-[#3341C1] rounded text-white">
            Proceed to checkout
          </button>
          <p className="text-[#006CA2] m-auto text-xl underline">
            Continue shopping
          </p>
        </div>

        <div className="flex-auto flex flex-col gap-y-8">
          <p className="text-[#888] text-xl flex justify-between">
            Products in cart: <span className="text-[#292929]">3 items</span>
          </p>
          <p className="text-[#888] text-xl flex justify-between">
            Shipping: <span className="text-[#292929]">$2.50</span>
          </p>
          <p className="text-[#888] text-xl flex justify-between">
            Total: <span className="text-[#292929]">$114.50</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingcartDesktop;
{
  /* <img src={close} alt="" /> */
}
