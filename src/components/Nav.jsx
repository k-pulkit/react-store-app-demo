import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition'
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
  const scrolledDown = useScrollPosition(10);
  const activeClass = "bg-white text-red-800 rounded-md px-2 py-0 my-2 font-semibold ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50"
  const inactiveClass = "hover:underline"
  const navClass = ({isActive}) => (`text-center self-center hover:cursor-pointer ${isActive ? activeClass : inactiveClass}`)
  return (
    <div className={`text-xl mt-3 px-[4%] py-2 w-[95%] shadow-zinc-600 shadow-lg rounded-lg leading-normal flex flex-row justify-between items-center font-palanquin text-white transition ease-in duration-300 ${scrolledDown ? "bg-blue-700": "bg-sky-600 bg-opacity-95"}`}>
        <NavLink to="/" end className={navClass}>Home</NavLink> 
        <div className="flex flex-row gap-10">
            <NavLink to="/about" end className={navClass}>About</NavLink>
            <NavLink to="/career" end className={navClass}>Careers</NavLink>
        </div>
    </div>
  )
}

export default Nav