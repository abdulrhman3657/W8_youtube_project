import HomeTags from '../components/HomeTags'
import Sidebar from '../components/Sidebar'
import VideoList from '../components/Videos/VideoList'

function Home() {
  return (
    <div className='bg-[#0f0f0f] text-white flex justify-betweeen gap-1'>
      <Sidebar/>
        <div className='m-3 p-3 flex flex-col items-center gap-2'>
            <HomeTags/>
            <VideoList/>
        </div>
    </div>
  )
}

export default Home