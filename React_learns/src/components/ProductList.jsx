import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$699",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$1200",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$199",
    },
  ];

  return (
    <div>
        <h1>Products</h1>
        {products.map(({name, price, id}) => (
            <div key={id}>
                <h3>Name: {name}</h3>
                <h3>Price: {price}</h3>
            </div>
        ))}
    </div>
  )
};

export default ProductList;
