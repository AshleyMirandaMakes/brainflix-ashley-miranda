import './App.scss';
import Nav from './components/Nav';
import '../src/partials/_resets.scss';
import VideoList from './components/VideoList';
import VideoDisplay from './components/VideoDisplay';
import React, { Component } from 'react';

//-Data
import videos from '../src/assets/data/videos.json';
import videoDetails from '../src/assets/data/video-details.json';


class App extends Component {
  state = {
    videos : videos,
    videoDetails: videoDetails
  }

  render() {
    console.log(this.state) 
    console.log(this.state.videoDetails[0].image)
    //this is equal to the videos array
    // console.log(videos)
  return (
    <div className="App">
      <Nav />
      <PlayingVideo videoDetails={videoDetails[0]}/>
      {/* <VideoDisplay videoDetails={videoDetails} /> */}
      <div className="videoList__container">
        <h4 className="videoList__title">NEXT VIDEO</h4>
        <VideoList videos={videos}/>
      </div>
    </div>
  );
  }
}

class PlayingVideo extends Component {
  render() {
    return (
      <div>
        <FeaturedVideo videoDetails={this.props.videoDetails}/>
        <Comments videoDetails={this.props.videoDetails}/>
      </div>
    )
  }
}


class FeaturedVideo extends Component {
  render() {
    return (
      <div className="playingVideo">
        <img className="playingVideo__image" src={this.props.videoDetails.image} alt={this.props.videoDetails.title}/>
          <section className="playingVideo__container">
          <h1 className="playingVideo__title">{this.props.videoDetails.title}</h1>
          <div className="playingVideo__subheadings">
            <h3 className="playingVideo__channel">By {this.props.videoDetails.channel}</h3>
            <h3 className="playingVideo__timestamp">{this.props.videoDetails.timestamp}</h3>
          </div>
          <div className="playingVideo__subheadings">
            <h3 className="playingVideo__views">{this.props.videoDetails.views}</h3>
            <h3 className="playingVideo__likes">{this.props.videoDetails.likes}</h3>
          </div>
          <p className="playingVideo__description">{this.props.videoDetails.description}</p>
          </section>
    </div>
    )
  }
}

class Comments extends Component {
  render() {
    return(
      <section className="comments">
          <h3 className="comments__header">3 Comments</h3>
          <CommentForm videoDetails={this.props.videoDetails.comments}/>
          <article className="playingVideo__comments">
          </article>
      </section>
    )
  }
}

class CommentForm extends Component {
render () {
  console.log(this.props.videoDetails)
  //doesn't gives me the comments
  return(
    <div className="form__container">
    <div className="form__image"></div>
    <form>
      <input type="text" name="message" placeholder="That was easily"></input>
      <button>COMMENT</button>
    </form>
  </div>
  )
}

}


export default App;
