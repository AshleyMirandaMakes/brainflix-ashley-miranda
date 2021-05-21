import { NavLink } from "react-router-dom";

import VideoItem from '../VideoItem';
import './VideoList.scss';


function VideoList (props) {
  //  console.log(props.videos)
  //  console.log(props.currentVideoId)

  // const id = props.currentVideoId
  // const newArray = [];

  // for (let i = 0; i < props.videos ; i++) {
  //   if (props.videos.id !== id) {
  //     newArray = props.videos.id
  //     return newArray;
  //   } 
  // }

  // console.log(newArray);

  return (
    <div className="videoList__container">
      <h4 className="videoList__title">NEXT VIDEO</h4>
        <nav className="videoList">{
          props.videos
          /* .find(currentVideoId) */
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