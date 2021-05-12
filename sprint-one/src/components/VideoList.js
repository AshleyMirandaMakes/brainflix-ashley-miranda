import VideoItem from './VideoItem';
import './VideoList.scss';

function VideoList(props) {
  console.log('VideoList props', props);
  //works

  return (
    <ul className="videoList">{
      props.videos
        .filter((video) => video.id !== "1af0jruup5gu")
        .map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
          />
        ))}
    </ul>
  );
}

export default VideoList;