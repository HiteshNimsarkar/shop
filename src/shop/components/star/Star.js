import './Star.less';
import React from 'react';


export default class Star extends React.Component {
  render() {
    const indents = [];
    for (let i = 0; i < 5; i++) {
      if (i < this.props.ratings) {
        if (1 % 2 === 0) {
          indents.push(<input type='radio' id={'star' + (i)} name='rating' value={'star' + (i)} />);
          indents.push(<label className='full star-filled-yellow' for={'star' + (i)} ></label>);
        } else {
          indents.push(<input type='radio' id={'star' + (i) + 'half'} name='rating' value={ (i) + 'half'} />);
          indents.push(<label className='full star-filled-yellow' for={'star' + (i) + 'half'} ></label>);
        }
      } else {
        if (1 % 2 === 0) {
          indents.push(<input type='radio' id={'star' + (i)} name='rating' value={'star' + (i)} />);
          indents.push(<label className='full ' for={'star' + (i)} ></label>);
        } else {
          indents.push(<input type='radio' id={'star' + (i) + 'half'} name='rating' value={ (i) + 'half'} />);
          indents.push(<label className='full ' for={'star' + (i) + 'half'} ></label>);
        }
      }
    }
    indents.reverse();
    return (
        <div>
<div className='rating '>
  { indents }
  </div>
   <div>({this.props.ratingValue} ratings)</div>
  </div>
    );
  }
}
