# Hackathon Starter

Simple React boilerplate to start a hackathon project with.
Includes redux, redux-thunk, react-router, simple express server to serve project and build config for dev and prod. Also, it includes ant design UI library, along with possibility to create a custom theme for it.

## Ant Design
Ant design is a UI library for React, built by engineers at Alibaba. It has a very extensive collection of components. For usage visit: [ant-design](https://ant.design/docs/react/introduce) 

## Installation

```sh
npm install
```

## Scripts

To run project in dev env with webpack-dev-server run:
```sh
npm run dev
```

To run project in prod env with express server and minification of resources, run:
```sh
npm start
```

## Basic usage

The parts of the library are available as named exports:

```js
import {createCrudReducers, CrudActionCreators} from 'redux-thunk-crud';
```

fetchAdapter is also available as a named export but in most cases shouldn't be used directly.

The first step is to instantiate an object containing action creators for an endpoint, since this also generates action types:

```js
const someThingsActionCreators = new CrudActionCreators('https://jsonplaceholder.typicode.com/posts', 'SOME_THING');
```

SOME_THING is the suffix for action types which will be generated, for example REQUEST_SOME_THINGS, DELETE_SOME_THINGS, etc. A full set of action types is available in someThingsActionCreators.actionTypes

Next, we create the reducer:

```js
const someThingsReducer = createCrudReducers(someThingsActionCreators, methods, resetAllDataActinType);
```

Which can simply be fed to combineReducers or directly to createStore just like any other reducer.

The parameters are:

**someThingsActionCreator** - crud action creators that reducer will handle

**methods** - methods you want to use, default is 'CRUD'. If you want to use read only, you can pass 'R', etc

**resetAllDataActionType** - action type for which created crud reducers will reset state to initial, default is 'RESET_ALL_DATA'. Pay attention that you are not already using action type of same name in your app  

## Action creators

The action creators constructor has the following signature:
```js
new CrudActionCreator(url, actionTypesSuffix, settings = {})
```

The parameters are:

**url** - url for the endpoint