import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Bg = () => {

    const [sliderPosition ,setSliderPosition]= useState(40);
    const onHandleSliderChange=(e)=>{
        setSliderPosition(e.target.value)
    }
  return (
    <div className='pb-10 md:py-20 mx-2'>
        <h1 className=" mb-8  sm:mb-20 text-center font-semibold text-2xl md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-zinc-500 to-violet-500 bg-clip-text text-transparent">
              Remove Background With High <br /> Quality and Accuracy
        </h1>

        <div className="relative w-full overflow-hidden max-w-xl m-auto rounded-lg">
            <img src={assets.image_w_bg} alt="" style={{clipPath:`inset(0 ${100.2 -sliderPosition}% 0 0)`}} />
        
            <img className="absolute top-0 left-0 w-full h-full" src={assets.image_wo_bg} alt="" style={{clipPath:`inset( 0 0 0 ${sliderPosition}%) `}} />
        
            <input className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 slider" type="range" value={sliderPosition} onChange={onHandleSliderChange} min={0 } max={100} />
        </div>
    </div>
  )
}

export default Bg
