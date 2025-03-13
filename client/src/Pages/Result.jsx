import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>

      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-md'>
      
        {/* Image Container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8 '> 

          {/* Left Side */}
             <div>
               <p className='text-gray-600 font-semibold mb-2'>Original</p>
               <img className='rounded-md border ' src={assets.image_w_bg} alt="" />
             </div>
          {/* Right Side */}
            <div className='flex flex-col'>
                <p className='text-gray-600 font-semibold mb-2'>Background Remove</p>
                <div className='rounded-md border border-ray-400 relative bg-layer h-full overflow-hidden'>
                  <img src={assets.image_wo_bg} alt="" />
                  {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/5 translate-y-1/5">
                    <div className='border-4 border-t-transparent border-violet-600 rounded-full w-12 h-12 animate-spin'></div>
                  </div> */}
                </div>
            </div>
        </div>
      </div>
      {/* Buttons */}
      <div className='flex justify-center sm:justify-end items-center gap-4 mt-8 flex-wrap'>
        <button className="px-8 py-2.5 text-violet-600 text-lg border border-violet-600 rounded cursor-pointer hover:scale-105 duration-150 transition-all ">Try Another Image</button>
        <a  className="px-8 py-2.5  text-lg border bg-gradient-to-r from-violet-600 to-pink-500 border-violet-600 rounded cursor-pointer hover:scale-105 duration-150 transition-all text-white" href="">Download Image</a>
      </div>
    </div>
  );
}

export default Result