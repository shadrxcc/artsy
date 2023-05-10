import React, { useEffect, useState } from "react";
import flower from "../assets/flower.svg";
import flower2 from "../assets/flower-2.svg";
import smilinggirl from "../assets/smilingbabe.svg";
import blur from "../assets/Ellipse70.svg";
import blur1 from "../assets/Ellipse71.svg";
import blur2 from "../assets/Ellipse72.svg";

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


    </div>
  );
};

export default Herocarousel;
