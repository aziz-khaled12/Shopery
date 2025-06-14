import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({image, title}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/categories/${title}`)} className='py-4 text-center rounded-md px-1.5 w-full group border border-gray-200 transition-all duration-200 hover:border-hard-primary hover:shadow-hover-hard-primary cursor-pointer'>
        <div className='w-full  mb-4'>
            <img src={image} className="w-full h-full" alt={title} />
        </div>
        <p className='group-hover:text-hard-primary transition-all duration-200 font-medium text-lg'>
        {title}
        </p>
    </div>
  )
}

export default CategoryCard