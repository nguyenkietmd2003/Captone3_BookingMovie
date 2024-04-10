import React from "react";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import iconLoading from "../../assets/iconLoading.json";

const Loading = () => {
  const { isLoading } = useSelector((state) => state.loadingReducer);
  return (
    <div
      className={`w-full h-screen bg-black fixed text-white top-0 left-0 z-50 ${
        isLoading ? "" : "hidden"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center ">
      <Lottie animationData={iconLoading} />
      </div>
    </div>
  );
};

export default Loading;
