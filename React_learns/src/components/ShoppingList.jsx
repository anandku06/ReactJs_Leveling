import React, { useState } from 'react'

const ShoppingList = () => {
  const [items,setItems] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  const handleSubmit = () => {
    e.preventDefault()

    if(!name || !quantity) return

    const newItem = {
      name, quantity : parseInt(quantity)
    }

    setItems((prevItems) => [...prevItems, newItem])
    setName("")
    setQuantity("")
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        Name: 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Item Name' />
        Quantity: 
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Quantity' /> 

        <button type='submit'>Add items</button>

      </form>
    </div>
  )
}

export default ShoppingList