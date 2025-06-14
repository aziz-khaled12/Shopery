import React from 'react'
import { CircleX } from 'lucide-react'
import ShoppingCart1 from "/ShoppingCart1.png"
import ShoppingCart2 from "/ShoppingCart2.png"

const CartSlideItem = ({image, title, quantity, unit, unitPrice}) => {
  return (
    <div className="flex items-center gap-2 w-full text-2xs md:text-sm">
        <div className='md:w-[120px] max-w-[120px]'>
            <img src={image || ShoppingCart1} alt="shopping cart" className='w-full h-auto' />
        </div>
        <div className='md:grow md:w-auto w-full'>
            <h1 className='mb-0.5'>{title}</h1>
            <p className='font-semibold'><span className='text-gray-400 font-normal'>{`${quantity}${unit} x `}</span>{unitPrice}</p>
        </div>
        <div>
            <CircleX className='w-4 h-4 text-gray-400 hover:text-danger md:w-5 md:h-5 transition-all duration-200 cursor-pointer'/>
        </div>
    </div>
  )
}

export default CartSlideItem