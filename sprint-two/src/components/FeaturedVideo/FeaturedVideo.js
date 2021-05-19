import PlayingVideo from '../PlayingVideo';
import Comments from '../Comments';

import './FeaturedVideo.scss';
//might not need this

function FeaturedVideo (props) {
    return (
      <div>
        <PlayingVideo videoDetails={props.videoDetails}/>
        <Comments videoDetails={props.videoDetails}/>
      </div>
    )
}

export default FeaturedVideo;