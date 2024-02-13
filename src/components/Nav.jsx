import React from 'react';
import { useEffect, useState } from "react";
import useScrollPosition from '../hooks/useScrollPosition'

const Nav = () => {
  const scrolledDown = useScrollPosition(10);
  return (
    <div className={`mt-3 px-[4%] py-2 w-[95%] shadow-zinc-600 shadow-lg rounded-lg leading-normal flex flex-row justify-between font-palanquin text-white transition ease-in duration-300 ${scrolledDown ? "bg-blue-700": "bg-sky-600 bg-opacity-95"}`}>
        <div className="text-3xl hover:underline hover:cursor-pointer">
            Home
        </div>
        <div className="text-3xl">
            <ul className="flex flex-row gap-10">
                <li className="hover:underline hover:cursor-pointer">About</li>
                <li className="hover:underline hover:cursor-pointer">Careers</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav