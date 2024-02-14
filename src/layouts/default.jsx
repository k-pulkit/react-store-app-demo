import React from 'react'
import Nav from '../components/Nav.component'
import Categories from '../routes/categories'
import Footer from '../components/Footer.component'

import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
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

export default DefaultLayout;