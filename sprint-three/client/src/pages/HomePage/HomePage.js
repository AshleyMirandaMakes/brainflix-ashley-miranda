import { Component } from 'react';
import Video from '../../components/Video';
import FeaturedVideo from '../../components/FeaturedVideo';import VideoList from '../../components/VideoList';

import axios from 'axios';

class HomePage extends Component {
   state = {
    mainVideoId: "",
    videos: [],
  };

  componentDidMount() {
//  const id = this.props.match.params.videoId;

    axios.get("http://localhost:8082/")
    .then ((response) => {
    this.setState({
      videos : response.data,
      mainVideoId: response.data[0],
    });
  })    
    .catch((error) =>
      console.log(error)
    );
  
  
  // if (this.state.mainVideoId === "") {
  //   axios.get("http://localhost:8081/videos")
  //   .then ((response) => {
  //   //console.log(response.data)
  //   this.setState({
  //     videos : response.data,
  //     mainVideoId: response.data[0],
  //   });
  // })    
  //   .catch((error) =>
  //     console.log(error)
  //   );
  // }; 
  //if id selected, add route
} 
    

//  on change
  componentDidUpdate(prevProps, prevState) {
    const {id} = this.props.match.params;

    if (prevProps.match.params.id !== id) {
      axios.get(`http://localhost:8082/videos/${id}`)
      .then(
        (response) => {
          console.log(response.data)
        this.setState({
          mainVideoId: response.data,
        })
        return;
        })
      .catch(
        (error) =>
        console.log(error)
      );
    }
    
    // if(prevState.videos.length !== this.state.videos.length) {
    //   axios
    //   .get("http://localhost:8082/videos")
    //   .then(response => {
    //     this.setState({
    //       videos: response.data,
    //     })
    //   })
    // }  
  }  
 

  render () {
    console.log(this.state.videos);

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


 