import React from 'react'
import { useParams } from 'react-router-dom'
import { shop_data } from '../../constants'
import ProductCard from '../../components/ProductCard.component'

function asTitleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

const Category = () => {
  const category = useParams()?.category
  const filtered = shop_data.filter(item => (item.title.toLowerCase() === category) )[0].items
  console.log(filtered)

  return (
    <div>
      <div className='max-container px-10 relative justify-center items-center grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-20 gap-y-10'>
        <h1 className='text-4xl mt-10 text-left font-bold font-palanquin col-span-1 xl:col-span-4 lg:col-span-3 md:col-span-2'>
          Shop
          <span className="text-coral-red"> {asTitleCase(category)}</span>
        </h1>
        {filtered.map(item => (
          <ProductCard key={item.id} item={item} />
        ) )}
      </div>
    </div>
  )
}

export default Category