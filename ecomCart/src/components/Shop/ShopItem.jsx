import React, { useContext, useId, useState } from 'react'
import {  useItem } from '../../context/Context'

function ShopItem({product}) {
  const {addToCart} = useItem()
  return (
    <div className="p-4 border rounded shadow-md mb-4">
      <div className="mb-2">
        <div className="text-lg font-bold">{product.productName}</div>
      </div>
      <div className="mb-2">
        <div className="text-gray-700">${product.price}</div>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => { addToCart(product.id) }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
  
}

export default ShopItem

