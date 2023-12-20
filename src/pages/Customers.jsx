import React from 'react'
import { useSelector } from 'react-redux';
import Customer  from './Customer';
function Customers() {

  const customers= useSelector((state)=>state.customers)
  console.log('?', customers);
  return (
    <>
    {customers.map((item)=>{
      return <Customer key={item.id} customer={item}/>
    })
    
    
    }
    
    
    </>
  )
}

export default Customers