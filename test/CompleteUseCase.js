import  SearchListActions  from '../src/shop/actions/SearchListActions';
import  ActionConstants  from '../src/shop/constants/ActionConstant';
import SearchlistContainer from '../src/shop/containers/SearchListContainer';
import Searchlist from '../src/shop/views/searchlist/SearchList';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { logger } from 'redux-logger';
import  rootReducer from '../src/shop/reducers/RootReducer';
import { Provider } from 'react-redux';
const middleware = [thunk, createLogger(logger)];
import { createStore, applyMiddleware, combineReducers } from 'redux';
import React from 'react';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Complete use case', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates SEARCH_LIST_SUCCESS when fetching searchList has been done', () => {
    nock('http://localhost:9500/')
      .post('/listproducts')
      .reply(200, {  products: [{
        "itemId":1,
        "itemTitle": "Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)",
        "rating": 1.5,
        "price": 7250,
        "emiprice": 352,
        "itemImage": "cam1.png",
        "features": ["20.1 MP","Sensor type CCD","LCD size 2.7","Lithium Battery"]
    }] } );
    const text = { searchString : "" , searchFilter : "relevance"};
    const input =  {
      type: ActionConstants.REQUEST_SEARCH_LIST,
      payload: text,
    };

    const expectedActions = [
      input,
      { type: ActionConstants.SEARCH_LIST_SUCCESS, payload: {  products: [{
        "itemId":1,
        "itemTitle": "Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)",
        "rating": 1.5,
        "price": 7250,
        "emiprice": 352,
        "itemImage": "cam1.png",
        "features": ["20.1 MP","Sensor type CCD","LCD size 2.7","Lithium Battery"]
    }] }  },
    ];
    const store = mockStore({searchListModel:{ searchString : "" ,searchRequest : 'finished', searchFilter : "relevance", products: [{
        "itemId":1,
        "itemTitle": "Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)",
        "rating": 1.5,
        "price": 7250,
        "emiprice": 352,
        "itemImage": "cam1.png",
        "features": ["20.1 MP","Sensor type CCD","LCD size 2.7","Lithium Battery"]
    }]  }});
    const wrapper = mount(<Provider store={store}><SearchlistContainer><Searchlist/></SearchlistContainer></Provider>);
    wrapper.find('#submit').simulate('click');
    setTimeout(function() {expect(store.getActions()).to.deep.equal(expectedActions); }, 3000);
   });
});