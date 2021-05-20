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
  const { channel , id , image , title } = this.state.videos;
  
  return (
    <div className="videoList__container">
      <h4 className="videoList__title">NEXT VIDEO</h4>
        <nav className="videoList">{
          this.state.videos
          /* .filter((video) => video.id !== this.state.currentVideoId) */
            .map((video) => (   
              <NavLink className="VideoList__link" key={video.id} to={"/videos/" + video.id}>
                <VideoItem 
                // setCurrentVideo={this.setCurrentVideo}
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


 {/* .filter((video) => video.id !== this.state.currentVideoId) */}
//create video sidebar
//videos : []
//render links using the state/map - videos

//componentDidMount(){
//  axios.get(url ) // import axios from 'axios';
//     .then((response)) =>
 //        this.setState({
   // videos: response.data
// })
//}
//{this.state.videos.map((video) => ))}
//<NavLink to="/video/SOMETHING" AKA to={"/video/" + video.id} key="" {video.} (this is the link ya need)