import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';
import TotalPurchased from './TotalPurchased';

const Products=()=>{
  const products= useSelector((state)=>state.products);
  return (
    <>
     <TotalPurchased/><br/><br/>
    {
      products.map((item)=>{
        return <Product key={item.id} product={item}/>
      })
    }
    </>
  )
}

export default Products