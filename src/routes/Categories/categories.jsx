import React from 'react'
import CategoryCard from '../../components/CategoryCard.component';
import { categories } from '../../constants'; 

const Categories = () => {
  return (
    <div className="relative max-container mt-10 flex flex-row justify-center items-center">
      <div id="categories" className='relative w-[90%] grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-stretch gap-4 border-2 rounded-2xl bg-slate-50 bg-opacity-65 pt-5 pb-10'>
          <h1 className="p-2 text-4xl max-lg:text-[2.5rem] max-md:text-[2rem] overflow-clip font-bold self-center font-palanquin text-center col-span-3 max-lg:col-span-2 max-sm:col-span-1">
            Product 
            <span className="text-coral-red"> Categories</span>
          </h1>
          {
              categories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
              ))
          }
      </div>
    </div>
  )
}

export default Categories;