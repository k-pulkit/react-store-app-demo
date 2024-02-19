import React from 'react';
import { useDispatch, useSelector, shallowEqual  } from 'react-redux';
import { selectCartItem } from '../store/cart/cart.selector';
import { actionAddItemToCart, actionRemoveItemFromCart } from '../store/cart/cart.reducer';
import { IoMdAdd } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import ImageWithSpinner from './ImageWrap';


const ProductCard = ({ item, containerClasses }) => {
  const {id, name, imageUrl, price} = item
  const currentItem = useSelector((state) => selectCartItem(state, id), shallowEqual )
  const quantity = currentItem?.quantity || 0

  const dispatch = useDispatch()
  const addItemHandler = (item) => () => dispatch(actionAddItemToCart(item))
  const removeItemHandler = (item) => () => dispatch(actionRemoveItemFromCart(item))
    
  return (
      <div className={`group w-full relative flex flex-col justify-start items-start ${containerClasses||""}`}>
        <div className={`w-full h-72 shadow-xl shadow-red-950 transition ease-out duration-300 group-hover:shadow-3xl group-hover:shadow-red-950`}>
            <div className='rounded-t-lg h-full w-full border border-slate-gray overflow-hidden'>
                <ImageWithSpinner src={imageUrl} />
            </div>
            {/* <img
             className='rounded-t-lg object-cover object-center h-48 w-96 max-md:w-[35rem] max-md:h-[15rem] border border-slate-gray'
             src={imageUrl}
             /> */}
            {
            quantity === 0 ?
                (<button className='mx-2 mb-[1rem] px-3 py-1 pr-5 absolute bottom-8 w-18 bg-coral-red font-semibold text-white font-palanquin rounded-xl text-lg
                                hover:bg-red-600
                                flex items-center justify-center'
                        onClick={addItemHandler(item)}>
                    <IoMdAdd/>
                    <span>Add</span>
                </button>)
            : 
                (<div className='absolute bottom-8 w-[90%] mx-3 mb-[1rem] py-1 flex flex-row justify-around items-center bg-coral-red rounded-lg'>
                    <button className='px-1 py-1 w-18 font-semibold text-white font-palanquin rounded-xl
                                hover:bg-red-700
                                flex items-center justify-center'
                        onClick={removeItemHandler(item)}>
                        <FaMinus/>
                    </button>
                    <span className='text-white text-lg font-bold'>{quantity}</span>
                    <button className='px-1 py-1 font-semibold text-white font-palanquin rounded-xl
                                hover:bg-red-700
                                flex items-center justify-center'
                        onClick={addItemHandler(item)}>
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