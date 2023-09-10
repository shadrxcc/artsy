import React, { useContext, useState } from "react";
import rose from "../assets/rosemary.svg";
import close from "../assets/close.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";
import { CartContext } from "../context/cartcontext";
import { Link } from "react-router-dom";

const ShoppingcartDesktop = ({cartStatus, navigate, setActivePage, cartcontext, numberofitems, shipping, total, grandtotal}) => {
  const [itemNo, setItemNo] = useState(0);

  const decreaseNo = (id) => {
   cartcontext.removeItem(id)
  };

  const increaseNo = (item) => {
    cartcontext.addItem({...item, amount: 1});
  };

  const clearItem = (id) => {
    cartcontext.clearItem(id)
  }
  return (
    <>
      {cartStatus ? (
        <div className="hidden md:flex flex-col gap-y-5">
        <p className="text-lg font-bold text-center">
          No items in your cart alaaye. Go back go shop :/
        </p>

        <Link to={`/market`}>
          <p className="text-center underline">Go to marketplace</p>
        </Link>
      </div>
      ) : (
        <div className="px-8 lg:px-[100px] hidden md:flex flex-col gap-y-8">
          {cartcontext.items.map((item) => {
            return (
              <div key={item.id} className="flex border-b-[1px] py-14 justify-between">
                <div className="flex gap-x-10">
                  <div
                    className="w-[210px] rounded-md h-[196px] bg-no-repeat"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="flex flex-col gap-y-[22px] text-xl">
                    <div className="flex gap-x-4 items-center">
                      <p className="uppercase">{item.name}</p>
                      <p className="text-sm font-semibold">x{item.amount}</p>
                    </div>

                    <p>{item.creator}</p>
                    <p className="text-[#888] text-lg">
                      Size: <span>100ft</span>
                    </p>
                    <div className="flex gap-x-5">
                      <img
                        className="w-[14px]"
                        onClick={decreaseNo.bind(null, item.id)}
                        src={decrease}
                        alt=""
                      />
                      <p className="text-3xl font-medium">{item.amount}</p>
                      <img
                        className="w-[14px]"
                        onClick={increaseNo.bind(null, item)}
                        src={increase}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img onClick={() => clearItem(item.id)} className="w-10" src={close} alt="" />
                  <p className="text-2xl">${item.price}</p>
                </div>
              </div>
            );
          })}

          <div className="flex gap-x-32 justify-between">
            <div className="flex gap-y-10 w-fit flex-col">
              <button onClick={() => {
                setActivePage('Shipping details')
                navigate('/checkout/shipping-details')}} className="text-xl py-8 px-[50px] lg:px-[117px] font-medium bg-[#3341C1] rounded text-white">
                Proceed to checkout
              </button>
              <p className="text-[#006CA2] m-auto text-xl underline">
                Continue shopping
              </p>
            </div>

            <div className="flex-auto flex flex-col gap-y-8">
              <p className="text-[#888] text-xl flex justify-between">
                Products in cart:{" "}
                <span className="text-[#292929]">{numberofitems} items</span>
              </p>
              <p className="text-[#888] text-xl flex justify-between">
                Shipping: <span className="text-[#292929]">${shipping}</span>
              </p>
              <p className="text-[#888] text-xl flex justify-between">
                Total: <span className="text-[#292929]">${total}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingcartDesktop;
{
  /* <img src={close} alt="" /> */
}
