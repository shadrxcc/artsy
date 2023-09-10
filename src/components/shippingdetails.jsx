import React, { useEffect, useState } from "react";
import rose from "../assets/rosemary.svg";
import close from "../assets/close.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";
import { City, Country, State } from "country-state-city";

const Shippingdetails = ({
  navigate,
  setActivePage,
  cartcontext,
  numberofitems,
  shipping,
  total,
  grandtotal,
}) => {
  const [itemNo, setItemNo] = useState(0);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [postal, setPostal] = useState("");
  const [wallet, setWallet] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);

  useEffect(() => {
    setSelectedCountry("");
    setSelectedState("");
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const countryInfo = Country.getCountryByCode(selectedCountry);
      const statesOfCountry = State.getStatesOfCountry(countryInfo.isoCode);
      setStates(statesOfCountry);
      setSelectedState("");
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  const decreaseNo = (id) => {
    cartcontext.removeItem(id);
  };

  const increaseNo = (item) => {
    cartcontext.addItem({ ...item, amount: 1 });
  };

  const proceedPayment = (e) => {
    e.preventDefault();
    localStorage.setItem("Name", name);
    setActivePage("Payment details");
    navigate(`/checkout/payment-details`);
    
  };

  return (
    <div className="flex px-3 md:px-4 gap-x-4 lg:gap-x-20 justify-center">
      <div className="w-full md:w-fit">
        <form onSubmit={proceedPayment} className="flex flex-col gap-y-8">
          {" "}
          <span className="flex flex-col gap-y-2">
            <span className="flex gap-y-2 flex-col">
              <label htmlFor="email">Your email</label>
              <input
                required
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className=" rounded-[10px] px-2.5 py-5 border"
                name="email"
                id="email"
                placeholder="aanuoluwateenah@gmail.com"
              />
            </span>{" "}
            <span className="flex gap-x-3 items-baseline md:items-center">
              <input required type="checkbox" name="" id="" />{" "}
              <p className="text-[#747474]">
                Get updates about new drops & exclusive offers
              </p>
            </span>
          </span>
          <span className="flex gap-y-2 flex-col">
            <label htmlFor="email">Your full name</label>
            <input
              required
              type="text"
              className=" rounded-[10px] px-2.5 py-5 border"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Anuoluwapo Bamisaye"
            />
          </span>
          <span className="flex gap-y-2 flex-col">
            <label htmlFor="email">Choose a wallet</label>
            <select
              required
              className=" rounded-[10px] px-2.5 border py-5"
              name=""
              id=""
              onChange={(e) => setWallet(e.target.value)}
              value={wallet}
            >
              <option value=""></option>
              <option value="Metamask">Metamask</option>
              <option value="Coinbase">Coinbase</option>
              <option value="Trust wallet">Trust wallet</option>
              <option value="Phantom wallet">Phantom wallet</option>
            </select>
          </span>
          <span className="flex gap-y-2 flex-col">
            <label htmlFor="country">Select Country</label>
            <select
              required
              className="rounded-[10px] px-2.5 border py-5"
              name="country"
              id="country"
              onChange={(e) => setSelectedCountry(e.target.value)}
              value={selectedCountry}
            >
              <option value="">Select Country</option>
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </span>
          <span className="flex flex-col md:flex-row gap-y-8 md:gap-x-2 justify-between">
            <span className="flex gap-y-2 flex-col">
              <label htmlFor="state">Select State</label>
              <select
                required
                className="rounded-[10px] px-2.5 border py-5"
                name="state"
                id="state"
                onChange={(e) => setSelectedState(e.target.value)}
                value={selectedState}
                disabled={states.length === 0}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex flex-1 gap-y-2 flex-col">
              <label htmlFor="email">Postal code</label>
              <input
                required
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
                type="text"
                className="rounded-[10px] px-2.5 border py-5"
                name=""
                id=""
              />
            </span>
          </span>
          <span className="flex gap-y-2 flex-col">
            <label htmlFor="email">Phone number</label>
            <input
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              className=" rounded-[10px] px-2.5 py-5 border"
              name="name"
              id="name"
              placeholder="0812 3456 785"
            />
          </span>
          <button className="text-xl py-5 px-[50px] lg:px-[117px] font-medium bg-[#3341C1] rounded text-white">
            Proceed to payment
          </button>
        </form>
      </div>

      <div className="hidden md:flex flex-col gap-y-8">
        <div className="flex flex-col border-b-[1px] gap-y-6 py-14 lg:gap-x-16 justify-between">
          {cartcontext.items.map((item) => {
            return (
              <div key={item.id} className="flex justify-between gap-x-6">
                <div className="flex items-center gap-x-6">
                  <div
                    className="w-[166px] rounded-md h-[196px] bg-no-repeat"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="flex flex-col gap-y-5 text-xl">
                    <div className="flex items-center gap-x-4">
                      <p>{item.name}</p>
                      <p className="text-sm font-semibold">x{item.amount}</p>
                    </div>

                    <p>{item.creator}</p>
                    <p className="text-[#888] text-lg">
                      Size: <span>100ft</span>
                    </p>
                    <div>
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
                </div>

                <div className="flex flex-col items-center justify-between">
                  <img className="w-10" src={close} alt="" />
                  <p className="text-2xl">${item.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-x-32 justify-between">
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
            <p className="text-[#888] text-xl flex justify-between">
              Grand total: <span className="text-[#292929]">${grandtotal}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shippingdetails;
