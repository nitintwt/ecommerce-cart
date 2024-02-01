import React from 'react'
import { Products } from '../Products/Products'
import ShopItem from './ShopItem'

function Shop() {
  return (
    <>
      <div className="text-3xl font-bold mb-4">
        <h1>Shop</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Products.map((product) => (
          <ShopItem key={product.id} data={product} />
        ))}
      </div>
    </>
  );
  
}

export default Shop
