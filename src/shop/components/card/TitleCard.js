import './Title.less';
import React from 'react';


export default class TitleCard extends React.Component {
  render() {
    return (
                            <div className='cardtitle '>{this.props.title}</div>
    );
  }
}
