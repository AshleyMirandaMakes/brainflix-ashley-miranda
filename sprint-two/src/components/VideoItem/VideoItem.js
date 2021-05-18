import './VideoItem.scss';

function VideoItem(props) {
  return (
    <li className="videoItem" onClick={() =>{props.setCurrentVideo(props.id)}}>
      <img className="videoItem__image" src={props.image} alt={props.title} />
      <div className="videoItem__headings">
        <h3 className="videoItem__title">{props.title}</h3> 
        <h4 className="videoItem__channel">{props.channel}</h4>
      </div>
    </li>
  );
}

export default VideoItem; 