import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition'
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const scrolledDown = useScrollPosition(10);
  const activeClass = "bg-white text-slate-900 rounded-xl font-bold outline outline-green-700"
  const inactiveClass = "hover:underline outline outline-transparent"
  const navClass = ({isActive}) => (`px-2 py-1 font-semibold text-center self-center hover:cursor-pointer ${isActive ? activeClass : inactiveClass}`)
  const navClass_hiddenMenu = `w-full pl-10 text-start ${navClass}`
  return (
    <div className={`text-xl mt-3 px-[4%] py-3 w-[95%] shadow-zinc-600 shadow-lg rounded-lg leading-normal flex flex-row justify-between items-center font-palanquin text-white transition ease-in duration-300 
                     ${scrolledDown ? "bg-blue-900": "bg-blue-700 bg-opacity-95"}`}>
        <NavLink to="/" end className={`flex flex-row items-center justify-center gap-1 ${navClass}`}>
          <IoMdHome className='h-7' />
          <span>Home</span>
        </NavLink> 
        <div className="flex flex-row gap-3 max-md:hidden">
            <NavLink to="/shop" end className={navClass}>Shop</NavLink>
            <NavLink to="/contact" end className={navClass}>Contact</NavLink>
            <NavLink to="/signin" end className={navClass}>Signin</NavLink>
            <NavLink to="/cart" end className={`flex flex-row items-center justify-center gap-1 ${navClass}`}>
              <FaShoppingCart className='h-4' />
              <span>Cart</span>
            </NavLink>
        </div>

        <div className="relative flex flex-row gap-3 md:hidden">
          <RxHamburgerMenu />
          <div className='flex flex-col w-[10rem] justify-center items-center max-md:mx-2 mx-6 max-sm:my-9 my-6 py-3 border-2 border-blue-950 absolute -top-0 right-0 text-white bg-blue-800 rounded-lg'>
            <NavLink to="/shop" end className={navClass_hiddenMenu}>Shop</NavLink>
            <NavLink to="/contact" end className={navClass_hiddenMenu}>Contact</NavLink>
            <NavLink to="/signin" end className={navClass_hiddenMenu}>Signin</NavLink>
            <NavLink to="/cart" end className={navClass_hiddenMenu}>Cart</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Nav