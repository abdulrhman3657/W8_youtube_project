import { IoMdMore } from "react-icons/io";

function VideoCardRecommenattion(data) {


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

  return (
    <div className="w-full h-45 flex rounded-2xl  p-2 hover:bg-blue-950/40">
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
        <div className="flex flex-col gap-1">
          <h1 className="w-50 overflow-clip">{data.title}</h1>
          <span className="w-50 overflow-clip">{data.channelTitle}</span>
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
