import PlayingVideo from '../PlayingVideo';
import Comments from '../Comments';

import './FeaturedVideo.scss';
//might not need this

function FeaturedVideo (props) {
  console.log(props.videoComments)
  //coming down
    return (
      <div>
        <PlayingVideo videoDetails={props.videoDetails}/>
        <Comments videoComments={props.videoComments}/>
      </div>
    )
}

export default FeaturedVideo;