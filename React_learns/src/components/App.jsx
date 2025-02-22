import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import MainComponent from "./MainContent.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import JSXRules from "./JSXRules.jsx";
import Expressions from "./Expressions.jsx";
import Greetings from "./Greetings.jsx";
import Greeting from "./Greeting.jsx";
import ProductInfo from "./ProductInfo.jsx";
import Mapping from "./Mapping.jsx";
import UserList from "./UserList.jsx";
import ProductList from "./ProductList.jsx";
import Props from "./Props.jsx";
import Person from "./Person.jsx";
import Product from "./Product.jsx";
import Weather from "./Weather.jsx";
import UserStatus from "./UserStatus.jsx";
import StyleCard from "./StyleCard.jsx";
import ProfileCard from "./ProfileCard.jsx";
import IconComponent from "./IconComponent.jsx";
import States from "./States.jsx";
import SharingStates from "./SharingStates.jsx";
import InitialState from "./InitialState.jsx";
import Counter from "./Counter.jsx";
import ToDoList from "./ToDoList.jsx";
import Profile from "./Profile.jsx";
import ShoppingList from "./ShoppingList.jsx";
import CopyInput from "./CopyInput.jsx";
import Switcher from "./Switcher.jsx";
import { useEffect, useState } from "react";
import Data from "./Data.jsx";
import BasicEffect from "./BasicEffect.jsx";

const App = () => {
  const [value, setValue] = useState(0);

  // using the useEffect hook, takes two params, one is the callbackfn and second is the dependency array
  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `Increment ${value}`;
  // }, [value]);
  // here dependency array is not given so this effect is fired at every render
  // when the array is empty, the effect is fired only the first time
  // now the state is given in the array, whenever the state changes, the effect is fired
  return (
    <div>
      {/* <Person name="Anand" age={20} /> */}
      {/* <Product name="Laptop" price="$1299" /> */}
      {/* <Props />
      <Weather temp={200} />
      <UserStatus loggedIn={false} isAdmin={false}/>
      <Greeting timeOfDay={"morning"}/> */}
      {/* <StyleCard />
      <ProfileCard />
      <IconComponent /> */}
      {/* <States /> */}
      {/* <SharingStates /> */}
      {/* <InitialState /> */}
      {/* <Counter /> */}
      {/* <ToDoList /> */}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <CopyInput /> */}
      {/* <Switcher /> */}
      {/* <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click me</button> */}
      {/* <Data /> */}
      <BasicEffect />
    </div>
  );
}; // first letter of the function should be capitalise and should always return a HTML container

export default App; // so that this created component can be used in any other files
// this is now rendered through the main.jsx file
