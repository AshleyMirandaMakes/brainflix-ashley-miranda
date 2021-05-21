import { NavLink } from "react-router-dom";

import VideoItem from '../VideoItem';
import './VideoList.scss';


function VideoList (props) {
   //console.log(props.videos)
   //console.log(props.videos.id)
  return (
    <div className="videoList__container">
      <h4 className="videoList__title">NEXT VIDEO</h4>
        <nav className="videoList">{
          props.videos
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


export default VideoList;

 /* .filter((video) => video.id !== video.id)  */