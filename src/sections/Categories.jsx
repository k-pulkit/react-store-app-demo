import React from 'react'
import CategoryCard from '../components/CategoryCard';
import { categories } from '../constants'; 

const Categories = () => {
  return (
    <div id="categories" className='relative w-full grid grid-cols-3 justify-items-stretch gap-4 border-2 rounded-2xl bg-slate-100 bg-opacity-85 pt-5 pb-10'>
        <h1 className="p-2 text-4xl font-bold self-center font-palanquin text-center col-span-3">
          Product 
          <span class="text-coral-red"> Categories</span>
        </h1>
        {
            categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))
        }
    </div>
  )
}

export default Categories;