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
    //this sometimes works and sometimes not?
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
  componentDidUpdate(prevProps, prevState) {
    const {id} = this.props.match.params;
    //console.log(this.state.videos);
    let newVideos = [...this.state.videos]

    if (prevProps.match.params.id !== id) {
      axios.get(`${API_URL}/videos/${id}${API_KEY}`)
      .then(
        (response) => {
        let filteredVideos = newVideos.filter((video) => video.id !== id)  
        //console.log(newVideos) //this takes out all my videos one by one. :| WHYYY
        this.setState({
          videoData: response.data,
          videos : filteredVideos,
        })
        return;
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

 