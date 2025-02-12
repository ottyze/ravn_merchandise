import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLetterBox from '../components/NewLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-1 border-t'>
        <Title text1={'CONCTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_us_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'></p>
          <p className='text-gray-500'>3875 Soft Breeze Circle <br /> Melbourne, Florida</p>
          <p className='text-gray-500'>Phone: (+1)321-832-4302 <br />Email: ravn@gmail.com</p>
          <p className='font-semibold text-xl text-gray-500'>Careers</p>
          <p className='text-gray-500'>Lean more about job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default Contact
