import React, { useState } from "react";
import Filterpanel from "./filterpanel";
import { productsdata } from "./data";
import search from "../assets/searchicon.svg";
import { Link } from "react-router-dom";

const Market = () => {
  const [sort, setSort] = useState("sort");
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  const sortProducts = (option) => {
    switch (option) {
      case "Views":
        return productsdata.sort((a, b) => a.views - b.views);
      case "Price":
        return productsdata.sort((a, b) => a.price - b.price);
      case "Type":
        return productsdata.sort((a, b) => a.type.localeCompare(b.type));
      default:
        return productsdata;
    }
  };

  const sortedProducts = sortProducts(sort);

  const filtercategories = sortedProducts.filter((category) => {
    if (filter === "" || filter === "All") {
      return true;
    } else {
      return category.type === filter;
    }
  });

  const filteredCategoriesDesktop = filtercategories.filter((item) => {
    if (category === "" || category === "All") {
      return true;
    } else {
      return item.type === category;
    }
  });

  const filterPrice = filteredCategoriesDesktop.filter((item) => {
    if (price === "" || price === "All") {
      return true;
    }

    if (price === "Below $100.00" && item.price <= 100) {
      return true;
    }

    if (
      price === "$100.00 - $150.00" &&
      item.price > 100 &&
      item.price <= 150
    ) {
      return true;
    }

    if (
      price === "$150.00 - $200.00" &&
      item.price > 150 &&
      item.price <= 200
    ) {
      return true;
    }
  });

  return (
    <div className="flex flex-col gap-y-[70px]">
      <div className="flex justify-evenly items-center">
        <div className="md:flex relative hidden items-center">
          <input
            type="text"
            name="search"
            className="text-xl pl-14 w-[215px] rounded-[15px] py-[14px] bg-[#F4F2F2] outline-none leading-[32px] text-[#999999] font-medium"
            id="seacrh"
            placeholder="Search"
          />
          <img src={search} className="absolute w-[40px]" alt="" />
        </div>

        <div className="flex bg-white shadow-md p-2.5 max-[280px]:w-[260px] w-[350px] md:w-[495px] lg:w-[913px] rounded-[15px] items-center justify-between">
          <div>
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="text-lg md:hidden font-medium leading-[38px]"
            >
              <option disabled selected value="filter">
                Filter
              </option>
              <option className="text-sm" value="All">
                All
              </option>
              <option className="text-sm" value="Editorials">
                Editorials
              </option>
              <option className="text-sm" value="Fashion">
                Fashion
              </option>
              <option className="text-sm" value="Optics">
                Optics
              </option>
              <option className="text-sm" value="Art & Museum">
                Art & Museum
              </option>
              <option className="text-sm" value="Nature">
                Nature
              </option>
            </select>
            <p className="text-xl hidden md:block leading-[38px]">
              {filterPrice.length} results
            </p>
          </div>

          <div>
            <select
              className="font-medium leading-[38px]"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option className="text-lg" disabled selected value="sort">
                Sort
              </option>
              <option className="text-lg" value="Views">
                Views
              </option>
              <option className="text-lg" value="Price">
                Price
              </option>
              <option className="text-lg" value="Type">
                Type
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <Filterpanel
          price={price}
          setPrice={setPrice}
          category={category}
          setCategory={setCategory}
        />
        {filterPrice.length === 0 ? (
          <p className="md:text-[.9em] lg:text-[1.7em] text-center">
            Sorry, no results matching your search. Play with your filters a bit
            more ;)
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-x-[10px] xl:gap-x-[40px] gap-y-[20px] lg:grid-cols-3">
            {filterPrice.map((product) => {
              return (
                <Link key={product.id} to={`/product-details/${product.id}`}>
                  <div className="md:bg-white hover:scale-100 flex gap-y-[10px] rounded-[15px] md:shadow-lg flex-col px-[14px] py-[20px] md:w-[230px] xl:w-[269px]">
                    <img src={product.img} className="w-[357px]" alt="" />
                    <span className="flex items-center justify-between md:items-start md:flex-col gap-y-[18px]">
                      <p className="text-base font-medium leading-9 text-[#333333]">
                        {product.name}
                      </p>
                      <p className="text-base md:text-lg font-medium md:font-bold leading-10 text-[#333333]">
                        ${product.price}
                      </p>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Market;
