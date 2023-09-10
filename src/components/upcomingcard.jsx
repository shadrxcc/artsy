import React, { useContext } from "react";
import monalisa from "../assets/monalisa-desktop.png";
import circle from "../assets/ellipse-6.svg";
import { UpcomingContext } from "../context/upcomingcontext";
import { Link } from "react-router-dom";

const Upcomingcard = ({ data }) => {
  const { currentSlide, setCurrentSlide } = useContext(UpcomingContext);
  return (
    // desktop view
    <>
      <div
        style={{ backgroundImage: `url(${data[currentSlide].url})` }}
        className="h-[546px] hidden md:flex items-end p-8 pb-12 bg-cover justify-center"
      >
        <div className="flex gap-20 md:flex-col xl:flex-row items-center justify-evenly">
          <div className="flex items-center gap-3">
            <div>
              <img src={circle} alt="" />
              <p className="text-[#E1E1E1] belle text-[67.6122px] leading-[77px]">
                {data[currentSlide].id}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span>
                <p className="belle text-white text-[29.2313px] w-[353.88px] leading-[33px]">
                  {data[currentSlide].title}
                </p>
              </span>
              <p className="uppercase leading-5 text-[13.46px] text-white">
                {data[currentSlide].date}
              </p>
              <p className="md:w-[375px] lg:w-[628.85px] leading-[21px] text-white text-[15.8576px]">
                {data[currentSlide].desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-y-7 gap-x-3">
            <Link to={`/auction`}><p className="leading-8 text-base underline text-white">See more</p></Link>
            <button className="bg-transparent text-white py-[4px] px-[6px] text-base leading-8 rounded-[10px] border border-white">
              Set a reminder
            </button>
          </div>
        </div>
      </div>
      {/* end of desktop view */}

      {/* // mobile view  */}
      <div
        style={{ backgroundImage: `url(${data[currentSlide].url})` }}
        className="max-[280px]:h-[385px]  h-[330px] flex flex-col gap-y-3 justify-center items-center md:hidden bg-cover"
      >
        <div className="flex gap-x-7 items-baseline">
          <img src={circle} alt="" />
          <p className="belle text-white text-[20px] leading-[33px]">
            {data[currentSlide].title}
          </p>
        </div>
        <div className="flex items-baseline gap-x-3">
          <p className="text-[#E1E1E1] belle text-[40px] leading-[77px]">
            {data[currentSlide].id}
          </p>
          <span>
            <p className="uppercase leading-5 text-[12px] text-white">
              {data[currentSlide].date}
            </p>
            <p className="max-[280px]:w-[150px] leading-[21px] text-white text-[10px]">
              {data[currentSlide].desc}
            </p>
          </span>
        </div>
        <div className="flex items-center gap-7">
          <p className="leading-8 text-sm underline text-white">See more</p>
          <button className="bg-transparent text-white w-[102px] h-[32px] text-sm leading-8 rounded-[10px] border border-white">
            Set a reminder
          </button>
        </div>
      </div>
      {/* end of mobile */}
    </>
  );
};

export default Upcomingcard;
