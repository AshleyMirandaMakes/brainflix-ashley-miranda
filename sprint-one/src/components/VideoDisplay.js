import VideoFeature from './VideoFeature';
import './VideoDisplay.scss';
import { Component } from 'react';

function VideoDisplay(props) {

  // doNotDisplay()
  // return (

    <div className="videoDisplay">{
      props.videoDetails
        .filter((videoDetail) => videoDetail.id !== "1aivjruutn6a" || "1ainjruutd1j" || "1a3cjruucpf7" 
        || "1am3jruuwagz" || "1akljruuvhzt" || "1ae5jruuoc4q" ||"1a4kjruuedd9" || "1a8qhruuzky3" ) 
        .map((videoDetail) => (
          <VideoFeature
            key={videoDetail.id}
            image={videoDetail.image}
            title={videoDetail.title}
            channel={videoDetail.channel}
            timestamp={videoDetail.timestamp}
            views={videoDetail.views}
            likes={videoDetail.likes}
            description={videoDetail.description}
          />
        ))}
    </div>
        }

export default VideoDisplay;