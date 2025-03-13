import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-5 px-4  lg:px-44 py-3'>
      <img src={assets.logo} alt="" />
       <p className=' text-gray-400 text-sm max-sm:hidden'>Copyright @amaarsroor | All right reserved.</p>
       <div className='flex gap-1'>
        <img width={40} src={assets.facebook_icon}alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />
       </div>
    </div>
  )
}

export default Footer
