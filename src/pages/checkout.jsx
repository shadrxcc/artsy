import React, { useState } from "react";
import Shoppingcart from "../components/shoppingcartdesktop";
import Shoppingcartmobile from "../components/shoppingcartmobile";
import Shippingdetails from "../components/shippingdetails";
import Paymentdetails from "../components/paymentdetails";

const Checkout = () => {
  const [activebtn, setActivebtn] = useState("Shop");
  return (
    <div className="text-[#292929]">
      <div className="md:hidden">
        <p className="text-[#333] px-[10px] pb-8 font-medium text-base">
          Home/ Marketplace/ Cart
        </p>
      </div>
      <div className="text-xl border-b-[1px] border-gray-500 pb-3 w-fit m-auto justify-center gap-x-16 font-medium hidden md:flex">
        <p>Shopping cart</p>
        <p>Shopping details</p>
        <p>Payment details</p>
      </div>
      <div className="text-lg bg-[#3A3A3A] my-8 py-[6px] px-8 max-[280px]:px-4 m-auto hidden w-fit gap-x-12 max-[280px]:gap-x-4 rounded-[40px] font-medium">
        <button
          className={`${
            activebtn === "Shop" ? "bg-white text-[#3A3A3A] rounded-[27px]" : ""
          } text-white py-2 px-5`}
          onClick={() => setActivebtn("Shop")}
        >
          Shop
        </button>
        <button
          className={`${
            activebtn === "Scheduled"
              ? "bg-white text-[#3A3A3A] rounded-[27px] "
              : ""
          } text-white py-2 px-5`}
          onClick={() => setActivebtn("Scheduled")}
        >
          Scheduled
        </button>
      </div>
      <Paymentdetails/>
      {/* <Shippingdetails/> */}
      {/* <Shoppingcart />
      <Shoppingcartmobile /> */}
    </div>
  );
};

export default Checkout;
