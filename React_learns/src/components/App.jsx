import Footer from './Footer.jsx';
import Header from './Header.jsx'

const App = () => {
  return <>
  <Header />
  <MainComponent />
  <Footer />
  </>
} // first letter of the function should be capitalise and should always return a HTML container

export default App; // so that this created component can be used in any other files
// this is now rendered through the main.jsx file