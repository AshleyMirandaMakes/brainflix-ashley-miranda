import VideoItem from '../VideoItem/VideoItem';
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
                // ok this totally works as is but I tried to pass it in as a clickHandler and yes I changed the props in app but why doesn't this work?!
                // onClick={() => { clickHandler=(props.setCurrentVideo)}
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