import { Component } from 'react';
import { API_URL, API_KEY, VIDEOS_LIST } from "../../util";

import Video from '../../components/Video';
import FeaturedVideo from '../../components/FeaturedVideo';
import VideoList from '../../components/VideoList';

import axios from 'axios';

class HomePage extends Component {
   state = {
    videos: [],
    videoData : [],
    defaultVideo: '',
  };

  componentDidMount() {
  const {videoId} = this.props.match.params;
    console.log(videoId);
  
  //this sets up the default video'
  if (this.state.defaultVideo === "" ) {
     axios.get(`${API_URL}/videos/1af0jruup5gu${API_KEY}`)
    .then(
      (response) =>
      this.setState({
        videoData: response.data,
      })
    )
    .catch(
      (error) =>
      console.log(error)
    );
  }
    
  //this sets up the next video component
  axios.get(API_URL + VIDEOS_LIST + API_KEY)
    .then ((response) => {
      this.setState({
        videos : [...response.data]
        
      });    
    }).catch((error) =>
      console.log(error)
  );
    
  //this pull the video data if a video has been clicked
  axios.get(`${API_URL}/videos/${videoId}${API_KEY}`)
    .then((response) => {
        this.setState({
          videoData: [...response.data],
        })
      })
    .catch((error) => {
        console.log(error)
       });
  };  
  
  componentDidUpdate(prevProps) {
    const {videoId} = this.props.match.params;

    if (prevProps.match.params.videoId !== videoId) {
      axios.get(`${API_URL}/videos/${videoId}${API_KEY}`)
      .then(
        (response) =>
        this.setState({
          videoData: response.data,
        })
      )
      .catch(
        (error) =>
        console.log(error)
      );
   }
  }

  render () {
    console.log("Next Video Array", this.state.videos)
    console.log("VideoData/CurrentVideo Array", this.state.videoData)
    
    // if (this.state.videoData.id === video.id) {
    //   this.state.videoData.filter((video) => video.id === video.id)};
   
      // if (this.state.videoData.id === videoId) {
      //   return <main>Click on a video for more details</main>};
     
    // {!this.state.videoData? (
    // <p>No Video Selected</p>) : ""
    // } 

    return (
      <main>
      <Video video={this.state.videoData.video} image={this.state.videoData.image}/>
           <div className="app__container"> 
          <FeaturedVideo videoDetails={this.state.videoData} videoComments={this.state.videoData.comments}/> 
              <VideoList videos={this.state.videos}/>
           </div>
      </main>
    )
  }
}

export default HomePage;

