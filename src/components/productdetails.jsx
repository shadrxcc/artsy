import React, { useState, useRef } from "react";
import { useParams } from "react-router";
import { productsdata } from "./data";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";
import fav from "../assets/favourites.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import left from "../assets/slider-left-arrow.svg";
import right from "../assets/slider-right-arrow.svg";
import like from "../assets/heart.svg";
import { Link } from "react-router-dom";

const Productdetails = () => {
  const theme = createTheme();
  const { id } = useParams();
  const [itemNo, setItemNo] = useState(0);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const decreaseNo = () => {
    if (itemNo > 0) {
      setItemNo(itemNo - 1);
    }
  };

  const increaseNo = () => {
    setItemNo(itemNo + 1);
  };

  const data = productsdata.find((product) => product.id == id);
  const [targetData, setTargetData] = useState(data);

  const collection = productsdata.filter(
    (product) => product.type == targetData.type && product.id !== targetData.id
  );

  const [collectionData, setCollectionData] = useState(collection);

  const collectionAvailable = () => {
    if (collectionData.length > 0) {
      return (
        <div className="flex bg-white shadow items-center flex-col md:flex-row gap-y-6 p-7 rounded-2xl justify-between">
          <p className="text-xl md:text-3xl text-center md:text-start leading-8 font-medium">
            Explore more from this collection
          </p>
          <span className="flex gap-x-9">
            <img onClick={scrollLeft} src={left} className="w-16" alt="" />
            <img onClick={scrollRight} src={right} className="w-16" alt="" />
          </span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="px-6 flex flex-col gap-y-20 md:px-10 mx-auto">
      <div className="flex flex-col md:flex-row justify-center">
        <div
          className="w-full h-[50vh] md:h-auto lg:w-1/4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${targetData.img})` }}
        ></div>
        <div className=" md:border-[1px] md:border-l-0 md:border-black ">
          <div className="flex items-center md:p-5 justify-between">
            <p className="text-base md:text-xl leading-[45px] font-bold">
              {targetData.name}
            </p>
            <p className="text-base md:text-xl leading-[45px] font-medium">
              ${targetData.price}
            </p>
          </div>
          <div className="flex flex-col md:p-5 md:border-[1px] md:border-black md:border-x-0 md:border-b-0 gap-y-5">
            <div className="flex flex-col gap-y-5">
              <p className="text-base md:text-xl leading-[29px]">
                Creator:{" "}
                <span className="font-medium text-[#4693ED]">
                  {targetData.creator}
                </span>
              </p>
              <p className="text-base md:text-xl">
                Made in {targetData.madeIn}
              </p>
              <p className="text-base md:text-xl font-medium">
                Total views:{" "}
                <span className="text-[#333333]">{targetData.views}</span> views
              </p>

              <div className="flex gap-x-5">
                <img onClick={decreaseNo} src={decrease} alt="" />
                <p className="text-2xl font-medium">{itemNo}</p>
                <img onClick={increaseNo} src={increase} alt="" />
              </div>
            </div>
            <div className="flex gap-x-6">
              <button className="text-base md: after:text-[26px] leading-[31px] font-medium bg-[#3341C1] w-[214px] h-[58px] rounded text-white">
                Add to cart
              </button>
              <img src={fav} alt="" />
            </div>
          </div>
          <div className="pt-10 md:pt-0">
            <Accordion className="md:w-[400px] lg:w-[450px]" allowToggle>
              <div className="p-3 border-[1px] border-b-0 border-x-0 border-black">
                <AccordionItem className="border-none">
                  <h2>
                    <AccordionButton className="bg-none">
                      <Box
                        className="text-lg md:text-xl font-medium"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Description
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="" pb={4}>
                    {targetData.description}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div className="p-3 border-[1px] border-b-0 border-x-0 border-black">
                <AccordionItem className="border-none">
                  <h2>
                    <AccordionButton className="bg-none">
                      <Box
                        className="text-lg md:text-xl font-medium"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Listings
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="" pb={4}>
                    {targetData.listing}
                  </AccordionPanel>
                </AccordionItem>
              </div>
              <div className="p-3 border-[1px] border-b-[1px] md:border-b-0 border-x-0 border-black">
                <AccordionItem className="border-none">
                  <h2>
                    <AccordionButton className="bg-none">
                      <Box
                        className="text-lg md:text-xl font-medium"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Status
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="" pb={4}>
                    {targetData.status}
                  </AccordionPanel>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </div>

      <div>
        {collectionAvailable()}

        <div className="pt-12">
          <div
            ref={containerRef}
            className="overflow-x-scroll whitespace-nowrap hide-scrollbar"
          >
            {collectionData.map((collection) => {
              return (
                <Link
                  to={`/product-details/${collection.id}`}
                  key={collection.id}
                >
                  <div className="inline-block p-6 border-[1px] border-black mr-[40px]">
                    <div className="flex flex-col">
                      <div>
                        {" "}
                        <img
                          src={like}
                          className="w-[53px] float-right"
                          alt=""
                        />
                      </div>

                      <img src={collection.img} className="w-[15em]" alt="" />
                      <span className="flex justify-between">
                        <p className="text-32 font-bold">{collection.name}</p>
                        <p className="text-32 font-bold">${collection.price}</p>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
