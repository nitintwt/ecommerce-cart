import React from 'react'
import { useItem } from '../../context/Context'

function CartItem(product) {
  const {addToCart, deleteFromCart}= useItem()
  return (
    <div className="p-4 border rounded shadow-md mb-4">
    <div className="mb-2">
      <div className="text-lg font-bold">{product.produtName}</div>
    </div>
    <div className="mb-2">
      <div className="text-gray-700">${product.price}</div>
    </div>
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => { addToCart(product.id) }}
      >
      +
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => { deleteFromCart(product.id) }}
      >
      -
      </button>
    </div>
  </div>
    
  )
}

export default CartItem
