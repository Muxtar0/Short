import React,{useState} from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
function PauseMuteBTNS() {
    const [isStopVideo,setIsStopVideo] = useState(false)
    const [isMuteVideo,setIsMuteVideo] = useState(true)
    const playVideoHandler = (e) => {
        if(isStopVideo){
          setIsStopVideo(false)
          e.target.parentElement.parentElement.parentElement.parentElement.querySelector("video").play()
        }
        else{
          setIsStopVideo(true)
          e.target.parentElement.parentElement.parentElement.parentElement.querySelector("video").pause()
        }
      }
      const pauseVideoHandler = (e) => {
        if(isStopVideo){
          setIsMuteVideo(false)
          e.target.parentElement.parentElement.parentElement.parentElement.querySelector("video").muted = false
        }
        else{
          setIsStopVideo(true)
          e.target.parentElement.parentElement.parentElement.parentElement.querySelector("video").muted = true
        }
      }
  return (
    <div className="absolute top-0 left-0 w-full px-3 py-1 z-[100] flex items-center justify-between">
                  <button className="cursor-pointer" onClick={(e) => {playVideoHandler(e)}}>
                    {isStopVideo == true ? (
                        <PlayArrowRoundedIcon className="text-white"/>
                    ) : (
                      <PauseRoundedIcon className="text-white"/>
                    )}
                  </button>
                  <button onClick={(e) => {pauseVideoHandler(e)}}>
                    {isMuteVideo == true ? (
                        <VolumeOffRoundedIcon className="text-white"/>
                      ) : (
                        <VolumeUpRoundedIcon className="text-white"/>
                      )}
                  </button>
              </div>
  )
}

export default PauseMuteBTNS