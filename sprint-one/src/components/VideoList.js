import VideoItem from './VideoItem';
import './VideoList.scss';
import React, { Component } from 'react';

// class VideoList extends Component {
  



// }

function VideoList(props) {

  return (
    <ul className="videoList">{
      props.videos
        .filter((video) => video.id !== "1af0jruup5gu")
        .map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
          />
        ))}
    </ul>
  );
}

export default VideoList;