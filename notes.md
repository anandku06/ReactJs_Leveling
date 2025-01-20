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
        export default Component

        import Component from './Component.jsx'
    ```
- after importing, it is then rendered by selecting the root id element from the HTML file
- giving the component name as self-closing HTML tags