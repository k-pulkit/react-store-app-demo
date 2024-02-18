import React from 'react';
import { useState } from 'react'
import useScrollPosition from '../hooks/useScrollPosition'
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [DropdownMenuOpen, SetDropdownMenuOpen] = useState(false);
  const dropdownHandler = () => SetDropdownMenuOpen(!DropdownMenuOpen)
  const scrolledDown = useScrollPosition(10);
  const activeClass = "text-white font-bold"
  const inactiveClass = "hover:underline hover:text-white outline outline-transparent font-semibold"
  const navClass = (isActive) => (`px-[0.5rem] py-[0.2rem] text-center self-center hover:cursor-pointer ${isActive ? activeClass : inactiveClass}`)
  const navClass_hiddenMenu = `w-full pl-10 text-start ${navClass}`
  
  return (
    <div className={`text-md mt-3 px-[4%] py-2 w-[95%] shadow-zinc-600 shadow-lg rounded-lg leading-normal 
                     flex flex-row justify-between items-center font-montserrat text-slate-200 transition ease-in duration-300 
                     ${scrolledDown ? "bg-blue-900": "bg-blue-700 bg-opacity-95"}`}>
        <NavLink to="/" end className={({isActive}) => `flex flex-row items-center justify-center gap-1 ${navClass(isActive)}`}>
          <IoMdHome className='h-7' />
          <span>Home</span>
        </NavLink> 
        <div className="flex flex-row justify-center items-center gap-6 max-md:hidden">
            {/* <NavLink to="/shop" end className={navClass}>Shop</NavLink>
            <NavLink to="/contact" end className={navClass}>Contact</NavLink>
            <NavLink to="/signin" end className={navClass}>Signin</NavLink> */}
            <NavLink to="/about" end className={({isActive}) => navClass(isActive)}>About</NavLink>
            <NavLink to="/cart" end className={({isActive}) => `flex flex-row items-center justify-center gap-1 ${navClass(isActive)}`}>
              <FaShoppingCart className='h-4' />
              <span>Cart</span>
            </NavLink>
        </div>

        <div className="relative flex flex-row gap-3 md:hidden" >
          <button className="hover:cursor-pointer" onClick={dropdownHandler}>
            <RxHamburgerMenu />
          </button>
          <div className={`flex flex-col w-[10rem] justify-center items-center max-md:mx-2 mx-6 max-sm:my-9 my-6 py-3 border-2 border-blue-950 absolute -top-0 right-0 text-white bg-blue-800 bg-opacity-90 rounded-lg
                          ${DropdownMenuOpen ? "": "hidden"}`}>
            {/* <NavLink to="/shop" end className={navClass_hiddenMenu}>Shop</NavLink>
            <NavLink to="/contact" end className={navClass_hiddenMenu}>Contact</NavLink>
            <NavLink to="/signin" end className={navClass_hiddenMenu}>Signin</NavLink> */}
            <NavLink to="/about" onClick={dropdownHandler} end className={navClass_hiddenMenu}>About</NavLink>
            <NavLink to="/cart" onClick={dropdownHandler} end className={navClass_hiddenMenu}>Cart</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Nav