import React from "react";
import metamask from "../assets/MetaMask.svg";
import phantom from "../assets/Phantom.svg";
import secure from "../assets/secure.svg";
import walletconnect from "../assets/WalletConnect.svg";
import coinbase from "../assets/Coinbase.svg";
import meta from "../assets/MetaMaskmobile.svg";
import phantommob from "../assets/Phantommobile.svg";
import add from "../assets/addwallet.svg";
import connect from "../assets/WalletConnectmobile.svg";
import base from "../assets/Coinbasemobile.svg";

const Paymentdetails = (props) => {
  return (
    <div className="pt-[70px]">
      <div className="text-[#616161] flex flex-col gap-y-10 px-4 md:px-8 lg:px-[100px] w-fit m-auto">
        <div className="flex justify-between items-center">
          <p className="hidden md:block">Payment method</p>
          <span className="flex gap-x-4 items-center">
            <img className="w-[20px]" src={secure} alt="" />
            <p> Secure server</p>
          </span>
        </div>

        <div className="flex gap-4">
          <form
            action="
    "
            className="flex-1"
          >
            <section className="md:p-3 lg:p-8 md:shadow-[0px_0px_5px_rgba(0,0,0,0.25)] rounded-[0.5rem]">
              <div className="flex justify-between">
                <span className="flex gap-x-2 lg:gap-x-6 items-center">
                  <input type="radio" name="select-wallet" id="select-wallet" />
                  <p className="text-[#292929] font-medium">
                    Select your wallet
                  </p>
                </span>
                <div className="hidden md:flex items-center">
                  <img className="w-[40px]" src={metamask} alt="" />
                  <img className="w-[40px]" src={coinbase} alt="" />
                  <img className="w-[40px]" src={walletconnect} alt="" />
                  <img className="w-[40px]" src={phantom} alt="" />
                </div>
              </div>
              <p className="leading-[157%] py-6 text-base">
                Connect with one of our available wallet providers or add and
                connect a new wallet.{" "}
              </p>

              <div className="flex md:hidden pb-8 justify-center items-center">
                  <img className="w-[40px]" src={meta} alt="" />
                  <img className="w-[40px]" src={base} alt="" />
                  <img className="w-[40px]" src={connect} alt="" />
                  <img className="w-[40px]" src={phantommob} alt="" />
                  <img src={add} className="w-[40px]" alt="" />
                </div>

              <div className="text-lg flex flex-col">
                <label htmlFor="wallettype">Choose wallet</label>
                <select
                  name="wallettype"
                  id="wallettype"
                  required=""
                  class="py-3 px-2 border"
                >
                  <option value=""></option>
                  <option value="metamask">Metamask</option>
                  <option value="coinbase">Coinbase</option>
                  <option value="trust">Trust Wallet</option>
                  <option value="phantom">Phantom Wallet</option>
                </select>
              </div>

              <div class="text-grey-light text-lg mt-6 first:mt-0">
                <label for="walletKey">Key</label>
                <div class="inputStyle border py-3 px-2 flex ">
                  <input
                    type="text"
                    name="walletKey"
                    id="walletKey"
                    class="bg-transparent w-full focus:outline-0"
                    placeholder="Please enter your key"
                    required=""
                    value=""
                  />
                  <img src={phantom} alt="" class="h-8" />
                </div>
              </div>

              <div class="text-grey-light text-lg mt-6 first:mt-0">
                <input
                  type="checkbox"
                  class="bg-transparent"
                  name="saveWallet"
                  id="saveWallet"
                  value="false"
                />
                <label
                  for="saveWallet"
                  class="text-sm ml-3 mt-3 md:inline-block"
                >
                  Save my wallet details &amp; information for future
                  transactions
                </label>
              </div>
            </section>
            <button class="bg-[#3341C1] h-[3.5rem] rounded px-8 text-xl mb-5 font-medium text-white block mt-10 w-[80%] mx-auto md:w-full">
              Confirm
            </button>
          </form>

          <aside class=" hidden flex-1  md:block">
            <h3 class="text-grey-dark text-lg font-medium border-b-[0.3px] pb-6 border-b-[#747474]">
              Payment Summary
            </h3>
            <article class="py-8 border-b-[0.3px] border-b-[#747474]">
              <p class="text-grey-dark">Metamask wallet : </p>
              <p class="text-sm text-[#616161] mt-4">
                Actively linked to Yaba, Lagos Nigeria.
              </p>
            </article>
            <article class="leading-[150%] text-grey-dark md:leading-[157%] py-6 border-b-[0.3px] border-b-[#747474]">
              <p>
              Expected arrival date: Between 22nd September and 26th September 20222
              </p>
            </article>
            <article class="text-lg flex flex-col mt-8 gap-6 leading-[100%]">
              <p class="text-grey-light flex">
                <span>Products in cart :</span>{" "}
                <span class="text-grey-dark ml-auto">{props.numberofitems} item(s)</span>
              </p>
              <p class="text-grey-light flex">
                <span>Shipping :</span>{" "}
                <span class="text-grey-dark ml-auto">${props.shipping}</span>
              </p>
              <p class="text-grey-light flex">
                <span>Total :</span>{" "}
                <span class="text-grey-dark ml-auto">${props.total}</span>
              </p>
              <p class="text-grey-light flex">
                <span>Grand total :</span>{" "}
                <span class="text-grey-dark ml-auto">${props.grandtotal}</span>
              </p>
            </article>
          </aside>
        </div>
        {/* <div className="flex">
        <div className="w-1/2">
          <div>
            <div className="flex flex-col">
              <div className="flex">
                <span className="flex items-center">
                  <input type="radio" name="select-wallet" id="select-wallet" />
                  <p className="text-[#292929] font-medium">
                    Select your wallet
                  </p>
                </span>{" "}
                <div className="flex items-center">
                  <img className="w-[50px]" src={metamask} alt="" />
                  <img className="w-[50px]" src={coinbase} alt="" />
                  <img className="w-[50px]" src={walletconnect} alt="" />
                  <img className="w-[50px]" src={phantom} alt="" />
                </div>
              </div>

              <div className="">
                <p>
                  Connect with one of our available wallet providers or add and
                  connect a new wallet.{" "}
                </p>
              </div>
            </div>

            <span className="flex flex-col gap-y-2">
              <span className="flex gap-y-2 flex-col">
                <label htmlFor="email">Wallet type</label>
                <select
                  type="text"
                  className=" rounded-[10px] px-2 py-[22px] border"
                  name="email"
                  id="email"
                  placeholder="aanuoluwateenah@gmail.com"
                />
              </span>
            </span>

            <span className="flex flex-col gap-y-2">
              <span className="flex gap-y-2 flex-col">
                <label htmlFor="email">Key</label>
                <input
                  type="text"
                  className=" rounded-[10px] px-2 py-[22px] border"
                  name="email"
                  id="email"
                  placeholder="Please enter your key"
                />
              </span>
            </span>
            <span className="flex">
              <span className="flex flex-col gap-y-2">
                <span className="flex gap-y-2 flex-col">
                  <label htmlFor="email">Expiry date</label>
                  <input
                    type="text"
                    className=" rounded-[10px] px-2 py-[22px] border"
                    name="email"
                    id="email"
                    placeholder="MM/YY"
                  />
                </span>
              </span>
              <span className="flex flex-col gap-y-2">
                <span className="flex gap-y-2 flex-col">
                  <label htmlFor="email">CVV</label>
                  <input
                    type="text"
                    className=" rounded-[10px] px-2 py-[22px] border"
                    name="email"
                    id="email"
                    placeholder="***"
                  />
                </span>
              </span>
            </span>
            <span className="flex gap-x-3 items-center">
              <input type="checkbox" name="" id="" />{" "}
              <p className="text-[#747474]">
                Save my wallet details & information for future transactions
              </p>
            </span>
          </div>
          <button className="text-white w-full rounded py-8 bg-[#3341C1]">
            Confirm
          </button>
        </div>

        <div className="w-1/2">
          <p>Payment summary</p>

          <span>
            <p>Metamask wallet : 002345KJi90pzzz3</p>
            <p>Actively linked to Yaba, Lagos Nigeria.</p>
          </span>

          <span>
            <p>
              Expected arrival date: Between 22nd September and 26th September
              2022
            </p>
          </span>

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
      </div> */}
      </div>
    </div>
  );
};

export default Paymentdetails;
