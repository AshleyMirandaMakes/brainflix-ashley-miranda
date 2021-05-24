import { Component } from 'react';
import { API_URL, API_KEY, VIDEOS_LIST } from "../../util";

import Video from '../../components/Video';
import FeaturedVideo from '../../components/FeaturedVideo';
import VideoList from '../../components/VideoList';

import axios from 'axios';

class HomePage extends Component {
   state = {
    mainVideoId: '',
    videos: [],
    videoData : [],
  };

  componentDidMount() {
  //const {id} = this.props.match.params;
  const id = this.props.match.params.videoId;

   //this sets up the default video, when no video has been clicked
   if (this.state.mainVideoId === "" ) {
    axios.get(`${API_URL}/videos/1af0jruup5gu${API_KEY}`)
    .then(
      (response) => {
      this.setState({
        videoData: response.data,
        mainVideoId: response.data[0],
      })}
    )
    .catch(
      (error) =>
      console.log(error)
    );
  }
  
  //this sets up the next video component
    axios.get(API_URL + VIDEOS_LIST + API_KEY)
    .then ((response) => {
      //this sometimes works and sometimes not.
    const videos = response.data.filter((video) => video.id !== id)
    this.setState({
      videos : videos,
      mainVideoId: response.data[0],
    });
  })    
    .catch((error) =>
      console.log(error)
    );
  }; 
    

  //on change
  componentDidUpdate(prevProps) {
    const {id} = this.props.match.params;
   // you're not calling this right
   // const {videos} = this.prevProps.videos
   // console.log(videos)

    if (prevProps.match.params.id !== id) {
      axios.get(`${API_URL}/videos/${id}${API_KEY}`)
      .then(
        (response) => {
          console.log(response.data)
        const videoData = response.data.filter((video) => video.id !== id) //? I dunno 
        this.setState({
          videoData: videoData,
        })
        })
      .catch(
        (error) =>
        console.log(error)
      );
   }
  }
 

  render () {

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


 