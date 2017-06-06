import ReactDOM from 'react-dom';
import SearchlistContainer from './containers/SearchListContainer';
import Searchlist from './views/searchlist/SearchList';
import 'babel-polyfill';
import React from 'react';
require('font-awesome-webpack');
require( 'font-awesome/css/font-awesome.css');
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { logger } from 'redux-logger';
import  rootReducer from './reducers/RootReducer';
import { Provider } from 'react-redux';
const middleware = [thunk, createLogger(logger)];
import { createStore, applyMiddleware, combineReducers } from 'redux';

function initialState() {
  return {

    searchListModel: {
      searchString: '',
      searchFilter: 'relevance',
    },
  };
}


const store = createStore(
  rootReducer, initialState(),  applyMiddleware(...middleware)
);

ReactDOM.render(
	<Provider store={store}><SearchlistContainer><Searchlist/></SearchlistContainer></Provider>,
	document.getElementById('app'));

