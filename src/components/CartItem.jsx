import React from 'react'
import { useDispatch } from 'react-redux'
import { actionAddItemToCart, actionRemoveItemFromCart, actionClearItemFromCart } from '../store/cart/cart.reducer'

import { IoMdAdd } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

const CartItem = ({item}) => {
  const {id, name, imageUrl, price, quantity} = item

  const dispatch = useDispatch()
  const addItemHandler = (item) => () => dispatch(actionAddItemToCart(item))
  const removeItemHandler = (item) => () => dispatch(actionRemoveItemFromCart(item))
  const clearItemHandler = (item) => () => dispatch(actionClearItemFromCart(item))

  return (
    <div className='border-b-[1px] border-slate-300'>
        <div className='p-4 grid grid-cols-8 gap-4'>
            <div className='flex flex-row gap-8 col-span-3 max-xl:col-span-6'>
                <div className='relative flex justify-center items-center'>
                    <img
                    className='w-20 h-20 object-cover rounded-md outline outline-1 outline-slate-gray'
                    src={item.imageUrl} />
                </div>
                <div className='flex-1 font-montserrat text-sm flex flex-col justify-start items-start gap-2'>
                    <p className='text-black'>{item.name}</p>
                    <p className='text-[0.77rem] text-slate-700 font-montserrat font-normal tracking-widest'>${item.price}/ea</p>
                </div>
            </div>
            <div className='col-span-5 max-xl:col-span-2 self-start text-right pr-4'>
                <p className='text-lg font-bold font-palanquin'><span className='font-mono'>$</span>{item.quantity*item.price}</p>
            </div>
        </div>
        {/* I can make a component for increasing and decreasing product count as well! */}
        <div className='flex flex-row justify-end items-baseline gap-7'>
            <div className='hover:underline hover:cursor-pointer hover:text-blue-800' onClick={clearItemHandler(item)}>
                <p className='text-sm'>Remove item</p>
            </div>
            <div className='w-[15%] mx-3 mb-[1rem] py-1 flex flex-row justify-around items-center bg-coral-red rounded-lg'>
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
            </div>
        </div>
        
    </div>
  )
}

export default CartItem