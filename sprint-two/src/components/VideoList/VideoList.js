import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {API_URL, API_KEY, VIDEOS_LIST} from "../../util";

import VideoItem from '../VideoItem';
import './VideoList.scss';


class VideoList extends Component {
  state ={
    videos: [],
  };

  componentDidMount() {
     axios.get(API_URL + VIDEOS_LIST + API_KEY)
    .then ((response) => {
      this.setState({
        videos : [...response.data]
      });    
    });
  }

 render () {
  //console.log(this.state.videos)
  
  return (
    <div className="videoList__container">
      <h4 className="videoList__title">NEXT VIDEO</h4>
        <nav className="videoList">{
          this.state.videos
          /* .filter((video) => video.id !== video.id)  */
            .map((video) => (   
              <NavLink className="VideoList__link" key={video.id} to={"/videos/" + video.id}>
                <VideoItem 
                key={video.id}
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
                />
              </NavLink>
             ) 
        )}
     </nav>
   </div>  
  )   
}
}

export default VideoList;
