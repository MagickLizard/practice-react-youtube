import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({videoData}) => {
  console.log('props', videoData)
  const renderedList = videoData.map((video) => {
    return <VideoItem video={video} key={video.id.videoId}> </VideoItem>
  })
  return (
    <div> {renderedList} </div>
  )
}
export default VideoList;