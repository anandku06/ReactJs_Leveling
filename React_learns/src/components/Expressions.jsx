import React from 'react'

const Expressions = () => {
    const myName = "Anand Kumar"
    const multiply = (a, b) => a * b
    const simpleClass = 'specialClass'


  return (
    <div>
        2 + 2 = {2 + 2} 
        <h1>{myName}</h1>
        <h3>My Friends: {['Chomu', 'Lodu', 'Chandu']}</h3>
        <h1>5 * 2 = {multiply(5, 2)}</h1>
        <p className={simpleClass}>This is a simple Class tag</p>
    </div>
  )
}
// here the expression or variables inside the curly braces is evaluated because it is inside hte braces
export default Expressions  