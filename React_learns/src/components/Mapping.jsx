import React from 'react'

const Mapping = () => {
    const number = [1, 2, 3, 4, 5] // took an array
  return (
    <div>
        {number.map(num => (
            <ul key={num}>
                <li>{num}</li>
            </ul>
        ))}
    </div>
  )
}

export default Mapping

// mapping the array and rendering the same inside the div tag.
// using the map() method here and notice, not using the curly braces, instead using normal parenthesis for the callbackfn body to avoid writing the return keyword
// giving the ul tag, a unique key each time it is rendered bcz it is the direct child of the div tag and to keep the track of it, it was essential