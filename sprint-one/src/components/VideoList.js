import VideoItem from './VideoItem';
import './VideoList.scss';
import React, { Component } from 'react';

// class VideoList extends Component {
  



// }

function VideoList(props) {

  return (
    <ul className="videoList">{
      props.videos
      .slice(1)
        .map((video) => (
          <VideoItem 
            setCurrentVideo={props.setCurrentVideo}
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
          />
        ))}
    </ul>
  );
}

export default VideoList;