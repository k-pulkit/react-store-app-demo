import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartCount, selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CartItem from '../../components/CartItem';

const Cart = () => {
 
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
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
            <div className='py-4 px-3 border-[1px] border-slate-400 shadow-xl rounded-md flex flex-col gap-y-4'>
                <h1 className='font-bold text-md'>Cart Summary</h1>
                <button className='text-lg font-semibold tracking-wider font-palanquin bg-gray-500 bg-opacity-70 text-white rounded-full py-2 px-2 mx-4 hover:cursor-not-allowed'>
                    Continue to checkout
                </button>
                <div className='border-t-2 border-slate-300 font-palanquin '>
                    <div className='px-5 py-3 flex flex-row justify-between'>
                        <p className='font-bold'>Subtotal</p>
                        <p><span className='font-mono'>$</span>{cartTotal}</p>
                    </div>
                    <div className='px-5 py-3 flex flex-row justify-between'>
                        <p className='font-bold'>Taxes</p>
                        <p><span className='font-mono'>$</span>{Math.round(cartTotal*0.13, 2)}</p>
                    </div>
                    <div className='px-5 py-3 flex flex-row justify-between border-t-2 border-gray-300 mt-4'>
                        <p className='font-bold'>Estimated Total</p>
                        <p><span className='font-mono'>$</span>{Math.round(cartTotal*1.13, 2)}</p>
                    </div>
                </div>
            </div>
        </section>

    </div>

    {/* Show message when cart is empty */}
    <section className={`max-container flex flex-col justify-center items-center h-[30vh] m-auto ${cartCount!==0 ? "hidden":""}`}>
        <h1 className='text-center px-10 pt-10 relative text-3xl my-auto font-montserrat'>Please add items to cart from products page</h1>
    </section>
    
    </>

  )
}

export default Cart;