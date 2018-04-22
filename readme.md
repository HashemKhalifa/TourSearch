## Search Tour 

> Search Tour box along with search result.

### Project structure

````
build/
|- index.html __________________________________ # Application html 
|- bundle.js  __________________________________ # Application js bundled
src/
|- __tests__/ __________________________________ # Helpers tests
|- Assets/    __________________________________ # Application assets
|   |- Styles/ _________________________________ # Components styels
|- Components/
|    |- __tests__/ _____________________________ # React component tests
|    |- Common/    _____________________________ # reusable components
|       |- Star-rating/ _________________________ # star rating component
|    |- Search-box/ _____________________________ # search box component
|    |- Tour-details/ __________________________ # Tour details component
|       |- Tour-item/ ___________________________ # each tour item component
|- Store/
|    |- Actions/ ______________________________ # State managment actions
|    |- Reducers/ _____________________________ # State managment Reducers 
|    |- Constants.js __________________________ # State managment constants 
|    |- index.js ______________________________ # Create store 
|    |- initial-state.js ______________________ # application initial state 
|- data.json  __________________________________# Application data
|- helpers.js  _________________________________# all helper functions
|- setupTests.js  ______________________________# Setup enzyme test
|- template.html  ______________________________# html entry point
|- index.jsx __________________________________ # Application entry point
|- App.jsx ____________________________________ # Application init
````




### Table of contents

[Install](#install)

[Run development](#run-development)

[Unit testing](#unit-testing)

[Bundling](#bundling)

[Technologies used](#technologies-used)

#### Install

* `npm install` or `yarn` to install all dependency.

#### Run development

* Run `yarn start`

#### Unit testing

> Will run watch all and coverage

* `yarn test`

#### Bundling

* Run `yarn build`

#### Technologies used

* [Webpack 4](https://github.com/webpack/webpack) [ Using the new development mood ]
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and es6 ]
* [React](https://github.com/facebook/react) `16.3` for the benefit of Context API.
* [Lodash](https://github.com/lodash/lodash)
* [Redux](https://github.com/reactjs/redux) managing app state
* [Jest](https://github.com/facebook/jest) [ Unit test]
* [Enzyme](http://airbnb.io/enzyme/) for UI testing.
* [Eslint](https://github.com/eslint/eslint/) with airbnb config
* [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader)


