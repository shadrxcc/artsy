import React from "react";
import Modal from "./modal";
import outer from "../../src/assets/outerloader.svg";
import inner from "../../src/assets/innerloader.svg";
const Spinner = () => {
  return (
    <Modal>
      <div className="flex justify-center items-center">
        <img
          id="outerloader"
          className="w-[15em] absolute "
          src={outer}
          alt=""
        />

        <img src={inner} id="innerloader" className="w-[10em] absolute " />
      </div>
    </Modal>
  );
};

export default Spinner;
