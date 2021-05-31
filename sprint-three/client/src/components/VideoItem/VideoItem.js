import { Component } from "react";

import './VideoItem.scss';

class VideoItem extends Component {
  render () {
    
    const { image, title, channel } = this.props

    return (
      <li className="videoItem__container">
        <img className="videoItem__image" src={image} alt={title} />
        <div className="videoItem__headings">
          <h3 className="videoItem__title">{title}</h3> 
          <h4 className="videoItem__channel">{channel}</h4>
        </div>
      </li>
    );
  } 
}

export default VideoItem; 