import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Marketplace from "./pages/marketplace";
import Productdetails from "./components/productdetails";
import ScrollToTop from "./ScrollToTop";
import Auction from "./pages/auction";
import Drops from "./pages/drops";
import Bid from "./pages/bid";
import Checkout from "./pages/checkout";
import Success from "./pages/success";


const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <ScrollToTop />
    {children}
    <Footer />
  </>
);

const RouteSwitch = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/market"
          element={
            <DefaultLayout>
              <Marketplace />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/auction"
          element={
            <DefaultLayout>
              <Auction />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/product-details/:id"
          element={
            <DefaultLayout>
              <Productdetails />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/drop"
          element={
            <DefaultLayout>
              <Drops />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/checkout/cart"
          element={
            <DefaultLayout>
              <Checkout />
            </DefaultLayout>
          }
        ></Route>

        <Route
          path="/checkout/shipping-details"
          element={
            <DefaultLayout>
              <Checkout />
            </DefaultLayout>
          }
        ></Route>

        <Route
          path="/checkout/success"
          element={
            <DefaultLayout>
              <Success/>
            </DefaultLayout>
          }
        ></Route>

        <Route
          path="/checkout/payment-details"
          element={
            <DefaultLayout>
              <Checkout />
            </DefaultLayout>
          }
        ></Route>

        <Route path="/livebid/:id" element={<Bid />}></Route>
      </Routes>
    </>
  );
};

export default RouteSwitch;
