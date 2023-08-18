import React, { useState } from "react";
import rose from "../assets/rosemary.svg";
import close from "../assets/close.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";

const Shippingdetails = () => {

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
    <div className="flex px-3 md:px-4 gap-x-4 lg:gap-x-20 justify-center">
      <div className="w-full md:w-fit">
        <form action="" className="flex flex-col gap-y-8">
          {" "}
          <span className="flex flex-col gap-y-2">
             <span className="flex gap-y-2 flex-col">
            <label htmlFor="email">Your email</label>
            <input
              type="text"
              className=" rounded-[10px] px-2 py-[22px] border"
              name="email"
              id="email"
              placeholder="aanuoluwateenah@gmail.com"
            />
          </span>{" "}
          <span className="flex gap-x-3 items-center">
            <input type="checkbox" name="" id="" />{" "}
            <p className="text-[#747474]">
              Get updates about new drops & exclusive offers
            </p>
          </span>
          </span>
         
          <span className="flex gap-y-2 flex-col">
            <label htmlFor="email">Your full name</label>
            <input
              type="text"
              className=" rounded-[10px] px-2 py-[22px] border"
              name="name"
              id="name"
              placeholder="Anuoluwapo Bamisaye"
            />
          </span>
          <span className="flex gap-y-2 flex-col">
            <label htmlFor="email">Choose a wallet</label>
            <select
              className=" rounded-[10px] border py-[22px]"
              name=""
              id=""
            >
              
            </select>
          </span>
          <span className="flex gap-y-2 flex-col">
            <label htmlFor="email">City</label>
            <select
              className=" rounded-[10px] border py-[22px]"
              name=""
              id=""
            ></select>
          </span>
          <span className="flex flex-col md:flex-row gap-y-8 md:gap-x-2 justify-between">
          <span className="flex flex-1 gap-y-2 flex-col">
            <label htmlFor="email">Country</label>
            <select
              className="rounded-[10px] border py-[22px]"
              name=""
              id=""
            > <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option></select>
          </span>
          <span className="flex flex-1 gap-y-2 flex-col">
            <label htmlFor="email">Postal code</label>
            <select
              className="rounded-[10px] border py-[22px]"
              name=""
              id=""
            > <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option></select>
          </span>
          </span>

          <span className="flex gap-y-2 flex-col">
            <label htmlFor="email">Phone number</label>
            <input
              type="text"
              className=" rounded-[10px] px-2 py-[22px] border"
              name="name"
              id="name"
              placeholder="0812 3456 785"
            />
          </span>
        </form>
      </div>

      <div className="hidden md:flex flex-col gap-y-8">
      <div className="flex border-y-[1px] py-14 lg:gap-x-16 justify-between">
        <div className="flex gap-x-6">
          <div
            className="w-[166px] rounded-md h-[196px] bg-no-repeat"
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
    </div>
  );
};

export default Shippingdetails;
