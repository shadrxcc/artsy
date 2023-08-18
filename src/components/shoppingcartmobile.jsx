import React, { useState } from "react";
import rose from "../assets/rosemary.svg";
import close from "../assets/close.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";

const Shoppingcartmobile = () => {
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
    <div className="md:hidden flex flex-col gap-y-8 px-[10px]">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <div
            className="w-[125px] h-[126px] bg-no-repeat"
            style={{ backgroundImage: `url(${rose})` }}
          ></div>
          <div className="flex flex-col max-[280px]:gap-y-5 gap-y-6 max-[280px]:text-sm text-base">
            <p className="stix italic">Editorials</p>
            <p>Philomena ‘22</p>

            <div className="flex w-fit justify-center px-1 border-[1px] rounded-[10px] max-[280px]:gap-x-3 gap-x-5">
              <img
                className="w-[14px] border-r-[1px]"
                onClick={decreaseNo}
                src={decrease}
                alt=""
              />
              <p className="text-xl max-[280px]:text-base font-medium">
                {itemNo}
              </p>
              <img
                className="w-[14px] border-l-[1px]"
                onClick={increaseNo}
                src={increase}
                alt=""
              />
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col items-center justify-between">
          <img className="w-8" src={close} alt="" />
          <p className="text-xl max-[280px]:text-sm font-bold">$35.50</p>
        </div>
      </div>

      <div className="flex-auto flex flex-col border-b-[1px] border-dashed pb-8 gap-y-8">
            <p className="text-[#888] text-base flex justify-between">Products in cart: <span className="text-[#292929]">3 items</span></p>
            <p className="text-[#888] text-base flex justify-between">Shipping: <span className="text-[#292929]">$2.50</span></p>
            <p className="text-[#888] text-base flex justify-between">Total: <span className="text-[#292929]">$114.50</span></p>
        </div>

        <div>  <p className="text-[#888] text-base flex pt-4 justify-between">Grand total: <span className="text-[#292929]">3 items</span></p></div>
    
        <div className="flex gap-y-5 flex-col">
          <button className="text-base w-4/5 m-auto py-5 font-medium bg-[#3341C1] rounded text-white">
            Proceed to checkout
          </button>
          <p className="text-[#006CA2] m-auto text-base underline">
            Continue shopping
          </p>
        </div>
    </div>
  );
};

export default Shoppingcartmobile;
