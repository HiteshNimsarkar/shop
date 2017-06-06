import './Paper.less';
import React from 'react';


export default class Paper extends React.Component {
  render() {
   // const style = this.props.style;
    const color = this.props.color;
    const height = this.props.height;
    const width = this.props.width;
    const className = 'card card1 ' + (color ? color + ('paperHead') : '');

                /* const data = this.props.paragraphData;
                const listItems = data.map((data_, i) =>
                        <p key={i} className='xo'> {data_} </p>
                    );*/
    return (
                      <div className={className}
                       style=
                       {{ height: height, width: width }} >
                                {this.props.children}
                        </div>
    );
  }
}
