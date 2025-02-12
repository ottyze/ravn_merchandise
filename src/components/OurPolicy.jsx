import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We Offer Free exchange policy</p>
        </div>

        <div>
            <img src={assets.returns} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold'>14 Days Return Policy</p>
            <p className='text-gray-400'>We offer 14 day free return policy</p>
        </div>

        <div>
            <img src={assets.cust_support} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold'>Customer Support</p>
            <p className='text-gray-400'>We offer 24/7 customer support services</p>
        </div>
      
    </div>
  )
}

export default OurPolicy
