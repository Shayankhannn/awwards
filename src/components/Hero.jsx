import { useState } from "react"
import { useRef } from "react"
import Button from "./Button"
import { TiLocationArrow } from "react-icons/ti"

const Hero = () => {

    const [currentIndex,setCurrentIndex] = useState(1)
    const [hasClick,setHasClick] = useState(false)
    const [isloading,setIsLoading] = useState(true)
    const [loadedVideo,setLoadedVideo] = useState(0)
   
    const nextVDRef = useRef(null);
    
    const totalVideos = 4;
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleVideoLoaded = () => {
        setLoadedVideo((prevLoadedVideo) => prevLoadedVideo + 1)
    }
    const handleMiniVDclick = () => {
        setHasClick(true)
        setCurrentIndex(upcomingVideoIndex)
    }

    const getVideosrc = (index) => `videos/hero-${index}.mp4`

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75" >
            <div >
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div onClick={handleMiniVDclick}   className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video
                        ref={nextVDRef}
                        src={getVideosrc(upcomingVideoIndex)}
                        loop 
                        muted
                        id="current-video"
                        className="size-64 origin-center scale-150 object-cover object-center"
                        onLoadedData={handleVideoLoaded}

                        />
                </div>
                </div>
                <video
                src={getVideosrc(currentIndex)}
                loop 
                muted
                id="next-video"
                  className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                onLoadedData={handleVideoLoaded}
                />
                 <video
            src={getVideosrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            // autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoaded}
          />
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button id="watch-trailer" title="Watch-Trailer"
             leftIcon={<TiLocationArrow/>}
             containerClass="bg-yellow-300 flex-center gap-1"
             />
                </div>
        </div>
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
          G<b>A</b>MING
        </h1>
    </div>
  )
}

export default Hero