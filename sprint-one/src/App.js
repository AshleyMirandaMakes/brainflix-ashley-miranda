import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import VideoList from './components/VideoList/VideoList';
import FeaturedVideo from './components/FeaturedVideo/FeaturedVideo';
import Video from './components/Video/Video';

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
    //console.log(videoIndex);

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

  return (
    <div className="App">
      <Nav />
      <Video 
        videoDetails={videoDetails[this.state.currentVideoIndex]}/>
        <div className="app__container">
          <FeaturedVideo 
            videoDetails={videoDetails[this.state.currentVideoIndex]}/> 
          <VideoList 
            videos={videos} 
            setCurrentVideo={this.setCurrentVideo} 
            currentVideoId={this.state.currentVideoId}/>
        </div>
    </div>
  );
  }
}

export default App;
