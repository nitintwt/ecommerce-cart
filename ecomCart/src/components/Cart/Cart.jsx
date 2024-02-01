import React from 'react'
import { Products } from '../Products/Products'
import CartItem from './CartItem'
import { useItem } from '../../context/Context'

function Cart() {
  const {totalCartAmount}= useItem()
  return (
    <>
    <div>Cart</div>
    <div>
      {Products.map((product)=>(
        <CartItem data={product}/>
      ))}
    </div>
    {totalCartAmount >0 ? (
      <div>
       <h1>{totalCartAmount}</h1>
       <button>PAY</button>
      </div>
    ):("No Product in the cart ")}
    </>
  )
}
export default Cart
