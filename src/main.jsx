import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteSwitch from "./RouteSwitch.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CartContext } from "./context/cartcontext";
import Cartprovider from "./context/cartprovider";

const theme = extendTheme({
  fonts: {
    body: "Satoshi-Variable",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <Cartprovider>
          <RouteSwitch />
        </Cartprovider>
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);
