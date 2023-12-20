import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Purchase from './Purchase';
function Purchases() {

 const customers= useSelector((state)=>state.customers);  
 const products= useSelector((state)=>state.products);  



  return (
    <>
 {
      products.map((item)=>{
        return <Purchase  key={item.id} product={item}/>
      })
    }
    
    </>
  )
}

export default Purchases