import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";

function VideoDetails() {
  const [video, setVideo] = useState([]);

  const [channelThumbnail, setChannelThumbnail] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const [subscribersCount, setSubscriberCount] = useState("");
  const [title, setTitle] = useState("");
  const [likes, setLikes] = useState("");
  const [ViewCount, setViewCount] = useState("")
  const [publishDate, setPublishDate] = useState("")
  const [description, setDescription] = useState("")

  const KEY = "AIzaSyBrcwQMWJEcEzjY8yeW3ExNYeBnYcYcahA";

  const { id } = useParams();

  // https://www.googleapis.com/youtube/v3/videos?part=snippet&id=xE_rMj35BIM&key=YOUR_KEY

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${KEY}`
      )
      .then((res) => {
        setVideo(res.data.items[0]);
        setTitle(res.data.items[0].snippet.title);
        setViewCount(res.data.items[0].statistics.viewCount)
        setLikes(res.data.items[0].statistics.likeCount);
        setChannelTitle(res.data.items[0].snippet.channelTitle);
        setPublishDate(res.data.items[0].snippet.publishedAt)

        console.log(res.data.items[0].snippet.description);
        setDescription(res.data.items[0].snippet.description)

        axios
          .get(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${res.data.items[0].snippet.channelId}&key=${KEY}`
          )
          .then((res) => {
            setSubscriberCount(res.data.items[0].statistics.subscriberCount);
            setChannelThumbnail(res.data.items[0].snippet.thumbnails.high.url);
          });
      });
  }, []);

  //   {
  //     "kind": "youtube#videoListResponse",
  //     "etag": "O5zjNQMZcRvDWV0C0_L6UAgY3D0",
  //     "items": [
  //         {
  //             "kind": "youtube#video",
  //             "etag": "zhqRkHg9eThYK0I6eYN5V8wcG2Q",
  //             "id": "6iyoatNzAZU",
  //             "snippet": {
  //                 "publishedAt": "2025-06-01T08:00:10Z",
  //                 "channelId": "UCD1Em4q90ZUK2R5HKesszJg",
  //                 "title": "Dark Days Are Upon Us | Clash of Clans New Season",
  //                 "description": "In a city without Heroes, Villains rise! Barbaric henchmen, crooked cops, and greedy Goblins lurk around every corner in our Dark Days Season. When Elixir is banned, a cohort of stylish, yet sinister Heroes will clash for infamy! Explore the Dark Days Scenery and transform your Village into a crooked cityscape that's truly a mischief maker's paradise. Meet some shady characters as you take on unique challenges and positively wicked Events!\n\n\n\nFollow us on our Socials!\nTwitter ► https://twitter.com/ClashofClans/\nInstagram ► https://www.instagram.com/clashofclans \nFacebook ► https://www.facebook.com/ClashofClans \nTikTok ► https://www.tiktok.com/@clashofclans\n\nAttack. Defend. Strategize. Download for free for mobile devices. supr.cl/PlayClashOfClans\n\nFrom rage-­filled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.\nPLEASE NOTE! Clash of Clans is free to download and play, however some game items can also be purchased for real money \n\nAlso, under our Terms of Service and Privacy Policy, you must be at least 13 years of age to play or download Clash of Clans.\nA network connection is also required.\n\nFEATURES\n- Build your village into an unbeatable fortress \n- Raise your own army of Barbarians, Archers, Hog Riders, Wizards, Dragons and other mighty fighters\n- Battle with players worldwide and take their Trophies\n- Join together with other players to form the ultimate Clan\n- Fight against rival Clans in epic Clan Wars \n- Build 18 unique units with multiple levels of upgrades\n- Discover your favorite attacking army from countless combinations of troops, spells, Heroes and Clan reinforcements \n- Defend your village with a multitude of Cannons, Towers, Mortars, Bombs, Traps and Walls\n- Fight against the Goblin King in a campaign through the realm\n\nChief, are you having problems? Visit https://help.supercellsupport.com/clash-of-clans/en/\n\nPrivacy Policy:\nhttps://supercell.com/en/privacy-policy/\n\nTerms of Service:\nhttps://supercell.com/en/terms-of-service/\n\nParent’s Guide:\nhttps://supercell.com/en/parents/\n\n#clashofclans #darkdays #newseason #filmnoir",
  //                 "thumbnails": {
  //                     "default": {
  //                         "url": "https://i.ytimg.com/vi/6iyoatNzAZU/default.jpg",
  //                         "width": 120,
  //                         "height": 90
  //                     },
  //                     "medium": {
  //                         "url": "https://i.ytimg.com/vi/6iyoatNzAZU/mqdefault.jpg",
  //                         "width": 320,
  //                         "height": 180
  //                     },
  //                     "high": {
  //                         "url": "https://i.ytimg.com/vi/6iyoatNzAZU/hqdefault.jpg",
  //                         "width": 480,
  //                         "height": 360
  //                     },
  //                     "standard": {
  //                         "url": "https://i.ytimg.com/vi/6iyoatNzAZU/sddefault.jpg",
  //                         "width": 640,
  //                         "height": 480
  //                     },
  //                     "maxres": {
  //                         "url": "https://i.ytimg.com/vi/6iyoatNzAZU/maxresdefault.jpg",
  //                         "width": 1280,
  //                         "height": 720
  //                     }
  //                 },
  //                 "channelTitle": "Clash of Clans",
  //                 "tags": [
  //                     "clash of clans",
  //                     "COC",
  //                     "Clash of Clans Gameplay",
  //                     "Clash of Clans Strategy",
  //                     "Clash of Clans Animation",
  //                     "Clash of Clans Commercial",
  //                     "Clash of Clans Attacks",
  //                     "Clash of Clans Town Hall",
  //                     "Hog Rider",
  //                     "PEKKA",
  //                     "Clan Wars",
  //                     "season challenges",
  //                     "clan war leagues",
  //                     "clash on",
  //                     "clan game",
  //                     "clan games",
  //                     "clash-a-rama",
  //                     "clasharama",
  //                     "film noir",
  //                     "dark days",
  //                     "barbarian butcher",
  //                     "queen fatale",
  //                     "minion cop",
  //                     "mafia movie",
  //                     "grand godfather",
  //                     "the godfather",
  //                     "showtime champion",
  //                     "black and white",
  //                     "b&w",
  //                     "grayscale"
  //                 ],
  //                 "categoryId": "20",
  //                 "liveBroadcastContent": "none",
  //                 "defaultLanguage": "en",
  //                 "localized": {
  //                     "title": "Dark Days Are Upon Us | Clash of Clans New Season",
  //                     "description": "In a city without Heroes, Villains rise! Barbaric henchmen, crooked cops, and greedy Goblins lurk around every corner in our Dark Days Season. When Elixir is banned, a cohort of stylish, yet sinister Heroes will clash for infamy! Explore the Dark Days Scenery and transform your Village into a crooked cityscape that's truly a mischief maker's paradise. Meet some shady characters as you take on unique challenges and positively wicked Events!\n\n\n\nFollow us on our Socials!\nTwitter ► https://twitter.com/ClashofClans/\nInstagram ► https://www.instagram.com/clashofclans \nFacebook ► https://www.facebook.com/ClashofClans \nTikTok ► https://www.tiktok.com/@clashofclans\n\nAttack. Defend. Strategize. Download for free for mobile devices. supr.cl/PlayClashOfClans\n\nFrom rage-­filled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.\nPLEASE NOTE! Clash of Clans is free to download and play, however some game items can also be purchased for real money \n\nAlso, under our Terms of Service and Privacy Policy, you must be at least 13 years of age to play or download Clash of Clans.\nA network connection is also required.\n\nFEATURES\n- Build your village into an unbeatable fortress \n- Raise your own army of Barbarians, Archers, Hog Riders, Wizards, Dragons and other mighty fighters\n- Battle with players worldwide and take their Trophies\n- Join together with other players to form the ultimate Clan\n- Fight against rival Clans in epic Clan Wars \n- Build 18 unique units with multiple levels of upgrades\n- Discover your favorite attacking army from countless combinations of troops, spells, Heroes and Clan reinforcements \n- Defend your village with a multitude of Cannons, Towers, Mortars, Bombs, Traps and Walls\n- Fight against the Goblin King in a campaign through the realm\n\nChief, are you having problems? Visit https://help.supercellsupport.com/clash-of-clans/en/\n\nPrivacy Policy:\nhttps://supercell.com/en/privacy-policy/\n\nTerms of Service:\nhttps://supercell.com/en/terms-of-service/\n\nParent’s Guide:\nhttps://supercell.com/en/parents/\n\n#clashofclans #darkdays #newseason #filmnoir"
  //                 },
  //                 "defaultAudioLanguage": "en"
  //             }
  //         }
  //     ],
  //     "pageInfo": {
  //         "totalResults": 1,
  //         "resultsPerPage": 1
  //     }
  // }

  return (
    <div className="bg-[#0f0f0f] text-white">
      <div className="flex flex-col p-5 gap-3  w-2/3">
        <iframe
          className="h-100 rounded-3xl"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <h1 className="text-xl font-bold">{title}</h1>

        <div className="flex items-center gap-5 justify-between">

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
      <div className="p-3 rounded-2xl" style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}>

        {/* date */}
        <div>
          <h1>{ViewCount} views {publishDate}</h1>
        </div>

        {/* description */}
        <div className="py-1">
          <p>{description}</p>
        </div>

      </div>

      {/* comments */}
      <div>
          
      </div>

      </div>
    </div>
  );
}

export default VideoDetails;
