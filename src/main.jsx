import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteSwitch from "./RouteSwitch.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <React.StrictMode>
        <RouteSwitch />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);
