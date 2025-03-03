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
import { useEffect, useReducer, useState } from "react";
import BasicEffect from "./BasicEffect.jsx";
import CounterEffect from "./CounterEffect.jsx";
import FetchDataEffect from "./FetchDataEffect.jsx";
import { createContext } from "react";
import CA from "./CA.jsx";
import UserProfile from "./UserProfile.jsx";
import UserProvider from "./UserContext.jsx";
import UpdateUser from "./UpdateUser.jsx";

export const Data = createContext();

const App = () => {
  // const [value, setValue] = useState(0);
  // Defined a name
  const name = "Anand";
  // useReducer()
  const initialState = { count: 0 }; // the starting value of the state
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };

      case "decrement":
        return { ...state, count: state.count - 1 };

      case "reset":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
      {/* <h2>{value}</h2>CounterEffect
      <button onClick={() => setValue(value + 1)}>Click me</button> */}
      {/* <BasicEffect />
      <CounterEffect />
      <FetchDataEffect /> */}
      {/* drilling this prop to this component */}
      {/* <CA name={name} /> */}
      {/* using the ContextAPI for prop sharing */}
      {/* <Data.Provider value={name}>
        <CA />
      </Data.Provider> */}
      {/* inside the UserProvider component all the child comps have access to the shared Context data */}
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <div>
        <h1>{state.count}</h1>
        {/* here dispatch has the reference of state internally so no need to provide it here again */}
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}; // first letter of the function should be capitalise and should always return a HTML container

export default App; // so that this created component can be used in any other files
// this is now rendered through the main.jsx file
