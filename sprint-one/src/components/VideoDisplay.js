import VideoFeature from './VideoFeature';
import './VideoDisplay.scss';

function VideoDisplay(props) {

  return (
    // <div>
    //   {props.videoDetails[0].channel}
    // </div>
    <div className="videoDisplay">{
      props.videoDetails
        .filter((videoDetail) => videoDetail.id !== "1af0jruup5gu") 
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
  );
}

export default VideoDisplay;