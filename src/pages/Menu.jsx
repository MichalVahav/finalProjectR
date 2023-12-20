import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
function Menu() {
  return (
    
    <div  style={{marginTop:'20px',paddingLeft:'100px',paddingBottom:'100px'}}>
    <Link to='/customers'>Customers</Link>&nbsp;&nbsp;&nbsp;
    <Link to='/products'>Products</Link>&nbsp;&nbsp;&nbsp;
    <Link to='/purchases'>Purchases</Link>&nbsp;&nbsp;&nbsp;
    </div>



  )
}

export default Menu