import './Video.scss';

function Video (props) {
  return (
    <div className="video__container">
          <video className="video__image" controls poster={props.videoDetails}></video>
    </div>
  )
}

export default Video;