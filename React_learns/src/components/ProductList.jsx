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
            <ul key={id}>
                <li>Name: {name}, Price: {price}</li>
            </ul>
        ))}
    </div>
  )
};

export default ProductList;
