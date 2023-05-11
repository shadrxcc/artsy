import React from "react";
import Featuredproduct from "./featuredproduct";
import { featureddata } from "./data";

const Featuredproducts = () => {
  return (
    <div>
      <div>
        {featureddata.map((featured) => {
          return (
            <Featuredproduct
              image={featured.image}
              desc={featured.desc}
              key={featured.id}
              title={featured.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Featuredproducts;
