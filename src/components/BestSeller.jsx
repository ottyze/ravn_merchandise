import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    
    useEffect(()=> {
        const bestProduct = products.filter((item) =>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    }, [])


  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            
            <Title text1={'HOT'} text2={'PICKS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Get your hands on our Hot Picks! These are the top-rated, fan-favorite styles that everyone’s talking about. From must-have accessories to the season’s standout fashion, these items are flying off the shelves. Don't miss out on the hottest trends—shop now and add these crowd-pleasers to your cart before they're gone!
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index)=> (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>

    </div>
  )
}

export default BestSeller
