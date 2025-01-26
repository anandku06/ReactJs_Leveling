const MainComponent = ({name, age, isMarried, hobbies}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h3>Hobbies</h3>
      <ul>
        <li>{hobbies[0]}</li>
        <li>{hobbies[1]}</li>
        <li>{hobbies[2]}</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi vero similique maxime dolor at, ipsum minus repudiandae corrupti nesciunt magni illo labore voluptatibus quas quae pariatur ipsa officia voluptatum amet quod aperiam soluta sapiente impedit in magnam? In maiores, culpa repellendus perspiciatis cumque consectetur consequuntur temporibus asperiores, exercitationem itaque laboriosam.
      </p>
    </div>
  )
}

export default MainComponent