import { Component } from 'react';
//import { API_URL, API_KEY, VIDEOS_LIST } from "../../util";

import Video from '../../components/Video';
import FeaturedVideo from '../../components/FeaturedVideo';import VideoList from '../../components/VideoList';

import axios from 'axios';

class HomePage extends Component {
   state = {
    mainVideoId: "",
    videos: [],
  //  videoData : [],
  };

  componentDidMount() {
  const id = this.props.match.params.videoId;

   //this sets up the default video, when no video has been clicked
  //  if (this.state.mainVideoId === "" ) {
  //    console.log("test")
  //   axios.get(`${API_URL}/videos/1af0jruup5gu${API_KEY}`)
  //   .then(
  //     (response) => {
  //     this.setState({
  //       videoData: response.data,
  //       mainVideoId: response.data[0],
  //     })}
  //   )
  //   .catch(
  //     (error) =>
  //     console.log(error)
  //   );  
  // } else {
  //     console.log("this runs when there is an id");
  // }

    axios.get("http://localhost:8081/")
    .then ((response) => {
    //this sometimes works and sometimes not?
    //const videos = response.data.filter((video) => video.id !== id)
    console.log(response.data)
    this.setState({
      videos : response.data,
      //videoData: response.data,
      mainVideoId: response.data[0],
    });
  })    
    .catch((error) =>
      console.log(error)
    );
  
  //this is getting the next video list
  if (this.state.mainVideoId === "") {
    axios.get("http://localhost:8081/videos")
    .then ((response) => {
    //this sometimes works and sometimes not?
    //const videos = response.data.filter((video) => video.id !== id)
    console.log(response.data)
    this.setState({
      videos : response.data,
      mainVideoId: response.data[0],
    });
  })    
    .catch((error) =>
      console.log(error)
    );
  }; 
  //if id selected, add route
} 
    

  //on change
  // componentDidUpdate(prevProps, prevState) {
  //   const {id} = this.props.match.params;
  //   //console.log(this.state.videos);
  //   let newVideos = [...this.state.videos]

  //   if (prevProps.match.params.id !== id) {
  //     axios.get(`${API_URL}/videos/${id}${API_KEY}`)
  //     .then(
  //       (response) => {
  //       //let filteredVideos = newVideos.filter((video) => video.id !== id)  
  //       //console.log(newVideos) //this takes out all my videos one by one. :| 
  //       this.setState({
  //         videoData: response.data,
  //       // videos : filteredVideos,
  //       })
  //       return;
  //       })
  //     .catch(
  //       (error) =>
  //       console.log(error)
  //     );
  //   }  
  // }  
 

  render () {
    console.log(this.state.videos);
  //  console.log(this.state.videoData[0]);
  //  console.log(this.state.mainVideoId.video);

    return (
      <main>
      <Video video={this.state.mainVideoId.video} image={this.state.mainVideoId.image}/>
           <div className="app__container"> 
          {this.state.mainVideoId.comments && 
          <FeaturedVideo videoDetails={this.state.mainVideoId} videoComments={this.state.mainVideoId.comments}/> }
              <VideoList videos={this.state.videos} currentVideoId={this.state.mainVideoId.id}/>
           </div>
      </main>
    )
  }
}

export default HomePage;

// return (
//   <main>
//   <Video video={this.state.videoData.video} image={this.state.videoData.image}/>
//        <div className="app__container"> 
//       {this.state.videoData.comments && 
//       <FeaturedVideo videoDetails={this.state.videoData} videoComments={this.state.videoData.comments}/> }
//           <VideoList videos={this.state.videos} currentVideoId={this.state.videoData.id}/>
//        </div>
//   </main>
// )
 