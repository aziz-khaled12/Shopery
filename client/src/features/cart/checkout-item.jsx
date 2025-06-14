import React from 'react'

const CheckoutItem = ({ item }) => {
  return (
    <div className='flex items-center justify-between text-xs sm:text-sm font-medium'>
        <div className='flex items-center gap-2 '>
            <img src={item.image} alt={item.name} className='w-14 h-14 object-cover' />
            <p>{item.name}</p>
            <p >x{item.quantity}</p>
        </div>
        <p className='font-semibold'>{item.price}</p>
    </div>
  )
}

export default CheckoutItem