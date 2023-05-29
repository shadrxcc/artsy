import React from "react";
import Filterpanel from "./filterpanel";
import { productsdata } from "./data";
import search from "../assets/searchicon.svg";
import { Link } from "react-router-dom";

const Market = () => {
  return (
    <div className="flex flex-col gap-y-[70px]">
      <div className="flex justify-evenly items-center">
        <div className="md:flex relative hidden items-center">
          <input
            type="text"
            name="search"
            className="text-2xl pl-14 w-[215px] rounded-[15px] py-[14px] bg-[#F4F2F2] outline-none leading-[32px] text-[#999999] font-medium"
            id="seacrh"
            placeholder="Search"
          />
          <img src={search} className="absolute" alt="" />
        </div>

        <div className="flex bg-white shadow-md p-[16px] max-[280px]:w-[260px] w-[370px] md:w-[495px] lg:w-[913px] rounded-[15px] items-center justify-between">
          <div>
            <select className="text-2xl md:hidden font-medium leading-[38px]">
              <option disabled selected value="sort">
                Filter
              </option>
              <option className="text-sm" value="option1">Option 1</option>
              <option className="text-sm" value="option2">Option 2</option>
              <option className="text-sm" value="option3">Option 3</option>
            </select>
            <p className="text-2xl hidden md:block leading-[38px]">
            See 1-6 of {productsdata.length} results
          </p>
          </div>
         

          <div>
            <select className="text-2xl font-medium leading-[38px]">
              <option  className="text-sm" disabled selected value="sort">
                Sort
              </option>
              <option className="text-sm" value="option1">Option 1</option>
              <option className="text-sm" value="option2">Option 2</option>
              <option className="text-sm" value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <Filterpanel />
        <div className="grid md:grid-cols-2 gap-x-[10px] xl:gap-x-[40px] gap-y-[20px] lg:grid-cols-3">
          {productsdata.map((product) => {
            return (
              <Link key={product.id} to={`/product-details/${product.id}`}>
                <div className="md:bg-white hover:scale-100 flex gap-y-[10px] rounded-[15px] md:shadow-lg flex-col px-[14px] py-[20px] md:w-[230px] xl:w-[269px]">
                  <img
                    src={product.img}
                    className="w-[357px]"
                    alt=""
                  />
                  <span className="flex items-center justify-between md:items-start md:flex-col gap-y-[18px]">
                    <p className="text-base font-medium md:text-xl leading-9 text-[#333333]">
                      {product.name}
                    </p>
                    <p className="text-base md:text-[28px] font-medium md:font-bold leading-10 text-[#333333]">
                      ${product.price}
                    </p>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Market;
