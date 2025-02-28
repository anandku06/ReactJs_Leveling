import React from 'react'

const CA = ({name}) => {
    // again drilling this component to the CB component
  return (
    <div>
        <CB name={name} />
    </div>
  )
}

export default CA