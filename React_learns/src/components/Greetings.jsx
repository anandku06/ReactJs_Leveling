import React from 'react'

const Greetings = ({children}) => {
    const name = "Anand"
    const day = new Date()

  return (
    <div>
      <div>
        {children} {/* here the props are accessed by destructuring the props here */}
      </div>
        <h1>{name}</h1>
        <p>{day.toDateString()}</p>
    </div>
    
  )
}

export default Greetings