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
import Weather from './Weather.jsx'
import UserStatus from './UserStatus.jsx'
import StyleCard from "./StyleCard.jsx";
import ProfileCard from "./ProfileCard.jsx";
import IconComponent from "./IconComponent.jsx";

const App = () => {
  return (
    <>
      {/* <Person name="Anand" age={20} /> */}
      {/* <Product name="Laptop" price="$1299" /> */}
      {/* <Props />
      <Weather temp={200} />
      <UserStatus loggedIn={false} isAdmin={false}/>
      <Greeting timeOfDay={"morning"}/> */}
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </>
  );
}; // first letter of the function should be capitalise and should always return a HTML container

export default App; // so that this created component can be used in any other files
// this is now rendered through the main.jsx file
