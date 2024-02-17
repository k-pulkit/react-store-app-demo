import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

let testCounter=0;

let mockAddHandler = () => {
    console.log("Clicked me")
    testCounter = testCounter + 1;
}

const ProductCard = ({ item: {id, name, imageUrl, price}, containerClasses }) => {

  console.log(testCounter)

  return (
      <div className={`group relative mx-auto flex flex-col justify-start items-start ${containerClasses||""}`}>
        <div className={`shadow-xl shadow-red-950 transition ease-out duration-300 group-hover:shadow-3xl group-hover:shadow-red-950`}>
            <img
             className='rounded-t-lg object-cover object-center h-48 w-96 max-md:w-[35rem] max-md:h-[15rem] border border-slate-gray'
             src={imageUrl}
             />
            {
            testCounter === 1 ?
                (<button className='mx-2 mb-[1rem] px-3 py-1 pr-5 absolute bottom-8 w-18 bg-coral-red font-semibold text-white font-palanquin rounded-xl text-lg
                                hover:bg-red-600
                                flex items-center justify-center'
                        onClick={mockAddHandler}>
                    <IoMdAdd/>
                    <span>Add</span>
                </button>)
            : 
                (<div className='absolute bottom-8 w-[90%] mx-3 mb-[1rem] py-1 flex flex-row justify-around items-center bg-coral-red rounded-lg'>
                    <button className='px-1 py-1 w-18 font-semibold text-white font-palanquin rounded-xl
                                hover:bg-red-700
                                flex items-center justify-center'
                        onClick={mockAddHandler}>
                        <FaMinus/>
                    </button>
                    <span className='text-white text-lg font-bold'>3</span>
                    <button className='px-1 py-1 font-semibold text-white font-palanquin rounded-xl
                                hover:bg-red-700
                                flex items-center justify-center'
                        onClick={mockAddHandler}>
                        <FaPlus/>
                    </button>
                </div>)    
            }
        </div>
        <div className='w-full bg-blue-700 rounded-b-lg'>
            <div className="mx-3 my-2 flex flex-row justify-between items-center text-white font-montserrat">
                <p className='text-lg font-semibold'>{name}</p>
                <p className='text-sm font-semibold'>${price}</p> 
            </div>
        </div>
      </div>
      )
    };

export default ProductCard;