import Rx from 'rxjs';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class SearchListService {

  static getSearchList(searchListModel) {
    const source = Rx.Observable.create(function(observer) {
      fetch('/listproducts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchListModel),
      })
        .then(res => res.json())
        .then(j => {
          observer.next((typeof j === 'string') ? JSON.parse(j.toString()) : j);
          observer.complete();
        }).catch(observer.onError);
    });

    return source;
  }


}
