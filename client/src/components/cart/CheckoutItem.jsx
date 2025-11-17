import React from 'react'

const CheckoutItem = ({ item }) => {
  return (
    <div className='flex items-center justify-between text-xs sm:text-sm font-medium'>
        <div className='flex items-center gap-2 '>
            <img src={item.previewImage} alt={item.name} className='w-14 h-14 object-cover' />
            <p>{item.name}</p>
            <p >x{item.cartQuantity}</p>
        </div>
        <p className='font-semibold'>${(item.price * item.cartQuantity).toFixed(2)}</p>
    </div>
  )
}

export default CheckoutItem