import React from 'react'

const CategoryCard = ({ category: {title, imageUrl} }) => {
  return (
      <div className="mt-4 w-full relative w-lg h-lg col-span-1">
        <div className="mx-auto pb-2 w-[90%] h-[90%] shadow-xl shadow-red-950 transition ease-in delay-100 hover:shadow-3xl hover:shadow-red-950">
            <img
             className='h-full w-full'
             src={imageUrl}
             />
        </div>
        <div className='mx-auto w-[95%] h-[10%] text-white bg-coral-red rounded-xl flex justify-center border-[1px] border-transparent transition ease-linear delay-100 hover:bg-white-400 hover:text-coral-red hover:cursor-pointer hover:border-coral-red'>
            <p className='self-center text-xl font-light text-pretty font-montserrat uppercase'>{title}</p>
        </div>
      </div>
      )
    };

export default CategoryCard;