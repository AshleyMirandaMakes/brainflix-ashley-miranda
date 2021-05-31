import { NavLink } from "react-router-dom";

import VideoItem from '../VideoItem';
import './VideoList.scss';


function VideoList (props) {
  //console.log(props.currentVideoId);
  //console.log(props.videos)
  return (
    <div className="videoList__container">
      <h4 className="videoList__title">NEXT VIDEO</h4>
        <nav className="videoList">{
          props.videos
          .filter((video) => video.id !== props.currentVideoId)
            .map((video) => (  
              <NavLink className="videoList__link" key={video.id} to={"/videos/" + video.id}>
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


export default VideoList;

 /* .filter((video) => video.id !== video.id)  */