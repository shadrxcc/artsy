import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteSwitch from "./RouteSwitch.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Satoshi-Variable",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <RouteSwitch />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);
