import React from 'react'
import VideoList from '../components/Videos/VideoList'

function Home() {
  return (
    <div className='bg-[#0f0f0f] text-white flex justify-center'>
        <div className='w-9/10 border  m-3 p-3'>
            <VideoList/>
        </div>
    </div>
  )
}

export default Home