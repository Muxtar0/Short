import React , {useEffect, useRef, useState} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Mousewheel  } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {datas} from '../datas/datas'
import videos from '../datas/videos'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import VideoItem from './VideoItem';
import PauseMuteBTNS from './PauseMuteBTNS';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import {videoPlayState} from '../atoms/videoAtom'
function Slider() {
  
  const [isMuteVideo,setIsMuteVideo] = useState(false)
  const [isStopVideo,setIsStopVideo] = useState(false)
  const [likes,setLikes] = useState(0)
  const videoRef = useRef()
  
  
  
  
  
  return (
    <RecoilRoot>
      <Swiper
      modules={[Mousewheel]}
      spaceBetween={0}
      slidesPerView={1}
      mousewheel
      direction="vertical"
      onSlideChange={() => {
        // console.log(document.querySelector("video"))
      }}
      onSwiper={(swiper) => {
        document.querySelector("video").play()
      }}
      className="h-full w-full"
    >
      {datas.map((data,index) => (
        <SwiperSlide key={data.key} className="h-screnn flex justify-center items-center">
        <div className=" w-full sm:w-[400px] mx-auto my-auto h-full  sm:h-[80%]  flex items-center justify-center">
          <div className="flex h-full   w-full sm:w-[90%] relative items-end justify-center">
            <div className="h-full  w-full  relative">
              <PauseMuteBTNS/>
              <video ref={videoRef}  className="h-full object-cover sm:rounded-md w-full" loop autoPlay={true} muted >
                  <source src={videos[index]} type="video/mp4"></source>
              </video>
              <div className="absolute left-0 bottom-0 w-full px-2 py-2">
                <div>
                  <p className="text-white mb-2" >{data.description}</p>
                </div>
                <div className="flex items-center justify-start">
                  <img className="w-[40px] h-[40px] rounded-full" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"  />
                  <p className="text-white ml-2">{data.username}</p>
                </div>
              </div>
            </div>
            <div className="flex sm:relative absolute right-0 bottom-16 sm:bottom-0 items-center px-2 sm:px-4 justify-center flex-col">
              <button className="text-white flex items-center justify-center flex-col">
                <ThumbUpRoundedIcon className="text-white"/> {likes}
              </button>
              <button className="text-white my-6 flex items-center justify-center flex-col">
                <ThumbDownRoundedIcon className="text-white"/> Dislike
              </button>
              <button className="text-white flex items-center justify-center flex-col">
                <ReplyRoundedIcon className="text-white"/> Share
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
    </RecoilRoot>
    
  )
}

export default Slider