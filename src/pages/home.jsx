import React from "react";
import Hero from "../components/hero";
import Featuredsection from "../components/featuredsection";
import Upcoming from "../components/upcoming";
import Marketauctionsnav from "../components/marketauctionsnav";
import Topcreators from "../components/topcreators";

const Home = () => {
  return (
    <>
      <Hero />
      <Featuredsection />
      <Upcoming />
      <Marketauctionsnav />
      <Topcreators />
    </>
  );
};

export default Home;
