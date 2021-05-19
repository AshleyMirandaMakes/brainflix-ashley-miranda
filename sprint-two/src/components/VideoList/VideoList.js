import VideoItem from '../VideoItem';
import './VideoList.scss';

function VideoList(props) {

  return (
    <div className="videoList__container">
      <h4 className="videoList__title">NEXT VIDEO</h4>
        <ul className="videoList">{
          props.videos
          .filter((video) => video.id !== props.currentVideoId)
            .map((video) => (
              <VideoItem 
                setCurrentVideo={props.setCurrentVideo}
                key={video.id}
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
              />
            ))}
        </ul>
    </div>
  );
}

export default VideoList;