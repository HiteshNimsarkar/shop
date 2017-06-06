import './SearchBox.less';
import React from 'react';
import SearchListModel from '../../models/SearchListModel';


export default class SearchBox extends React.Component {

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      loading: true,
    };
  }
  handleSubmit(event) {
    console.log('A SearchForm form was submitted: ' );
    let searchListModel = new SearchListModel();// eslint-disable-line prefer-const
    searchListModel.setSearchFilter(this.props.searchListModel.searchFilter);
    searchListModel.setSearchString(this.props.searchListModel.searchString);
    this.setState({ loading: true });
    this.props.searchList(searchListModel);

    event.preventDefault();
  }

  setFilter(event) {
    console.log('clicked filter radio: ' + event.target.value);
    let searchListModel = new SearchListModel();// eslint-disable-line prefer-const
    searchListModel.setSearchFilter(event.target.value);
    this.props.searchListModel.searchFilter = event.target.value;
    // this.props.searchListModel.searchRequest = 'started';
    this.setState({ loading: true });
    this.props.searchList(searchListModel);
  }

  handleChange(event) {
    this.props.searchListModel.searchString = event.target.value;
  }

  render() {
    const { loading } = this.state;

    const loadingDOm = [];
    if (loading && (this.props.searchListModel.searchRequest && this.props.searchListModel.searchRequest !== 'finished')) {
      loadingDOm.push(<span className='loading_'>Loading...</span>); // render null when app is not ready
    }

    return (
        <div >

            <div className='searchbox '>
            <div className='spacing'> </div>

                <div className='searchwidth'>
                    <div className='flexsearch'>
                        <div className='flexsearch--wrapper'>
                            <form className='flexsearch--form' onSubmit={this.handleSubmit}>
                                <div className='flexsearch--input-wrapper'>
                                    <input className='flexsearch--input'  onChange={this.handleChange}  type='search' placeholder='search' />
                                     <input id ='submit' className='flexsearch--submit' type='submit' value='&#10140;' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>

                <div className='radiobuttons' style={{ padding: 10  }}  onChange={this.setFilter.bind(this)}>

<label className='radio' for='r1'>
                <input type='radio' checked={this.props.searchListModel.searchFilter === 'relevance'} value='relevance' id='r1' name='item' ></input>
                    <div>
                    <span className='big'>
                    <span className='small'></span>
                    </span>Relevance
                    </div>
                </label>
                <label className='radio' for='r2'>
                <input type='radio' checked={this.props.searchListModel.searchFilter === 'popular'}  value='popular' id='r2' name='item' ></input>
                    <div>
                    <span className='big'>
                    <span className='small'></span>
                    </span>Popular
                    </div>
                </label>
                <label className='radio' for='r3'>
                <input type='radio' checked={this.props.searchListModel.searchFilter === 'lowprice'}  value='lowprice' id='r3' name='item' ></input>
                    <div>
                    <span className='big'>
                    <span className='small'></span>
                    </span>Low Price
                    </div>
                </label>

                 <label className='radio' for='r4'>
                <input type='radio' checked={this.props.searchListModel.searchFilter === 'highprice'}  value='highprice' id='r4' name='item' ></input>
                    <div>
                    <span className='big'>
                    <span className='small'></span>
                    </span>High Price
                    </div>
                </label>

                <label className='radio' for='r5'>
                <input type='radio' checked={this.props.searchListModel.searchFilter === 'new'}  value='new' id='r5' name='item' ></input>
                    <div>
                    <span className='big'>
                    <span className='small'></span>
                    </span>New
                    </div>
                </label>

              </div>
                <div>{loadingDOm}</div>
        </div>
    );
  }
}


