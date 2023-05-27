import React, { useEffect, useRef } from "react";
import { topcreators } from "./data";
import creatorone from "../assets/top-creator.svg";
import creatortwo from "../assets/top-creator-2.svg";
import creatorthree from "../assets/top-creator-3.svg";
import { gsap } from "gsap";

const Topcreators = () => {
  const creatoroneRef = useRef(null);
  const creatortwoRef = useRef(null);
  const creatorthreeRef = useRef(null);

  useEffect(() => {
    const creator1 = creatoroneRef.current;
    const creator2 = creatortwoRef.current;
    const creator3 = creatorthreeRef.current;

    const timeline = gsap.timeline({ repeat: -1 });

    timeline
      .fromTo(creator1, { opacity: 0 }, { opacity: 1, duration: 3 })
      .to(creator1, { opacity: 0, duration: 1 })
      .fromTo(creator2, { opacity: 0 }, { opacity: 1, duration: 3 })
      .to(creator2, { opacity: 0, duration: 1 })
      .fromTo(creator3, { opacity: 0 }, { opacity: 1, duration: 3 })
      .to(creator3, { opacity: 0, duration: 1 });
  });

  return (
    <div className="flex flex-col relative h-[351px] md:h-[922px] p-[5px] md:p-[80px] bg-[#E2E2E2] gap-y-[36px]">
      <div className="flex justify-between">
        <p className="text-2xl w-[264px] leading-[37px] md:leading-[86px] md:text-[55px] clash font-semibold md:w-[535px]">
          TOP CREATORS OF THE WEEK
        </p>
        <ul className="text-[#333333] flex flex-wrap gap-4 md:gap-0 md:flex-nowrap md:flex-col gap-y-5 clash text-[10px] items-baseline md:items-start md:text-[40px] leading-[62px]">
          <li>Editorials</li>
          <li>Fashion</li>
          <li>Lifestyle</li>
          <li>Blueprint</li>
        </ul>
      </div>

      <div>
        <div className="flex relative">
          <p className="text-text-grey text-[13px] w-[413px] leading-4 md:w-[1148px] md:text-[32px] clash md:leading-[42px]">
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
          <div className="flex flex-col absolute md:top-24 right-8 items-center">
            <p className="md:text-[55px] text-[32px] clash font-bold ">CIRCA</p>
            <p className="md:text-[170px] text-[64px] line-through clash font-bold ">
              1985
            </p>
          </div>
        </div>

        <div>
          <img
            className="absolute bottom-0 md:top-[10em] w-[237px] md:w-[50em] right-5 md:right-0 lg:right-[9em]"
            src={creatorthree}
            alt=""
            ref={creatorthreeRef}
          />

          <img
            className="absolute bottom-0 md:top-[10em] w-[237px] md:w-[50em] right-5 md:right-0 lg:right-[9em]"
            src={creatortwo}
            alt=""
            ref={creatortwoRef}
          />
          <img
            className="absolute bottom-0 md:top-[10em] w-[237px] md:w-[50em] right-5 md:right-0 lg:right-[9em]"
            src={creatorone}
            alt=""
            ref={creatoroneRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Topcreators;
