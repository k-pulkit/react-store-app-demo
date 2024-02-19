import React from 'react'
import CategoryCard from '../../components/CategoryCard.component';
import { categories } from '../../constants'; 

const Home = () => {
  return (
    <div className="relative max-container h-auto px-10 xl:px-20 flex flex-row justify-center items-center
                    max-lg:flex-col">
        <div className='w-[80%] lg:w-[30%] max-lg:mt-20 h-full flex flex-col justify-start items-start max-lg:items-center'>
          <div className='flex flex-col max-lg:items-start justify-start lg:pl-2'>
              <h1 className='text-8xl max-lg:text-4xl font-montserrat'>Explore our</h1>
              <span className='text-6xl font-montserrat text-coral-red'> quality </span>
              <p className='text-4xl pt-4 font-montserrat'>products</p>
          </div>
        </div>

        <div id="categories" className='relative m-16 h-full min-h-52 flex flex-row flex-wrap justify-center items-center gap-8 bg-opacity-65
                                        max-lg:pb-3'>
          {
              categories.map((category) => (
                  <CategoryCard key={category.id} category={category} containerClasses={"flex-initial"} />
              ))
          }
        </div>
      
    </div>
  )
}

export default Home;