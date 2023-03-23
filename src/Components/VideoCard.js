import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="h-56 w-56  m-2 ">
      <img className="rounded-lg" alt="vc-img" src={thumbnails.medium.url} />
      <ul>
        <li className=" text-xs font-bold">{title}</li>
        <li className=" text-xs text-gray-600">{channelTitle}</li>
        <li className="text-xs  text-gray-600">{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
