import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TopProducts from './components/TopProducts'
import Cart from './components/Cart'
import OrderSummary from './components/OrderSummary'
import LoginForm from './components/LoginForm'
import ProductForm from './components/ProductForm'

const App=()=>{
return(
    <>
    <div className="flex flex-col flex-wrap min-h-screen bg-white-50">
<div className="flex flex-col items-center">
            
             <h1 className=" font-bold text-2xl mb-3">Top Products</h1>
          <div className="flex flex-row flex-wrap justify-even gap-4 mt-20"><TopProducts/></div>
           </div>
        </div>
    </>
    
)
}
  
export default App
 