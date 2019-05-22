import React from "react";

const VideoItem = ({ video }) => {
  return (
    <section className="section">
      <div className="container">
        <h1>{video.snippet.title} </h1>
        <figure>
        <img alt="test" src={video.snippet.thumbnails.medium.url} />
        </figure>
      </div>
    </section>
  );
};
export default VideoItem;
