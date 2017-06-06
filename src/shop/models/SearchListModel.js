export default class SearchListModel {

  searchString='';
  searchFilter='relevance';

  setSearchString(searchString) {
    this.searchString = searchString;
  }

  getSearchString() {
    return this.username;
  }
  setSearchFilter(searchFilter) {
    this.searchFilter = searchFilter;
  }

  getSearchFilter() {
    return this.searchFilter;
  }
}
