import React,{useState,useRef} from 'react'

function VideoItem(props) {
    const [playing,setPlaying] = useState(false)
    const video = useRef()
    const onVideoPress = () => {
        if(playing){
            video.current.pause()
            setPlaying(false)
        }
        else{
            video.current.play()
            setPlaying(true)
        }
    }
  return (
    <video ref={video} onClick={onVideoPress} className="h-full object-cover rounded-md w-full" loop>
        <source src={props.video} type="video/mp4"></source>
    </video>
  )
}

export default VideoItem