import React, { useRef, useEffect, useState } from "react";
import auction1 from "../assets/auction-img-1.svg";
import Comment from "./comments";

import send from "../assets/sendbtn.svg";
import sendwhite from "../assets/sendwhite.svg";
import close from "../assets/closebtn.svg";
import { Link, useParams } from "react-router-dom";
import eye from "../assets/eye.svg";
import x from "../assets/closemobile.svg";
import { dropsdata } from "./dropdata";

const Livebid = ({ commentsData, addComment, comments, height }) => {
  const containerRef = useRef(null);
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const data = dropsdata.find((item) => item.id === id);

  const dropComment = (e) => {
    e.preventDefault();
    const comments = {
      id: Math.random(),
      comment: message,
    };
    addComment(comments);
    setMessage("");
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${data.url})` }}
        className="h-screen bg-cover flex flex-col justify-between bg-center bg-no-repeat md:hidden w-full"
      >
        <div className="flex justify-between items-center px-6 py-10">
          <p className="text-base font-medium text-white"> Tag: {data.title}</p>
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
                <p className="text-white">545</p>
              </div>
            </div>
            <Link to={`/drop`}>
              <img src={x} className="w-4" alt="" />
            </Link>
          </div>
        </div>

        <div>
          <p className="max-[280px]:text-2xl text-3xl text-center text-white font-semibold">
            Current bid $4500
          </p>
        </div>
        <div className="flex justify-center pb-8">
          <div className="">
            <div
              className="comment-section h-[50vh]"
              style={{ overflowY: "auto" }}
              ref={containerRef}
            >
              {commentsData.map((comment) => {
                return <Comment key={comment.id} message={comment.comment} />;
              })}
            </div>

            <form onSubmit={dropComment}>
              <div className=" flex items-center border-searchborder max-[280px]:w-[240px] w-[302px] h-[35px] border-[1px] rounded-full px-5 py-3">
                <input
                  autoCapitalize="false"
                  id="commentBox"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent font-medium text-xs placeholder:text-white text-white w-full focus:border-none focus:outline-none"
                  placeholder="Place a bid..."
                />
                <button id="sendButton">
                  <img src={sendwhite} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="md:flex hidden items-center justify-center">
        <div
          style={{ backgroundImage: `url(${data.url})` }}
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
            <p className="text-xl font-medium"> Tag: {data.title}</p>
          </div>
        </div>
        <div className="flex h-[605px] flex-col border-y-[1px] border-r-[1px] pl-8 lg:px-8 py-8 border-black gap-y-[32px]">
          <div className="overflow-y-auto">
            {commentsData.map((comment) => {
              return <Comment key={comment.id} message={comment.comment} />;
            })}
          </div>

          <div className="flex flex-col gap-y-[11px]">
            <p className="text-[#BAB9B9] font-medium text-base italic">
              Creator : Stormi Rylie
            </p>
            <form onSubmit={dropComment}>
              <div className=" flex items-center border-searchborder md:w-[320px] lg:w-[404px] md:h-[65px] border-[1px] rounded-full px-5 py-3">
                <input
                  autoCapitalize="false"
                  id="commentBox"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  className="bg-transparent font-medium text-lg text-[#616161] w-full focus:border-none focus:outline-none"
                  placeholder="Place a bid..."
                />
                <button id="sendButton">
                  <img src={send} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livebid;
