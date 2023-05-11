import React from "react";
import Featuredproducts from "./featuredproducts";

const Featuredsection = () => {
  return (
    <div className="max-[280px]:px-3 flex flex-col gap-y-9 px-8 xl:px-44">
      <p className="stix text-[28px] text-subtitle-black md:text-[48px] md:leading-[65px] font-medium">
        Featured products
      </p>
      <Featuredproducts />
    </div>
  );
};

export default Featuredsection;
