import { Component } from 'react';
import { API_URL, API_KEY} from "../../util";

import Video from '../../components/Video';
import FeaturedVideo from '../../components/FeaturedVideo';
import VideoList from '../../components/VideoList';

import axios from 'axios';

class HomePage extends Component {
   state = {
      videoData : [],

   }

   componentDidMount() {
       const {videoId} = this.props.match.params;
       //console.log({videoId});

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

    if (this.state.videoData === null) {
      return <main>Loading video...</main>;
  }

    return (
      <main>
      <Video video={this.state.videoData.video} image={this.state.videoData.image}/>
           <div className="app__container"> 
          <FeaturedVideo videoDetails={this.state.videoData} videoComments={this.state.videoData.comments}/> 
              <VideoList/>
           </div>
      </main>
    )
  }
}

export default HomePage;


