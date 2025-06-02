import { IoMdMore } from "react-icons/io";

function VideoCard(data) {

  

  return (
    <div className="border w-100 h-full rounded-2xl  p-2 hover:bg-blue-950/40">
      <div className="relative">
        <img className="rounded-2xl w-full h-full" src={data.img} alt="" />
        <span className="absolute right-0 bottom-0 p-1.5 bg-black/40 rounded-xl -translate-2">
          {data.time}
        </span>
      </div>
      <div className="p-2 flex items-center justify-between gap-3">
        <img className="w-10 h-7" src={data.authorImg} alt="" />
        <div className="flex flex-col ">
          <h1>{data.title}</h1>
          <span>{data.author}</span>
          <span>
            <span>{data.vewios}</span>
            <span> . </span>
            <span>{data.date}</span>
          </span>
        </div>
        <span>
          <IoMdMore className="text-xl" />
        </span>
      </div>
    </div>
  );
}

export default VideoCard;
