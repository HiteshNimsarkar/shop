import './Card.less';
import React from 'react';
import Paper from '../paper';
import { Title } from './index';
import Star from '../star/Star';
import StarRating from 'react-star-rating';
import Prize from '../prize/Prize';
import Features from '../features/Feature';


export default class MobileCard extends React.Component {
  render() {
    const color = this.props.theme.color;
    const lineseparatorclass = 'line-separator ' + (color ? color : '');
    const imgeCss = 'cam_image_cell ';
    const width = 900;
    return (
                        <div className="cell">
                             <Paper height='200' width={width} color={this.props.theme.color}>
                             <div className='container'>
                             <div className='child1'>
                             <img className= {imgeCss} src={'../../images/' + (this.props.imageName)}/>
                             </div>
                             <div className='child2'>
                             <Title className='title' title={this.props.title} />
                             <Star ratings={this.props.ratings} ratingValue={this.props.ratingValue} />
                             <Prize prize={this.props.prize} emi={this.props.emi}/>
                              <div className='aligntoleft '> <input type="checkbox" name="comparecheckbox" value=""/>Add to compare </div>
                               </div>
                            </div>
                        </Paper>
                        </div>

    );
  }
}
