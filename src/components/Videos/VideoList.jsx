import VideoCard from "./VideoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function VideoList() {
  const KEY = "AIzaSyBrcwQMWJEcEzjY8yeW3ExNYeBnYcYcahA";

  const [videos, setVideos] = useState([]);
  const [channelThumbnail, setChannelThumbnail] = useState([]);

  // get videos data
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=17&key=${KEY}`
      )
      .then((res) => {

        console.log(res.data.items[0])

        res.data.items.map((video) => {
          // get channel channel thumbnail
          axios
            .get(
              `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${KEY}`
            )
            .then((res) => {
              setChannelThumbnail((imgurl) => [
                ...imgurl,
                res.data.items[0].snippet.thumbnails.high.url,
              ]);
            });
        });

        setVideos(res.data.items);
      });
  }, []);

  return (
    <div className="flex gap-3 flex-wrap justify-center items-center">
      {videos.map((video, index) => (
        <div key={index}>
          <Link to={`/video/${video.id}`}>
            <VideoCard
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.maxres.url}
            duration={video.contentDetails.duration}
            channelTitle={video.snippet.channelTitle}
            viewCount={video.statistics.viewCount}
            date={video.snippet.publishedAt}
            channelThumbnail={channelThumbnail[index]}
          />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
