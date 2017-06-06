import './CardList.less';
import React from 'react';
import SearchBoxContainer from '../../containers/SearchBoxContainer';
import SearchBox from '../searchbox/SearchBox';

import MobileCard from '../../components/card/MobileCard';
import Card from '../../components/card/Card';
// const dummyData = require( './sample.json' );
import MediaQuery from 'react-responsive';
import SearchListModel from '../../models/SearchListModel';


export default class SearchList extends React.Component {
  static propTypes = {
    searchListModel: React.PropTypes.shape({
      searchString: React.PropTypes.string.isRequired,
      searchFilter: React.PropTypes.string.isRequired,
      searchRequest: React.PropTypes.string.isRequired,
    }).isRequired,
    searchList: React.PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // this.props.searchListModel.searchRequest = 'started';
    this.props.searchList(new SearchListModel());
    this.setState({ loading: false });
    // setTimeout(() => this.setState({ loading: false }), 23450000);
  }

  render() {
    const { loading } = this.state;
    const loadingDOm = [];
    if (this.props.searchListModel && this.props.searchListModel.searchRequest !== 'finished') {
      loadingDOm.push(<span className='loading_'>Loading...</span>);
    }
    const colors = ['red', 'yellow', 'green'];
    const data = (this.props.searchListModel) ? this.props.searchListModel.products : null;
    if (!data) {
      return <div>{loadingDOm}</div>;
    }
    // const mq = window.matchMedia( '(min-width: 500px)' );
    const listItems = data.map((element, i) =>{
      const color = colors[(i % 3)];
      const clrjs = { color: color };
      if (navigator.userAgent.indexOf('Android') === -1) {
        return <Card theme={clrjs} imageName={element.itemImage} ratings={element.rating}
              prize={element.price} emi={element.emiprice} features={element.features} ratingValue={element.rating} title={element.itemTitle} ></Card>;
              /*eslint-disable */
      } else { // eslint-disable-line no-use-before-define
        /*eslint-enable */
        return  <MobileCard theme={clrjs} imageName={element.itemImage} ratings={element.rating}
            prize={element.price} emi={element.emiprice} features={element.features} ratingValue={element.rating} title={element.itemTitle} ></MobileCard>;
      }
    });

    return <div ><div className='aligntoright' ><SearchBoxContainer><SearchBox /></SearchBoxContainer></div><div id='itemList' className="productlist">{listItems}</div>
    <div>{loadingDOm}</div>
    </div>
    ;
  }
}

