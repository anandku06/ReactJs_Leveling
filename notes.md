# REACT

- is a free and open-source JS library specifically designed for building user interfaces
  - library is a pre-written code that a developer can use to code some specific functionality
- developed by facebook in 2011
- uses components model
  - Components is a piece of the UI that has it's own logic and appearence. A component can be small as a button or large as entire page.
- build modular apps
- learn once and apply anywhere

## To work with React (linux)

- first check your node version (should be v16 or more newer)

  ```bash
  node -v
  ```

  - if not updated, then update it using:
    ```bash
    nvm install --lts
    nvm use --lts
    ```
    - if 'nvm' not found, then install it by:
      ```bash
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
      ```
    - after installation, activate nvm by:
      ```bash
      export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
      ```
    - reload the terminal:
      ```bash
      source ~/.bashrc
      ```
    - verify nvm installation:
      ```bash
      nvm --version
      ```

- Go to terminal and type:

```bash
    npm create vite@latest
```

- type your project name and package name
- select the framework(React)
- Select the variant(JavaScript)
- then follow the 'Now run cmds on your terminal'
- and you are good to go!!

## folder structure in React

- node_modules -> contains modules that React uses and any further modules reqd will be installed here
- public -> contains all the assets like HTML etc. that is to be used in the project
- src -> all the React code is here and and reqd assets like images and other things
- .gitignore file -> used to ignore some folders or files that is not reqd pushed to the github
- eslint.config.js -> eslint configuration file
- index.html -> contains the root element through which the React is rendered on the web browser
- package.json -> contains the meta data for the React project we are on, and the modules dependencies
- vite.config.js -> vite configuration file

## Components in React

- are independent & resuable bits of code. They serve the same purpose as JS functions, but work in isolation and return HTML.
- make components just like decalaring functions in JS but the first letter of the name of the function should be capitalise.
- after making the component, it is exported for other files usage and there, it is then imported

  ```javascript
  export default Component;

  import Component from "./Component.jsx";
  ```

- after importing, it is then rendered by selecting the root id element from the HTML file
- giving the component name as self-closing HTML tags

## JSX

- JavaScript XML -> BTS we are working with JS
- allows us to write HTML in React.
- makes it easier to write & add HTML in React

```jsx
const Component = () => {
  return (
    <section className="class">
      {" "}
      // in JSX, HTML classes are defined using className attribute, for tailwind
      CSS as well
      <h1>My Website</h1>
    </section>
    // can't have two section element or div element
    // only one element is to be returned
  );
};
```

- make a JS function and returning HTML code through it
- returns only single parent element, whether a div or any block-type element
- closing of the HTML tags are also important
- to provide classes to the tags, we'll use className attrbute, not the class attribute as it'll considered as real class by the JS interpreter
  - same goes for the for attribute of the label tag, htmlFor attribute is used at its place
  ### JSX Expressions
  - With JSX, you can write expressions inside curly braces.
  - The expressions can be a React variable, or property, or any other JS expression.
  - JSX will execute te expression and return the result.

## Lists in React

- In React, you'll render lists with some type of loop. The JS map() array method is generally preferred.

## Props in React

- props/properties are arguments passed into React components
- allows us to pass data from parent components to a child component
- are passed to components via HTML attributes and are accessed as objects in the child components

## Conditional Rendering

- allows us to dynamically display different UI components or content-based on specific conditions
- This enables us to create more interactive and responsive user experiences

## Styling

- Inline styling : with the style attribute and the values should be enclosed within two curly braces because in React the values are given inside curly braces
  Or can define an object for styling and pass it as attribute to the tag and the properties name are different from the CSS
- for external styling : make an .css file and just import it into the required .jsx file

## React-Icons

- a React library having different types of icons for use
  requires npm to install its package and can be used then
- after installing, just search for the desired icons and import it and use its pre-defined component in your project

## Handling Events in React

- using the pre-defined events in react, we can handle any event, without using that '.addEventListener()' method
- examples: onClick={}, onCopy={}, etc. , that also takes the callbackfn and invokes when event is triggerred

## State

- a way to store and manage data that can change over time and affects how the component renders.
- define state using the _useState Hook_, which allows you to set an initial value and provides a way to update that state

## Hooks

- a new addition in React 16.8, let you use state and other React feats without writing a class.
  - ### useState() :
    - allows us to track state in a functional component. State generally refers to data or properties that need to be tracking application.
    - destructuring the two array elements and then using to manage states of the elements
    ```javascript
    const [data, changeData] = useState();
    // data is the initial state of the data
    // changeData is the function according to which the data will change
    // under the useState() method, we can give the initial value as args
    ```
    - because if you log this useState() method, it returns an array with two elements, first the initial data and a function according to which the data is changed
    - _Computed Property Values_, setting the object's properties/keys dynamically, when we don't know what should be the property of this object

## Portal

- a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component
- can be useful for scenarios like modals, tooltips or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM
- using a module createPortal from react-dom package, takes two params, one is the component/content to be rendered, and second where to render(may be a div or in a component)

## useEffect()

- allows you to perform _side effects_ in your components.
- some examples of side effects are: fetching data, directly updating the DOM, etc.
- syntax:

```javascript
// takes two parameters: one is the callbackfn that is triggered
// and second is the dependency array
useEffect(() => {
  // do your magic
});
// here without the array -> effect on every single render
```

- conditions are declared inside of useEffect() not outside of it.
- if the array is empty then, the effect is on the initial render only(first time renders only then effect is fired)
- if the state is given in the array, then whenever the state changes the effect is fired
- we setup useEffect hook to run some code WHEN:
  - component renders for the first time
  - whenever it re-renders
  - some data in our component changed

## Props Drilling

- happens when you have to pass any data through every intermediate component in the chain
- the middle components just pass the data without using them

```javascript
//from App component the data goes to ComponentA
const App = () => {
  const data = "Anand";
  return (
    <div>
      <ComponentA data={data} />
    </div>
  );
};

//ComponentA.jsx file
// via ComponentA
const ComponentA = ({ data }) => {
  return (
    <div>
      <ComponentB data={data} />
    </div>
  );
};
// ComponentB.jsx file
// to ComponentB, prop data is drilled
const ComponentB = ({ data }) => {
  return (
    <div>
      <h1> {data} </h1>
    </div>
  );
};

export default ComponentB;
```

### It's a Problem:

- Intermediate components have to deal with the props they don't need
- If rearrangement of the components tree happens, then the props flow has to be revised
- harder to track where data is coming from and where it's actually used

### Solutions:

- Context API
- State Management Libraries
- Component Composition

## Context API

- a feature that allows you to manage and share data across your component tree without having to pass props down manually at every level
- useful for scenarios where you need to share data or functions across many components, expecially when these components are deeply nested
- import the createContext function from the react package and after instantiating the function you can pass the data using the Provider property , passing it as prop to its component
- to access you have to use the Consumer property which takes an callbackfn

```javascript
import { createContext } from "react";

export const Data = createContext(); // instantiating the imported function createContext and exporting it as well for further use

const App = () => {
  const name = "Anand"; // this is the data to be shared

  // wrapping the component inside the Data component
  // using the property of this context Provider to send the data and value attribute for the data to be sent
  return (
    <div>
      <Data.Provider value={name}>
        <ComponentA />
      </Data.Provider>
    </div>
  );
};

// in the ComponentA.jsx file

import { Data } from "./App.jsx";

const ComponentA = () => {
  // inside the ComponentA file using the createContext's Consumer property we can consume or use the passed data by the Provider
  // Consumer takes a callbackfn so specified accordingly
  return (
    <Data.Consumer>
      {(name) => {
        return <h1>{name}</h1>;
      }}
    </Data.Consumer>
  );
};
```

- every data has its own context instance and component i.e. if any other data is there then a new instance is created as well

## useContext()

- allows us to access the context values provided by a Context object directly within a functional component
- Context provides a way to pass data through the component tree without having to pass drops down manually at every level

```javascript
import { createContext, useContext } from "react";

export const Data = createContext();

const App = () => {
  const userName = "Anand";
  return (
    <Data.Provider value={userName}>
      <ComponentA />
    </Data.Provider>
  );
};

// ComponentA.jsx

const ComponentA = () => {
  return <ComponentB />;
};

export default ComponentA;

// ComponentB.jsx
import { useContext } from "react";
import { Data } from "./App.jsx";

const ComponentB = () => {
  const name = useContext(Data); // in place of using the Data.Consumer, we using useContext() hook and passing the instance of the createContext()

  return <h1>{name}</h1>;
};
```
