import React from 'react'

const C2 = ({count, onClickHandler}) => {
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={onClickHandler}>-</button>
    </div>
  )
}

export default C2