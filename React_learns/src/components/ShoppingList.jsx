import React, { useState } from 'react'

const ShoppingList = () => {
  const [items,setItems] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={quantity} onChange={(e) => setName(e.target.value)} /> 

        <button type='submit'>Add items</button>

      </form>
    </div>
  )
}

export default ShoppingList