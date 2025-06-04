import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import VideoCardRecommenattion from "./VideoCardRecommenattion";
import { Temporal } from "@js-temporal/polyfill";
import { MdOutlineSort } from "react-icons/md";

function VideoDetails() {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const currentDate = `${
      new Date().getMonth() + 1
    }/${new Date().getDate()}/${new Date().getFullYear()}`;
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const str1 = new Date(dateString).toLocaleDateString(undefined, options);
    const date1 = new Date(str1);
    const date2 = new Date(currentDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays == 1 ? `${diffDays} day ago` : `${diffDays} days ago`;
  };

  const [video, setVideo] = useState([]);

  const [channelThumbnail, setChannelThumbnail] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const [subscribersCount, setSubscriberCount] = useState("");
  const [title, setTitle] = useState("");
  const [likes, setLikes] = useState("");
  const [ViewCount, setViewCount] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [description, setDescription] = useState("");

  const [videos, setVideos] = useState([]);

  const KEY = "AIzaSyBrcwQMWJEcEzjY8yeW3ExNYeBnYcYcahA";

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=17&key=${KEY}`
      )
      .then((res) => {
        console.log(res.data.items[0]);

        setVideos(res.data.items);
      });

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${KEY}`
      )
      .then((res) => {
        setVideo(res.data.items[0]);
        setTitle(res.data.items[0].snippet.title);
        setViewCount(res.data.items[0].statistics.viewCount);
        setLikes(res.data.items[0].statistics.likeCount);
        setChannelTitle(res.data.items[0].snippet.channelTitle);
        setPublishDate(res.data.items[0].snippet.publishedAt);
        setDescription(res.data.items[0].snippet.description);

        // console.log(res.data.items[0]);

        axios
          .get(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${res.data.items[0].snippet.channelId}&key=${KEY}`
          )
          .then((res) => {
            setSubscriberCount(res.data.items[0].statistics.subscriberCount);
            setChannelThumbnail(
              res.data.items[0].snippet.thumbnails.default.url
            );
          });
      });
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white flex flex-col xl:flex-row pt-20">
      <div className="flex flex-col p-2 gap-3 w-full lg:w-full">
        <iframe
          className="h-100 lg:h-150 rounded-3xl"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <h1 className="text-xl font-bold">{title}</h1>

        <div className="flex flex-col lg:flex-row items-center gap-5 justify-between">
          {/* channel data */}
          <div className="flex items-center gap-3">
            <img className="w-10 rounded-full" src={channelThumbnail} alt="" />

            <div className="flex flex-col">
              <h1>{channelTitle}</h1>
              <h1>{subscribersCount}</h1>
            </div>

            <button className="bg-[#f1f1f1] text-black h-10 w-23 rounded-3xl hover:bg-[#f1f1f1]/80 hover:cursor-pointer">
              Subscribe
            </button>
          </div>

          <div className=" flex gap-3">
            <div
              style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
              className="p-2 rounded-2xl"
            >
              <div className="flex items-center gap-2">
                <BiLike className="text-3xl" />
                <h1 className="text-white">{likes}</h1>

                {/* <hr /> */}

                <BiDislike className="text-3xl" />
              </div>
            </div>

            <div
              style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
              className="p-2 rounded-2xl flex items-center gap-3"
            >
              <RiShareForwardLine className="text-3xl" />
              <h1>Share</h1>
            </div>

            <div
              style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
              className="p-2 rounded-2xl flex items-center gap-3"
            >
              <IoIosMore className="text-3xl" />
            </div>
          </div>
        </div>

        {/* description container */}
        <div
          className="p-3 rounded-2xl"
          style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
        >
          {/* date */}
          <div>
            <h1>
              {ViewCount} views {formatDate(publishDate)}
            </h1>
          </div>

          {/* description */}
          <div className="py-1">
            <p>{description}</p>
          </div>
        </div>

        {/* comments */}
        <div className="p-3">
          <div className="">
            <div className="flex gap-2 items-center">
              <h1 className="text-lg font-bold">0 Comments</h1>
              <MdOutlineSort className="text-2xl" />
              <h1>Sort by</h1>
            </div>
            <input
              type="text"
              className="border-b w-full m-2"
              placeholder="Add a comment"
            />
            <div className="flex flex-col gap-4 p-2">
              <div className="flex items-center">
                <img
                  className="rounded-full w-10 h-10 m-2"
                  src="https://images.pexels.com/photos/28712682/pexels-photo-28712682/free-photo-of-stunning-sunset-over-catalca-silhouetted-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h1>
                    @jesuasdsdy374{" "}
                    <span className="text-gray-400">4 days ago</span>
                  </h1>
                  <p>200k subs congratulations 🎉🎉👏</p>
                  <div className="flex items-center gap-2">
                    <BiLike className="text-2xl" /> <p>2</p>{" "}
                    <BiDislike className="text-2xl" />{" "}
                    <p className="font-bold">Reply</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="rounded-full w-10 m-2"
                  src="https://yt3.ggpht.com/ytc/AIdro_nSQaefEePLeZ0NHONhoQobCEkO_-ft5nHRcbVHrOY=s88-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h1>
                    @a1341{" "}
                    <span className="text-gray-400">10 days ago</span>
                  </h1>
                  <p>hi</p>
                  <div className="flex items-center gap-2">
                    <BiLike className="text-2xl" /> <p>1</p>{" "}
                    <BiDislike className="text-2xl" />{" "}
                    <p className="font-bold">Reply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col gap-3 p-2  xl:w-2/5">
        <div className="flex gap-3">
          <div>
            <p
              className="p-2 rounded-xl px-3"
              style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
            >
              All
            </p>
          </div>
          <div>
            <p
              className="p-2 rounded-xl px-3"
              style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}
            >
              From the series
            </p>
          </div>
        </div>

        <div className="">
          {videos.map((video, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  navigate(`/video/${video.id}`);
                  window.location.reload();
                }}
              >
                <VideoCardRecommenattion
                  title={video.snippet.title}
                  thumbnail={video.snippet.thumbnails.high.url}
                  duration={Temporal.Duration.from(
                    video.contentDetails.duration
                  )}
                  channelTitle={video.snippet.channelTitle}
                  viewCount={video.statistics.viewCount}
                  date={video.snippet.publishedAt}
                  channelThumbnail={channelThumbnail[index]}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
