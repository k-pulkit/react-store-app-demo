import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartCount, selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../../components/CartItem';

const Cart = () => {
 
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)
  console.log(cartItems)

  return (
    <>
    <div id="cart" className='relative max-container px-16 pt-3 grid grid-cols-6 gap-0 
                              max-xl:px-0 max-md:flex max-md:flex-col'>
        <section id="details" className='relative col-span-4 py-8 px-10 flex flex-col gap-6 
                                         max-md:order-2'>
            <h1 className='text-2xl text-slate-800 font-semibold'>Cart ({cartCount})</h1>
            <section className={`border-[1px] border-slate-400 shadow-xl rounded-md p-4 flex flex-col gap-3 ${cartCount===0 ? "hidden":""}`}>
                {
                    cartItems.map((item, index) => (
                        <CartItem key={index} item={item} /> ))
                }  
            </section>
        </section>

        <section id="summary" className={`sticky self-start top-[9vh] h-40 mt-12 col-span-2 py-4 pr-4 max-xl:pr-10
                                         max-md:relative max-md:top-0 max-md:order-1 max-md:px-10 max-md:w-full max-md:h-full ${cartCount===0 ? "hidden":""}`}>
            <div className='py-4 px-3 border-[1px] border-slate-400 shadow-xl rounded-md'>
                <h1 className='font-bold text-md'>Cart Summary</h1>
            </div>
        </section>

    </div>

    <section className={`max-container flex flex-col justify-center items-center h-[30vh] m-auto ${cartCount!==0 ? "hidden":""}`}>
        <h1 className='text-center px-10 pt-10 relative text-3xl my-auto font-montserrat'>Please add items to cart from products page</h1>
    </section>
    
    </>

  )
}

export default Cart;