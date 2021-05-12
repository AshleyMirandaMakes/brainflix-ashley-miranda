import './VideoFeature.scss';

function VideoFeature(props) {
  console.log(props)
  return (
    <div className="videoFeature">
      <img className="videoFeature__image" src={props.image} alt={props.title} />
      <div className="videoFeature__headings">
        <h3>{props.title}</h3> 
        <h4 className="videoFeature__channel">{props.channel}</h4>
      </div>
    </div>
  );
}

export default VideoFeature;