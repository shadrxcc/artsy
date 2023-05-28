import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Marketplace from "./pages/marketplace";
import Productdetails from "./components/productdetails";

const RouteSwitch = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/market" element={<Marketplace/>}></Route>
        <Route path="/product-details/:productId" element={<Productdetails/>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default RouteSwitch;
