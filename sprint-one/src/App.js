import Nav from './components/Nav/Nav';
import '../src/partials/_resets.scss';
import VideoList from './components/VideoList';
import React, { Component } from 'react';
import FeaturedVideo from './components/FeaturedVideo/FeaturedVideo';

//-Data
import videos from '../src/assets/data/videos.json';
import videoDetails from '../src/assets/data/video-details.json';

//-Styles
import './App.scss';


class App extends Component {
  state = {
    videos,
    videoDetails,
    currentVideoIndex : 0,
    currentVideoId : "1af0jruup5gu",
  };

  setCurrentVideo = (id) => {
    let newVideos = [...this.state.videos]
    let videoIndex = newVideos.findIndex((video) => {
      return id === video.id;
    })
    console.log(videoIndex);

    let clickedVideo = newVideos[videoIndex]


     let currentVideoIndex = newVideos.find((videoIndex) => id !== videoIndex);
    console.log("current Video Index",currentVideoIndex );
  

    //frankly I'm not sure what tis is doing anymore but it throws a fir id I delete anything
    let updatedVideos = newVideos.filter(currentVideoIndex => id !== videoIndex)
    console.log(updatedVideos)

    updatedVideos.unshift(clickedVideo);
  
    this.setState({videos: updatedVideos, currentVideoIndex : videoIndex, currentVideoId: id,
    })
  }

  render() {
    // console.log("render")

  return (
    <div className="App">
      <Nav />
      <FeaturedVideo videoDetails={videoDetails[this.state.currentVideoIndex]}/>
      <div className="videoList__container">
        <h4 className="videoList__title">NEXT VIDEO</h4>
        <VideoList videos={videos} setCurrentVideo={this.setCurrentVideo} currentVideoId={this.state.currentVideoId}/>
      </div>
    </div>
  );
  }
}




export default App;
