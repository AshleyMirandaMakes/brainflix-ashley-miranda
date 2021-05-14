import VideoItem from './VideoItem';
import './VideoList.scss';

  {/* .slice(0) ---1  
      //no video removed, first video removed, make this dynamic */}
      // .slice(1)
      // could I pass a dynamic value in here? how?

function VideoList(props) {

  return (
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
  );
}

export default VideoList;