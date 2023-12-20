import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
//import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import Edit from './EditProduct.jsx';


function Customer(customer) {
 
 
  const products= useSelector((state)=>state.products);  
  const purchases= useSelector((state)=>state.purchases);
  const [data, setData]= useState([])
  const [clickBuyProduct, setClickBuyProduct]= useState(false)
  const [selectProductValue, setSelectProductValue]= useState('')

  useEffect(()=>{
    const filteredPurchases =purchases.filter(((purchase)=>purchase.customerID===customer.customer.id))
    console.log('filteredPurchases100', filteredPurchases);
    const extractedData= filteredPurchases.map((purchase)=>{
      const product=products.find((product)=>product.id===purchase.productID) 
        return{
          purchase,
          product, 
          customer
        }
     })

 setData(extractedData)
 console.log('extractedData', extractedData);

  },[purchases,products ])

  const buyProduct=()=>{
    if(clickBuyProduct==true)
    {
      setClickBuyProduct(false)
    }
    else{
      if(clickBuyProduct==false)
    {
      setClickBuyProduct(true)
    }
    }
  }
  
  return (
    <>
  <table border={1}>
      <thead>
        <tr>
          <th>Name Customer</th>
          <th>Product</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
data.map((item, id)=>{
  return  <tr key={id}>
    <td>{item.customer.customer.firstName}</td>
    <td><Link to='/edit'>{item.product.name}</Link></td>
    <td>{item.purchase.date}</td>
  <td> <button onClick={buyProduct}  style={{width:'100px', backgroundColor:'blue'}}>Buy Product</button></td> 
  </tr>
})
   }
      </tbody>
    </table> 
 <div  style={{display: clickBuyProduct? 'block': 'none'}}>
<select  onChange={e=>selectProductValue(item.id)} style={{width:'100px'}}>
<option>{'   '}</option>
{
  products.map((item)=>{
    return <option key={item.id}>{item.name}</option>
  })
}
</select>
 </div>
 



  
    </>
  )
}

export default Customer