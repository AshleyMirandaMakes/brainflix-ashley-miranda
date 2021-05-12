import VideoFeature from './VideoFeature';
import './VideoDisplay.scss';

function VideoDisplay(props) {
  console.log('VideoFeature props', props);
  //check before bed

  return (
    <div className="videoDisplay">{
      props.videosDetails
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