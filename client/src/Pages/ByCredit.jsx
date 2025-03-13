import React from 'react'
import { assets, plans } from '../assets/assets'

const ByCredit = () => {
  return (
    <div className='text-center mt-16 pb-10 min-h-[80vh]'>
      <button className='border border-gray-500 px-10 py-2 mb-4 rounded '>Our Plans</button>
      <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-zinc-500 to-violet-500 bg-clip-text text-transparent">Choose The Plan That's Right For You</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left mt-12'>
        {plans.map((item,index)=>(
          <div className='px-12 py-4 bg-white drop-shadow-md rounded-lg text-gray-700 hover:scale-105 duration-150 transition-all' key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-4 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6 '><span className='text-xl font-medium'>${item.price}</span>/${item.credits} Credits</p>
            <button className='w-full px-12 py-2 text-white bg-zinc-800 border rounded mt-8 min-w-52 cursor-pointer'>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ByCredit