import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
    return (
        <div className="flex items-center justify-between
                            max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
            {/* Left Side */}
            <div >
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl 
                               font-bold text-neutral-700 leading-tight">Remove the <br /> 
                    <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">background </span>from<br />
                 images for free.
                </h1>
                <p className="my-6 text-[15px]  text-gray-500 max-w-[600px] sm:max-w-[550px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis soluta dolore doloribus nisi distinctio repudiandae quaerat suscipit quas ab.
                </p>
                <div>
                    <input type="file" id="upload1"  style={{display:"none"}}/>
                    <label id="upload1"   className="inline-flex gap-3 px-8 py-3.5 rounded cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-600 m-auto hover:scale-105 duration-300 transition-all" htmlFor="upload1">
                        <img  width= { 20 } src={assets.upload_btn_icon} alt="" />
                        <p className="text-white text-center">Upload Your Image</p>
                    </label>
                </div>
            </div>
            {/* Right Side */}
            <div className="w-full max-w-md">
                <img src={assets.header_img} alt="" />
             </div>
        </div>
    );
};

export default Header;
