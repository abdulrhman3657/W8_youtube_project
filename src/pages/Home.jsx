import HomeTags from "../components/HomeTags";
import Sidebar from "../components/Sidebar";
import VideoList from "../components/Videos/VideoList";

function Home() {
  const username = localStorage.getItem("username");

  return username ? (
    <div className="bg-[#0f0f0f] text-white  flex justify-betweeen gap-1">
      <Sidebar />
      <div className="lg:m-3  p-3 flex flex-col items-center gap-2">
        <HomeTags />
        <VideoList />
      </div>
    </div>
  ) : (
    <div className="pt-30 text-white bg-[#0f0f0f] flex justify-center items-center h-screen">
      <div className="p-3 w-1/2 rounded-xl text-center" style={{ backgroundColor: "hsla(0, 0%, 100%, .08)" }}>
              <h1 className="text-3xl font-bold">please signIn to watch videos</h1>
      </div>
    </div>
  );
}

export default Home;
