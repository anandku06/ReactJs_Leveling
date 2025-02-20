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
    - Computed Property Values, setting the object's properties/keys dynamically, when we don't know what should be the property of this object

## Portal
- a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component
- can be useful for scenarios like modals, tooltips or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM
