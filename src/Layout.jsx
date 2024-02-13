import React from 'react'
import Nav from './components/Nav'
import Categories from './sections/Categories'
import Footer from './sections/Footer'

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main id="main" className="relative w-full bg-gray-200 min-h-screen pb-28">
        <div className="sticky top-0 z-50 max-container flex justify-center">
          <Nav />
        </div>

        <Outlet />
        
        <div className='absolute bottom-0 mt-20 w-full'>
          <Footer />
        </div>
    </main>
  )
}

export default Layout;