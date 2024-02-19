import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithSpinner from './ImageWrap';


const CategoryCard = ({ category: {title, imageUrl}, containerClasses }) => {
  return (
      <div className={`group mt-4 relative flex flex-col justify-center items-center ${containerClasses||""}`}>
        <div className="relative pb-2 w-56 h-40 max-md:w-[83vw] max-lg:w-[30vw]
                        flex flex-row justify-center items-center 
                        shadow-xl shadow-red-950 overflow-clip
                        transition ease-out duration-300 group-hover:shadow-3xl group-hover:shadow-red-950">
          <ImageWithSpinner src={imageUrl} classes="" />
          {/* <img
            className='h-48 w-90 min-h-48 max-h-48 min-w-90 max-w-90 object-cover object-center border-4 border-white'
            src={imageUrl}
          /> */}
        </div>

        <div className='mt-3 w-[62%] text-white bg-coral-red rounded-xl flex justify-center items-center border-[1px] border-transparent transition ease-out duration-300 group-hover:bg-white-400 group-hover:text-coral-red hover:cursor-pointer group-hover:border-coral-red'>
            <Link to={`/category/${title}`}>
              <p className='relative py-1 self-center text-lg font-semibold tracking-[0.1em] font-montserrat uppercase'>{title}</p>
            </Link>
        </div>
      </div>
      )
    };

export default CategoryCard;