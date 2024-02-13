import React from 'react'

const Nav = () => {
  return (
    <div className="px-2 pt-4 pb-2 w-[90%] border-b-2 border-double leading-normal  py-3 flex flex-row justify-between font-palanquin font-semibold text-white">
        <div className="text-2xl hover:underline hover:cursor-pointer">
            Home
        </div>
        <div className="text-2xl">
            <ul className="flex flex-row gap-4">
                <l1 className="hover:underline hover:cursor-pointer">About</l1>
                <l1 className="hover:underline hover:cursor-pointer">Careers</l1>
            </ul>
        </div>
    </div>
  )
}

export default Nav