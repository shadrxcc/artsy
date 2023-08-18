import React, { useRef, useEffect } from "react";
import auction1 from "../assets/auction-img-1.svg";
import commentsData from "./commentsdata";
import Comment from "./comments";

import send from "../assets/sendbtn.svg";
import sendwhite from "../assets/sendwhite.svg";
import close from "../assets/closebtn.svg";
import { Link } from "react-router-dom";
import eye from "../assets/eye.svg";
import x from "../assets/closemobile.svg";

const Livebid = ({ comments, height }) => {
  const containerRef = useRef(null);
  const commentslice = commentsData.slice(0,3)

  useEffect(() => {
    // Scroll to the bottom of the container when new comments are added
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [comments]);

  const min = 100;
  const max = 1000;

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${auction1})` }}
        className="h-screen bg-cover flex flex-col justify-between bg-center bg-no-repeat md:hidden w-full"
      >
        <div className="flex justify-between items-center px-6 py-10">
          <p className="text-base font-medium text-white">
            {" "}
            Tag: Lost or Wither
          </p>
          <div className="flex gap-x-5 items-center">
            <div className="flex gap-x-2 items-center">
              <p className="text-xs text-white w-[49px] h-[27px] flex justify-center items-center rounded-[5px] bg-[#006CA2] font-medium">
                LIVE
              </p>
              <div
                id="views"
                className="flex gap-x-2 text-xs w-[60px] h-[27px] px-1 rounded-[5px] items-center"
              >
                <img src={eye} alt="" />
                <p className="text-white">{randomNum}</p>
              </div>
            </div>
            <Link to={`/drop`}>
              <img src={x} className="max-[280px]:w-[7em] w-4" alt="" />
            </Link>
          </div>
        </div>

        <div>
          <p className="max-[280px]:text-2xl text-3xl text-center text-white font-semibold">
            Current bid $4500
          </p>
        </div>
        <div className="flex justify-center pb-8">
          <div>
            <div
              className="comment-section"
              style={{ height: `${height}px`, overflowY: "auto" }}
              ref={containerRef}
            >
              {commentslice.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    name={comment.name}
                    message={comment.comment}
                    img={comment.img}
                  />
                );
              })}
            </div>

            <div className=" flex items-center border-searchborder max-[280px]:w-[240px] w-[302px] h-[35px] border-[1px] rounded-full px-5 py-3">
              <input
                autoCapitalize="false"
                id="commentBox"
                type="text"
                className="bg-transparent font-medium text-xs placeholder:text-white text-white w-full focus:border-none focus:outline-none"
                placeholder="Place a bid..."
              />
              <button id="sendButton">
                <img src={sendwhite} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex hidden items-center justify-center">
        <div
          style={{ backgroundImage: `url(${auction1})` }}
          className="md:w-[365px] flex flex-col justify-between lg:w-[470px] xl:w-[540px] md:h-[605px] bg-cover bg-center bg-no-repeat"
        >
          <div className="flex justify-between items-center py-8 px-4">
            <Link to={`/drop`}>
              <img src={close} className="w-[2em]" alt="" />
            </Link>

            <span className="text-xl font-medium bg-[#4693ED] px-[35px] py-[8px] rounded-[20px]">
              <p className="text-xl text-white font-medium">LIVE</p>
            </span>
          </div>

          <div>
            <p className="text-3xl text-center text-white font-semibold">
              Current bid $4500
            </p>
          </div>
          <div className="px-8 py-14 text-white">
            <p className="text-xl font-medium"> Tag: Lost or Wither</p>
          </div>
        </div>
        <div className="flex flex-col border-y-[1px] border-r-[1px] pl-8 lg:px-8 py-8 border-black gap-y-[32px]">
          <div>
            {commentsData.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  message={comment.comment}
                  img={comment.img}
                />
              );
            })}
          </div>

          <div className="flex flex-col gap-y-[11px]">
            <p className="text-[#BAB9B9] font-medium text-base italic">
              Creator : Stormi Rylie
            </p>
            <div className=" flex items-center border-searchborder md:w-[320px] lg:w-[404px] md:h-[65px] border-[1px] rounded-full px-5 py-3">
              <input
                autoCapitalize="false"
                id="commentBox"
                type="text"
                className="bg-transparent font-medium text-lg text-[#616161] w-full focus:border-none focus:outline-none"
                placeholder="Place a bid..."
              />
              <button id="sendButton">
                <img src={send} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livebid;
