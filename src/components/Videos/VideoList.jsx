import VideoCard from "./VideoCard";
import axios from "axios";
import { useEffect, useState } from "react";

function VideoList() {
  const KEY = "AIzaSyBrcwQMWJEcEzjY8yeW3ExNYeBnYcYcahA";
  // https://www.googleapis.com/youtube/v3/videos?id=Ks-_Mh1QhMc&key=YOUR_API_KEY
  // https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=

  // https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCWOA1ZGywLbqmigxE4Qlvuw&fields=items%2Fsnippet%2Fthumbnails&key=AIzaSyBrcwQMWJEcEzjY8yeW3ExNYeBnYcYcahA

  const [videos, setVideos] = useState([]);
  const [channelThumbnail, setChannelThumbnail] = useState([]);

  // const channel = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${KEY}`

  //   {
  //     "kind": "youtube#video",
  //     "etag": "17r5PBsBLM5ifhwm0iCRZ-exMTA",
  //     "id": "QlYrNC_1Xmk",
  //     "snippet": {
  //         "publishedAt": "2025-06-01T01:32:38Z",
  //         "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
  //         "title": "Stranger Things 5 | Date Announcement | Netflix",
  //         "description": "The fight isn’t over yet. Get ready for the epic series finale of Stranger Things.\r\nVolume 1, November 26, 5pm PT*\r\nVolume 2, Christmas, 5pm PT*\r\nThe Finale, New Year’s Eve, 5pm PT*\r\n\r\n*releasing worldwide all at once, date may vary based on your local timezone\r\n\r\n#TUDUM\r\n\r\nWatch on Netflix: https://www.netflix.com/title/81297917\r\n\r\nAbout Netflix:\r\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\r\n\r\nStranger Things 5 | Date Announcement | Netflix\r\nhttps://www.youtube.com/@Netflix",
  //         "thumbnails": {
  //             "default": {
  //                 "url": "https://i.ytimg.com/vi/QlYrNC_1Xmk/default.jpg",
  //                 "width": 120,
  //                 "height": 90
  //             },
  //             "medium": {
  //                 "url": "https://i.ytimg.com/vi/QlYrNC_1Xmk/mqdefault.jpg",
  //                 "width": 320,
  //                 "height": 180
  //             },
  //             "high": {
  //                 "url": "https://i.ytimg.com/vi/QlYrNC_1Xmk/hqdefault.jpg",
  //                 "width": 480,
  //                 "height": 360
  //             },
  //             "standard": {
  //                 "url": "https://i.ytimg.com/vi/QlYrNC_1Xmk/sddefault.jpg",
  //                 "width": 640,
  //                 "height": 480
  //             },
  //             "maxres": {
  //                 "url": "https://i.ytimg.com/vi/QlYrNC_1Xmk/maxresdefault.jpg",
  //                 "width": 1280,
  //                 "height": 720
  //             }
  //         },
  //         "channelTitle": "Netflix",
  //         "tags": [
  //             "001",
  //             "Caleb McLaughlin",
  //             "Cara Buono",
  //             "Charlie Heaton",
  //             "Chief Hopper",
  //             "David Harbour",
  //             "Dustin",
  //             "Eleven",
  //             "Finn Wolfhard",
  //             "Gaten Matarazzo",
  //             "Holly Wheeler",
  //             "Jamie Campbell Bower",
  //             "Jim Hopper",
  //             "Joe Keery",
  //             "Jonathan Byers",
  //             "Joyce Byers",
  //             "Lucas",
  //             "Max",
  //             "Maya Hawke",
  //             "Mike Wheeler",
  //             "Millie Bobby Brown",
  //             "Nancy Wheeler",
  //             "Natalia Dyer",
  //             "Netflix",
  //             "Noah Schnapp",
  //             "Robin Buckley",
  //             "Sadie Sink",
  //             "Steve Harrington",
  //             "Stranger Things",
  //             "Trailer",
  //             "Vecna",
  //             "Will Byers",
  //             "Winona Ryder"
  //         ],
  //         "categoryId": "24",
  //         "liveBroadcastContent": "none",
  //         "localized": {
  //             "title": "Stranger Things 5 | Date Announcement | Netflix",
  //             "description": "The fight isn’t over yet. Get ready for the epic series finale of Stranger Things.\r\nVolume 1, November 26, 5pm PT*\r\nVolume 2, Christmas, 5pm PT*\r\nThe Finale, New Year’s Eve, 5pm PT*\r\n\r\n*releasing worldwide all at once, date may vary based on your local timezone\r\n\r\n#TUDUM\r\n\r\nWatch on Netflix: https://www.netflix.com/title/81297917\r\n\r\nAbout Netflix:\r\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\r\n\r\nStranger Things 5 | Date Announcement | Netflix\r\nhttps://www.youtube.com/@Netflix"
  //         },
  //         "defaultAudioLanguage": "en-US"
  //     },
  //     "contentDetails": {
  //         "duration": "PT2M5S",
  //         "dimension": "2d",
  //         "definition": "hd",
  //         "caption": "true",
  //         "licensedContent": true,
  //         "contentRating": {},
  //         "projection": "rectangular"
  //     },
  //     "statistics": {
  //         "viewCount": "7001304",
  //         "likeCount": "378614",
  //         "favoriteCount": "0",
  //         "commentCount": "18653"
  //     }
  // }

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=${KEY}`
      )
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data.items[0]);

        // console.log(res.data.items[0].snippet.title); //
        // console.log(res.data.items[0].snippet.thumbnails.default.url); //
        // console.log(res.data.items[0].statistics.viewCount); //
        // console.log(res.data.items[0].snippet.publishedAt);
        // res.data.items[0].contentDetails.duration //

        res.data.items.map((video) => {
          axios
            .get(
              `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${KEY}`
            )
            .then((res) => {
                //const imgurl = res.data.items[0].snippet.thumbnails.high.url
               setChannelThumbnail(imgurl => [...imgurl, res.data.items[0].snippet.thumbnails.high.url]);
            //    console.log(imgurl);
            });
        });

        setVideos(res.data.items);
      });
  }, []);

  const videosList = [
    {
      thumbnail:
        "https://i.ytimg.com/vi/aK4JSwhdcdE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD_uM-8ou2GRyrEChTsfGrBb3oOgg",
      duration: "1:00:00",
      title: "Skyrim - Music & Ambience - Night",
      author: "Everness",
      viewCount: "22M views",
      publishedAt: "8 years ago",
      authorImg:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
    },
  ];

  console.log(channelThumbnail)

  return (
    <div className="flex gap-3 flex-wrap">
      {videos.map((video, index) => (
        <div key={index}>
          <VideoCard
            title={video.snippet.title}
            img={video.snippet.thumbnails.maxres.url}
            time={video.contentDetails.duration}
            author={video.snippet.channelTitle}
            vewios={video.statistics.viewCount}
            date={video.snippet.publishedAt}
            authorImg={channelThumbnail[index]} // channel id?
          />
        </div>
      ))}
    </div>
  );
}

export default VideoList;
