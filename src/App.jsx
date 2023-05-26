import Featuredsection from "./components/featuredsection";
import Header from "./components/header";
import Hero from "./components/hero";
import React from "react";
import Upcoming from "./components/upcoming";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Featuredsection/>
      <Upcoming/>
    </>
  );
}

export default App;
