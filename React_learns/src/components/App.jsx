import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import MainComponent from "./MainContent.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import JSXRules from './JSXRules.jsx'

const App = () => {
  return (
    <>
      <JSXRules />
    </>
  );
}; // first letter of the function should be capitalise and should always return a HTML container

export default App; // so that this created component can be used in any other files
// this is now rendered through the main.jsx file
