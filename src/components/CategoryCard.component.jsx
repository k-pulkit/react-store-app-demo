import React from 'react'

const CategoryCard = ({ category: {title, imageUrl} }) => {
  return (
      <div className="group mt-1 w-full relative w-lg h-lg flex flex-col justify-start items-center">
        <div className="flex-1 pb-2 w-[90%] h-[85%] shadow-xl shadow-red-950 transition ease-out duration-300 group-hover:shadow-3xl group-hover:shadow-red-950">
            <img
             className='h-full w-full object-cover border-8 border-white'
             src={imageUrl}
             />
        </div>
        <div className='w-[95%] text-white bg-coral-red rounded-xl flex justify-center border-[1px] border-transparent transition ease-out duration-300 group-hover:bg-white-400 group-hover:text-coral-red hover:cursor-pointer group-hover:border-coral-red'>
            <a href="#">
              <p className='relative py-1 self-center text-lg font-semibold tracking-[0.3em] font-montserrat uppercase'>{title}</p>
            </a>
        </div>
      </div>
      )
    };

export default CategoryCard;