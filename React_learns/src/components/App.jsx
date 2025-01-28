import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import MainComponent from "./MainContent.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import JSXRules from "./JSXRules.jsx";
import Expressions from "./Expressions.jsx";
import Greetings from "./Greetings.jsx";
import ProductInfo from "./ProductInfo.jsx";
import Mapping from "./Mapping.jsx";
import UserList from "./UserList.jsx";
import ProductList from "./ProductList.jsx";
import Props from "./Props.jsx";
import Person from "./Person.jsx";
import Product from "./Product.jsx";
import Weather from './Weather.jsx'

const App = () => {
  return (
    <>
      {/* <Person name="Anand" age={20} /> */}
      {/* <Product name="Laptop" price="$1299" /> */}
      <Props />
      <Weather temp={200} />
    </>
  );
}; // first letter of the function should be capitalise and should always return a HTML container

export default App; // so that this created component can be used in any other files
// this is now rendered through the main.jsx file
