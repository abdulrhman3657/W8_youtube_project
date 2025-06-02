import { IoMdMore } from "react-icons/io";

function VideoCardRecommenattion(data) {


  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className=" w-100 h-30 flex rounded-2xl  p-2 hover:bg-blue-950/40">
      <div className="relative">
        <img
          className="rounded-2xl w-full h-full"
          src={data.thumbnail}
          alt=""
        />
        <span className="absolute right-0 bottom-0 p-1.5 bg-black/40 rounded-xl -translate-2">
          {data.duration.minutes} : {data.duration.seconds}
        </span>
      </div>
      <div className="p-2 flex items-center justify-between gap-3">
        <div className="flex flex-col ">
          <h1>{data.title}</h1>
          <span>{data.channelTitle}</span>
          <span>
            <span>{data.viewCount}</span>
            <span> . </span>
            <span>{formatDate(data.date)}</span>
          </span>
        </div>
        <span>
          <IoMdMore className="text-xl" />
        </span>
      </div>
    </div>
  );
}

export default VideoCardRecommenattion;
