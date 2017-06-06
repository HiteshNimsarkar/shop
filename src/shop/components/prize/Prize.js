import './Prize.less';
import React from 'react';
export default class Prize extends React.Component {
  render() {
    return (
                             <div className='prizeContainer '>
                             <div className='boldRs '>Rs. {this.props.prize}</div>
                             <div >EMI from Rs. {this.props.emi}</div>
                             </div>
    );
  }
}
