import { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { API_URL, API_KEY} from "../../util";

import Video from '../../components/Video';
import FeaturedVideo from '../../components/FeaturedVideo';
import VideoList from '../../components/VideoList';

//-Data
import videos from '../../../src/assets/data/videos.json';
import videoDetails from '../../../src/assets/data/video-details.json';
import axios from 'axios';

class HomePage extends Component {
   state = {
      // videos =[], // if you set this here it breaks.
      // currentVideoIndex : 0,
      //currentVideoId : "1af0jruup5gu",
      videoData : [],
   }

   componentDidMount() {
    //  const {videoId} = this.props.match.params;
    //  console.log(videoId);

     axios.get(`${API_URL}/videos/1af0jruup5gu${API_KEY}`)
      .then(
        (response) =>
        console.log(response)
      )
      .catch(
        (error) =>
        console.log(error)
      );
   }



 

 

  render () {
    return (
      <main>
      {/* <Video/> */}
         {/* <Video 
            videoDetails={videoDetails[this.state.currentVideoIndex]}/> */}
          <div className="app__container">
          {/* <FeaturedVideo/> */}
            {/* <FeaturedVideo 
              videoDetails={videoDetails[this.state.currentVideoIndex]}/>   */}
              <VideoList/>
              {/* <VideoList 
              videos={videos} 
              setCurrentVideo={this.setCurrentVideo}  
              currentVideoId={this.state.currentVideoId}/> */}
          </div>
      </main>
    )
  }
}

export default HomePage;

// setCurrentVideo = (id) => {
//   //spread to not mutate 
//   let newVideos = [...this.state.videos]
//   //find the index that matches the id returned by our click handler
//   let videoIndex = newVideos.findIndex((video) => {
//     return id === video.id;
//   })
  
//   //let the clicked video be the return of all the object data, not just the id
//   let clickedVideo = newVideos[videoIndex]

//   //let our updated video list not include the object clicked
//   let updatedVideos = newVideos.filter(video => video.id !== clickedVideo);

//   //set the new states
//   this.setState({videos: updatedVideos, currentVideoIndex : videoIndex, currentVideoId: id,
//   })
// }
