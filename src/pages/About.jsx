import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLetterBox from '../components/NewLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.logo_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quae minima repudiandae asperiores cum? Sit numquam facere earum suscipit deleniti. Consectetur dolore exercitationem optio, ex autem possimus excepturi vitae est!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt quaerat modi corporis, nemo officia amet? Veniam, quas ut? Velit quae cum inventore praesentium nostrum porro repellendus maxime vel suscipit!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur esse, eveniet sed minima repellat totam sit temporibus, laboriosam necessitatibus debitis asperiores delectus corporis voluptate rem facilis eaque deleniti veritatis nulla!</p>
        </div>

      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: className='text-gray-600'</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus temporibus corrupti officiis molestias perferendis delectus necessitatibus. Libero fuga iusto, sequi vitae iste excepturi eaque illo ab, ipsam, ullam enim?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus temporibus corrupti officiis molestias perferendis delectus necessitatibus. Libero fuga iusto, sequi vitae iste excepturi eaque illo ab, ipsam, ullam enim?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus temporibus corrupti officiis molestias perferendis delectus necessitatibus. Libero fuga iusto, sequi vitae iste excepturi eaque illo ab, ipsam, ullam enim?</p>
        </div>

      </div>

      <NewLetterBox/>
      
    </div>
  )
}

export default About
