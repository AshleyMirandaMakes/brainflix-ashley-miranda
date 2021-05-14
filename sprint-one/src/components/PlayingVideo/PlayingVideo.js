
function PlayingVideo (props) {
    return (
      <div className="playingVideo">
        <img className="playingVideo__image" src={props.videoDetails.image} alt={props.videoDetails.title}/>
          <section className="playingVideo__container">
          <h1 className="playingVideo__title">{props.videoDetails.title}</h1>
          <div className="playingVideo__subheadings">
            <h3 className="playingVideo__channel">By {props.videoDetails.channel}</h3>
            <h3 className="playingVideo__timestamp">{props.videoDetails.timestamp}</h3>
          </div>
          <div className="playingVideo__subheadings">
            <h3 className="playingVideo__views">{props.videoDetails.views}</h3>
            <h3 className="playingVideo__likes">{props.videoDetails.likes}</h3>
          </div>
          <p className="playingVideo__description">{props.videoDetails.description}</p>
          </section>
    </div>
    )
  }

export default PlayingVideo;