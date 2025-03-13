import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-16'>
      <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-zinc-500 to-violet-500 bg-clip-text text-transparent"> See the magic. Try now</h1>
            <div className='text-center mt-24'>
                <input type="file" id="upload2"  style={{display:"none"}}/>
                <label id="upload2"   className="inline-flex gap-3 px-8 py-3.5 rounded cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-600 m-auto hover:scale-105 duration-300 transition-all" htmlFor="upload1">
                    <img  width= { 20 } src={assets.upload_btn_icon} alt="" />
                    <p className="text-white text-center">Upload Your Image</p>
                </label>
            </div>
    </div>
  )
}

export default Upload
