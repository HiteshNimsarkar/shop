import * as  ReactRedux from 'react-redux';
import SearchListActions from '../actions/SearchListActions';
import SearchBox from '../views/searchbox/SearchBox';
import SearchListModel from '../models/SearchListModel';
import { Observable } from 'rxjs/Observable';

const mapStateToProps = function(state) {
  return { searchListModel: state.searchListModel };
};
const mapDispatchToProps = function(dispatch) {
  return {
    searchList: function(searchListModel) {
      dispatch(new SearchListActions().searchList(searchListModel));
    },


  };
};


const SearchBoxContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SearchBox);
export default SearchBoxContainer;
