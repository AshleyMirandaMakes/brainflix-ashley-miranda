import { Component } from "react";
import { API_URL, API_KEY } from "../../util";

import './VideoItem.scss';

class VideoItem extends Component {
  render () {
    
    const { id, image, title, channel } = this.props

    return (
      // <li className="videoItem" onClick={() =>{this.props.setCurrentVideo(id)}}>
      <li>
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