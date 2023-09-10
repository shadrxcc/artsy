import React, { useContext, useState } from "react";
import Shoppingcart from "../components/shoppingcartdesktop";
import Shoppingcartmobile from "../components/shoppingcartmobile";
import Shippingdetails from "../components/shippingdetails";
import Paymentdetails from "../components/paymentdetails";
import { CartContext } from "../context/cartcontext";
import { useNavigate } from "react-router";
import Spinner from "../components/spinner";

const Checkout = () => {
  const [activebtn, setActivebtn] = useState("Shop");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const [activePage, setActivePage] = useState("Shopping cart");

  const cartcontext = useContext(CartContext);
  const total = parseFloat(cartcontext.totalAmount.toFixed(2));
  const spfx = (total * 5) / 100;
  const shipping = parseFloat(spfx.toFixed(2))
  console.log(cartcontext.items);
  
  const gtfx = total + shipping;
  const grandtotal = parseFloat(gtfx.toFixed(2))
  

  const numberofitems = cartcontext.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const cartStatus = cartcontext.items.length === 0;
  return (
    <>
    {loading && <Spinner/>}
    <div className="text-[#292929]">
      <div className="md:hidden">
        <p className="text-[#333] px-[10px] pb-8 font-medium text-base">
          Home/ Marketplace/ Cart
        </p>
      </div>

      {cartStatus ? (
        ""
      ) : (
        <div className="text-xl border-b-[1px] border-gray-500 w-fit m-auto justify-center gap-x-16 font-medium hidden md:flex">
          <p
            className={`${
              activePage === "Shopping cart" ? "active-link" : ""
            } pb-3`}
           
          >
            Shopping cart
          </p>
          <p
            className={`${
              activePage === "Shipping details" ? "active-link" : ""
            } pb-3`}
            
          >
            Shipping details
          </p>
          <p
            className={`${
              activePage === "Payment details" ? "active-link" : ""
            } pb-3`}
            
          >
            Payment details
          </p>
        </div>
      )}
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
      {activePage === "Payment details" && <Paymentdetails setLoading={setLoading} navigate={navigate} numberofitems={numberofitems} grandtotal={grandtotal} shipping={shipping} total={total} />}
      {activePage === "Shipping details" && (
        <Shippingdetails
          cartcontext={cartcontext}
          numberofitems={numberofitems}
          total={total}
          shipping={shipping}
          setActivePage={setActivePage}
          grandtotal={grandtotal}
        />
      )}
      {activePage === "Shopping cart" && (
        <div>
          <Shoppingcart
            setActivePage={setActivePage}
            cartStatus={cartStatus}
            cartcontext={cartcontext}
            shipping={shipping}
            total={total}
            navigate={navigate}
            numberofitems={numberofitems}
          />
          <Shoppingcartmobile
            cartStatus={cartStatus}
            cartcontext={cartcontext}
            navigate={navigate}
            setActivePage={setActivePage}
            shipping={shipping}
            grandtotal={grandtotal}
            total={total}
            numberofitems={numberofitems}
          />
        </div>
      )}
    </div>
    </>
  );
};

export default Checkout;
