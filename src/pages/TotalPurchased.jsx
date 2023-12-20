import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


function TotalPurchased() {
 const purchases= useSelector(state=> state.purchases)
  const productCount = purchases.length;
  
 useEffect(()=>{
  
 },[])
 
 
 return (
    <>
  
    
    Total: {productCount}
    
    </>
  )
}

export default TotalPurchased