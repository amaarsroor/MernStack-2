import React from 'react'
import { testimonialsData } from '../assets/assets'

const Test = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-zinc-500 to-violet-500 bg-clip-text text-transparent">Customer Testimonials</h1>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
            {testimonialsData.map((item,index)=>(
                <div key={index} className='max-w-lg bg-white mx-auto drop-shadow-md rounded p-6'>
                    <p className='text-xl text-gray-500'>{item.text}</p>
                    <div className='flex items-center gap-3 mt-5'>  
                        <img className='w-9 rounded-full' src={item.image} alt="" />
                        <div>
                            <p className='text-sm text-gray-500'>{item.author}</p>
                            <p className='text-sm text-gray-500'>{item.jobTitle}</p>
                        </div>
                    </div> 
                </div>
            ))}
        </div>
    
    </div>
  )
}

export default Test
