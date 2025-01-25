import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock",
  };
  const {name, price, availability} = product

  return <div>
    <h1>Product</h1>
    <h2>Name : {name}</h2>
    <h2>Price : {price}</h2>
    <h2>isAvailable : {availability}</h2>
  </div>;
};

export default ProductInfo;
