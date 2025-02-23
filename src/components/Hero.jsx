import React from 'react'
import { assets } from '../assets/assets'
import HeroSlider from './HeroSlider';

const Hero = () => {

    const images = [
        assets.merch,
        assets.merch_back,
        assets.hoodie,
        assets.hoodie_back,
        assets.panda
    ];

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero Left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className=' font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
                </div>
                <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* Hero right side */}
        {/* <img className='w-full sm:w-1/2' src={assets.panda} alt="" /> */}
        <div className="w-full sm:w-1/2 h-full">
            <HeroSlider images={images} />
        </div>
        
      
    </div> 
  )
}

export default Hero
