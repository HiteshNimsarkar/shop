import './Feature.less';
import React from 'react';
export default class Features extends React.Component {
  render() {
    const data = this.props.features;
    const listItems = data.map((element, i) =>
                        <li key={i}> {element} </li>
                    );
    return <ul className='features'>{listItems}</ul>;
  }
}
