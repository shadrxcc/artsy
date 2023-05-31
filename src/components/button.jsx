import React from "react";

export const Statusbtn = ({ dropstatus }) => {
  let buttonColor = "";

  switch (dropstatus) {
    case "UPCOMING":
      buttonColor = "bg-blue";
      break;
    case "LIVE":
      buttonColor = "bg-green";
      break;
    case "ENDED":
      buttonColor = "bg-red";
      break;
    default:
      break;
  }

  return (
    <button className={`w-[189px] text-white h-[73px] ${buttonColor}`}>
      {dropstatus}
    </button>
  );
};
