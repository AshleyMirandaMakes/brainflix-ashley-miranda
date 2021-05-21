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
    mainVideoId: '',
  };

  componentDidMount() {
  //const {VideoId} = this.props.match.params;
  const id = this.props.match.params.videoId;
  console.log(id);
  
  //this sets up the default video' --- adjust this?
  if (this.state.mainVideoId === "" ) {
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
      const videos = response.data.filter((video) => video.id !== id)
      this.setState({
        videos : videos,
        mainVideoId: response.data[0],
      });    
    }).catch((error) =>
      console.log(error)
  );
    
  //this pull the video data if a video has been clicked
  axios.get(`${API_URL}/videos/${id}${API_KEY}`)
    .then((response) => {
        this.setState({
          videoData: [...response.data],
          //? mainVideoId: response.data[0],
        })
      })
    .catch((error) => {
        console.log(error)
       });
  };  
  
  //on change
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
    console.log("Next Videos", this.state.videos);
    //console.log("main video", this.state.mainVideoId); //nothing
    console.log("CurrentVideoId", this.state.videoData.id); // works

    
    // (this.state.videoData.id === this.state.videos.id) ?
    //   (this.state.videos.filter((video) => video.id === video.id) :
    //   ""
   
      // if (this.state.videoData.id === videoId) {
      //   return <main>Click on a video for more details</main>};
     
    // {!this.state.videoData? (
    // <p>No Video Selected</p>) : ""
    // } 

    return (
      <main>
      <Video video={this.state.videoData.video} image={this.state.videoData.image}/>
           <div className="app__container"> 
          {this.state.videoData.comments && 
          <FeaturedVideo videoDetails={this.state.videoData} videoComments={this.state.videoData.comments}/> }
              <VideoList videos={this.state.videos} currentVideoId={this.state.videoData.id}/>
           </div>
      </main>
    )
  }
}

export default HomePage;

