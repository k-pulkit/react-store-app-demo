import React from 'react'

const CartItem = ({item}) => {
  return (
    <div className='p-4 grid grid-cols-8 gap-4 border-b-[1px] border-slate-300'>
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
  )
}

export default CartItem