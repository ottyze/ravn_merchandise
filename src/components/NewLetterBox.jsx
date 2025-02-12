import React from 'react'

const NewLetterBox = () => {
    const onSubmitHandler = () => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 30% off</p>
        <p className='text-gray-400 mt-3 '>
        Shop Smart, Save Big! Enjoy exclusive discounts on your favorite styles and discover unbeatable deals across our entire collection. Whether it's seasonal markdowns or special promotions, now is the perfect time to treat yourself without breaking the bank. Hurry, these offers won't last long—grab your must-haves before they're gone!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewLetterBox
