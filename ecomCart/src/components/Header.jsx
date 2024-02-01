import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='flrx flex-row justify-between'>
      <div>
      <Link to={"/shop"}>Shop</Link>
      </div>
      <div>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </div>
    
    </>
    
  )
}

export default Header
