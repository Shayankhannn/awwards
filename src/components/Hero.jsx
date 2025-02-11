import { useState } from "react"
import { useRef } from "react"

const Hero = () => {

    const [currentIndex,setCurrentIndex] = useState(1)
    const [hasClick,setHasClick] = useState(false)
    const [isloading,setIsLoading] = useState(true)
    const [loadedVideo,setLoadedVideo] = useState(0)
   
    const nextVDRef = useRef(null);
    
    const totalVideos = 4;

    const handleVideoLoaded = () => {
        setLoadedVideo((prevLoadedVideo) => prevLoadedVideo + 1)
    }
    
    
    
    const handleMiniVDclick = () => {
        setHasClick(true)
        setCurrentIndex((prevIndex)=> prevIndex + 1)
        
    }

    const getVideosrc = (index) => `videos/hero-${index}.mp4`

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75" >
            <div className="">
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div onClick={handleMiniVDclick}   className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video
                        ref={nextVDRef}
                        src={getVideosrc(currentIndex + 1)}
                        loop 
                        muted
                        id="current-video"
                        className="size-64 origin-center scale-150 object-cover object-center"
                        onLoadedData={handleVideoLoaded}

                        />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero