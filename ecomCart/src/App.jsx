import { useState } from 'react'
import './App.css'
import { ShopContextProvider } from './context/Context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Cart from './components/Cart/Cart.jsx'
import Shop from './components/Shop/Shop.jsx'
import { Products } from './components/Products/Products.jsx'
import { ShopContextProvider } from './context/Context.js'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/cart",
          element:<Cart/>,
        },
        {
          path:"/shop",
          element:<Shop/>
        }
      ]
    }
  ])

  const [cartItems , setCartItems] = useState("")

  const addToCart =(itemId)=>{
    setCartItems((prev) =>({...prev ,[itemId]:prev[itemId]+1}))
  }
  
  const deleteFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
  }
  
  const updateCartItemCount =(newAmount , itemId)=>{
    setCartItems((prev) =>({...prev , [itemId]: newAmount}))
  }
  
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  return (
    <React.StrictMode>
      <ShopContextProvider value={{ addToCart, deleteFromCart, updateCartItemCount, totalCartAmount }}>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </React.StrictMode>
  );
};


export default App
