import React from "react";
import CarouselMovie from "./CarouselMovie/CarouselMovie";
import ListMovie from "./ListMovie/ListMovie";
import CumRap2 from "./CumRap/CumRap2";
import TinTuc2 from "./TinTuc/TinTuc2";
import App from "./App/App";



const HomePage = () => {
  return (
    <div>
      <CarouselMovie />
      <ListMovie />
      <CumRap2/>
      <TinTuc2/>
      <App/>
    </div>
  );
};

export default HomePage;
