import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition'
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
  const scrolledDown = useScrollPosition(10);
  const activeClass = "bg-white text-slate-900 rounded-xl font-bold outline outline-green-700"
  const inactiveClass = "hover:underline outline outline-transparent"
  const navClass = ({isActive}) => (`px-2 py-1 font-semibold text-center self-center hover:cursor-pointer ${isActive ? activeClass : inactiveClass}`)
  return (
    <div className={`text-xl mt-3 px-[4%] py-3 w-[95%] shadow-zinc-600 shadow-lg rounded-lg leading-normal flex flex-row justify-between items-center font-palanquin text-white transition ease-in duration-300 
                     ${scrolledDown ? "bg-blue-900": "bg-blue-700 bg-opacity-95"}`}>
        <NavLink to="/" end className={navClass}>Home</NavLink> 
        <div className="flex flex-row gap-3">
            <NavLink to="/shop" end className={navClass}>Shop</NavLink>
            <NavLink to="/contact" end className={navClass}>Contact</NavLink>
            <NavLink to="/signin" end className={navClass}>SignIn</NavLink>
            <NavLink to="/cart" end className={navClass}>Cart</NavLink>
        </div>
    </div>
  )
}

export default Nav