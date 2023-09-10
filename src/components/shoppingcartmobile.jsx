import React, { useContext, useState } from "react";
import rose from "../assets/rosemary.svg";
import close from "../assets/close.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";
import { CartContext } from "../context/cartcontext";
import { Link } from "react-router-dom";

const Shoppingcartmobile = ({cartStatus, setActivePage, navigate, cartcontext, numberofitems, shipping, total, grandtotal}) => {
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
        <div className="flex md:hidden flex-col gap-y-5">
          <p className="text-lg font-bold text-center">
            No items in your cart alaaye. Go back go shop :/
          </p>

          <Link to={`/market`}>
            <p className="text-center underline">Go to marketplace</p>
          </Link>
        </div>
      ) : (
        <div className="md:hidden flex flex-col gap-y-8 px-[10px]">
          {cartcontext.items.map((item) => {
            return (
              <div key={item.id} className="flex justify-between">
                <div className="flex gap-x-2">
                  <div
                    className="w-[125px] h-[126px] bg-no-repeat"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="flex flex-col max-[280px]:gap-y-5 gap-y-6 max-[280px]:text-sm text-base">
                    <p className="stix italic">{item.category}</p>
                    <p className="uppercase">{item.name}</p>

                    <div className="flex w-fit justify-center px-1 border-[1px] rounded-[10px] max-[280px]:gap-x-3 gap-x-5">
                      <img
                        className="w-[14px] border-r-[1px]"
                        onClick={decreaseNo.bind(null, item.id)}
                        src={decrease}
                        alt=""
                      />
                      <p className="text-xl max-[280px]:text-base font-medium">
                        {item.amount}
                      </p>
                      <img
                        className="w-[14px] border-l-[1px]"
                        onClick={increaseNo.bind(null, item)}
                        src={increase}
                        alt=""
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-center justify-between">
                  <img className="w-8" onClick={() => clearItem(item.id)} src={close} alt="" />
                  <p className="text-xl max-[280px]:text-sm font-bold">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="flex-auto flex flex-col border-b-[1px] border-dashed pb-8 gap-y-8">
            <p className="text-[#888] text-base flex justify-between">
              Products in cart:{" "}
              <span className="text-[#292929]">{numberofitems} items</span>
            </p>
            <p className="text-[#888] text-base flex justify-between">
              Shipping: <span className="text-[#292929]">${shipping}</span>
            </p>
            <p className="text-[#888] text-base flex justify-between">
              Total: <span className="text-[#292929]">${total}</span>
            </p>
          </div>

          <div>
            {" "}
            <p className="text-[#888] text-base flex pt-4 justify-between">
              Grand total: <span className="text-[#292929]">${grandtotal}</span>
            </p>
          </div>

          <div className="flex items-center gap-y-5 flex-col">
            <button onClick={() => {
              navigate('/checkout/shipping-details')
              setActivePage('Shipping details')
            }} className="text-base w-4/5 m-auto py-5 font-medium bg-[#3341C1] rounded text-white">
              Proceed to checkout
            </button>
            <Link to={`/market`}>
              <p className="text-[#006CA2] m-auto text-base underline">
                Continue shopping
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Shoppingcartmobile;
