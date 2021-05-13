import './VideoItem.scss';

function VideoItem(props) {
  // console.log(props)
  return (
    <li className="videoItem" onClick={() =>{props.setCurrentVideo(1)}}>
      <img className="videoItem__image" src={props.image} alt={props.title} />
      <div className="videoItem__headings">
        <h3>{props.title}</h3> 
        <h4 className="videoItem__channel">{props.channel}</h4>
      </div>
    </li>
  );
}

export default VideoItem;