import constants from '../constants/ActionConstant';
import Reducer from 'redux';


function SearchListReducers(state = [], action = { type: '', payload: '' }) {
  let newState = Object.assign({}, state);
  console.log(newState);
  switch (action.type) {
  case constants.REQUEST_SEARCH_LIST:
    newState = Object.assign({}, state, action.payload, { searchRequest: 'Started' });
    return newState;
  case constants.SEARCH_LIST_SUCCESS:
    newState = Object.assign({}, state, action.payload, { searchRequest: 'finished' });
    return newState;
  default: return newState;
  }
}


export default SearchListReducers;


