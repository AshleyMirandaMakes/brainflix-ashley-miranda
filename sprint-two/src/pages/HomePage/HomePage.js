import { Component } from 'react';
import { API_URL, API_KEY, VIDEOS_LIST } from "../../util";

//import Video from '../../components/Video';
//import FeaturedVideo from '../../components/FeaturedVideo';
import VideoList from '../../components/VideoList';

import axios from 'axios';

class HomePage extends Component {
   state = {
    videos: [],
    videoData : [],
  };

  componentDidMount() {
    const {videoId} = this.props.match.params;
    console.log(videoId);
    
    axios.get(API_URL + VIDEOS_LIST + API_KEY)
    .then ((response) => {
      this.setState({
        videos : [...response.data]
      });    
    }).catch(
      (error) =>
      console.log(error)
    );
      if ({videoId}) { 
      axios.get(`${API_URL}/videos/${videoId}${API_KEY}`)
      .then(
        (response) =>
        this.setState({
          videoData: [...response.data],
        })
      )
      .catch(
        (error) =>
        console.log(error)
      );
   }};  
  
   //  erase the two brackets above?
  //  } else {
  //   // axios.get(`${API_URL}/videos/1af0jruup5gu${API_KEY}`)
  //   axios.get("https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=2676221a-58c9-4883-a7b6-19edba276a48")
  //   .then(
  //     (response) =>
  //     this.setState({
  //       videoData: response.data,
  //     })
  //   )
  //   .catch(
  //     (error) =>
  //     console.log(error)
  //   );
  //  }
  // };
   //how can I add a condition to have the 1st video load if no :videoId has been selected? // also sometimes not iterable which makes sense
    

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
    console.log("This Video Array", this.state.videoData)
    
    //this text is not rendering. why?
    // if (this.state.videoData === null) {
    //   return <main>Click on a video for more details</main>};
   
    // {!this.state.videoData? (
    // <p>No Video Selected</p>) : ""
    // } 

    return (
      <main>
      {/* <Video video={this.state.videoData.video} image={this.state.videoData.image}/> */}
           {/* <div className="app__container"> 
          <FeaturedVideo videoDetails={this.state.videoData} videoComments={this.state.videoData.comments}/>  */}
              <VideoList videos={this.state.videos}/>
           {/* </div> */}
      </main>
    )
  }
}

export default HomePage;


