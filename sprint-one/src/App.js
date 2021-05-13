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
    videoDetails: videoDetails,
    currentVideoIndex : 0,
  };

  



  setCurrentVideo = (index) => {
  console.log("this is the currentSetVideo index" ,index)
  this.setState({currentVideoIndex : index})
  }




  render() {

  return (
    <div className="App">
      <Nav />
      <FeaturedVideo videoDetails={videoDetails[this.state.currentVideoIndex]}/>
      {/* <VideoDisplay videoDetails={videoDetails} /> */}
      <div className="videoList__container">
        <h4 className="videoList__title">NEXT VIDEO</h4>
        <VideoList videos={videos} setCurrentVideo={this.setCurrentVideo}/>
      </div>
    </div>
  );
  }
}

class FeaturedVideo extends Component {
  render() {
    return (
      <div>
        <PlayingVideo videoDetails={this.props.videoDetails}/>
        <Comments videoDetails={this.props.videoDetails}/>
      </div>
    )
  }
}


class PlayingVideo extends Component {
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
    // let { comments, id, likes, name, timestamp } = this.props.videoDetails;
    // console.log(comments)
    return(
      <section className="comment">
          <h3 className="comment__title">3 Comments</h3>
          <CommentForm videoDetails={this.props.videoDetails.comments}/>
          <ul className="comment__container">
          {this.props.videoDetails.comments.map((commentObj) => ( 
            <li className="comment__card">
            <div className="comment__image"></div>
            <div className="comment__content">
              <h4 className="comment__content--top">{commentObj.name}</h4>
              <h4 className="comment__content--top">{commentObj.timestamp}</h4>
            </div>
            <p className="comment__comment">{commentObj.comment}</p>
            </li>
          ))}
          </ul>
      </section>
    )
  }
}

class CommentForm extends Component {
render () {
  return(
    <section className="form">
      <div className="form__container">
        <div className="form__image"></div>
        <form className="form__content">
          <label className="form__title">JOIN THE CONVERSATION</label>
          <input className="form__input" type="text" name="message" placeholder="That was easily the most spectacular BMX moment ever."></input>
          <button className="form__button">COMMENT</button>
        </form>
      </div>
    </section>
  )
}

}


export default App;
