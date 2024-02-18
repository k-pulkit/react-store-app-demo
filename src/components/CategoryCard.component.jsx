import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category: {title, imageUrl}, containerClasses }) => {
  return (
      <div className={`group mt-4 relative w-[30%] max-lg:w-[40%] max-md:w-[70%] flex flex-col justify-center items-center ${containerClasses||""}`}>
        <div className="pb-2 w-[90%] h-[90%] shadow-xl shadow-red-950 transition ease-out duration-300 group-hover:shadow-3xl group-hover:shadow-red-950">
            <img
             className='h-full w-full object-cover border-4 border-white'
             src={imageUrl}
             />
        </div>
        <div className='mt-3 w-[62%] text-white bg-coral-red rounded-xl flex justify-center items-center border-[1px] border-transparent transition ease-out duration-300 group-hover:bg-white-400 group-hover:text-coral-red hover:cursor-pointer group-hover:border-coral-red'>
            <Link to={`/category/${title}`}>
              <p className='relative py-1 self-cente text-lg font-semibold tracking-[0.1em] font-montserrat uppercase'>{title}</p>
            </Link>
        </div>
      </div>
      )
    };

export default CategoryCard;