import React, { useState } from "react";
import Livebid from "../components/livebid";
import { commentsData } from "../components/commentsdata";

const Bid = () => {
  const [comment, setComments] = useState(commentsData);
  const addComment = (comment) => {
    setComments((prevState) => {
      return [...prevState, comment];
    });
  };
  return (
    <div>
      <Livebid commentsData={comment} addComment={addComment} />
    </div>
  );
};

export default Bid;
