import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customers from './pages/Customers';
import Purchases from './pages/Purchases';
import Products from './pages/Products'
import Edit from './pages/EditProduct'
import Menu from './pages/Menu'
import EditCustomer from './pages/EditCustomer'
import EditProduct from './pages/EditProduct'



function App() {

  return (
    <>
{/* <Product/> */}
   
<Menu/>
    <Routes>
       <Route path='/menu' element={< Menu/>}/>
        <Route path='/customers' element={<Customers/>}> 
         {/* <Route path='/edit/:id' element={<EditCustomer/>}/> */}
       {/* <Route path='/edit' element={<EditCustomer/>}/> */}
         </Route>
        <Route path='/products' element={<Products/>}/>
        {/* <Route path='/edit/:id' element={<EditProduct/>}/> */}
        {/* <Route path='/edit' element={<EditProduct/>}/> */}
          {/* </Route> */}
        <Route path='/purchases' element={<Purchases/>}/>
      
        {/* <Route path='*' element={<h1>Wrong Page</h1>} /> */}
        
    </Routes>
    </>
  )
}

export default App
