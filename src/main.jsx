import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ToastContainer} from 'react-toastify'
import './index.css'
import {BrowserRouter, Route,Routes} from 'react-router'
import App from './App.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Orders from './components/Orders.jsx'
import LoginForm from './components/LoginForm.jsx'
import Admin from './components/Admin.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import ProductForm from './components/ProductForm.jsx'
import ProductDetails from './components/ProductDetail.jsx'
createRoot(document.getElementById('root')).render(
  <>
  <ToastContainer/>
  <BrowserRouter>
  <Routes>
    <Route element={<HomeLayout/>}>
    <Route path='/' element={ <App />}/>
    <Route path='/products'>
    <Route index element={<ProductList/>}/>
    <Route path=':id' element={<ProductDetails/>}/>
    </Route>
    <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<ProtectedRoute><Orders/></ProtectedRoute>}/>
      <Route path='/admin'>
      <Route index element={<PrivateRoute><Admin/></PrivateRoute>}/>
      <Route path='add-products' element={<ProductForm/>}/>
      </Route>
    </Route>
    <Route path='/ProductForm' element={<ProductForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
  </Routes>
  </BrowserRouter>
   
  </>
)
