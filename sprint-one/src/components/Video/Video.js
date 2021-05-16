import './Video.scss';

function Video (props) {
  //console.log(props.videoDetails)
  return (
    <div className="video__container">
          <video className="video__image" controls poster={props.videoDetails.image}></video>
    </div>
  )
}

export default Video;