import React,{ useState } from "react";
import Upcomingcard from "./upcomingcard";
import UpcomingData from "./data";
import { UpcomingContext } from "../context/upcomingcontext";
import Slidercontrol from "./slidercontrol";

const Upcoming = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const context = {
    currentSlide,
    setCurrentSlide,
  };

  const previousSlider = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? UpcomingData.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentSlide === UpcomingData.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  return (
    <>
      <div className="upcoming hidden md:flex md:flex-col gap-y-[25px] py-[25px] md:px-[60px]">
        <p className="text-[40px] leading-[54px] font-medium text-white">
          See Upcoming Auctions and Exhibitions
        </p>
        <UpcomingContext.Provider value={context}>
          <Upcomingcard data={UpcomingData} />
        </UpcomingContext.Provider>
        <Slidercontrol next={nextSlider} prev={previousSlider} />
      </div>

      <div className="upcoming flex flex-col gap-y-5 p-8 md:hidden">
        <UpcomingContext.Provider value={context}>
          <Upcomingcard data={UpcomingData} />
        </UpcomingContext.Provider>
        <Slidercontrol next={nextSlider} prev={previousSlider} />
      </div>
    </>
  );
};

export default Upcoming;
