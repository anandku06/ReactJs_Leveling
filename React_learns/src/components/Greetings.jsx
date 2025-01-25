import React from 'react'

const Greetings = () => {
    const name = "Anand"
    const day = new Date()

  return (
    <div>
        <h1>{name}</h1>
        <p>{day.toDateString()}</p>
    </div>
  )
}

export default Greetings