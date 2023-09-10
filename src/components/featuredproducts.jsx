import React from "react";
import Featuredproduct from "./featuredproduct";
import { featureddata, productsdata } from "./data";

const Featuredproducts = () => {
  const featured = productsdata.filter((item) => item.feautured === true);
  return (
    <div>
      <div>
        {featured.map((featured) => {
          return (
            <Featuredproduct
              id={featured.id}
              image={featured.featuredimg}
              desc={featured.description}
              key={featured.id}
              title={featured.name}
              reverse={featured.id % 2 !== 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Featuredproducts;
