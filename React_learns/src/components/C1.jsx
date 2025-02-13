import React from 'react'

const C1 = ({count, onClickHandler}) => {
    // here the destructured elements are rendered and used
    // the click function is also used as the click event handler
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={onClickHandler}>+</button>
    </div>
  )
}

export default C1