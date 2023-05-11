import React, { useEffect, useState } from "react";
import flower from "../assets/flower.svg";
import flower2 from "../assets/flower-2.svg";
import smilinggirl from "../assets/smilingbabe.svg";
import blur from "../assets/Ellipse70.svg";
import blur1 from "../assets/Ellipse71.svg";
import blur2 from "../assets/Ellipse72.svg";
import { carousel1, carousel2, carousel3, carousel4 } from "./carousel";
import { motion } from "framer-motion";

const Herocarousel = () => {
  //   const [carouseldata, setCarouselData] = useState([]);
  //   const URL =
  //     "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/carousel.json";

  //   useEffect(() => {
  //     const fetchdata = async () => {
  //       const response = await fetch(URL)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setCarouselData(data.carousel);
  //         });
  //     };

  //     fetchdata();
  //   }, []);

  return (
    <div>
      {/* start of image section for mobile */}

      <div className="px-8 my-[30px] relative md:hidden">
        <div className="absolute right-0">
          <img src={blur} />
        </div>
        <div className="absolute right-0 bottom-0">
          <img src={blur1} />
        </div>
        <div className="absolute left-0 bottom-[5.25rem]">
          <img src={blur2} />
        </div>

        <div className="relative flex flex-col justify-center items-center m-auto h-96 md:hidden">
          <div className="absolute rotate-[-9.31deg]">
            <img src={smilinggirl} alt="" />
          </div>
          <div className="absolute rotate-[7.75deg]">
            <img src={flower2} alt="" />
          </div>
          <div className="absolute">
            <img src={flower} />
          </div>
        </div>
      </div>

      {/* end of image section for mobile */}
      {/* start of desktop carousel */}
      <div
        className="my-10 relative h-[28rem]
md:static md:space-x-10 md:translate-y-0 md:translate-x-0 md:justify-center hidden md:flex"
      >
        <div className=" md:w-[22%] md:h-[444px] md:overflow-clip">
          <motion.div
            animate={{
              translateX: [
                "-100%",
                "-100%",
                "-200%",
                "-200%",
                "-300%",
                "-300%",
                "0%",
                "0%",
                "-100%",
              ],
            }}
            transition={{
              times: [0, 0, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:flex md:items-center md:justify-start 
  "
          >
            {carousel1.map((carousel) => {
              return (
                <div
                  className="md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0"
                  key={carousel.id}
                >
                  <img src={carousel.image} alt="" />
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className=" md:w-[22%] md:h-[444px] md:overflow-clip">
          <motion.div
            animate={{
              translateX: [
                "-100%",
                "-100%",
                "-200%",
                "-200%",
                "-300%",
                "-300%",
                "0%",
                "0%",
                "-100%",
              ],
            }}
            transition={{
              times: [0, 0, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:flex md:items-center md:justify-start 
  "
          >
            {carousel2.map((carousel) => {
              return (
                <div
                  className="md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0"
                  key={carousel.id}
                >
                  <img src={carousel.image} alt="" />
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className=" md:w-[22%] md:h-[444px] md:overflow-clip">
          <motion.div
            animate={{
              translateX: [
                "-100%",
                "-100%",
                "-200%",
                "-200%",
                "-300%",
                "-300%",
                "0%",
                "0%",
                "-100%",
              ],
            }}
            transition={{
              times: [0, 0, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:flex md:items-center md:justify-start 
  "
          >
            {carousel3.map((carousel) => {
              return (
                <div
                  className="md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0"
                  key={carousel.id}
                >
                  <img src={carousel.image} alt="" />
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className=" md:w-[22%] md:h-[444px] md:overflow-clip">
          <motion.div
            animate={{
              translateX: [
                "-100%",
                "-100%",
                "-200%",
                "-200%",
                "-300%",
                "-300%",
                "0%",
                "0%",
                "-100%",
              ],
            }}
            transition={{
              times: [0, 0, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:flex md:items-center md:justify-start 
  "
          >
            {carousel4.map((carousel) => {
              return (
                <div
                  className="md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0"
                  key={carousel.id}
                >
                  <img src={carousel.image} alt="" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* end of desktop carousel */}
    </div>
  );
};

export default Herocarousel;
