import './Card.less';
import React from 'react';
import Paper from '../paper';
import { Title } from './index';
import Star from '../star/Star';
import StarRating from 'react-star-rating';
import Prize from '../prize/Prize';
import Features from '../features/Feature';


export default class Card extends React.Component {
  render() {
    const color = this.props.theme.color;
    const lineseparatorclass = 'line-separator ' + (color ? color : '');
    const imgeCss = 'cam_image ' + (color ? color : '');
    return (
                             <Paper height='400' width='250' color={this.props.theme.color}>
                             <img className= {imgeCss} src={'../../images/' + (this.props.imageName)}/>
                             <Title className='title' title={this.props.title} />
                             <div><div className={lineseparatorclass}></div></div>
                             <Star ratings={this.props.ratings} ratingValue={this.props.ratingValue} />
                             <div  style={ { padding: 5 } }><div className={lineseparatorclass}></div></div>
                             <Prize prize={this.props.prize} emi={this.props.emi}/>
                              <div><div className={lineseparatorclass}></div></div>
                              <Features features={this.props.features}/>
                               <div><div className={lineseparatorclass}></div></div>
                               <div className='aligntoleft '> <input type="checkbox" name="comparecheckbox" value=""/>Add to compare </div>
                        </Paper>
    );
  }
}
