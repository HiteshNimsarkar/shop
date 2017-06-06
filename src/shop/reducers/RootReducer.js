
import { combineReducers } from 'redux';

import  SearchListReducers from './SearchListReducers';


const rootReducer = combineReducers({
  searchListModel: SearchListReducers,
});

export default rootReducer;
