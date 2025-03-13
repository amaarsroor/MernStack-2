import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-zinc-500 to-violet-500 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>

      <div className="flex flex-wrap items-start gap-4 mt-16  xl:mt-24 justify-center">
        
        <div className="flex items-start gap-4 bg-white p-7 pb-4 border drop-shadow-md rounded hover:scale-105 duration-300 transition-all">
          <img className="max-w-9" src={assets.upload_icon} alt="" />
          <div>
            <p className="text-2xl mb-1 text-black">Upload Image</p>
            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              libero.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 bg-white p-7 pb-4 border drop-shadow-md rounded hover:scale-105 duration-300 transition-all">
          <img className="max-w-9" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-2xl mb-1 text-black">RemoveBG Image</p>
            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              libero.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 bg-white p-7 pb-4 border drop-shadow-md rounded hover:scale-105 duration-300 transition-all">
          <img className="max-w-9" src={assets.download_icon} alt="" />
          <div>
            <p className="text-2xl mb-1 text-black">Download Image</p>
            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
