import React from 'react'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import {productsArray} from '../constants/storeItems'

const Purchase = () => {
  return (
    <div>
      <NavBar />
      <h1 className="sm:text-3xl text-xl lg:4xl text-center tracking-wider my-10">Buy your Item</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productsArray.map((product, index) => (
          <div className="text-center" key={index}>
            <ProductCard product={product}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Purchase