import  constants from '../constants/ActionConstant';
import SearchListModel from '../models/SearchListModel';
import SearchListService from '../services/SearchListService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export default class SearchListActions {

  requestSearchList(searchListModel) {
    return {
      type: constants.REQUEST_SEARCH_LIST,
      payload: searchListModel,
    };
  }
  searchListSuccess(searchListModel) {
    return {
      type: constants.SEARCH_LIST_SUCCESS,
      payload: searchListModel,
    };
  }

  searchList(searchListModel) {
    const self = this;
    return function(dispatch) {
      dispatch(self.requestSearchList(searchListModel));
      SearchListService.getSearchList(searchListModel)
            .map(value=>{
              if (value) {
                dispatch(self.searchListSuccess(value));
              }
            }).subscribe(function(e) {
            });
    };
  }


}

