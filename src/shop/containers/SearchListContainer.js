import * as  ReactRedux from 'react-redux';
import SearchListActions from '../actions/SearchListActions';
import SearchList from '../views/searchlist/SearchList';
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


const SearchListContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SearchList);
export default SearchListContainer;
