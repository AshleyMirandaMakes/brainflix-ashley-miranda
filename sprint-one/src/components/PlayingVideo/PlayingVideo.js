import Video from '../Video/Video'
import ViewsIcon from '../../assets/icons/Icon-views.svg';
import LikesIcon from '../../assets/icons/Icon-likes.svg';
import NumericMonthDayYearConverter from '../Functions/TimeFunctions';

import './PlayingVideo.scss';


function PlayingVideo (props) {

  let timestamp = props.videoDetails.timestamp;
  timestamp = NumericMonthDayYearConverter(timestamp);

    return (
      <div className="playingVideo">
          <section className="playingVideo__container">
          <h1 className="playingVideo__title">{props.videoDetails.title}</h1>
          <div className="playingVideo__sub-container">
            <div className="playingVideo__subheadings">
              <h3 className="playingVideo__channel">By {props.videoDetails.channel}</h3>
              <h3 className="playingVideo__timestamp">{timestamp}</h3>
            </div>
            <div className="playingVideo__subheadings">
              <div className="playingVideo__details">
                <img src={ViewsIcon}/>
                <h3 className="playingVideo__views">{props.videoDetails.views}</h3>
              </div>
              <div className="playingVideo__details">
                <img src={LikesIcon}/>
                <h3 className="playingVideo__likes">{props.videoDetails.likes}</h3>
              </div>
            </div>
          </div>
          <p className="playingVideo__description">{props.videoDetails.description}</p>
          </section>
    </div>
    )
  }

export default PlayingVideo;