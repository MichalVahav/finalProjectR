import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Edit from "./EditProduct.jsx";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";



function ProductItem({id, data}) { 
  const item= data
  const idId= id
  const [clickAdd, setClickAdd] = useState(false);
  const [checkId, setCheckId] = useState(false);
  const products = useSelector((state) => state.products); 
  

  console.log('????55', idId)

  const addButton = (id) => {
    setClickAdd(!clickAdd);
    setCheckId(!checkId)
  };

  const saveProduct = () => {
    console.log("productId", product.product.id);
  };

  return (
    <div
    style={{
      border: "1px solid blue",
      margin: "10px",
      padding: "10px",
    }}
  >
    <p key={item.customer.id}>
      Name Customer:&nbsp;{" "}
      <Link to="/edit">
        {item.customer.firstName}&nbsp;{item.customer.lastName}&nbsp;
      </Link>
    </p>
    <p key={item.purchase.id}>Purchased Date: {item.purchase.date}</p>
    <button
      onClick={() => addButton(idId)}
      style={{ backgroundColor: "blue" }}
    >
      Add
    </button>
    {/* {(<div  style={{display:clickAdd? 'block':'none'}}> */}
    {checkId && (

      <div>
        <select
          key={item.customer.id}
          onChange={(e) => setSelectedValue(product.product.id)}
          style={{ width: "100px" }}
        >
         
          {products.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <br/>
        <button
          onClick={saveProduct}
          style={{ backgroundColor: "blue", marginTop: "50px" }}
          on
        >
          Save
        </button>
      </div>
    )}
  </div>
  )
}

export default ProductItem