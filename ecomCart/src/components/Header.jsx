import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div>
        <Link to="/shop" className="text-lg font-bold">Shop</Link>
      </div>
      <div>
        <Link to="/cart" className="text-lg font-bold">Cart</Link>
      </div>
    </div>
  );
}

export default Header;

