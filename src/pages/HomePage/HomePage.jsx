import React from "react";
import CarouselMovie from "./CarouselMovie/CarouselMovie";
import ListMovie from "./ListMovie/ListMovie";
import CumRap from "./CumRap/CumRap";
import TinTuc from "./TinTuc/TinTuc";



const HomePage = () => {
  return (
    <div>
      <CarouselMovie />
      <ListMovie />
      <CumRap/>
      <TinTuc/>
    </div>
  );
};

export default HomePage;
