import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Edit from "./EditProduct.jsx";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ProductItem from "./ProductItem.jsx";

const Product = (product) => {
  const products = useSelector((state) => state.products);
  const purchases = useSelector((state) => state.purchases);
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const [customerData, setCustomerData] = useState([]);
  const [clickAdd, setClickAdd] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    const filteredPurchases = purchases.filter(
      (purchase) => purchase.productID === product.product.id
    );
    const extractedData = filteredPurchases.map((purchase) => {
      const customer = customers.find((cus) => cus.id === purchase.customerID);

      return {
        purchase,
        customer,
      };
    });
    setCustomerData(extractedData);
  }, [purchases, customers]);

  const addButton = (id) => {
    setClickAdd(!clickAdd);
  };

  const saveProduct = () => {
    console.log("productId", product.product.id);
  };

  return (
    <>
      <div style={{ border: "1px solid red", margin: "10px" }}>
        Name:<Link to="/edit/12"> {product.product.name}</Link>
        <br />
        Price: {product.product.price}
        <br />
        Quantity: {product.product.quantity}
        <br />
        {customerData.map((item, index) => {
        return <ProductItem key={index} id={index} data={item}/>
        })}


        {/* <button onClick={addButton}  style={{backgroundColor:'blue'}}>Add</button> */}
        {/* <div  style={{display:clickAdd? 'block':'none'}}>
  <select onChange={e=>setSelectedValue(product.product.id)}  style={{width:'100px'}} >
    {
      products.map((item)=>(
        <option key={item.id}  value={item.name}>{item.name}</option>
     ) ) 
    }
  </select>
 <h3>{selectedValue}</h3>
 <button  onClick={saveProduct} style={{backgroundColor:'blue',marginTop:'50px'}} on>Save</button>
</div> */}
        <br />
        <br />
      </div>
      {/* <ul>
{
customerData.map((data, index)=>{
  <li key={index}>
  :  <h3>{data.customer.firstName}</h3>
  </li>
})
}
</ul> */}
    </>
  );
};

export default Product;
