import React from 'react'
import CategoryCard from '../../components/CategoryCard.component';
import { categories } from '../../constants'; 

const Home = () => {
  return (
    <div className="relative max-container mt-20 px-10 xl:px-20 flex flex-row max-lg:flex-col max-lg:gap-4 justify-center items-center">
        <div className='flex flex-col w-full max-lg:items-center justify-center'>
            <h1 className='text-8xl max-lg:text-4xl font-montserrat'>Explore our</h1>
            <span className='text-6xl font-montserrat text-coral-red'> quality </span>
            <p className='text-4xl pt-4 font-montserrat'>products</p>
        </div>

        <div id="categories" className='relative grow-[1] flex flex-row flex-wrap justify-center gap-2 bg-opacity-65'>
          {
              categories.map((category) => (
                  <CategoryCard key={category.id} category={category} containerClasses={"w-[30%] max-xl:w-[40%] max-md:w-[70%] max-sm:w-[90%]"} />
              ))
          }
        </div>
      
    </div>
  )
}

export default Home;