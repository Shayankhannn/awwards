import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"



const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video 
            src={src}
            loop
            muted
            autoPlay
            className="object-cover object-center size-full absolute left-0 top-0 "
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div className="">
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                        )}
                </div>
            </div>
        </div>
    )
}

const BentoTilt = ({children,className= ' '}) => {
    const [transformStyle,setTransformStyle] = useState('');
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const {left,top,height,width} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left ) / width;
        const relativeY = (e.clientY - top ) / height;

        const tiltX = (relativeY - 0.5) * 7 ; 
        const tiltY = (relativeX - 0.5) * -7 ;
        
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`

        setTransformStyle(newTransform)
    };
    const handleMouseLeave = () => {
        setTransformStyle('')
    };
    return (
        <div
         className={className}
         ref={itemRef} 
         onMouseMove={handleMouseMove} 
         onMouseLeave={handleMouseLeave}
         style={{transform:transformStyle}}
         >
            {children}
        </div>
    )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
<div className="container mx-auto px-3 md:px-10">
    <div className="px-5 py-32">
    <p className="font-circular-web text-lg text-blue-50">
        into
    </p>
    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi.</p>
    </div>
    <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
    <BentoCard
    src="videos/feature-1.mp4"
    title={<>Radia<b>n</b>t</>}
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi."
    
    />
    </BentoTilt>
    <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
        <BentoCard 
        src="videos/feature-2.mp4"
        title={<>Zig<b>m</b>a</>}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi."

        />
    </BentoTilt>
    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
        <BentoCard 
        src="videos/feature-3.mp4"
        title={<>n<b>e</b>xus</>}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi."

        />
    </BentoTilt>

    <BentoTilt className="bento-tilt_1 row-span-1 me-14 md:col-span-1 md:me-0 ">
        <BentoCard 
        src="videos/feature-4.mp4"
        title={<>az<b>u</b>re</>}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi."

        />
    </BentoTilt>

    <BentoTilt className="bento-tilt_2">
    <div className="flex size-full md:flex-row flex-col justify-between p-5 bg-violet-300">
    <h1 className="bento-title special-font max-w-64">M<b>o</b>re Co<b>m</b>ing S<b>o</b>on</h1>
    <TiLocationArrow className="m-5 scale-[5] self-end"/>
    </div>
    </BentoTilt>
    <BentoTilt className="bento-tilt_2">
        <video 
        src="videos/feature-5.mp4"
        loop
        muted
        autoPlay
        className="object-cover object-center size-full"
        />
    </BentoTilt>

    </div>
</div>
    </section>
  )
}

export default Features