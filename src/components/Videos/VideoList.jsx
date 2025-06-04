import VideoCard from "./VideoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Temporal } from "@js-temporal/polyfill";

function VideoList() {
  const KEY = "AIzaSyBrcwQMWJEcEzjY8yeW3ExNYeBnYcYcahA";

  const [videos, setVideos] = useState([]);
  const [channelThumbnail, setChannelThumbnail] = useState([]);

  const formatDate = (dateString) => {
    const currentDate = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const str1 = new Date(dateString).toLocaleDateString(undefined, options);
    const date1 = new Date(str1);
    const date2 = new Date(currentDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays == 1 ? `${diffDays} day ago` : `${diffDays} days ago`;
  };

  // get videos data
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=17&key=${KEY}`
      )
      .then((res) => {
        // console.log(res.data.items)

        res.data.items.map((video) => {
          // console.log(video.snippet.thumbnails.high.url)

          const vidDate = video.snippet.publishedAt;


          console.log(formatDate(vidDate))

          // get channel channel thumbnail
          axios
            .get(
              `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${KEY}`
            )
            .then((res) => {
              setChannelThumbnail((imgurl) => [
                ...imgurl,
                res.data.items[0].snippet.thumbnails.default.url,
              ]);
            });
        });

        setVideos(res.data.items);
      });
  }, []);

  return (
    <div className="flex gap-1 flex-wrap justify-center items-center">
      {videos.map((video, index) => (
        <div key={index}>
          <Link to={`/video/${video.id}`}>
            <VideoCard
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.high?.url}
              duration={Temporal.Duration.from(video.contentDetails.duration)}
              channelTitle={video.snippet.channelTitle}
              viewCount={video.statistics.viewCount}
              date={formatDate(video.snippet.publishedAt)}
              channelThumbnail={channelThumbnail[index]}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
